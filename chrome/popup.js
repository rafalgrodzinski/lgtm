async function reload() {
    // Create new request to fetch lgtm image urls
    let response = await fetch("https://lgtmoon.herokuapp.com/api/images/random");
    // Extract json from response
    let data = await response.json();
    // Remove existing images
    let container = document.getElementById("container");
    container.innerHTML = "";

    // Create element for each url
    data.images.forEach(value => {
        let img = lgtmImage(value.url);
        container.appendChild(img);
    });
}

function lgtmImage(url) {
    // Create container for big and small image
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("element-container");
    // Call content script on on click, pass the url
    imgContainer.addEventListener("click", async e => {
        let tabs = await chrome.tabs.query({currentWindow: true, active: true});
        chrome.tabs.sendMessage(tabs[0].id, url);
    })

    // Crete expanded image (when hovering)
    let imgBig = document.createElement("img");
    imgBig.src = url;
    imgBig.classList.add("element-big");
    imgContainer.appendChild(imgBig);

    // Create shrunk image (default view)
    let imgSmall = document.createElement("img");
    imgSmall.src = url;
    imgSmall.classList.add("element-small");
    imgContainer.appendChild(imgSmall);

    return imgContainer;
}

window.addEventListener("load", event => {
    // Reload images on pressing the reload button
    var button = document.getElementById("reload");
    button.addEventListener("click", event => {
        reload();
    });
    // Initial images load
    reload();
});
