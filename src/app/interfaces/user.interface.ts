export interface User {
    '_id': string;
    'firstName': string;
    'lastName': string;
    'email': string;
    'password': string;
    'phone': string;
    'city': string;
    'street': string;
    'housNumber': number;
}
export interface UserRegister {
    'firstName': string;
    'lastName': string;
    'email': string;
    'password': string;
    'phone': string;
    'city': string;
    'street': string;
    'housNumber': number;
}

export interface UserLogin {
    'email': string;
    'password': string;
}
