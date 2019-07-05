export class Product {
    _id: string;
    name: string;
    category: string;
    brand: string;
    description: string;
    price: Number;
    image: String;
    status: {
        type: String,
        enum: ['available', 'out of stock'],
        default: 'available',
    };
    colors: string[];
    modelNo: String;
    ratings: ratingSchema[];
    warranty: {
        status: Boolean,
        warrantyPeriod: String,
        warrantyDescription: String,
    };
    tags: string[];
    createdBy: string;

    constructor(details: any) {
        this._id = details._id || '';
        this.name = details.name || '';
        this.category = details.category || '';
        this.brand = details.brand || '';
        this.description = details.description || '';
        this.price = details.price || null;
        this.image = details.image || '';
        this.status = details.status || '';
        this.colors = details.colors || '';
        this.modelNo = details.modelNo || '';
        this.ratings = details.ratings || [];
        this.warranty = details.warranty || {};
        this.tags = details.tags || '';
        this.createdBy = details.createdBy || '';
    }
}
class ratingSchema {
    point: Number;
    productRef: string;
    message: String;
    byUser: string;
}