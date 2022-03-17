window.addEventListener("load", (event) => {
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
    });
});

/*function pressed() {
    console.log("pressed");
    alert("Hello");
}*/
