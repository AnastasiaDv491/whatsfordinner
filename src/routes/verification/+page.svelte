<script>
	import { auth } from '../../firebase.js';
	import { signOut } from 'firebase/auth';
	const logout = () => {
		signOut(auth);
	};
</script>

<div>
	Your verification is pending
	<button on:click={logout}>Logout</button>
</div>
