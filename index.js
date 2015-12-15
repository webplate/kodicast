var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;

var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "picast_action",
  label: "Send url to KODI mediacenter",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
    var servadress = require('sdk/simple-prefs').prefs['servadress'];
    var servport = require('sdk/simple-prefs').prefs['servport'];
    var url = 'http://'+servadress+':'+servport+'/watch?url='+tabs.activeTab.url;
    tabs.activeTab.url=url;
}
