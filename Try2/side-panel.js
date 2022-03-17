console.log("Side panel script being loaded");
chrome.runtime.onMessage.addListener(function (msg, sender){
    if ( msg === 'toggle') {
        console.log("Message received");
        toggle();
    }
});

chrome.runtime.onMessage.addListener((msg, sender) => {
    if(msg === 'clicked') {
        console.log('Message received for clicked');
        toggle();
    }
});

const iframe = document.createElement('iframe');
iframe.style.background = "gray";
iframe.style.height = "50%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.style.border = "0px"; 
iframe.src = chrome.runtime.getURL("popup.html")

document.body.appendChild(iframe);

function toggle() {
    if(iframe.style.width == "0px") {
        iframe.style.width = "300px";
    } else {
        iframe.style.width = "0px";
    }
}
