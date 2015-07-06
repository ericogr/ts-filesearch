///<reference path="../../typings/tsd.d.ts" />

import readline = require('readline');

class ConsoleInteraction {
	private privada: number = 1;

	inputMessage(msg: string, callback: (mensagem: string) => void): void {
		var rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout
		});

		rl.question(msg, (ret: string) => {
			rl.close();
			callback(ret);
		});
	}

	messageLine(msg: string) {
		this.message(msg + "\n");
	}

	message(msg: string): void {
		var rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout
		});

		rl.write(msg);
		rl.close();
	}
}

export = ConsoleInteraction;