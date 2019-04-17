import { OutputInterface } from "src/utils/output-interface";
import { CompanyModel } from "../company.model";

export class NameAndZipStrategy implements OutputInterface<CompanyModel> {

    public output(companyModel: CompanyModel) : JQuery {
        const object:JQuery = $('<h2>');
        object.html(companyModel.getName() + ' ' + companyModel.getCodePostale());
        return object;
    }
}