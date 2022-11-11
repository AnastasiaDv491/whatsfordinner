
<script>
	import Auth from '/src/auth.svelte';
	import { goto } from '$app/navigation';

	let username;
	let password;
</script>
<link rel="stylesheet" href="src/theme.css" />

<Auth
	let:user
	let:login
	let:logout
>
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

	<button class="loginButton" type="submit" on:click={login(username,password)}>Login</button>

	<h4 class="register" on:click={() => goto('/signuppage')}>Sign up</h4>
	<h4 class="forgotPassword" on:click={() => goto('/forgotpassword')}>Forgot your password?</h4>
	{#if user}
		<p>Singed In</p>
		<button on:click={() => goto('/logout')}>Logout</button>
	{/if}
</div>
</Auth>