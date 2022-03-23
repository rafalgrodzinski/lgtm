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
        insertUrlAsMarkdown(url, lastFocusedElement)
        lastFocusedElement = null
    })
}

function insertUrlAsMarkdown(url, textField) {
    if (textField == null) return
    textField.value += url
}

setupActiveElementListener()
setupSelectionListener()
