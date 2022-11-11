<script>
	import { initializeApp } from 'firebase/app';
	import {
		getAuth,
		signInWithEmailAndPassword,
		onAuthStateChanged,
		signOut,
		createUserWithEmailAndPassword
	} from 'firebase/auth';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// Your web app's Firebase configuration

	let user;

	const firebaseConfig = {
		apiKey: 'AIzaSyBALPwgdqFRM2YBB2Ro1uroSY2QM9J-J4E',
		authDomain: 'whatsfordinner-17f94.firebaseapp.com',
		projectId: 'whatsfordinner-17f94',
		storageBucket: 'whatsfordinner-17f94.appspot.com',
		messagingSenderId: '999137412829',
		appId: '1:999137412829:web:20cac00cf1d54199c33d34'
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	// Initialize Firebase Authentication and get a reference to the service
	export const login = (username, password) => {
		const auth = getAuth(app);

		signInWithEmailAndPassword(auth, username, password).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
	};

	export const logout = () => {
		const auth = getAuth(app);
		signOut(auth);
	};

	const signuppage = () => {
		goto('/register');
	};


	onMount(async () => {
		const auth = getAuth(app);
		onAuthStateChanged(auth, (newUser) => {
			user = newUser;
			console.log(user);
			if (!user) {
				goto('/login');
				return;
				
			}

			goto('/home');
		});
	});
</script>

<div>
	<slot {user} {login} {logout} />
</div>
