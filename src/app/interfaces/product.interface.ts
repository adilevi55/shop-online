export interface Category {
    '_id': string;
    'name': string;
    'category': string;
    'price': number;
    'img': {
        'url': string,
        'name': string, // change to Date with MM/YY format
        'imgId': string
    };
}
