import { Category } from './category.interface';

export interface Product {
    '_id': string;
    'name': string;
    'category': Category;
    'price': number;
    'img': {
        'url': string,
        'name': string,
        'imgId': string
    };
}

export interface ProductAdminUpdate {
    '_id': string;
    'name': string;
    'category': string;
    'price': number;
    'img': {
        'url': string,
        'name': string,
        'imgId': string
    };
}
export interface ProductAdminAdd {
    'name': string;
    'category': string;
    'price': number;
    'img': {
        'url': string,
        'name': string,
        'imgId': string
    };
}
