<script>
	import { initializeApp } from 'firebase/app';
	import {
		getAuth,
		signInWithEmailAndPassword,
		onAuthStateChanged,
		signOut,
		createUserWithEmailAndPassword,
		sendEmailVerification,
		deleteUser
	} from 'firebase/auth';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	// Your web app's Firebase configuration

	let user;

	// export const signup = (email, password) => {
	// 	createUserWithEmailAndPassword(auth, email, password)
	// 		.then((userCredential) => {
	// 			// Signed in
	// 			const user = userCredential.user;

	// 			if (user) {
	// 				sendEmailVerification(auth.currentUser).then(() => {
	// 					// Email verification sent!
	// 					// ...
	// 					console.log('sent');
	// 				});
	// 			}
	// 			console.log(user);
	// 			// ...
	// 		})
	// 		.catch((error) => {
	// 			const errorCode = error.code;
	// 			const errorMessage = error.message;
	// 			console.log(errorMessage);
	// 			// ..
	// 		});
	// };

	export const logout = () => {
		const auth = getAuth(app);
		signOut(auth);
	};

	const signuppage = () => {
		goto('/register');
	};

	
</script>

<div>
	<slot {user}  {logout} {signup} />
</div>
