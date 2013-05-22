tabCount = 0;
newTabID = 0;
thisWindowId = 0;

function updateBadgeText(){
  chrome.browserAction.setBadgeText({text: String(tabCount)});
}

chrome.windows.getCurrent({populate: true},function (window){
  tabCount = window.tabs.length;
  thisWindowId = window.id;
  updateBadgeText();
});

chrome.tabs.onCreated.addListener(function(tab){
  if (thisWindowId == tab.windowId) {
    newTabID = tab.id;
  };
});

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab) {
  if (newTabID == tabId && changeInfo["status"] == "complete") {
    newTabID = 0;
    tabCount++;
    updateBadgeText();
  };
});

chrome.tabs.onRemoved.addListener(function(tabId,removeInfo) {
  if (thisWindowId == removeInfo["windowId"]) {
    tabCount--;
    updateBadgeText();
  };
});
