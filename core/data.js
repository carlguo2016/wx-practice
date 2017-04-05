const Const = require('./const');
const Util = require('./util');

let Data = {
    isGuest: isGuest,
    get: get,
    set: set,
    remove: remove,
    clear: clear,
    getToken: getToken,
    setToken: setToken,
    getUser: getUser,
    setUser: setUser,
    getAvatar: getAvatar,
    getName: getName,
    clearAuthData: clearAuthData
};

function getKey(key) {
    return Const.DATA.KEY_PREFIX + key;
}

function isGuest() {
    let token = getToken();
    return !token;
}

function get(key) {
    key = getKey(key);
    return wx.getStorageSync(key)
}

function set(key, val) {
    key = getKey(key);
    wx.setStorageSync(key, val)
}

function remove(key) {
    key = getKey(key);
    wx.removeStorageSync(key);
}

function clear() {
    wx.clearStorageSync();
}

function getToken() {
    let key = Const.DATA.KEY_TOKEN;
    return get(key);
}

function setToken(token) {
    let key = Const.DATA.KEY_TOKEN;
    return set(key, token);
}

function getUser() {
    let key = Const.DATA.KEY_USER;
    return get(key);
}

function setUser(user) {
    let key = Const.DATA.KEY_USER;
    return set(key, user);
}

function getName(name) {
    return name ? name : '未命名';
}

function getAvatar(img) {
    return img ? Util.getImgUrl(img) : Const.DATA.KEY_DEFAULT_AVATAR;
}

function clearAuthData() {
    setToken('');
    setUser('');
}

module.exports = Data;
