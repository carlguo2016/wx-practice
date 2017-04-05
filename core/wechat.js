const Promise = require('./es6-promise-min');

let WeChat = {
    login: () => {
        return new Promise((resolve, reject) => {
            wx.login({ success: resolve, fail: reject });
        });
    },
    getUserInfo: () => {
        return new Promise((resolve, reject) => {
            wx.getUserInfo({ success: resolve, fail: reject });
        });
    },
    setStorage: (key, value) => {
        return new Promise((resolve, reject) => {
            wx.setStorage({ key: key, data: value, success: resolve, fail: reject });
        });
    },
    getStorage: key => {
        return new Promise((resolve, reject) => {
            wx.getStorage({ key: key, success: resolve, fail: reject });
        });
    },
    getLocation: type => {
        return new Promise((resolve, reject) => {
            wx.getLocation({ type: type, success: resolve, fail: reject });
        });
    }
};

module.exports = WeChat;
