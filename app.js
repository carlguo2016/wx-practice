const Core = require('./core/core');
import Wux from 'components/wux';

App({
    version: '0.0.1',
    Core: Core,
    Wux: Wux,
    onLaunch: function () {
        console.log('onLaunch');
    }
});
