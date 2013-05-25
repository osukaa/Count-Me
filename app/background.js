tabCount = 0;
thisWindowId = 0;

function updateBadgeText(){
  chrome.browserAction.setBadgeText({text: String(tabCount)});
}

chrome.windows.getCurrent({populate: true},function (window){
  thisWindowId = window.id;
});

chrome.tabs.onCreated.addListener(function(tab){
  if (tab.windowId == thisWindowId) {
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
