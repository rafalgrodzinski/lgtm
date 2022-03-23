//
//  ViewController.swift
//  LGTM
//
//  Created by Rafal Grodzinski on 2022/03/10.
//

import Cocoa
import SafariServices

let extensionBundleIdentifier = "com.rafalgrodzinski.lgtm.extension"

class ViewController: NSViewController {
    private func presentExtensionInSafari() {
        SFSafariApplication.showPreferencesForExtension(withIdentifier: extensionBundleIdentifier) { _ in
        }
    }
}
