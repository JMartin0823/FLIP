// import {User} from "../types/user";

// const users: Map<string, UserWithPassword> = new Map([
//     ["rgreggor0@ucsd.edu", {
//         "idUser": 1,
//         "email": "rgreggor0@ucsd.edu",
//         "username": "pbuckthought0",
//         "password": "gqep0ePYL"
//     }], ["kpley1@w3.org", {
//         "idUser": 2,
//         "email": "kpley1@w3.org",
//         "username": "msibbering1",
//         "password": "rtYBgfO1O"
//     }], ["vcarnell2@howstuffworks.com", {
//         "idUser": 3,
//         "email": "vcarnell2@howstuffworks.com",
//         "username": "alazare2",
//         "password": "WOpv0tccf"
//     }], ["wcosgriff3@auda.org.au", {
//         "idUser": 4,
//         "email": "wcosgriff3@auda.org.au",
//         "username": "psymers3",
//         "password": "5VA88um"
//     }], ["eschohier4@foxnews.com", {
//         "idUser": 5,
//         "email": "eschohier4@foxnews.com",
//         "username": "anavarijo4",
//         "password": "UoWDsYPYl"
//     }], ["amckissack5@godaddy.com", {
//         "idUser": 6,
//         "email": "amckissack5@godaddy.com",
//         "username": "gcolbron5",
//         "password": "Ab1JmjCYbALj"
//     }], ["rflatley6@huffingtonpost.com", {
//         "idUser": 7,
//         "email": "rflatley6@huffingtonpost.com",
//         "username": "cloram6",
//         "password": "E7f2de"
//     }], ["xbroxis7@biglobe.ne.jp", {
//         "idUser": 8,
//         "email": "xbroxis7@biglobe.ne.jp",
//         "username": "mmealand7",
//         "password": "jWf5YZnRG"
//     }], ["ebreadmore8@themeforest.net", {
//         "idUser": 9,
//         "email": "ebreadmore8@themeforest.net",
//         "username": "sdauby8",
//         "password": "LxxrcTxsNpZ"
//     }], ["rdytham9@storify.com", {
//         "idUser": 10,
//         "email": "rdytham9@storify.com",
//         "username": "tyitzowitz9",
//         "password": "YtLqFJ"
//     }]])

// interface UserWithPassword extends User {
//     password: string
// }

// export function getUser(email: string, password: string) {
//     const user: UserWithPassword | undefined = users.get(email)
//     if (user === undefined){
//         return null;
//     }

//     if (user.password === password){
//        const userFound: User = {
//            idUser: user.idUser,
//            email: user.email,
//            username: user.username
//        }
//        return userFound
//     }

//     return null;
// }

