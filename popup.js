function stylePop() {
	inStyle = document.createElement('style');
	inStyle.type = 'text/css';
	inStyle.id = 'instyle';
	if (navigator.appVersion.indexOf("Win")>-1) {
		inStyle.innerHTML += " /* Font */ @font-face{ font-family: 'SEGOEUIL'; src: local('☺'), url('https://raw.githubusercontent.com/lmmx/websiteresources/master/fonts/SEGOEUIL.svg') format(\"svg\"), url('https://raw.githubusercontent.com/lmmx/websiteresources/master/fonts/SEGOEUIL.woff') format('woff'), url('https://raw.githubusercontent.com/lmmx/websiteresources/master/fonts/SEGOEUIL.ttf') format('truetype');}";
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

/* this crashes the extension upon use!
function pasteIn(e) {
	txt = document.querySelector('#txtin');
	setTimeout(function(){
		temparray = [];
		temparray.push(txt.value.replace(/,\s|\r|\f/g,'\n').replace(/\n{2,}/g,'\n').split('\n'));
		for (k=temparray[0].length-1;k>=0;k++) {
			if (temparray[0][k] != '') {
				tabUrls.push(temparray[0][k])
			}
			else {
				temparray[0].splice(k,1);
			}
		}
		URLn = temparray[temparray.length-1];
		if (!isURL(URLn)) {
			(URLn == '' || URLn == ' ' || URLn == '\t') ? txt.value = null : txt.value = URLn;
			temparray.pop([temparray.length-1]);
		}
		else txt.value = null;
		for (i=0;i<temparray.length;i++) {
			urlbox = document.createElement('input');
			urlbox.type = 'url';
			urlbox.value = temparray[i];
			document.querySelector('#main').insertBefore(urlbox,document.querySelector('textarea'));
			inboxes = document.querySelectorAll('input');
			inboxes[inboxes.length-1].addEventListener('keyup', function(e) {
				if ((e.keyCode === 13 || e.keyCode === 46 || e.keyCode === 8) && this.value.length < 1) {
					this.remove();
				}
			});
		}
	}, 0);
}
*/

// the old one is recursive (adds items already added!)
function pasteIn(e) {
	txt = document.querySelector('#txtin');
	setTimeout(function(){
		temparray = []; tabUrls = [];
		temparray.push(txt.value.replace(/,\s|\r|\f/g,'\n').replace(/\n{2,}/g,'\n').split('\n'));
		for (k=0;k<temparray[0].length;k++) {
			tabUrls.push(temparray[0][k]);
		}
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
	}, 0);
}

function enterUp(e) {
	if (e.keyCode === 13) {
		pasteIn();
	}
}

function doiinput() {
	document.querySelector('#main h1').innerText = 'Enter DOIs';
	document.querySelector('#doibtn').remove();
}

closeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 785.714 1000" preserveAspectRatio="xMinYMin meet" width="100%" height="100%"><path d="M724.284 737.74q0 22.32 -15.624 37.944l-75.888 75.888q-15.624 15.624 -37.944 15.624t-37.944 -15.624l-164.052 -164.052 -164.052 164.052q-15.624 15.624 -37.944 15.624t-37.944 -15.624l-75.888 -75.888q-15.624 -15.624 -15.624 -37.944t15.624 -37.944l164.052 -164.052 -164.052 -164.052q-15.624 -15.624 -15.624 -37.944t15.624 -37.944l75.888 -75.888q15.624 -15.624 37.944 -15.624t37.944 15.624l164.052 164.052 164.052 -164.052q15.624 -15.624 37.944 -15.624t37.944 15.624l75.888 75.888q15.624 15.624 15.624 37.944t-15.624 37.944l-164.052 164.052 164.052 164.052q15.624 15.624 15.624 37.944z"></path></svg>'
/*
function getpagelinks(target) {
	targetTag = target;
	tagCount = {}; getTagUrls = {}; allTagUrls = [];
	tagCount['code'] = 'document.body.querySelectorAll("'+targetTag+'").length';
	eachTagUrl['code'] = 'document.querySelectorAll("'+targetTag'")['+t+']';
	chrome.tabs.executeScript(null, tagCount, function(results){
		numPageTags = results[0];
		for (t=0;t<numPageTags;t++) {
			chrome.tabs.executeScript(null, eachTagUrl, function(results) {
				allTagUrls.push(results[0]);
			});
		}
	} );
}
*/
function urlGet(){
	tabUrls = [];
	chrome.tabs.query({currentWindow: true}, function(tabs){
	var div = document.createElement('div');
	for (i=0;i<tabs.length;i++) {
		tabUrls.push(tabs[i].url);
	} 
	header = document.createElement('h1');
	header.innerHTML = 'Tabs to download';
	list = document.createElement('div');
	list.id = 'tablist';
	list.innerHTML = tabUrls.join('</p><a class="close">'+closeSVG+'</a></div><br /><div id="p"><p>').replace(/^/,'<div id="p"><p>').replace(/$/,'</p><a class="close">'+closeSVG+'</a></div>');
	boxes = list.querySelectorAll('#p');
	for (i=0;i<boxes.length;i++) {
		boxes[i].setAttribute('data-origin', tabUrls[i]);
	}
	div.innerHTML = header.outerHTML + list.outerHTML;
	div.id = 'main';
	document.body.appendChild(div);

		
	formsect = document.createElement('section');
	editbtn = document.createElement('button');
	editSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 600 600" enable-background="new 0 0 600 600" xml:space="preserve" xmlns:xml="http://www.w3.org/XML/1998/namespace"><g xmlns="http://www.w3.org/2000/svg" transform="translate(700, 0) scale(-1, 1)"><path fill="#404040" d="M222.29,43.907c8.002,0,16.004,0,24.008,0c17.984,5.355,34.246,12.437,46.018,24.009 c-37.514,40.516-78.527,77.527-116.042,118.04c-14.398-9.606-19.908-28.114-26.006-46.017c0-8.005,0-16.008,0-24.011 C158.911,76.563,182.918,52.555,222.29,43.907z"></path><path fill="#404040" d="M322.325,101.928c66.083,59.522,129.868,127.868,196.07,194.071c20.882,20.882,50.497,41.409,64.025,64.023 c17.16,28.683,26.672,65.598,40.013,98.032c13.145,31.96,26.889,64.208,40.017,98.039c-33.778-13.111-66.171-26.906-98.034-40.019 c-32.584-13.395-69.32-22.832-98.037-40.013c-22.408-13.406-45.211-43.211-66.023-64.021 c-63.788-63.786-128.009-130.914-192.067-192.069C243.131,177.457,285.814,142.774,322.325,101.928z M524.398,418.042 c-26.342-11.761-47.98,8.89-48.018,36.017c38.498,14.85,74.458,32.241,114.037,46.012c5.916-5.428,13.42-9.254,16.01-18.006 c-14.952-37.733-30.96-74.41-46.02-112.039C533.29,370.06,512.638,391.702,524.398,418.042z"></path></g></svg>';
	editbtn.innerHTML = editSVG;
	editbtn.id = 'editbtn';
	DOIbtn = document.createElement('button');
	DOIbtn.id = 'doibtn';
	PDFsvg = '<svg class="pdficon" width="14.600000000000001" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <g> <g id="svg_3"> <g id="svg_2"> <g id="svg_1"> <g fill="white" transform="matrix(0.0318612 0 0 0.0311698 16.2223 -89.3014)" id="g1552"> <path fill="#F18585" fill-rule="evenodd" stroke-width="0.95407495pt" id="path1543" d="m-504.14551,2871.42969c0,166.802 0,333.604 0,500.40625c149.34375,0 298.68747,0 448.03128,0c0,-125.2605 0,-250.521 0,-375.78125c-37.45105,-42.0896 -74.88874,-84.19238 -112.375,-126.25c-111.88541,0 -223.77084,0 -335.65619,0c0,0.33325 0,1.4165 0,1.625l-0.00006,0l-0.00003,0z"></path> </g> <path fill="#FFECDD" fill-rule="evenodd" stroke-width="0.95407495pt" id="path906" d="m14.53847,3.92331c-1.0588,-0.31347 -2.43077,-0.26901 -3.4672,-0.09036c0.17896,-1.14829 0.20131,-2.58734 -0.04474,-3.758l3.51193,3.84835l0.00001,0l0,0.00001z"></path> <path fill="#FFFFFF" id="path900" d="m6.93574,1.26566c-0.34422,0.05049 -0.53274,0.18698 -0.69184,0.76482c-0.15908,0.57786 -0.00517,1.61811 0.21322,2.41611c0.08959,0.26548 0.20604,0.52232 0.30926,0.78419c-0.05892,0.39499 -0.13058,0.78987 -0.23194,1.17812c-0.38674,1.58543 -0.82627,3.17933 -1.48739,4.67568c-0.92081,0.45271 -1.81601,0.95412 -2.6655,1.52788c-0.51235,0.32121 -1.45011,1.22294 -0.58906,1.69724c0.48353,0.27411 0.98677,0.2187 1.4432,0c0.22821,-0.10936 0.44362,-0.26241 0.64061,-0.43075c0.19701,-0.16835 0.37702,-0.35302 0.52648,-0.53753c0.46051,-0.58045 0.85585,-1.20058 1.20389,-1.84819c1.37958,-0.6201 2.80398,-1.14188 4.27068,-1.50578c0.6133,0.53513 1.51235,1.07404 2.27525,0.54121c0.76482,-0.3484 0.63662,-1.38213 -0.23562,-1.39533c-0.57821,-0.11506 -1.15226,-0.04397 -1.71933,0.08468c-0.24718,-0.28427 -0.47664,-0.58994 -0.68847,-0.87622c-0.683,-1.08654 -1.31318,-2.20603 -1.90342,-3.3466c0.15991,-1.04604 0.32391,-2.20929 0.19561,-2.96528c-0.12828,-0.75602 -0.49818,-0.81812 -0.86568,-0.76421l0,0l0,0l0.00004,-0.00001l0.00002,-0.00002l-0.00001,-0.00001zm-0.11413,0.78417c0.09276,-0.20569 0.33182,0.01223 0.3277,0.28748c-0.00411,0.27525 -0.04785,0.89147 -0.24302,1.06367c-0.14578,-0.4458 -0.17744,-1.14548 -0.08468,-1.35115zm0.50806,4.44006c0.53693,1.07153 1.18873,2.0849 2.00282,2.96003c-0.23992,0.0692 -0.48478,0.13484 -0.72159,0.19513c-0.87421,0.27909 -1.73097,0.61428 -2.57346,0.98298c0.59848,-1.31659 0.99356,-2.72287 1.29225,-4.13814l-0.00001,0l-0.00001,0zm3.70005,3.29138c0.30804,-0.00296 0.55406,0.07552 0.49335,0.36817c-0.25967,-0.06632 -0.48591,-0.19277 -0.6995,-0.34607c0.06983,-0.00712 0.13984,-0.02146 0.20617,-0.02208l-0.00001,0l-0.00001,-0.00001l0,-0.00001zm-6.41341,2.17954c-0.0656,0.12525 -0.1181,0.25588 -0.18776,0.3792c-0.44196,0.67757 -1.08139,1.52879 -1.96232,1.51315c-0.26311,-0.73867 0.81539,-1.15052 1.31802,-1.48371c0.27394,-0.14243 0.55427,-0.27276 0.83205,-0.40867l0,0l0,0l0.00001,0l0,0.00001l0,0.00002z"></path> </g> </g> </g> </g> </svg>'
	DOIbtn.innerHTML = PDFsvg + 'DOI entry<sup alt="DOIs are unique identifiers for academic papers - click here to download PDFs from Google Scholar using a list of DOIs and/or URLs" (papers will be named in APA format>?</sup>';
	btn = document.createElement('button');
	dlSVG = '<svg id="dlsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1082.5 1000" preserveAspectRatio="xMinYMin meet" width="100%" height="100%"><path d="m1.5 597.7q0 104.4 72.7 179.2t177.3 79.5q9.2 0 9.2-8.7v-69.9q0-9.2-9.2-9.2q-66.9-3.5-114-53.3t-47.2-117.6q0-65 44.5-113.1t109.8-55.9l27.4-1.5q9.7 0 9.7-8.7l3.9-28.9q7.9-84.4 71.3-141.3t149.4-56.9q85 0 148.7 56.9t72.5 141.3l3.9 30.3q0 8.8 9.3 8.8h84q69.3 0 120.4 50.3t51 118.7q0 67.8-47.1 117.6t-114 53.3q-10.3 0-10.3 9.2v69.9q0 8.7 10.3 8.7q104-3.4 176.2-78.6t72.3-180.1q0-70.4-34.7-129.4t-94.2-93.1t-129.9-33.9h-16.6q-25.4-104.5-109.6-171.4t-192.2-66.9q-110.3 0-196 68.4t-110.1 175.3q-85.9 20-142.3 90.6t-56.4 160.4z m362.8 79.5q0 18.1 13.1 31.3l134.3 135.7q9.8 12.2 30.3 12.2q22 0 31.7-12.2l134.8-135.7q13.2-14.2 13.2-31.3q0-18-13-30.2t-31.5-12.2t-32.2 12.2l-58.6 57.6v-207.5q0-18.6-12.9-30.8t-31.5-12.2t-30.8 12.2t-12.2 30.8v207.5l-57.6-57.6q-13.7-12.2-32.2-12.2q-19.6 0-32.2 11.9t-12.7 30.5z"></path></svg>'
	btn.innerHTML = dlSVG;
	btn.setAttribute('id','btnDL');
	formsect.innerHTML = editbtn.outerHTML + DOIbtn.outerHTML + btn.outerHTML;
	document.body.appendChild(formsect);
	document.querySelector('#doibtn').addEventListener('click', function(e) {
	if (document.querySelector('#editbtn') !== null) {
		document.querySelector('#editbtn').click();
		doiinput();
		}
	else doiinput();
	});
	document.querySelector('#btnDL').addEventListener('click', function(e) {
		tabDL();
	})
	document.querySelector('#editbtn').addEventListener('click', function(e) {
	textarea = document.createElement('textarea');
	textarea.id = 'txtin'
	edHead = document.createElement('h1');
	edHead.innerHTML = 'Enter your download links';
	div.childNodes[0].outerHTML = edHead.outerHTML;
	div.childNodes[1].outerHTML = textarea.outerHTML;

	document.querySelector('textarea').addEventListener('paste', pasteIn);
	document.querySelector('textarea').addEventListener('keyup', enterUp);
	this.remove();
	tabUrls = [];
	document.querySelector('textarea').focus();
	});
	document.querySelector('#btnDL').focus();

	closers = document.querySelectorAll('#p');
	for (c=0;c<closers.length;c++) {
		closers[c].querySelector('.close').addEventListener('click',function(e) {
			if (document.querySelectorAll('#p').length > 1) {
				dataOrigin = this.parentNode.getAttribute('data-origin');
				urlIndex = tabUrls.indexOf(dataOrigin);
				if (urlIndex > -1) { tabUrls.splice(urlIndex, 1) }
				else console.log("original URL not found in array - this shouldn't happen");
				this.parentNode.nextSibling.remove();
				this.parentNode.remove();
			}
			else {
				this.parentNode.querySelector('p').innerText = '';
				this.parentNode.removeAttribute('data-origin');
				tabUrls = [];
			}
		})
		closers[c].querySelector('p').addEventListener('mouseover',function(e) {
			this.setAttribute('contenteditable','true');
		})
	}
});

}

function getAPA(data) {
	bibtree = JSON.parse(JSON.stringify(data));
	bibdata = bibtree.data[0].scholar[0];
	APAciteprep = bibdata.citedSources.citations[0].bibliographyText;
	APAcite = APAciteprep.substr(0,APAciteprep.indexOf(',')) + APAciteprep.substr(APAciteprep.indexOf('(')-1,7) + APAciteprep.substr(APAciteprep.indexOf(')')+2).substr(0, APAciteprep.substr(APAciteprep.indexOf(')')+2).indexOf('.'));
	APAcite = APAcite.replace('/','-');
}

function bibli(info) {
	var queried = info.data[0].groupResult.query;
	if (queried.indexOf('sciencedirect.com')<0){
		var originalquery = queried;
	}
else {
	// get SIid back out of query, then look through SI_codes for the (PDF) source URL to use for the download
	for (s=0;s<SI_codes.length;s++) {
		if (SI_codes[s][0] == queried) {
			var originalquery = SI_codes[s][1];
		}
	}
}
	try {
		getAPA(info);
		chrome.downloads.download({url: originalquery, filename: APAcite});
	}
	catch(e) {
	    doiRE = /\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?!["&\'<>])\S)+)\b/g;
		if (originalquery.indexOf(doiRE)>-1) {
			console.log(originalquery);
			possDOIurl = APIpre + doiRE.exec(originalquery)[1] + APIsuff;
			bibliscript = document.createElement('script');
			bibliscript.type = 'text/javascript';
			bibliscript.src = possDOIurl;
			document.head.appendChild(bibliscript);
			getAPA(info);
			chrome.downloads.download({url: originalquery, filename: APAcite});
		}

		else if (originalquery.match(/\.pdf\+html/) !== null) {
			try {
				stripAPIurl = APIpre + originalquery.replace(/.pdf\+html/,'.pdf') + APIsuff;
				bibliscript = document.createElement('script');
				bibliscript.type = 'text/javascript';
				bibliscript.src = stripAPIurl;
				document.head.appendChild(bibliscript);
				getAPA(info);
				chrome.downloads.download({url: originalquery, filename: APAcite});
			}
			catch (e) {
				chrome.downloads.download({url: originalquery});
			}
		}

		else chrome.downloads.download({url: originalquery})
	}
}

function tabDL(){
	APIpre = 'https://www.googleapis.com/scribe/v1/research?query=';
	APIsuff = '&key=AIzaSyDqVYORLCUXxSv7zneerIgC2UYMnxvPeqQ&callback=bibli';
	SI_codes = [];
	for (i=0;i<tabUrls.length;i++) {
		if (tabUrls[i].indexOf('pdf')>-1) {
			var originalURL = tabUrls[i];
			if (tabUrls[i].indexOf('ac.els-cdn.com')>-1) {
				var SIid = originalURL.match(/ac.els-cdn.com\/(.*?)\//)[1];
				var SIurl = 'http://www.sciencedirect.com/science/article/pii/'+SIid;
				var queryUrl = SIurl;
				SI_codes.push([SIurl,tabUrls[i]]);
			}
			else queryUrl = tabUrls[i];
			var APIurl = APIpre + queryUrl + APIsuff;

			bibliscript = document.createElement('script');
			bibliscript.type = 'text/javascript';
			bibliscript.src = APIurl;
			document.head.appendChild(bibliscript);
			//bibli callback provides the metadata for this URL asynchronously
		}
		else chrome.downloads.download({url: tabUrls[i]});
	}
}
document.addEventListener('DOMContentLoaded', function () {
	stylePop();
	urlGet();
});
