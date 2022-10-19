window.addEventListener("load", event => {
    // Reload images on pressing the reload button
    var button = document.getElementById("reload")
    button.addEventListener("click", e => {
        reload()
    })
    // Initial images load
    reload()
})

function reload() {
    // Create new request to fetch lgtm image urls
    let request = new XMLHttpRequest()
    request.onload = function() {
        // Remove existing images
        let container = document.getElementById("container")
        container.innerHTML = ""
        // Extract json from response
        let response = JSON.parse(this.responseText)
        response.images.forEach(value => {
            // Create element for each url
            let img = lgtmImage(value.url)
            container.appendChild(img)
        })
    }
    request.open("GET", "https://lgtmoon.herokuapp.com/api/images/random")
    request.send()
}

function lgtmImage(url) {
    // Create container for big and small image
    let imgContainer = document.createElement("div")
    imgContainer.classList.add("element-container")
    // Call content script on on click, pass the url
    imgContainer.addEventListener("click", async e => {
        let tabs = await chrome.tabs.query({currentWindow: true, active: true});
        chrome.tabs.sendMessage(tabs[0].id, url);
        /*chrome.tabs.query({currentWindow: true, active: true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, url)
            window.close()
        })*/
    })

    // Crete expanded image (when hovering)
    let imgBig = document.createElement("img")
    imgBig.src = url
    imgBig.classList.add("element-big")
    imgContainer.appendChild(imgBig)

    // Create shrunk image (default view)
    let imgSmall = document.createElement("img")
    imgSmall.src = url
    imgSmall.classList.add("element-small")
    imgContainer.appendChild(imgSmall)

    return imgContainer
}
