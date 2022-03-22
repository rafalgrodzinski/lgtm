window.addEventListener("load", (event) => {
    var button = document.getElementById("reload");
    button.addEventListener("click", (e) => {
        reload();
    });

    reload();
});

function reload() {
    let request = new XMLHttpRequest();
    request.onload = function() {
        let response = JSON.parse(this.responseText);
        let container = document.getElementById("container");
        container.innerHTML = "";
        response.images.forEach(function (value, index, array) {
            let img = lgtmImage(value.url);
            img.addEventListener("click", (e) => {
                browser.tabs.query({ currentWindow: true, active: true }, function (tabs) {
                    browser.tabs.sendMessage(tabs[0].id, url);
                });
            });
            container.appendChild(img);
        });
    }
    request.open("GET", "https://lgtmoon.herokuapp.com/api/images/random");
    request.send();
}

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
