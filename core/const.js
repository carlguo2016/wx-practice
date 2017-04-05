let Const = {
    ERROR: {
        ERROR_NETWORK: -10000,
        ERROR_INVALID: -1,
        ERROR_PARAM_NOT_SET: 1,
        ERROR_TOKEN_INVALID: 2,
        ERROR_LOGIN_FAIL: 3,
        ERROR_WRONG_PARAM: 4,
        ERROR_NOT_EXIST: 5,
        ERROR_EXIST: 6,
        ERROR_ORG_NOT_EXIST: 7,
        ERROR_ORG_MEMBER_NOT_EXISTS: 8,
        ERROR_REGISTER: 9,
        ERROR_USER_NOT_EXISTS: 10,
        ERROR_PHONE_HAS_BEEN_TAKEN: 11,
        ERROR_BIND_USER_BIND_EXISTS: 12,
        ERROR_WRONG_TYPE: 13,
        ERROR_SAVE_ERROR: 14,
        ERROR_ACTION_NOT_ALLOWED: 15,
        ERROR_WRONG_VERIFICATION_CODE: 16,
        ERROR_SEND_PHONE_VCODE_TOO_OFTEN: 17
    },

    NET: {
        END_POINT: '',
        VERSION: 1,
        CLIENT: 3,
        IMG_URL_PREFIX: ''
    },

    DATA: {
        KEY_PREFIX: 'smartwork.hrm.data.',
        KEY_TOKEN: 'token',
        KEY_USER: 'user',
        KEY_DEFAULT_AVATAR: '../../assets/images/default-avatar@2x.png',
    }
};

module.exports = Const;
