"use strict";
/**
 * Generated using theia-plugin-generator
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const theia = require("@theia/plugin");
function start(context) {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, (...args) => {
        theia.window.showInformationMessage('Hello!');
    }));
    context.subscriptions.push(theia.commands.registerCommand({
        id: 'start-debugging',
        label: 'Hello World: Start Debugging'
    }, (...args) => __awaiter(this, void 0, void 0, function* () {
        const testChannel = theia.window.createOutputChannel('test-channel');
        testChannel.appendLine('starting...');
        yield theia.debug.startDebugging(theia.workspace.workspaceFolders[0], {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/theia-hello-world-plugin/node-test/index.js",
        });
        testChannel.appendLine('running...');
        testChannel.appendLine('running...');
        testChannel.appendLine('running...');
        testChannel.show(true);
    })));
}
exports.start = start;
function stop() {
}
exports.stop = stop;
//# sourceMappingURL=theia-hello-world-plugin-backend.js.map