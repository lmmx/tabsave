Tabsave
=======

Super simple Chrome extension to save all files in open tabs (e.g. PDFs) to disk. Default setting is <code>currentWindow:true</code>, i.e. all open tabs will be saved to disk, but setting could be changed for all windows, in/active tabs etc..

Filename can also be specified as the page title by setting <code>filename</code> as <code>title</code>, in the same way that <code>url</code> from the tabs API is used for <code>url</code> in the downloads API, though this doesn't work for PDF files which were my original target so I didn't use it.<br />

####The function <code>query{}</code> can take <a href="https://developer.chrome.com/extensions/tabs#method-query">various arguments</a>

Specifically:

* active
* pinned
* highlighted
* currentWindow
* lastFocusedWindow
* status
* title
* url
* windowId
* windowType
* index

all of which (other than <code>url</code>) are optional.

####The downloads API has <a href="https://developer.chrome.com/extensions/downloads">many more settings</a>

This extension just uses the core <code><a href="https://developer.chrome.com/extensions/downloads#method-download">download</a></code> method. Feel free to fork and make more elaborate use of it.

Working browser extension <a href="https://chrome.google.com/webstore/detail/tab-save/lkngoeaeclaebmpkgapchgjdbaekacki">is available on the Chrome web store</a>.
