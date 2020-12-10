import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

//https://stackoverflow.com/questions/44719103/singleton-object-in-react-native
//https://github.com/sunnylqm/react-native-storage

export default class CommonDataManager {

    //TODO: Add week streak to store current week's streak data (list of days selected)
    //TODO: Combine week streak val with streak val to get total streak (streak val doesn't include week streak)
    //Store value of week start date to see what calculations need to be done on the streak
    //

    static myInstance = null;

    _userID = null;
    _streak = null;
    _streakWeek = null;
    _viewingBuddy = 0;

    _updateUser = () => {};
    _updateTheme = () => {};
    _updateProfile = () => {};
    _updateStreak = () => {};
    _getStreak = () => {};
    _deleteBuddyBuddies = () => {};
    _deleteBuddyDetails = () => {};

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
                autoSync: true,
                syncInBackground: true,
                syncParams: {
                    extraFetchOptions: {
                    },
                    someFlag: true
                }
            })
            .then(ret => {
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
            key: 'loginState',
            data: { 
                userid: id,
            },
        });

        if(!id) {
            this._updateUser(null);
            this._userID = null;
        }
        else {
            this._updateUser({});
        }
    }

    getStreak() {
        if(this._streak === 0) {
            return this._streak;
        }
        if(!this._streak) {

            this._streakWeek = [
                { day: 'S', select: false, key: '1' },
                { day: 'M', select: false, key: '2' },
                { day: 'T', select: false, key: '3' },
                { day: 'W', select: false, key: '4' },
                { day: 'Th', select: false, key: '5' },
                { day: 'F', select: false, key: '6' },
                { day: 'S', select: false, key: '7' },

            ];

            this.storage
            .load({
                key: 'streak',
                autoSync: true,
                syncInBackground: true,
                syncParams: {
                    extraFetchOptions: {
                    },
                    someFlag: true
                }
            })
            .then(ret => {
                this._streakWeek = ret.streak;
                let hstreak = 0;
                let lastBlock = true;
                this._streakWeek.forEach(element => {
                    if (element.select) {
                        if (!lastBlock) {
                            hstreak = 1;
                        }
                        else {
                            hstreak += 1;
                        }
                    }
                    lastBlock = element.select;
                });
                this._streak = hstreak;
                this._updateStreak(hstreak);
                return this._streak;
            })
            .catch(err => {
                console.warn(err.message);
            });
        }
        else {
            return this._streak;
        }
    }

    getStreakWeek() {
        if(!this._streakWeek) {
            this.storage
            .load({
                key: 'streak',
                autoSync: true,
                syncInBackground: true,
                syncParams: {
                    extraFetchOptions: {
                    },
                    someFlag: true
                }
            })
            .then(ret => {
                this._streakWeek = ret.streak;
                return this._streakWeek;
            })
            .catch(err => {
                console.warn(err.message);
            });
        }
        else {
            return this._streakWeek;
        }
    }

    setStreak(data) {
        let hstreak = 0;
        let lastBlock = true;
        data.forEach(element => {
            if (element.select) {
                if (!lastBlock) {
                    hstreak = 1;
                }
                else {
                    hstreak += 1;
                }
            }
            lastBlock = element.select;
        });

        this._streak = hstreak;
        this._streakWeek = data;
        console.log("Streak: " + data);

        this.storage.save({
            key: 'streak',
            data: { 
                streak: data,
            },
            expires: null,
        });

        this._updateStreak(hstreak);
    }

    //returns the id of the buddy the user is viewing
    getViewingBuddy() {
        return this._viewingBuddy;
    }

    //sets the id of the buddy the user is viewing
    setViewingBuddy(id) {
        this._viewingBuddy = id;
    }

    deleteBuddy() {
        this._deleteBuddyDetails();
        this._deleteBuddyBuddies();
    }

    setDeleteBuddyBuddies(func) {
        this._deleteBuddyBuddies = func;
    }

    setDeleteBuddyDetails(func) {
        this._deleteBuddyDetails = func;
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

    updateProfile() {
        this._updateProfile();
    }

    setUpdateProfile(func) {
        this._updateProfile = func;
    }
      
    setUpdateStreak(func) {
        this._updateStreak = func;
    }

    setGetStreak(func) {
        this._getStreak = func;
    }
}