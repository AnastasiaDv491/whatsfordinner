<script>
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { auth } from '../firebase.js';
	import authStore from '../stores';
    import { goto } from '$app/navigation';

	onMount(async () => {
		onAuthStateChanged(auth, (user) => {
			authStore.set({
				isLoggedIn: user !== null,
				user,
				firebaseControlled: true
			});
		});
	});
	
	authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
		if (!isLoggedIn && firebaseControlled) {
			await goto('/');
		}

        
	});
	// onMount(async () => {
	// 	const auth = getAuth(app);
	// 	onAuthStateChanged(auth, (newUser) => {
	// 		user = newUser;
	// 		console.log(user);
	// 		console.log($page.url.pathname);
	// 		if (!user) {
	// 			if ($page.url.pathname != '/register') {
	// 				goto('/');
	// 				return;
	// 			}
	// 			return;
	// 		}
	// 		if (user.emailVerified == true) {
	// 			goto('/home');
	// 			return;
	// 		} else {
	// 			goto('/verification');
	// 			return;
	// 		}
	// 	});
	// });
</script>
<slot></slot>
