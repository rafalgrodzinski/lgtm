chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message == "settings") {
        let response = await browser.runtime.sendNativeMessage("com.rafalgrodzinski.lgtm", "settings");
        sendResponse(response);
        return true;
    }
    return false;
})
