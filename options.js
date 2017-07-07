// Saves options to chrome.storage

function save_options() {
  var download_delay = document.getElementById('download_delay').value;
  console.log(download_delay);
  chrome.storage.sync.set({
    downloadDelay: download_delay,
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores state using the preferences
// stored in chrome.storage.

function restore_options() {
  chrome.storage.sync.get({
    downloadDelay: 0
  }, function(items) {
    document.getElementById('download_delay').value = items.downloadDelay;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.body.onload = function() {
	document.getElementById('save').addEventListener('click', save_options);
}