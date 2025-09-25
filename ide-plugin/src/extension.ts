import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('featureguard.check', () => {
        vscode.window.showInformationMessage('FeatureGuard: Checking feature compatibility...');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
