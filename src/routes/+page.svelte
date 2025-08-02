<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>Portfolio: Shrijan Poudel</title>
	<meta name="description" content="Portfolio website showcasing my projects and skills as a full-stack developer" />
	<meta name="keywords" content="web developer, portfolio, react, svelte, typescript, full-stack" />
</svelte:head>

<Navigation />

<main class="scroll-smooth">
	<Hero />
</main>

<footer class="bg-gray-900 text-white py-8">
	<div class="container mx-auto px-6 text-center">
		<p class="text-gray-400">
			© 2025 Shrijan Poudel. Built with 💚 by Slyther.
		</p>
	</div>
</footer>



