import StashNextCharacter from "./stash-next-character";
import AddNewLine from "./add-new-line";
import PushACharacterToTheOutput from "./push-a-character-to-the-output";

export default class TextFormatter {

    public html: string[]
    public convertedLine: string[]

    constructor() {
        this.html = []
        this.convertedLine = []
    }

    public textFormatter(text: string) {
        let i = 0;
        let characterToConvert = StashNextCharacter.stashNextCharacter(text, i);
        i += 1
        while (i <= text.length) {
            const characterCase: string[] = ['<', '>', '&', '\n']
            const characterToPush: string[] = ['&lt;', '&gt;', '&amp;']
            const indexCharacter: number = characterCase.indexOf(characterToConvert)

            if ([0,1,2].includes(indexCharacter)) {
                this.convertedLine.push(characterToPush[indexCharacter])
            } else if ([3].includes(indexCharacter)) {
                AddNewLine.addANewLine(this.convertedLine, this.html);
            } else {
                PushACharacterToTheOutput.pushACharacterToTheOutput(this.convertedLine, characterToConvert);
            }

            characterToConvert = StashNextCharacter.stashNextCharacter(text, i);
            i += 1
        }
        AddNewLine.addANewLine(this.convertedLine, this.html);
        return this.html.join('<br />');
    }
}