Tab Save
=======

Tab Save is a utility to save all files in open tabs within Google Chrome to disk.

![](https://raw.githubusercontent.com/lmmx/tabsave/master/TS%20demo%20wide.png)

All open tabs in the current window are saved to disk, but I might add the ability to change this behaviour on the options page, e.g. for *all* windows, in/active tabs etc..

Filename can also be specified as the page title by setting <code>filename</code> in the chrome.download API. Hooking this up to a Google Scholar API will allow this extension to automatically name PDF files - this code contains a working prototype but the finished product is still in the works.

This extension largely just uses the core <code><a href="https://developer.chrome.com/extensions/downloads#method-download">download</a></code> method. Feel free to fork and make more elaborate use of it.

The current build <a href="https://chrome.google.com/webstore/detail/tab-save/lkngoeaeclaebmpkgapchgjdbaekacki">is available on the Chrome web store</a>, and now features the ability to add a list manually rather than just from the tabs list.
