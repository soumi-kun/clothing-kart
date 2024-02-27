import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'productfilter',
    pure: false
})
export class ProductFilter implements PipeTransform{

    transform(items: any[], catalogType: any): any{
        if(!items || !catalogType){
            return items;
        }
        return items.filter((item) => item.catalogTypeId == catalogType);
    }
}