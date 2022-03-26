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
        console.log("received url" + url)
        insertUrl(url, lastFocusedElement)
        lastFocusedElement = null
    })
}

function insertUrl(url, textField) {
    //if (textField == null) return
    browser.runtime.sendMessage("settings", response => {
        console.log("Received settings " + response)
        let text = response.shouldUseMarkdown ? markdownUrl(url) : url
        if (response.shouldInsert)
            console.log("Inserted " + text)
        else
            console.log("Copied " + text)
        //textField.value += url
    })
}

function markdownUrl(url) {
    return "![LGTM](" + url + ")"
}

setupActiveElementListener()
setupSelectionListener()
