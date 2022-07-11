export default class AddNewLine {

	static addANewLine(convertedLine: string[], html: string[] ): void {
        const line = convertedLine.join('');
        convertedLine.length = 0;
        html.push(line);
    }
}