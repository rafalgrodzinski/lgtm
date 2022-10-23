window.addEventListener("load", async event => {
    let shouldInsertCheckbox = document.getElementById("shouldInsert");
    let shouldUseMarkdownCheckbox = document.getElementById("shouldUseMarkdown");

    let data = await chrome.storage.sync.get(["shouldInsert", "shouldUseMarkdown"]);
    let shouldInsert = true; // Selected by default
    if ("shouldInsert" in data) {
        shouldInsert = data.shouldInsert;
    }
    shouldInsertCheckbox.checked = shouldInsert;

    let shouldUseMarkdown = true; // Selected by default
    if ("shouldUseMarkdown" in data) {
        shouldUseMarkdown = data.shouldUseMarkdown;
    }
    shouldUseMarkdownCheckbox.checked = shouldUseMarkdown;

    shouldInsertCheckbox.addEventListener("change", event => {
        chrome.storage.sync.set({"shouldInsert": event.currentTarget.checked});
    });
    shouldUseMarkdownCheckbox.addEventListener("change", event => {
        chrome.storage.sync.set({"shouldUseMarkdown": event.currentTarget.checked});
    });
});
