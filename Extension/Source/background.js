browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message == "settings") {
        browser.runtime.sendNativeMessage("com.rafalgrodzinski.lgtm",
                                          "settings",
                                          response => {
            sendResponse(response)
        })
        return true
    }
    return false
})
