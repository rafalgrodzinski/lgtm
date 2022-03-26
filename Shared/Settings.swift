//
//  Settings.swift
//  LGTM
//
//  Created by Rafał Grodziński on 26/03/2022.
//

import Foundation

class Settings {
    static let settingShouldInsert = "shouldInsert"
    static let settingShouldUseMarkdown = "shouldUseMarkdown"
    
    var shouldInsert: Bool {
        get {
            if let value = UserDefaults.standard.object(forKey: Settings.settingShouldInsert) as? NSNumber {
                return value.boolValue
            } else {
                return true
            }
        }
        set {
            UserDefaults.standard.set(newValue, forKey: Settings.settingShouldInsert)
        }
    }
    
    var shouldUseMarkdown: Bool {
        get {
            if let value = UserDefaults.standard.object(forKey: Settings.settingShouldUseMarkdown) as? NSNumber {
                return value.boolValue
            } else {
                return true
            }
        }
        set {
            UserDefaults.standard.set(newValue, forKey: Settings.settingShouldUseMarkdown)
        }
    }
}
