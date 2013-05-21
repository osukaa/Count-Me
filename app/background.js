tabCount = 0;

function updateBadgeText(){
  console.log('update');
  chrome.browserAction.setBadgeText({text: String(tabCount)});
}

chrome.windows.getCurrent({populate: true},function (window){
  console.log('init');
  tabCount = window.tabs.length;
  console.log(tabCount);
  updateBadgeText();
})

chrome.tabs.onCreated.addListener(function(tab){
  tabCount += 1;
  console.log(tabCount);
  updateBadgeText();
});

chrome.tabs.onRemoved.addListener(function(tab){
  tabCount -= 1;
  console.log(tabCount);
  updateBadgeText();
});