<script lang="ts">
	import { initializeApp } from 'firebase/app';
	import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';


	// Your web app's Firebase configuration
	let username = '';
	let password = '';
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
	const login = () => {
		const auth = getAuth(app);

		signInWithEmailAndPassword(auth, username, password).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
	};

	const logout = () => {
		const auth = getAuth(app);
		signOut(auth);
	};

	onMount(async () => {
		const auth = getAuth(app);
		onAuthStateChanged(auth, (newUser) => {
			user = newUser;
			console.log(user);
			if (!user) {
				return;
			}

			goto("/home")
		});
	});
</script>

<link rel="stylesheet" href="src/theme.css" />

<div id="loginContainer">
	<h1>Log In</h1>

	<div class="inputContainer">
		<input
			class="loginInput"
			type="text"
			placeholder="Enter Username"
			name="uname"
			required
			bind:value={username}
		/>

		<input
			class="loginInput"
			type="password"
			placeholder="Enter Password"
			name="psw"
			required
			bind:value={password}
		/>
	</div>

	<button class="loginButton" type="submit" on:click={login}>Login</button>

	<h4 class="register">Sign up</h4>
	<h4 class="forgotPassword">Forgot your password?</h4>
	{#if user}
		<p>Singed In</p>
		<button on:click={logout}>Logout</button>
	{/if}
</div>
