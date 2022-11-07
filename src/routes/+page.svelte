<script lang ="ts">
	import { initializeApp } from 'firebase/app';
	import {
		getAuth,
		signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
	} from 'firebase/auth';
	import { onMount } from 'svelte';

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

		signInWithEmailAndPassword(auth, username, password)
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
        console.log(errorCode, errorMessage);
			});
	};

  const logout = () => {
    const auth = getAuth(app);
    signOut(auth)
  };

  onMount(async () => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (newUser) =>{
      user = newUser;
	  console.log(user);
    });

  });


</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<body>
	<div class="container">
		<label for="uname"><b>Username</b></label>
		<input type="text" placeholder="Enter Username" name="uname" required bind:value={username} />

		<label for="psw"><b>Password</b></label>
		<input type="password" placeholder="Enter Password" name="psw" required bind:value={password} />

		<button type="submit" on:click={login}>Login</button>

    {#if user}
      <p>Singed In</p>
      <button on:click = {logout}>Logout</button>
    {/if}
	</div>
</body>
