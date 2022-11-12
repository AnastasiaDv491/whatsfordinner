<script lang = "ts">

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { onMount } from 'svelte';
import { goto } from '$app/navigation';


let username = '';
let password = '';
let user;

const auth = getAuth();
createUserWithEmailAndPassword(auth, username, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

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


<link rel="stylesheet" href="static/theme.css" />
<div id="signupContainer">
	<h1>Sign Up</h1>

	<div class="signupContainer">

        <input
			class="signupInput"
			type="text"
			placeholder="Name"
			name="uname"
			required
			
		/>
		<input
			class="signupInput"
			type="text"
			placeholder="Email"
			name="uname"
			required
			
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

	<button class="signupButton" type="submit" on:click={login}>Sign up</button>

	<!-- <h4 class="register" on:click={signup}>Sign up</h4> -->
	<!-- {#if user}
		<p>Singed In</p>
		<button on:click={logout}>Logout</button>
	{/if} -->
</div>