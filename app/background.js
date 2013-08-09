var tabCount = 0;

function updateBadgeText(sum){
  if(sum == 1){
    tabCount++;
  }
  else if (sum == 0){
    tabCount--;
  }
  console.log(tabCount);
  chrome.browserAction.setBadgeText({text: String(tabCount)});
}

chrome.windows.getCurrent({populate: true},function (window){
  console.log('Init');
  tabCount = window.tabs.length;
  console.log(tabCount);
  updateBadgeText(null);
});

chrome.tabs.onCreated.addListener(function(tab){
  console.log('Create');
  updateBadgeText(1);
});

chrome.tabs.onRemoved.addListener(function(tabId,removeInfo) {
  console.log('Delete')
  updateBadgeText(0);
});
