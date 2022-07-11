export default interface IHtmlTextConverter {
    fullFilenameWithPath: string;
    text: string;
    retrieveTextFromFile(): void
}