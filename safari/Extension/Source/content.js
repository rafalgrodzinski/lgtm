function setupSelectionListener() {
    chrome.runtime.onMessage.addListener(url => {
        let textField = focusedTextField()
        insertUrl(url, textField)
    })
}

function focusedTextField() {
    let element = document.activeElement;
    let tagName = element.tagName.toLowerCase();
    let type = element.type != undefined ? element.type.toLowerCase() : null;
    if (tagName == "input" && type == "text" || tagName == "textarea")
        return element;
    else
        return null;
}

async function insertUrl(url, textField) {
    let response = await chrome.runtime.sendMessage("settings");
    let text = response.shouldUseMarkdown ? markdownUrl(url) : url;
    if (response.shouldInsert && textField != null)
        textField.value += text;
    else
        window.prompt("Copy LGTM url", text);
}

function markdownUrl(url) {
    return "![LGTM](" + url + ")";
}

setupSelectionListener();
