<script lang="ts">
	import '../app.css';
	import tabicon from '$lib/assets/icon.png';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={tabicon} />
</svelte:head>

{@render children?.()}


