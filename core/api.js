const Promise = require('./es6-promise-min');
const Const = require('./const');
const Data = require('./data');

let apiList = {
    Wx: {
        encryptedData: ['wx/encrypted-data', 'code', 'encrypted_data', 'iv'],
        searchByName: ['wx/search-by-name', 'org_root_id', 'project_id', 'name'],
        createWxQrcode: ['wx/create-wx-qrcode', 'path', 'width']
    },
    Common: {
        sendCode: ['common/phone-verification-code-send', 'phone']
    },
    User: {
        login: ['user/login', 'phone', 'password'],
        register: ['user/register', 'phone', 'password', 'code'],
        resetPassword: ['user/password-reset', 'phone', 'password', 'code'],
        getUserByWx: ['user/get-user-by-wx', 'unionid'],
        updateUserBaseInfo: ['user/basic-info-update', 'name', 'email', 'gender', 'birthday'],
        getUserDetail: ['user/detail'],
        getOuterUserList: ['user/outer-user-list'],
        outerUserBind: ['user/outer-user-bind', 'type', 'outer_user_id', 'outer_user_data'],
        outerUserUnbind: ['user/outer-user-unbind', 'type'],
        exitOrg: ['user/exit-org', 'org_root_id'],
        updateUserInfo: ['user/info-update', 'name', 'phone', 'code', 'email'],
        createInvite: ['user/invite-create', 'org_root_id', 'phone'],
        updateInvite: ['user/invite-update', 'code'],
        ignoreInvite: ['user/invite-ignore', 'code'],
        inviteList: ['user/invite-list'],
    },
    Org: {
        orgRootList: ['org/org-root-list'],
        insertOrgRoot: ['org/org-root-insert', 'logo', 'name', 'url', 'desc', 'type'],
        orgMemberList: ['org/member-list', 'org_id', 'type'],
        delete: ['org/delete', 'org_root_id'],
        deleteUser: ['org/user-delete', 'org_root_id', 'target_user_id', 'target_uid'],
        updateOrgInfo: ['org/org-info-update', 'org_root_id', 'name', 'desc', 'url', 'person', 'phone', 'logo'],
        addUser: ['org/user-add', 'org_root_id', 'from_user_id', 'to_user_id'],
    },
    Project: {
        createProject: ['project/project-create', 'org_root_id', 'name', 'desc', 'member_id_list'],
        deleteProject: ['project/project-delete', 'org_root_id', 'project_id'],
        updateProjectInfo: ['project/update-project-info', 'org_root_id', 'project_id', 'name', 'desc'],
        userInProjectList: ['project/user-in-project-list', 'org_root_id'],
        projectDetail: ['project/project-detail', 'org_root_id', 'project_id'],
        addProjectMember: ['project/project-member-add', 'org_root_id', 'project_id', 'target_user_id', 'target_uid'],
        removeProjectMember: ['project/project-member-remove', 'project_id', 'user_id'],
        projectMemberList: ['project/project-member-list', 'project_id'],
        projectGroupList: ['project/group-list', 'org_root_id', 'project_id'],
        getProjectSearch: ['project/project-list-of-search', 'org_root_id', 'name'],
    },
    Group: {
        saveGroup: ['group/save', 'task_group_id', 'project_id', 'name'],
        groupList: ['group/list-all', 'org_root_id', 'project_id'],
        deleteGroup: ['group/delete', 'org_root_id', 'task_group_id'],
        getGroupDetail: ['group/detail', 'task_group_id'],
        getGroupSearch: ['group/group-search', 'org_root_id', 'project_id', 'name'],
    },
    Task: {
        createTask: ['task/task-create', 'group_id', 'name', 'content', 'due_time', 'member_id_list'],
        saveTask: ['task/task-save', 'task_id', 'task_group_id', 'name', 'content', 'due_time'],
        unfinishedTaskList: ['mine-task/unfinished-task-list', 'org_root_id'],
        getUnfinishedTaskSearch: ['mine-task/search-unfinished-task-list', 'org_root_id', 'project_id', 'name'],
        markedTaskList: ['mine-task/marked-task-list', 'org_root_id'],
        getMarkedTaskSearch: ['mine-task/search-marked-task-list', 'org_root_id', 'project_id', 'name'],
        expiredTaskList: ['mine-task/expired-task-list', 'org_root_id'],
        getExpiredTaskSearch: ['mine-task/search-expired-task-list', 'org_root_id', 'project_id', 'name'],
        assignedTaskList: ['mine-task/assigned-task-list', 'org_root_id'],
        getAssignedTaskSearch: ['mine-task/search-assigned-task-list', 'org_root_id', 'project_id', 'name'],
        createdTaskList: ['mine-task/created-task-list', 'org_root_id'],
        getCreatedTaskSearch: ['mine-task/search-created-task-list', 'org_root_id', 'project_id', 'name'],
        finishedTaskList: ['mine-task/finished-task-list', 'org_root_id'],
        getFinishedTaskSearch: ['mine-task/search-finished-task-list', 'org_root_id', 'project_id', 'name'],
        saveTaskComment: ['task/task-comment-save', 'task_id', 'task_comment_id', 'content'],
        taskCommentList: ['task/task-comment-list', 'org_root_id', 'task_id', 'page'],
        deleteTaskComment: ['task/task-comment-delete', 'task_id', 'task_comment_id'],
        taskActionList: ['task/task-action-list', 'org_root_id', 'task_id'],
        taskDetail: ['task/task-detail', 'org_root_id', 'task_id'],
        taskChecklistList: ['task/task-checklist-list', 'org_root_id', 'task_id'],
        saveTaskChecklist: ['task/task-checklist-save', 'org_root_id', 'task_id', 'task_checklist_id', 'name'],
        updateTaskChecklistStatus: ['task/task-checklist-status-update', 'org_root_id', 'task_id', 'task_checklist_id'],
        updateTaskDueTime: ['task/task-due-time-update', 'org_root_id', 'task_id', 'due_time'],
        removeTaskChecklist: ['task/task-checklist-remove', 'org_root_id', 'task_id', 'task_checklist_id'],
        taskAttachmentList: ['task/task-attachment-list', 'org_root_id', 'task_id'],
        taskSetLabelList: ['task/task-set-label-list', 'org_root_id', 'task_id'],

        taskLabelList: ['task/task-label-list', 'org_root_id', 'project_id', 'task_id'],
        setTaskLabel: ['task/task-label-set', 'org_root_id', 'project_id', 'task_id', 'task_label_id'],
        saveTaskLabel: ['task/task-label-save', 'org_root_id', 'project_id', 'task_id', 'task_label_id', 'name', 'type'],
        updateTaskInfo: ['task/task-info-update', 'org_root_id', 'task_id', 'title', 'content'],
        saveTaskMember: ['task/task-member-save', 'task_id', 'user_id'],
        removeTaskMember: ['task/task-member-remove', 'task_id', 'user_id'],
        updateTaskStatus: ['task/task-status-update', 'org_root_id', 'task_id', 'status'],
        deleteTask: ['task/task-delete', 'org_root_id', 'task_id'],

        deleteTaskAttachment: ['task/task-attachment-delete', 'task_id', 'task_attachment_id'],
        saveTaskAttachment: ['task/task-attachment-save', 'task_id', 'name', 'file_type', 'file_name', 'file_size']
    },
    Notification: {
        list: ['notification/list', 'org_root_id', 'page', 'read'],
        setRead: ['notification/set-read', 'org_root_id', 'notification_id'],
        setAllRead: ['notification/set-all-read', 'org_root_id'],
        getUnreadCount: ['notification/count-unread', 'org_root_id']
    }
};

