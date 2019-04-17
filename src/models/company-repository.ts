import { Repository } from "../utils/repository";
import { CompanyModel } from "./company.model";

export class CompanyRepository extends Repository<CompanyModel> {
    /**
     * @override
     * @param company 
     */
    public add(company: CompanyModel): void {
        this.repository.set(company.getId(), company)
    }
    /**
     * @override
     * @param company 
     */
    public remove(company: CompanyModel): void {
        this.repository.delete(company.getId());
    }

    /**
     * @override
     * @param id
     */
    public get(id:number): CompanyModel {
        return this.repository.get(id);
    }

   
    
}