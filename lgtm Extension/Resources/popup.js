window.addEventListener("load", (event) => {
    /*
    //console.log("loaded");
    var button = document.getElementById("hello_btn");
    //console.log(button);
    button.addEventListener("click", (e) => {
        //console.log("pressed");
        //alert("Hello");
        console.log("button pressed");
        browser.tabs.query({currentWindow: true, active: true}, function (tabs) {
            console.log("tab found");
            browser.tabs.sendMessage(tabs[0].id, "Hello from popup");
        });
    });*/

    for (let i=0; i<40; i++) {
        let url = lgtmUrl();
        let img = lgtmImage(url);
        let container = document.getElementById("container");
        container.appendChild(img);
    }
});

function lgtmUrl() {
    let index = Math.round(Math.random() * 10000 + 10000)
    return "https://image.lgtmoon.dev/" + index
}

function lgtmImage(url) {
    let img = document.createElement("img");
    img.src = url;
    img.classList.add("element");
    return img;
}
