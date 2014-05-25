function urlGet(){
    tabUrls = [];
chrome.tabs.query({currentWindow: true, active: false}, function(tabs){
    var div = document.createElement('div');
for (i=0;i<tabs.length;i++) {
    tabUrls.push(tabs[i].url);
}
    header = document.createElement('h1');
    header.innerHTML = 'Downloads in progress';
    header.setAttribute('style','line-height:0.6; font-size: 1.6em;');
    list = document.createElement('div');
    list.innerHTML = tabUrls.join('<br>');
    div.innerHTML = header.outerHTML + list.outerHTML;
    div.setAttribute('style','width: 600px; font-family: Helvetica, Tahoma; font-size: smaller; margin: 1.5em; cursor: default; line-height: 2; border: 3px solid #39A799; padding: 1em;');
    document.body.appendChild(div);
    
  formsect = document.createElement('section');
  input1 = document.createElement('input');
  btn = document.createElement('button');

  input1.setAttribute('type','radio');
  input1.setAttribute('name','format');
  input1.setAttribute('value','format1');
  btn.innerHTML = 'Convert';
  input1.innerHTML = '(xxx) xxx-xxxx<br />';
  btn.setAttribute('id','btnConvert');
  formsect.innerHTML = input1.outerHTML + btn.outerHTML;
  document.body.appendChild(formsect);
  document.querySelector('#btnConvert').addEventListener('click', function(e) { var format = document.querySelector('input[type=\"radio\"]:checked');  alert(' Hi let me just switch the URL list now...'); }, false);
  alert(div.childNodes[1].innerText);
});
}

function editList(){
  document.querySelector('div:not([style])').remove();
  editIn = document.body.createElement('input');
  editIn.setAttribute('placeholder','paste links here');
  editIn.setAttribute('type','url');
  document.body.appendChild(editIn);
}

function tabDL(){
  for (i=0;i<tabUrls.length;i++) {
    chrome.downloads.download({url: tabUrls[i]});
}
}
document.addEventListener('DOMContentLoaded', function () {
  urlGet();
  // tabDL();
});
