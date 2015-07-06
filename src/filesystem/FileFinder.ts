///<reference path="../../typings/tsd.d.ts" />

import File = require('./File');
import fs = require('fs');

class FileFinder {
	find(folder: File, file: File, callbackFind: (file: File) => void, callbackTerminate?: () => void) {
		fs.readdir(folder.getName(), (err: any, files: Array<string>) => {
			files.forEach((fileFound) => {
				if (fileFound.toLowerCase().indexOf(file.getName().toLowerCase()) != -1) {
					callbackFind(new File(fileFound));
				}
			});

			if (callbackTerminate) {
				callbackTerminate();
			}
		});
	}
}

export = FileFinder;