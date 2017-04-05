let Api = require('./api');
let Const = require('./const');
let Data = require('./data');
let WeChat = require('./wechat');
let Event = require('./event');
let Util = require('./util');

let Core = {
    Api: Api,
    Const: Const,
    Data: Data,
    WeChat: WeChat,
    Event: Event,
    Util: Util
};

module.exports = Core;
