Tabsave
=======

Super simple Chrome extension to save all files in open tabs (e.g. PDFs). Default setting is <code>currentWindow:true, active: true</code>, the function query{} takes arguments as described at https://developer.chrome.com/extensions/tabs#method-query

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

all of which are optional.
