tabCount = 0;

function updateBadgeText(){
  chrome.browserAction.setBadgeText({text: String(tabCount)});
}

chrome.windows.getCurrent({populate: true},function (window){
  tabCount = window.tabs.length;
  updateBadgeText();
});

chrome.tabs.onCreated.addListener(function(tab){
  tabCount += 1;
  updateBadgeText();
});

chrome.tabs.onRemoved.addListener(function(tab){
  tabCount -= 1;
  updateBadgeText();
});