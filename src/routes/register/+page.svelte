<script lang = "ts">
	import Auth from '/src/auth.svelte';

let email;
let password;
</script>


<Auth 
	let:signup
>

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
</Auth>