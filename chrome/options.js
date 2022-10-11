window.addEventListener("load", event => {
    let shouldInsert = document.getElementById("shouldInsert");
    let shouldUseMarkdown = document.getElementById("shouldUseMarkdown");

    chrome.storage.sync.get("shouldInsert", data => {
        let flag = true; // Check by default
        if ("shouldInsert" in data) {
            flag = data.shouldInsert
        }
        shouldInsert.checked = flag;
    });
    chrome.storage.sync.get("shouldUseMarkdown", data => {
        let flag = true; // Check by default
        if ("shouldUseMarkdown" in data) {
            flag = data.shouldUseMarkdown
        }
        shouldUseMarkdown.checked = flag;
    });

    shouldInsert.addEventListener("change", event => {
        chrome.storage.sync.set({"shouldInsert": event.currentTarget.checked});
    });
    shouldUseMarkdown.addEventListener("change", event => {
        chrome.storage.sync.set({"shouldUseMarkdown": event.currentTarget.checked});
    });
});
