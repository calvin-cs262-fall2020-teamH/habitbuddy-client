import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

//https://stackoverflow.com/questions/44719103/singleton-object-in-react-native
//https://github.com/sunnylqm/react-native-storage

export default class CommonDataManager {

    static myInstance = null;

    _userID = null;
    _updateUser = () => {};
    _updateTheme = () => {};

    storage = new Storage({
        // maximum capacity, default 1000 key-ids
        size: 1000,

        // Use AsyncStorage for RN apps, or window.localStorage for web apps.
        // If storageBackend is not set, data will be lost after reload.
        storageBackend: AsyncStorage, // for web: window.localStorage

        // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
        // can be null, which means never expire.
        defaultExpires: 1000 * 3600 * 24, //1000 milliseconds/second, 3600 seconds/hour, 24 hours/day

        // cache data in the memory. default is true.
        enableCache: true,

        // if data was not found in storage or expired data was found,
        // the corresponding sync method will be invoked returning
        // the latest data.
        sync: {
        }
    });


    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    getUserID() {
        if(!this._userID) {
            this.storage
            .load({
                key: 'loginState',

                // autoSync (default: true) means if data is not found or has expired,
                // then invoke the corresponding sync method
                autoSync: true,

                // syncInBackground (default: true) means if data expired,
                // return the outdated data first while invoking the sync method.
                // If syncInBackground is set to false, and there is expired data,
                // it will wait for the new data and return only after the sync completed.
                // (This, of course, is slower)
                syncInBackground: true,

                // you can pass extra params to the sync method
                // see sync example below
                syncParams: {
                    extraFetchOptions: {
                        // blahblah
                    },
                    someFlag: true
                }
            })
            .then(ret => {
                // found data go to then()
                console.log(ret.userid);
                if(ret.userid) {
                    this._userID = ret.userid;
                    this._updateUser({});
                }
                return ret.userid;
            })
            .catch(err => {
                // any exception including data not found
                // goes to catch()
                console.warn(err.message);
                switch (err.name) {
                    case 'NotFoundError':
                        // TODO;
                        break;
                    case 'ExpiredError':
                        // TODO
                        break;
                }
            });
        }
        else {
            return this._userID;
        }
    }

    setUserID(id) {
        this._userID = id;

        this.storage.save({
            key: 'loginState', // Note: Do not use underscore("_") in key!
            data: { //can put any data here
                userid: id,
            },

            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            //expires: 1000 * 3600
        });

        if(!id) {
            this._updateUser(null);
            this._userID = null;
        }
        else {
            this._updateUser({});
        }
    }

    updateUser(data) {
        this._updateUser(data);
    }

    setUpdateUser(func) {
        this._updateUser = func;
    }

    updateTheme(theme) {
        this._updateTheme(theme);
    }
    
    setUpdateTheme(func) {
        this._updateTheme = func;
    }
}