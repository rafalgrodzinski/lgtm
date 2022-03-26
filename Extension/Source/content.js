let lastFocusedElement

function setupActiveElementListener() {
    let textAreas = Array.from(document.getElementsByTagName("textarea"))
    let inputs = Array.from(document.getElementsByTagName("input"))
    let textInputs = inputs.filter(element => { return element.type === "text" })
    
    textAreas.concat(textInputs).forEach(element => {
        element.addEventListener("focus", event => {
            lastFocusedElement = element
        })
    })
}

function setupSelectionListener() {
    browser.runtime.onMessage.addListener(url => {
        insertUrl(url, lastFocusedElement)
        lastFocusedElement = null
    })
}

function insertUrl(url, textField) {
    browser.runtime.sendMessage("settings", response => {
        let text = response.shouldUseMarkdown ? markdownUrl(url) : url
        if (response.shouldInsert && textField != null)
            textField.value += text
        else if (!response.shouldInsert)
            window.prompt("Copy LGTM url", text)
    })
}

function markdownUrl(url) {
    return "![LGTM](" + url + ")"
}

setupActiveElementListener()
setupSelectionListener()
