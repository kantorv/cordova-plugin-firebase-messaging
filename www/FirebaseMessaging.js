var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseMessaging";

module.exports = {
    subscribe: function(topic, success, error) {
        exec(success, error, PLUGIN_NAME, "subscribe", [topic]);
    },
    send: function(data, success, error) {
        exec(success, error, PLUGIN_NAME, "send", [data]);
    },
    unsubscribe: function(topic, success, error) {
        exec(success, error, PLUGIN_NAME, "unsubscribe", [topic]);
    },
    onTokenRefresh: function(success, error) {
        exec(success, error, PLUGIN_NAME, "onTokenRefresh", []);
    },
    onMessage: function(success, error) {
        exec(success, error, PLUGIN_NAME, "onMessage", []);
    },
    setBadge: function(value, success, error) {
        exec(success, error, PLUGIN_NAME, "setBadge", [value]);
    },
    getBadge: function(success, error) {
        exec(success, error, PLUGIN_NAME, "getBadge", []);
    },
    getSenderId: function(success, error) {
        exec(success, error, PLUGIN_NAME, "getSenderId", []);
    },
    requestPermission: function(success, error) {
        exec(success, error, PLUGIN_NAME, "requestPermission", []);
    }
};
