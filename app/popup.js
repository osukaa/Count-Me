chrome.windows.getCurrent({populate: true},function (window){
  list = document.getElementById('open-tabs');
  tabCount = window.tabs.length;
  for (var i = 0; i < tabCount; i++)
  {
    var element = document.createElement('li');
    element.innerHTML = window.tabs[i].title;
    list.appendChild(element);
  }
});