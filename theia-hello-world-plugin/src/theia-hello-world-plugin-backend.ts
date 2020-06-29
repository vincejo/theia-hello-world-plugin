
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        theia.window.showInformationMessage('Hello!');
    }));
    context.subscriptions.push(theia.commands.registerCommand({
        id: 'start-debugging',
        label: 'Hello World: Start Debugging'
    }, async (...args: any[]) => {
        const testChannel = theia.window.createOutputChannel('test-channel');
        testChannel.appendLine('starting...');
        await theia.debug.startDebugging(theia.workspace.workspaceFolders![0], {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/theia-hello-world-plugin/node-test/index.js",
        });
        testChannel.appendLine('running...');
        testChannel.appendLine('running...');
        testChannel.appendLine('running...');
        testChannel.show(true);
    }));
}

export function stop() {

}
