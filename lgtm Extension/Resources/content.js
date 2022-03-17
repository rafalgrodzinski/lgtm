browser.runtime.onMessage.addListener((message) => {
    console.log("message received");
    alert(message);
});

function colorElements(color) {
    let list = document.getElementsByTagName("h2");
    for(let element of list) {
        element.style.color = color;
    }
}
