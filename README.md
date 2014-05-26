Tabsave
=======

Simple Chrome extension to save all files in open tabs (e.g. PDFs) to disk. Default setting is <code>currentWindow:true</code>, i.e. all open tabs in the current window will be saved to disk, but this setting could be changed for all windows, in/active tabs etc..

Filename can also be specified as the page title by setting <code>filename</code> as <code>title</code>, in the same way that <code>url</code> from the tabs API is used for <code>url</code> in the downloads API, though this doesn't work for PDF files which were my original target so I didn't use it.<br />

####The downloads API has <a href="https://developer.chrome.com/extensions/downloads">many more settings</a> than used here

This extension just uses the core <code><a href="https://developer.chrome.com/extensions/downloads#method-download">download</a></code> method. Feel free to fork and make more elaborate use of it. I'd like to add boxes to decide the name for files, e.g. for PDFs, and it would be possible to get bibliographic data from inside the tabs to do so if anyone wanted to develop this idea further.

Working browser extension <a href="https://chrome.google.com/webstore/detail/tab-save/lkngoeaeclaebmpkgapchgjdbaekacki">is available on the Chrome web store</a>, and now features the ability to add a list manually rather than just from the tabs list.
