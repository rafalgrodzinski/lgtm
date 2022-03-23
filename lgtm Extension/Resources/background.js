let port = browser.runtime.connectNative("application.id")
port.onMessage.addListener(message => {
    console.log("Received message")
    console.log("message " + message)
})
