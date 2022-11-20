<script>
	import Auth from '/src/auth.svelte';
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
	import { auth } from '../firebase.js';

	let user;
	let username;
	let password;

	export const login = (username, password) => {
		signInWithEmailAndPassword(auth, username, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				if (user) {
					goto('/home');
				}
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

</script>

<div id="loginContainer">
	<h1>Log In</h1>

	<div class="inputContainer">
		<input
			class="loginInput"
			type="text"
			placeholder="Username"
			name="uname"
			required
			bind:value={username}
		/>

		<input
			class="loginInput"
			type="password"
			placeholder="Password"
			name="psw"
			required
			bind:value={password}
		/>
	</div>

	<button class="loginButton" type="submit" on:click={login(username, password)}>Login</button>

	<h4 class="register" on:click={() => goto('/register')}>Sign up</h4>
	<h4 class="forgotPassword" on:click={() => goto('/forgotpassword')}>Forgot your password?</h4>
	{#if user}
		<p>Singed In</p>
		<button on:click={logout}>Logout</button>
	{/if}
</div>
