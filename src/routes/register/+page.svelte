<script>
	import { goto } from '$app/navigation';
	import {
		getAuth,
		signInWithEmailAndPassword,
		onAuthStateChanged,
		signOut,
		createUserWithEmailAndPassword,
		sendEmailVerification,
		deleteUser
	} from 'firebase/auth';
	import { auth } from '../../firebase.js';

	let email;
	let password;

	export const signup = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;

				if (user) {
					sendEmailVerification(auth.currentUser).then(() => {
						// Email verification sent!
						// ...
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
		<!-- <input
			class="signupInput"
			type="text"
			placeholder="Name"
			name="uname"
			required
			bind:value={username}
		/> -->
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

	<!-- <h4 class="register" on:click={signup}>Sign up</h4> -->
	<!-- {#if user}
		<p>Singed In</p>
		<button on:click={logout}>Logout</button>
	{/if} -->
</div>
