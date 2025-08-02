<script lang="ts">
	let isMenuOpen = $state(false);
	
	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' }
	];
	
	function scrollToSection(href: string) {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			isMenuOpen = false; // Close mobile menu after clicking
		}
	}
	
	// Close mobile menu when clicking outside
	function handleOutsideClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
			isMenuOpen = false;
		}
	}
</script>

<svelte:window onclick={handleOutsideClick} />

<nav class="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
	<div class="container mx-auto px-6">
		<div class="flex items-center justify-between h-16">
			<!-- Logo -->
			<button 
				onclick={() => scrollToSection('#home')}
				class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
			>
				Shrijan Poudel
			</button>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<button
						onclick={() => scrollToSection(item.href)}
						class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group"
					>
						{item.name}
						<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
					</button>
				{/each}
			</div>
			
			<!-- Theme Toggle (placeholder for now) -->
			<div class="hidden md:flex items-center space-x-4">
				<button 
					aria-label="Toggle dark mode"
					class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
				>
					<svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
					</svg>
				</button>
			</div>
			
			<!-- Mobile Menu Button -->
			<button
				aria-label="Toggle mobile menu"
				class="md:hidden menu-button p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
				onclick={() => isMenuOpen = !isMenuOpen}
			>
				<svg class="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if isMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					{/if}
				</svg>
			</button>
		</div>
		
		<!-- Mobile Menu -->
		{#if isMenuOpen}
			<div class="md:hidden mobile-menu bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4">
				<div class="flex flex-col space-y-4">
					{#each navItems as item}
						<button
							onclick={() => scrollToSection(item.href)}
							class="text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-300"
						>
							{item.name}
						</button>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>

<!-- Spacer to prevent content from hiding behind fixed nav -->
<div class="h-16"></div>
