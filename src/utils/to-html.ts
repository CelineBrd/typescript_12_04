export class ToHtml {
    private static readonly placeholder: string  = 'myApp';
        // readonly ==> lecture seule
        // static ==> je peux le référencer sans avoir a faire instance de classe 
        // static readonly ===> constante de classe
    public toPage(object: any, howTo: number) {
        const htmlPlaceHolder: JQuery = $('[' + ToHtml.placeholder + ']');
        let content: string = htmlPlaceHolder.html();
        content += object.toString(howTo);
        htmlPlaceHolder.html(content);
    }

    public appendToPage(object: JQuery): void {
        const placeholder: JQuery = $('[' + ToHtml.placeholder + ']');
        object.appendTo(placeholder);
    }
}