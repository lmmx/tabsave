function stylePop() {
	inStyle = document.createElement('style');
	inStyle.type = 'text/css';
	inStyle.id = 'instyle';
	inStyle.innerHTML = '#main {width: 600px; font-family: "SEGOEUIL", Helvetica, Tahoma; font-size: smaller; margin: 1.5em 1.5em 0.5em 1.5em; cursor: default; line-height: 2; border: 3px solid #39A799; padding: 1em;} #main h1 { font-weight: normal; line-height:1; font-size: 50px; margin: 0 0 0.4em 0; } input[type="url"] { border:none; outline: none; width: 80%; } #tablist {overflow-y: scroll !important; max-height: 400px; } #tablist p { width: 97%;overflow-y: overlay;white-space: nowrap; text-overflow: ellipsis; margin:0; padding-bottom: 2px; } #tablist p:active, #tablist p:focus {text-overflow: initial; outline: none; } #p p::selection {background: #62C9BC;} div#p{overflow:auto!important; width: 100% }  a.close {-webkit-box-shadow: inset 0 0 5px 0 rgba(255,255,255,0.5);line-height: 1.1;font-size: 15px;display: block;height: 18px;-webkit-border-radius: 32px;float: right;padding: 0 4px;margin-top: -24px;transition: all 0.4s ease-out;} #p p:active + .close, #p p:focus + .close {opacity: 0;} #p p:hover + .close, .close:hover {font-weight: bold;color: white;background-color: #CFCFCF; } /*Scrollbars*/  p::-webkit-scrollbar { display: none; } #textin::-webkit-scrollbar, #tablist::-webkit-scrollbar {width: 18px;} #textin::-webkit-scrollbar-track, #tablist::-webkit-scrollbar-track {background-color: transparent;} #textin::-webkit-scrollbar-thumb, #tablist::-webkit-scrollbar-thumb {border: 4px solid rgba(0, 0, 0, 0);-webkit-border-radius:16px;background-clip: padding-box;-webkit-box-shadow: inset 0 0 0px rgba(0,0,0,.3);background-color: #dadada;} #txtin::-webkit-scrollbar-corner, #tablist::-webkit-scrollbar-corner {background-color: transparent;} /* Buttons */ section {margin: 0 1.5em; height:24px; border: 3px solid transparent;}section > svg {float: left;} svg * {fill: #315C5E;} #editbtn { background: none; border: 0; outline: none; height: 27px; } #btnConvert {float: right; background: #3BA294;border: 0;border-radius: 430px;color: white;font-family: "SEGOEUIL";font-size: 1em;outline:none;box-shadow: inset 0 0 5px 0 rgba(255,255,255,0.5);-webkit-box-shadow: inset 4px 4px 6px 0 rgba(255,255,255,0.5);padding: 5px 7px 0 7px;line-height: 1;text-shadow: white 0px 0px 20px, white 0px 0px 20px, white 0px 0px 20px;} #btnConvert::before {content: "Download";font-size: smaller;vertical-align: super;padding-right: 5px;} #btnConvert > svg * {fill: #FFF;} #btnConvert:active, #btnConvert:visited {margin: 2px 2px 0 0;border: 1px solid rgba(153, 153, 153, 0.59); /*{Shadow}*/ box-shadow:inset 0 0 5px 0 #333; -moz-box-shadow:inset 0 0 5px 0 #333; -webkit-box-shadow:inset 0 1px 2px 0 #333, 0 1px 1px 0 #fff;text-shadow: none;} /* Editing */ #main > textarea {outline:none; width: 90%; padding:8px; font-family: "SEGOEUIL"; border: 0; border-style: groove;background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(251, 247, 255, 0.63)), color-stop(100%,rgba(229, 241, 255, 0.51)));height: 146px; margin: 0px;}'
	if (navigator.appVersion.indexOf("Win")>-1) {
    inStyle.innerHTML += " /* Font */ @font-face{ font-family: \"SEGOEUIL\"; src: local('☺'), url('https://raw.githubusercontent.com/lmmx/websiteresources/master/fonts/SEGOEUIL.svg') format(\"svg\"), url('https://raw.githubusercontent.com/lmmx/websiteresources/master/fonts/SEGOEUIL.woff') format('woff'), url('https://raw.githubusercontent.com/lmmx/websiteresources/master/fonts/SEGOEUIL.ttf') format('truetype');}";
}
	else inStyle.innerHTML += ' /* Font */ @font-face {font-family: "SEGOEUIL";src: url(\'https://raw.githubusercontent.com/lmmx/websiteresources/master/fonts/SEGOEUIL.eot\');src: local("Segoe UI Light"), url(\'https://raw.githubusercontent.com/lmmx/websiteresources/master/fonts/SEGOEUIL.woff\') format("woff"), url(\'https://raw.githubusercontent.com/lmmx/websiteresources/master/fonts/SEGOEUIL.ttf\') format("truetype");}'
	document.body.appendChild(inStyle);
}

function isURL(str) { // URL checking RegEx courtesy of Matthew O'Riordan http://blog.mattheworiordan.com/post/13174566389/url-regular-expression-for-links-with-or-without-the
  var pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
  if(!pattern.test(str)) {
    return false;
  } else {
    return true;
  }
}

