Tabsave
=======

Super simple Chrome extension to save all files in open tabs (e.g. PDFs). Default setting is <code>currentWindow:true, active: true</code>, i.e. all *other* open tabs will be saved to disk. Filename can also be specified as the page title by setting <code>filename</code> alongside <code>url</code>, taking <code>title</code> in the same way <code>url</code> is used.
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
