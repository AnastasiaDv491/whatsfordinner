<script>
	import { goto } from '$app/navigation';

	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '../firebase.js';

	import { signOut } from 'firebase/auth';
	const logout = () => {
		signOut(auth);
	};

	let user;
	let email;
	let password;
	let errorMessage = '';

	export const login = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in

				if (userCredential.user.emailVerified) {
					goto('/home');
				} else {
					goto('/verification');
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				switch (errorCode) {
					case 'auth/invalid-email':
						errorMessage = 'Invalid email';
						break;

					default:
						errorMessage = error.message;

						break;
				}
				console.log(errorCode, errorMessage);
			});
	};
</script>

<div id="loginContainer">
	<h1>Log In</h1>

	<form
		id="loginForm"
		class="inputContainer"
		on:submit|preventDefault={() => login(email, password)}
	>
		<input
			class="loginInput"
			type="text"
			placeholder="Email"
			name="email"
			required
			bind:value={email}
		/>

		<input
			class="loginInput"
			type="password"
			placeholder="Password"
			name="psw"
			required
			bind:value={password}
		/>
		<button class="loginButton" type="submit">Login</button>
	</form>
	<p class="errorMessage">{errorMessage}</p>

	<a href="/register"><h4 class="register">Sign up</h4></a>
	<a href="/forgotpassword"
		><h4 class="forgotPassword" on:click={() => goto('/forgotpassword')}>
			Forgot your password?
		</h4></a
	>

	{#if auth.currentUser}
		<p>Singed In</p>
		<button on:click={logout}>Logout</button>
	{/if}
</div>
