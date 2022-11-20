<script>
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { auth } from '../../firebase.js';
	import authStore from '../../stores';
    import { goto } from '$app/navigation';

	onMount(async () => {
		onAuthStateChanged(auth, (user) => {
			if(!user){
				goto('/')
			}
			authStore.set({
				isLoggedIn: user !== null,
				user,
				firebaseControlled: true
			});
		});
	});

	authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
		if (!isLoggedIn && firebaseControlled) {
			goto('/');
		}

        
	});

	

</script>
{#if auth.currentUser}
<slot></slot>
{/if}
