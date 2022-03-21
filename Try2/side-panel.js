console.log("Side panel script being loaded");
chrome.runtime.onMessage.addListener(function (msg, sender){
    if ( msg === 'toggle') {
        console.log("Message received");
        toggle();
    }
    return 'Dummy response to keep the console quite';
});

chrome.runtime.onMessage.addListener((msg, sender) => {
    if(msg === 'clicked') {
        console.log('Message received for clicked');
        toggle();
    }
    return 'Dummy response to keep the console quite';
});

const div = document.createElement('div');
div.style.background = "#EFF1FB";
div.style.height = "70%";
div.style.width = "0px";
div.style.position = "absolute";
div.style.bottom = "0px";
div.style.right = "0px";
div.style.zIndex = "9000000000000000000";
div.style.border = "0px";

div.innerHTML= `<object type="text/html" data=${chrome.runtime.getURL("popup.html")} height=100% width=100%></object>`

// div.innerHTML='<object type="type/html" data="./popup.html" ></object>';
// div.innerHTML='<obj type="text/html" data="popup.html" width="300" height="1000"></object>';
// div.src = chrome.runtime.getURL("popup.html")



document.body.appendChild(div);

function toggle() {
    if(div.style.width == "0px") {
        div.style.width = "300px";
    } else {
        div.style.width = "0px";
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
