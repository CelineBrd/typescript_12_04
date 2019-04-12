export class ToHtml {
    private static readonly placeholder: string  = 'myApp';
        // readonly ==> lecture seule
        // static ==> je peux le référencer sans avoir a faire instance de classe 
        // static readonly ===> constante de classe
    public toPage(object: any) {
        const htmlPlaceHolder: any = document.querySelector('[' + ToHtml.placeholder + ']');
        let content: string = htmlPlaceHolder.innerHTML;
        content += object.toString();
        htmlPlaceHolder.innerHTML = content;

    }
}