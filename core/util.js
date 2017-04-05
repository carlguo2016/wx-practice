const Const = require('./const');

let Util = {
    go: go,
    goRedirect: goRedirect,
    goBack: goBack,
    getImgUrl: getImgUrl,
    time: time,
    timeFormat: timeFormat,
    numberFormat: numberFormat
};

function go(url) {
    wx.navigateTo({ url: url });
}

function goRedirect(url) {
    wx.redirectTo({ url: url });
}

function goBack(number = 1) {
    wx.navigateBack({
        delta: number
    })
}

function getImgUrl(imgName) {
    if (imgName.indexOf('://') != -1) {
        return imgName;
    }
    return Const.NET.IMG_URL_PREFIX + imgName;
}

function time() {
    return parseInt(new Date().getTime() / 1000, 10);
}

function timeFormat(date, isDetail) {

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (isDetail) {
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        return [year, month, day].map(numberFormat).join('/') + ' ' + [hour, minute, second].map(numberFormat).join(':');
    }

    return [year, month, day].map(numberFormat).join('/');
}

function numberFormat(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

module.exports = Util;
