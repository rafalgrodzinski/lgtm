//
//  ViewController.swift
//  LGTM
//
//  Created by Rafal Grodzinski on 2022/03/10.
//

import Cocoa
import SafariServices

class ViewController: NSViewController {
    private static let extensionBundleIdentifier = "com.rafalgrodzinski.lgtm.extension"
    
    @IBOutlet private weak var shouldInsertCheckbox: NSButton!
    @IBOutlet private weak var shouldUseMarkdownCheckbox: NSButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        shouldInsertCheckbox.state = Settings.instance.shouldInsert ? .on : .off
        shouldUseMarkdownCheckbox.state = Settings.instance.shouldUseMarkdown ? .on : .off
    }
    
    @IBAction private func shouldInsertCheckboxToggled(_ sender: NSButton) {
        Settings.instance.shouldInsert = sender.state == .on
    }
    
    @IBAction private func shouldUseMarkdownToggled(_ sender: NSButton) {
        Settings.instance.shouldUseMarkdown = sender.state == .on
    }
    
    @IBAction private func openSettingsPressed(_ sender: NSButton) {
        SFSafariApplication.showPreferencesForExtension(withIdentifier: ViewController.extensionBundleIdentifier) { _ in
        }
    }
}
