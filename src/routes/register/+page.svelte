<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		createUserWithEmailAndPassword,
		sendEmailVerification,
	} from 'firebase/auth';
	import { auth } from '../../firebase.js';

	let email:string;
	let password:string;

	export const signup = (email:string, password:string) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;

				if (user) {
					sendEmailVerification(auth.currentUser).then(() => {
						// Email verification sent!
						console.log('sent');
					});
				}
				console.log(user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				// ..
			});
	};
</script>

<div id="signupContainer">
	<h1>Sign Up</h1>

	<div class="signupContainer">
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
	</div>

	<button class="signupButton" type="submit" on:click={signup(email, password)}>Sign up</button>
</div>
