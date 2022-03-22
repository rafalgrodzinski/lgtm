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

    let request = new XMLHttpRequest();
    request.onload = function() {
        let response = JSON.parse(this.responseText);
        response.images.forEach(function (value, index, array) {
            let img = lgtmImage(value.url);
            img.addEventListener("click", (e) => {
                browser.tabs.query({ currentWindow: true, active: true }, function (tabs) {
                    browser.tabs.sendMessage(tabs[0].id, url);
                });
            });
            let container = document.getElementById("container");
            container.appendChild(img);
        });
    }
    request.open("GET", "https://lgtmoon.herokuapp.com/api/images/random");
    request.send();
});

function lgtmImage(url) {
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("element-container");

    let imgBig = document.createElement("img");
    imgBig.src = url;
    imgBig.classList.add("element-big");
    imgContainer.appendChild(imgBig);

    let imgSmall = document.createElement("img");
    imgSmall.src = url;
    imgSmall.classList.add("element-small");
    imgContainer.appendChild(imgSmall);

    return imgContainer;
}
