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
    static let suiteName = "X7G47FFC9G.com.rafalgrodzinski.lgtm.settings"
    static let instance = Settings()
    
    private let defaults = UserDefaults(suiteName: suiteName)
    
    private init() {
    }
    
    var shouldInsert: Bool {
        get {
            if let value = defaults?.object(forKey: Settings.settingShouldInsert) as? NSNumber {
                return value.boolValue
            } else {
                return true
            }
        }
        set {
            defaults?.set(newValue, forKey: Settings.settingShouldInsert)
        }
    }
    
    var shouldUseMarkdown: Bool {
        get {
            if let value = defaults?.object(forKey: Settings.settingShouldUseMarkdown) as? NSNumber {
                return value.boolValue
            } else {
                return true
            }
        }
        set {
            defaults?.set(newValue, forKey: Settings.settingShouldUseMarkdown)
        }
    }
}
