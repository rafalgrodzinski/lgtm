//
//  ExtensionHandler.swift
//  Extension
//
//  Created by Rafal Grodzinski on 2022/03/10.
//

import SafariServices


class ExtensionHandler: NSObject, NSExtensionRequestHandling {
    private static let settingsRequestMessage = "settings"
    
    func beginRequest(with context: NSExtensionContext) {
        guard let item = context.inputItems[0] as? NSExtensionItem else { return }
        guard let message = item.userInfo?[SFExtensionMessageKey] as? String else { return }
        
        if message == ExtensionHandler.settingsRequestMessage {
            let response = NSExtensionItem()
            response.userInfo = [ SFExtensionMessageKey: [Settings.settingShouldInsert: Settings.instance.shouldInsert,
                                                          Settings.settingShouldUseMarkdown: Settings.instance.shouldUseMarkdown] ]
            context.completeRequest(returningItems: [response], completionHandler: nil)
        }
    }
}
