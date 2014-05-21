Tabsave
=======

Super simple Chrome extension to save all files in open tabs (e.g. PDFs). Default setting is <code>currentWindow:true, active: true</code>, i.e. all *other* open tabs will be saved to disk.

Filename can also be specified as the page title by setting <code>filename</code> as <code>title</code>, in the same way that <code>url</code> from the tabs API is used for <code>url</code> in the downloads API.
<sub>The function <code>query{}</code> takes arguments as described at https://developer.chrome.com/extensions/tabs#method-query</sub>

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

The downloads API has <a href="https://developer.chrome.com/extensions/downloads">many more settings</a>; this extension just uses the core <code><a href="https://developer.chrome.com/extensions/downloads#method-download">download</a></code> method.
