browser.runtime.onMessage.addListener((url) => {
    //console.log("message received");
    //alert(message);
    insertUrlAsMarkdown(url);
});

/*function colorElements(color) {
    let list = document.getElementsByTagName("h2");
    for(let element of list) {
        element.style.color = color;
    }
}*/

function insertUrlAsMarkdown(url) {
    let el = document.activeElement;
    console.log("abc");
}
