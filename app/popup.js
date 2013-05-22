function changeTab(tabID){
  chrome.tabs.update(tabID,{active:true});
}

chrome.windows.getCurrent({populate: true},function (window){
  list = document.getElementById('open-tabs');
  for (var i = 0; i < window.tabs.length; i++)
  {
    var li = document.createElement('li');
    var link = document.createElement('a');
    link.setAttribute('href','#');
    var img = document.createElement('img');
    img.setAttribute('src',window.tabs[i].favIconUrl);
    link.innerHTML = window.tabs[i].title;
    link.addEventListener("click",function(iVal){
      changeTab(window.tabs[iVal].id);
    }.bind(this,i),false);
    li.appendChild(img);
    li.appendChild(link);
    list.appendChild(li);
  }
});