let api = {};

for (let moduleKey in apiList) {
    let moduleApiList = apiList[moduleKey];
    api[moduleKey] = {};
    for (let functionName in moduleApiList) {
        let config = moduleApiList[functionName];
        api[moduleKey][functionName] = (function (config) {
            return function () {
                let action = config[0];
                let data = {};
                if (config.length > 1) {
                    for (let i = 1; i < config.length; i++) {
                        let key = config[i];
                        let value = arguments[i - 1];
                        if (value === undefined) {
                            continue;
                        }
                        data[key] = value;
                    }
                }
                return post(action, data);
            };
        })(config);
    }
}

function transformObjectToUrlencodedData(obj) {
    let p = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            p.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
    }
    return p.join('&');
}

function post(url, params) {
    let token = Data.getToken() || "";
    let host = Const.NET.END_POINT;
    return new Promise((resolve, reject) => {
        let requestData = Object.assign({
            token: token,
            client: Const.NET.CLIENT,
            version: Const.NET.VERSION
        }, params);

        wx.request({
            url: `${host}/${url}`,
            data: requestData,
            method: "POST",
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            success: function (res) {
                if (res.data.code == 0) {
                    resolve(res.data.data);
                }

                if (res.data.hasOwnProperty('code')) {
                    reject({
                        code: res.data.code,
                        message: res.data.message
                    })
                }

                reject({
                    code: Const.ERROR.ERROR_NETWORK,
                    response: res
                });
            },
            fail: function (reason) {
                reject({
                    code: Const.ERROR.ERROR_NETWORK,
                    response: reason
                })
            }
        });
    });
}

module.exports = api;
