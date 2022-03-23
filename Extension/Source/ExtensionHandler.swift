//
//  ExtensionHandler.swift
//  lgtm Extension
//
//  Created by Rafal Grodzinski on 2022/03/10.
//

import SafariServices

let SFExtensionMessageKey = "message"

class ExtensionHandler: NSObject, NSExtensionRequestHandling {
	func beginRequest(with context: NSExtensionContext) {
        let item = context.inputItems[0] as! NSExtensionItem
        let message = item.userInfo?[SFExtensionMessageKey]

        let response = NSExtensionItem()
        response.userInfo = [ SFExtensionMessageKey: [ "Response to": message ] ]

        context.completeRequest(returningItems: [response], completionHandler: nil)
    }
}
