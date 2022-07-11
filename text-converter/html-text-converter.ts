import { readFileSync } from 'fs';

export default class HtmlTextConverter {
	private fullFilenameWithPath: string;
	 text: string;

	constructor(fullFilenameWithPath: string) {
		this.fullFilenameWithPath = fullFilenameWithPath;
		this.text = '';
	}

	 retrieveTextFromFile(): void {
		this.text = readFileSync(this.fullFilenameWithPath).toString();
		if (this.text.length === 0) {
			throw new Error('file empty')
		}
	}

	 get getFilename() {
		return this.fullFilenameWithPath;
	}
}
