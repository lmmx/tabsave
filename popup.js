function tabDL(){
    tabUrls = [];
chrome.tabs.query({currentWindow: true, active: false}, function(tabs){
    var div = document.createElement('div');
for (i=0;i<tabs.length;i++) {
    tabUrls.push(tabs[i].url);
}
    header = document.createElement('h1');
    header.innerHTML = 'Downloads in progress';
    header.setAttribute('style','line-height:0.6; font-size: 1.6em;');
    div.innerHTML = header.outerHTML + tabUrls.join('<br>');
    div.setAttribute('style','width: 600px; font-family: Helvetica, Tahoma; font-size: smaller; margin: 1.5em; cursor: default; line-height: 2; border: 3px solid #39A799; padding: 1em;');
    document.body.appendChild(div);
for (i=0;i<tabUrls.length;i++) {
    chrome.downloads.download({url: tabUrls[i]});
}
});
};     
document.addEventListener('DOMContentLoaded', function () {
     tabDL();
});
