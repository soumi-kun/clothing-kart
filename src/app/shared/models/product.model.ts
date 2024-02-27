export class Product{
    id: number = 0;
    name: string = '';
    description: string = '';
    price: string = '';
    pictureFileName: string = '';
    pictureUri: string = '';
    catalogTypeId: number = 0;
    catalogBrandId: number = 0;
    availableStock: number = 0;
    restockThreshold: number = 0;
    maxStockThreshold: number = 0;
    onReorder: boolean = true;
}
