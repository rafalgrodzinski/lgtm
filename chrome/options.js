window.addEventListener("load", event => {
    let shouldInsertCheckbox = document.getElementById("shouldInsert");
    let shouldUseMarkdownCheckbox = document.getElementById("shouldUseMarkdown");

    chrome.storage.sync.get(["shouldInsert", "shouldUseMarkdown"], data => {
        let shouldInsert = true; // Selected by default
        if ("shouldInsert" in data) {
            shouldInsert = data.shouldInsert
        }
        shouldInsertCheckbox.checked = shouldInsert;

        let shouldUseMarkdown = true; // Selected by default
        if ("shouldUseMarkdown" in data) {
            shouldUseMarkdown = data.shouldUseMarkdown
        }
        shouldUseMarkdownCheckbox.checked = shouldUseMarkdown;
    });

    shouldInsert.addEventListener("change", event => {
        chrome.storage.sync.set({"shouldInsert": event.currentTarget.checked});
    });
    shouldUseMarkdown.addEventListener("change", event => {
        chrome.storage.sync.set({"shouldUseMarkdown": event.currentTarget.checked});
    });
});
