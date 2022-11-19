<script>
	import Auth from '/src/auth.svelte';
</script>

<Auth
    let:logout
>

<div>
    Your verification is pending
    <button on:click={logout}>Logout</button>
</div>

</Auth>