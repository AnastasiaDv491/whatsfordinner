<script>
	import { goto } from '$app/navigation';
	import { error } from '@sveltejs/kit';
	import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
	import { auth } from '../../firebase.js';


		console.log(auth.currentUser);
	

	let email;
	let password;
	let errorMessage = '';

	export const signup = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				errorMessage = '';
				const user = userCredential.user;

				if (user) {
					sendEmailVerification(user).then(() => {
						// Email verification sent!
						console.log('sent');
						goto('/verification');
					});
				}
				console.log(user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;

				console.log(error.code);

				switch (error.code) {
					case 'auth/email-already-in-use':
						errorMessage = "This email is already in use";
						break;

					default:
						errorMessage = error.message;
						break;
				}
				// ..
			});
	};
</script>

{#if !auth.currentUser}
<div id="signupContainer">
	<h1>Sign Up</h1>

	<form class="signupContainer" on:submit|preventDefault={() => signup(email, password)}>
		<input
			class="signupInput"
			type="text"
			placeholder="Email"
			name="email"
			required
			bind:value={email}
		/>

		<input
			class="signupInput"
			type="password"
			placeholder="Password"
			name="psw"
			required
			bind:value={password}
		/>
		<button class="signupButton" type="submit">Sign up</button>
	</form>

	<p class="errorMessage">{errorMessage}</p>
</div>

{/if}