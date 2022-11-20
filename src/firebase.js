import { initializeApp} from 'firebase/app';
import {
    getAuth,
} from 'firebase/auth';

let user;
const firebaseConfig = {
    apiKey: 'AIzaSyBALPwgdqFRM2YBB2Ro1uroSY2QM9J-J4E',
    authDomain: 'whatsfordinner-17f94.firebaseapp.com',
    projectId: 'whatsfordinner-17f94',
    storageBucket: 'whatsfordinner-17f94.appspot.com',
    messagingSenderId: '999137412829',
    appId: '1:999137412829:web:20cac00cf1d54199c33d34'
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
}