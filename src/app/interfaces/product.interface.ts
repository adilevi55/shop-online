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
