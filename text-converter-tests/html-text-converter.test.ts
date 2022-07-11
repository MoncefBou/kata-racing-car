import HtmlTextConverter from '../text-converter/html-text-converter';
import TextFormatter from '../text-converter/utils/text-formatter'
import AddNewLine from '../text-converter/utils/add-new-line';
import StashNextCharacter from '../text-converter/utils/stash-next-character';
import PushACharacterToTheOutput from '../text-converter/utils/push-a-character-to-the-output';

const textFormatterResponseExpected: string = 'Hello<br />Good<br />Cool<br />Bye'
const retrieveTextFromFileResponseExpected: string = "Hello\nGood\nCool\nBye"
const pushACharacterToTheOutputResponseExpected: string[] = ['Is', 'it', 'good', '?', 'yes']
const addNewLineResponseExpected: string = 'Is it good ? yes'


describe('Html Converter', () => {
	describe('HtmlTextConverter', () => {
		test('getFilename should return filename', () => {
			const fileNameTest = 'test'
			const fileToConverte = new HtmlTextConverter(fileNameTest)

			expect(fileToConverte.getFilename).toBe(fileNameTest)
		})
		test('retrieveTextFromFile should return response expected', () => {
			const fileToConverte = new HtmlTextConverter('/Users/mboughal/Desktop/kata/kata-racing-car/text-converter-tests/data-test/test-correct.txt')
			fileToConverte.retrieveTextFromFile()

			expect(fileToConverte.text).toBe(retrieveTextFromFileResponseExpected)
		})
		test('retrieveTextFromFile should throw an error', () => {
			expect(() => {
				const fileToConverte = new HtmlTextConverter('/Users/mboughal/Desktop/kata/kata-racing-car/text-converter-tests/data-test/test-error.txt')
				fileToConverte.retrieveTextFromFile()
			}).toThrow('file empty')
		})
	});

	describe('textFormatter', () => {
		test('TextFormatter should return response expected', () => {
			const fileToConverte = new HtmlTextConverter('/Users/mboughal/Desktop/kata/kata-racing-car/text-converter-tests/data-test/test-correct.txt')
			fileToConverte.retrieveTextFromFile()
			const textFormatted = new TextFormatter().textFormatter(fileToConverte.text)

			expect(textFormatted).toBe(textFormatterResponseExpected)
		})
		test('AddNewLine should return response expected', () => {
			const textFormatter = new TextFormatter()
			textFormatter.html = ['Is', 'it', 'good', '?']
			textFormatter.convertedLine = ['y', 'e', 's']
			AddNewLine.addANewLine(textFormatter.convertedLine, textFormatter.html)

			expect(textFormatter.convertedLine.length).toBe(0)
			expect(textFormatter.html.join(' ')).toBe(addNewLineResponseExpected)
		})
		test('stashNextCharacter should return response expected', () => {
			const test = 'hello'

			for (let i = 0; i < test.length; i++) {
				const characterReturned = StashNextCharacter.stashNextCharacter(test, i)
				expect(characterReturned).toBe(test[i])
			}
		})
		test('pushACharacterToTheOutput should return response expected', () => {
			const test = ['Is', 'it', 'good', '?']
			const wordToAdd = 'yes'
			const instanceTextFormatter = new TextFormatter()
			instanceTextFormatter.convertedLine = test
			PushACharacterToTheOutput.pushACharacterToTheOutput(instanceTextFormatter.convertedLine, wordToAdd)

			expect(instanceTextFormatter.convertedLine.join(' ')).toBe(pushACharacterToTheOutputResponseExpected.join(' '))
		})
	})
});
