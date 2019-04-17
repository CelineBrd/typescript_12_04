import { OutputInterface } from "src/utils/output-interface";
import { CompanyModel } from "../company.model";

export class AllStrategy implements OutputInterface<CompanyModel> {
    public output(companyModel:CompanyModel): JQuery {
        const object : JQuery = $('<div>');
        const logo: JQuery = $('<img>');
        logo.attr('src','this.logo');
        logo.appendTo(object);
        
        const title : JQuery = $('<h2>');
        title.html(companyModel.getName());
        title.appendTo(object);



        return object

    }
}