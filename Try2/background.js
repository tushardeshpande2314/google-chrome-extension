// chrome.action.onClicked.addListener(tab => {
//     chrome.tabs.sendMessage(tab.id, "toggle");
//     console.log("Message sent");
// })

// On page load

// chrome.action.onUpdated.addListener( function(tabId, changeInfo, tab){
//     if (changeInfo.status == 'complete') {
//         chrome.tabs.sendMessage(tab.id, "toggle");
//         console.log(" Message sent");
//     }
// })

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    console.log(changeInfo.status);
    if (changeInfo.status === 'complete') {
        chrome.tabs.sendMessage(tab.id, "toggle");
        console.log("Message sent");
    }
  });

chrome.action.onClicked.addListener(tab => {
    chrome.tabs.sendMessage(tab.id, "clicked");
    console.log("Message sent");
})