function urlGet(){
    tabUrls = [];
chrome.tabs.query({currentWindow: true, active: false}, function(tabs){
    var div = document.createElement('div');
for (i=0;i<tabs.length;i++) {
    tabUrls.push(tabs[i].url);
} 
    header = document.createElement('h1');
    header.innerHTML = 'Tabs to download';
    list = document.createElement('div');
	list.id = 'tablist';
    list.innerHTML = tabUrls.join('</p><a class="close">&times;</a></div><div id="p"><p contenteditable>').replace(/^/,'<div id="p"><p contenteditable>').replace(/$/,'</p><a class="close">&times;</a></div>');
    div.innerHTML = header.outerHTML + list.outerHTML;
    div.id = 'main';
    document.body.appendChild(div);
    
	formsect = document.createElement('section');
	editbtn = document.createElement('button');
	editSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve" xmlns:xml="http://www.w3.org/XML/1998/namespace"><g xmlns="http://www.w3.org/2000/svg" transform="translate(700, 0) scale(-1, 1)"><path fill="#404040" d="M222.29,43.907c8.002,0,16.004,0,24.008,0c17.984,5.355,34.246,12.437,46.018,24.009 c-37.514,40.516-78.527,77.527-116.042,118.04c-14.398-9.606-19.908-28.114-26.006-46.017c0-8.005,0-16.008,0-24.011 C158.911,76.563,182.918,52.555,222.29,43.907z"></path><path fill="#404040" d="M322.325,101.928c66.083,59.522,129.868,127.868,196.07,194.071c20.882,20.882,50.497,41.409,64.025,64.023 c17.16,28.683,26.672,65.598,40.013,98.032c13.145,31.96,26.889,64.208,40.017,98.039c-33.778-13.111-66.171-26.906-98.034-40.019 c-32.584-13.395-69.32-22.832-98.037-40.013c-22.408-13.406-45.211-43.211-66.023-64.021 c-63.788-63.786-128.009-130.914-192.067-192.069C243.131,177.457,285.814,142.774,322.325,101.928z M524.398,418.042 c-26.342-11.761-47.98,8.89-48.018,36.017c38.498,14.85,74.458,32.241,114.037,46.012c5.916-5.428,13.42-9.254,16.01-18.006 c-14.952-37.733-30.96-74.41-46.02-112.039C533.29,370.06,512.638,391.702,524.398,418.042z"></path></g></svg>';
	editbtn.innerHTML = editSVG;
	editbtn.id = 'editbtn';
	btn = document.createElement('button');
	dlSVG = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="12px" height="18px" viewBox="0 0 23 35" preserveAspectRatio="xMidYMid meet"><g transform="scale(0.02)"><g transform="translate(0.000000,1750.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M3170 11440 l0 -5700 -1502 0 -1503 0 2798 -2797 2797 -2798 2797 2798 2798 2797 -1503 0 -1502 0 0 5700 0 5700 -2590 0 -2590 0 0 -5700z"></path></g></g></svg>'
  btn.innerHTML = dlSVG;
	btn.id = 'dlbtn';
  btn.setAttribute('id','btnConvert');
  formsect.innerHTML = editbtn.outerHTML + btn.outerHTML;
  document.body.appendChild(formsect);
	document.querySelector('#btnConvert').addEventListener('click', function(e) {
		// tabDL();
	})
  document.querySelector('#editbtn').addEventListener('click', function(e) {
	textarea = document.createElement('textarea');
	textarea.id = 'txtin'
	edHead = document.createElement('h1');
	edHead.innerHTML = 'Enter your download links';
	div.childNodes[0].outerHTML = edHead.outerHTML;
	div.childNodes[1].outerHTML = textarea.outerHTML;

	document.querySelector('textarea').addEventListener('onpaste', function () {
		txt = document.querySelector('textarea');
		txt.previousSibling.innerHTML = 'hello';
		tabUrls = txt.value.replace(/,\s|\r|\f/g,'\n').replace(/\n{2,}/g,'\n').split('\n');
		URLn = tabUrls[tabUrls.length-1];
	    if (!isURL(URLn)) {
	      (URLn == '' || URLn == ' ' || URLn == '\t') ? txt.value = null :	txt.value = URLn;
	      tabUrls.pop([tabUrls.length]);
		}
		else txt.value = null;
		urlHolder = document.createElement('div');
		document.body.appendChild(urlHolder);
		for (i=0;i<tabUrls.length;i++) {
			urlbox = document.createElement('input');
			urlbox.type = 'url';
			urlbox.value = tabUrls[i];
			document.querySelector('#main').insertBefore(urlbox,document.querySelector('textarea'));
		}
	});
	this.remove();
	document.querySelector('textarea').focus();
	}, false);
  alert(div.childNodes[1].innerText);
	document.querySelector('#btnConvert').focus();
	
});

closers = document.querySelectorAll('.close');
	for (i=0;i<closers.length;i++) {
		closers[i].addEventListener('click',function(e) {
			alert("hello?")
			this.parentNode.parentNode.remove();
			alert("hello!");
		})
	}

}

function editList(){
  document.querySelector('div:not(#main)').remove();
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
	stylePop();
	urlGet();
});
