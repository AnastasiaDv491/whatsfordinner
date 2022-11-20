<script>
	import { auth } from '../../firebase.js';
	import { signOut } from 'firebase/auth';

	const logout = () => {
		signOut(auth);
	};
</script>
{#if auth.currentUser && auth.currentUser.emailVerified}
<div>
	Your verification is pending
	<button on:click={logout}>Logout</button>
</div>
{/if}