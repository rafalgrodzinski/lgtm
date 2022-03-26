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
    private let settings = Settings()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        shouldInsertCheckbox.state = settings.shouldInsert ? .on : .off
        shouldUseMarkdownCheckbox.state = settings.shouldUseMarkdown ? .on : .off
    }
    
    @IBAction private func shouldInsertCheckboxToggled(_ sender: NSButton) {
        settings.shouldInsert = sender.state == .on
    }
    
    @IBAction private func shouldUseMarkdownToggled(_ sender: NSButton) {
        settings.shouldUseMarkdown = sender.state == .on
    }
    
    @IBAction private func openSettingsPressed(_ sender: NSButton) {
        SFSafariApplication.showPreferencesForExtension(withIdentifier: ViewController.extensionBundleIdentifier) { _ in
        }
    }
}
