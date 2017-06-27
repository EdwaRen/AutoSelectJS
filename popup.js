chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {file: "insert.js"}
    , function(response) {

    });
});
