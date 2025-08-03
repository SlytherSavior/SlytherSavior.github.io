<script lang="ts">
    import { onMount } from 'svelte';
    
	let isMenuOpen = $state(false);
    let scrollY = $state(0);
    let floatingSymbols = $state<Array<{id: number, symbol: string, x: number, y: number, opacity: number, size: number, rotation: number, speed: number}>>([]);
    let particleSymbols = $state<Array<{id: number, symbol: string, x: number, y: number, opacity: number, scale: number, rotation: number}>>([]);
	
	const navItems = [
		{ name: 'Home', href: '#home', symbol: '∅' },
		{ name: 'About', href: '#about', symbol: '∃' },
		// { name: 'Skills', href: '#skills', symbol: '∇' },
		// { name: 'Projects', href: '#projects', symbol: '∏' },
		{ name: 'Contact', href: '#contact', symbol: '∑' }
	];
    
    const mathSymbols = ['π', 'e', '∞', 'φ', 'λ', 'θ', 'α', 'β', 'γ', 'δ', '∫', '∑', '∏', '∂', '∇', '∆', '∀', '∃', '∈', '∉', '⊆', '⊇', '∪', '∩', '≈', '≠', '≤', '≥', '±', '√', '∛', '∜', '⌊', '⌈', '⟨', '⟩', '⊥', '‖', '∝', '∴', '∵', '⊕', '⊗', '⊙', '⊘'];
    const complexSymbols = ['∮', '∯', '∰', '∱', '∲', '∳', '⨀', '⨁', '⨂', '⨄', '⨅', '⨆', '⨇', '⨈', '⨉', '⨊', '⨋', '⨌', '⨍', '⨎', '⨏', '⨐', '⨑', '⨒', '⨓', '⨔', '⨕', '⨖', '⨗', '⨘', '⨙', '⨚', '⨛', '⨜'];
	
	function scrollToSection(href: string) {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			isMenuOpen = false;
		}
	}
	
	function handleOutsideClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
			isMenuOpen = false;
		}
	}
    
    onMount(() => {
        // Initialize floating mathematical symbols with enhanced properties
        floatingSymbols = Array.from({length: 15}, (_, i) => ({
            id: i,
            symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.6 + 0.2,
            size: Math.random() * 0.8 + 0.6,
            rotation: Math.random() * 360,
            speed: Math.random() * 0.3 + 0.1
        }));
        
        // Initialize particle system for complex symbols
        particleSymbols = Array.from({length: 8}, (_, i) => ({
            id: i,
            symbol: complexSymbols[Math.floor(Math.random() * complexSymbols.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.4 + 0.1,
            scale: Math.random() * 0.5 + 0.3,
            rotation: Math.random() * 360
        }));
        
        // Enhanced floating symbols animation
        const symbolInterval = setInterval(() => {
            floatingSymbols = floatingSymbols.map(symbol => ({
                ...symbol,
                x: (symbol.x + symbol.speed) > 105 ? -5 : symbol.x + symbol.speed,
                y: symbol.y + Math.sin(Date.now() * 0.001 + symbol.id) * 0.1,
                opacity: Math.sin(Date.now() * 0.002 + symbol.id) * 0.3 + 0.4,
                rotation: symbol.rotation + 0.5,
                symbol: Math.random() > 0.995 ? mathSymbols[Math.floor(Math.random() * mathSymbols.length)] : symbol.symbol
            }));
            
            // Animate particle symbols
            particleSymbols = particleSymbols.map(particle => ({
                ...particle,
                x: (particle.x + 0.08) > 102 ? -2 : particle.x + 0.08,
                y: particle.y + Math.cos(Date.now() * 0.0015 + particle.id) * 0.15,
                opacity: Math.cos(Date.now() * 0.003 + particle.id) * 0.2 + 0.3,
                rotation: particle.rotation + 0.8,
                scale: Math.sin(Date.now() * 0.002 + particle.id) * 0.2 + 0.5,
                symbol: Math.random() > 0.998 ? complexSymbols[Math.floor(Math.random() * complexSymbols.length)] : particle.symbol
            }));
        }, 50);
        
        // Track scroll position for dynamic effects
        const handleScroll = () => {
            scrollY = window.scrollY;
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            clearInterval(symbolInterval);
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<svelte:window onclick={handleOutsideClick} />

<nav class="fixed top-0 left-0 right-0 bg-black/85 backdrop-blur-lg border-b-2 border-blue-400/30 z-50 transition-all duration-500 {scrollY > 50 ? 'bg-black/95 shadow-2xl shadow-blue-500/20 border-b-purple-400/40' : ''} relative overflow-hidden">
    <!-- Enhanced Floating Mathematical Symbols Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Primary floating symbols -->
        {#each floatingSymbols as symbol (symbol.id)}
            <div 
                class="absolute font-mono text-blue-400/40 transition-all duration-1000"
                style="
                    left: {symbol.x}%; 
                    top: {symbol.y}%; 
                    transform: translateY(-50%) rotate({symbol.rotation}deg) scale({symbol.size}); 
                    opacity: {symbol.opacity};
                    font-size: {1.2 + symbol.size * 0.8}rem;
                    color: hsl({200 + symbol.id * 15}, 70%, {50 + symbol.opacity * 30}%);
                    text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
                    filter: drop-shadow(0 0 8px currentColor);
                "
            >
                {symbol.symbol}
            </div>
        {/each}
        
        <!-- Complex particle symbols -->
        {#each particleSymbols as particle (particle.id)}
            <div 
                class="absolute font-mono text-purple-400/30 animate-pulse transition-all duration-700"
                style="
                    left: {particle.x}%; 
                    top: {particle.y}%; 
                    transform: rotate({particle.rotation}deg) scale({particle.scale}); 
                    opacity: {particle.opacity};
                    font-size: {0.8 + particle.scale}rem;
                    color: hsl({280 + particle.id * 20}, 80%, {60 + particle.opacity * 25}%);
                    text-shadow: 0 0 8px currentColor, 0 0 15px currentColor;
                    filter: drop-shadow(0 0 6px currentColor) blur(0.5px);
                "
            >
                {particle.symbol}
            </div>
        {/each}
        
        <!-- Mathematical grid pattern -->
        <div class="absolute inset-0 opacity-20" 
             style="background-image: 
                linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(147, 51, 234, 0.1) 50%, transparent 60%),
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 1px, transparent 1px);
                background-size: 40px 40px, 40px 40px, 20px 20px, 30px 30px;
                animation: gridFlow 20s linear infinite;">
        </div>
        
        <!-- Animated wave pattern -->
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-60"
             style="animation: waveShimmer 3s ease-in-out infinite;">
        </div>
    </div>
    
	<div class="container mx-auto px-6 relative z-10">
		<div class="flex items-center justify-between h-16">
			<!-- Name with enhanced mathematical symbols  -->
			<button 
				onclick={() => scrollToSection('#home')}
				class="group flex items-center text-2xl font-bold transition-all duration-500 hover:scale-110 relative"
			>
                <span class="font-mono text-blue-400 mr-2 group-hover:animate-spin transition-all duration-500 relative">
                    ∫
                    <span class="absolute inset-0 text-blue-300 animate-ping opacity-30"></span>
                    <span class="absolute inset-0 bg-blue-400/20 rounded-full blur-sm animate-pulse"></span>
                </span>
				<span class="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 hover:from-blue-300 hover:via-purple-300 hover:to-emerald-300">
                    Shrijan Poudel
                    <span class="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></span>
                </span>
                <span class="font-mono text-purple-400 ml-2 group-hover:animate-bounce transition-all duration-500 relative">
                    ∂
                    <span class="absolute inset-0 text-purple-300 animate-ping opacity-30 group-hover:opacity-60"></span>
                    <span class="absolute inset-0 bg-purple-400/20 rounded-full blur-sm animate-pulse"></span>
                </span>
			</button>
			
			<!-- Enhanced Nav bar for desktop-->
			<div class="hidden md:flex items-center space-x-8">
				{#each navItems as item}
					<button
						onclick={() => scrollToSection(item.href)}
						class="group flex items-center text-gray-300 hover:text-white font-medium transition-all duration-500 relative py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:shadow-lg hover:shadow-blue-500/25"
					>
                        <span class="font-mono text-blue-400 mr-3 group-hover:scale-125 group-hover:text-blue-300 transition-all duration-500 relative text-lg">
                            {item.symbol}
                            <span class="absolute inset-0 bg-blue-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></span>
                            <span class="absolute inset-0 text-blue-300 opacity-0 group-hover:opacity-50 animate-ping transition-opacity duration-500"></span>
                        </span>
						<span class="relative group-hover:translate-x-1 transition-transform duration-300">
                            {item.name}
                        </span>
						<span class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 group-hover:w-full transition-all duration-500 rounded-full shadow-lg shadow-blue-500/50"></span>
                        
                        <!-- Mathematical trailing effect -->
                        <span class="absolute -right-2 top-1/2 transform -translate-y-1/2 font-mono text-xs text-purple-400/0 group-hover:text-purple-400/70 transition-all duration-500 group-hover:translate-x-2">
                            →
                        </span>
					</button>
				{/each}
			</div>
			
			<!-- Enhanced Mathematical Theme Button (Decorative) -->
			<div class="hidden md:flex items-center space-x-4">
				<button 
					aria-label="Mathematical theme indicator"
					class="group p-4 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 hover:from-blue-800/60 hover:to-purple-800/60 border-2 border-gray-600/50 hover:border-blue-400/60 transition-all duration-500 hover:scale-110 hover:rotate-3 relative overflow-hidden"
				>
                    <!-- Animated background pattern -->
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px); background-size: 8px 8px; opacity: 0; animation: patternPulse 2s ease-in-out infinite;"></div>
                    
                    <div class="relative z-10">
                        <span class="text-2xl font-mono text-blue-400 group-hover:text-blue-300 transition-all duration-500 relative inline-block group-hover:animate-pulse">
                            π
                            <span class="absolute inset-0 text-blue-300 opacity-0 group-hover:opacity-40 animate-ping transition-opacity duration-500"></span>
                        </span>
                        
                        <!-- Enhanced glowing effects -->
                        <div class="absolute inset-0 bg-blue-400/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500 group-hover:animate-ping"></div>
                        
                        <!-- Mathematical orbiting symbols -->
                        <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span class="absolute inset-0 text-xs font-mono text-emerald-400 animate-spin" style="animation-duration: 3s;">∞</span>
                        </div>
                        <div class="absolute -bottom-1 -left-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span class="absolute inset-0 text-xs font-mono text-purple-400 animate-spin" style="animation-duration: 2s; animation-direction: reverse;">∂</span>
                        </div>
                        
                        <!-- Pulsing indicator -->
                        <div class="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50">
                            <div class="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                        </div>
                    </div>
                    
                    <!-- Tooltip -->
                    <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-blue-300 text-xs px-3 py-1 rounded-lg font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-blue-500/30">
                        Mathematical
                        <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-blue-500/30 rotate-45"></div>
                    </div>
				</button>
			</div>
			
			<!-- Mobile Menu Button -->
			<button
				aria-label="Toggle mobile menu"
				class="md:hidden menu-button p-3 rounded-xl bg-gray-800/50 hover:bg-blue-800/50 border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300"
				onclick={() => isMenuOpen = !isMenuOpen}
			>
                <div class="relative">
                    {#if isMenuOpen}
                        <span class="text-xl font-mono text-red-400 animate-pulse">✕</span>
                    {:else}
                        <span class="text-xl font-mono text-blue-400">≡</span>
                    {/if}
                </div>
			</button>
		</div>
		
		<!-- Enhanced Mobile Menu with Vivid Mathematical Styling -->
		{#if isMenuOpen}
			<div class="md:hidden mobile-menu bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-t-2 border-blue-400/40 py-8 rounded-b-3xl shadow-2xl shadow-blue-500/20 relative overflow-hidden">
                <!-- Enhanced mathematical pattern background -->
                <div class="absolute inset-0 opacity-15" style="
                    background-image: 
                        radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 2px, transparent 2px),
                        radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                        linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.1) 50%, transparent 52%),
                        linear-gradient(-45deg, transparent 48%, rgba(147, 51, 234, 0.1) 50%, transparent 52%);
                    background-size: 30px 30px, 40px 40px, 20px 20px, 25px 25px;
                    animation: mobilePatternFlow 15s linear infinite;
                "></div>
                
                <!-- Floating mathematical symbols in mobile menu -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    {#each mathSymbols.slice(0, 6) as symbol, i}
                        <div 
                            class="absolute font-mono text-blue-400/20 animate-pulse"
                            style="
                                left: {15 + i * 15}%; 
                                top: {20 + Math.sin(i) * 30}%; 
                                font-size: {1 + i * 0.2}rem;
                                animation-delay: {i * 0.5}s;
                                animation-duration: {2 + i * 0.3}s;
                            "
                        >
                            {symbol}
                        </div>
                    {/each}
                </div>
                
				<div class="flex flex-col space-y-3 relative z-10">
					{#each navItems as item}
						<button
							onclick={() => scrollToSection(item.href)}
							class="group flex items-center text-left px-8 py-5 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-2xl font-medium transition-all duration-500 border-2 border-transparent hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
						>
                            <!-- Button background glow -->
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            
                            <span class="font-mono text-blue-400 text-2xl mr-6 group-hover:scale-150 group-hover:text-blue-300 transition-all duration-500 relative z-10">
                                {item.symbol}
                                <span class="absolute inset-0 bg-blue-400/40 rounded-full blur-lg opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></span>
                                <span class="absolute inset-0 text-blue-300 opacity-0 group-hover:opacity-60 animate-ping transition-opacity duration-500"></span>
                            </span>
                            <span class="group-hover:translate-x-4 transition-transform duration-500 relative z-10 text-lg">
                                {item.name}
                            </span>
                            
                            <!-- Mathematical trailing effect -->
                            <span class="absolute right-6 top-1/2 transform -translate-y-1/2 font-mono text-purple-400/0 group-hover:text-purple-400/80 transition-all duration-500 group-hover:translate-x-2 text-xl">
                                →
                            </span>
						</button>
					{/each}
                    
                    <!-- Enhanced mathematical decoration -->
                    <div class="mt-8 pt-8 border-t-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30">
                        <div class="text-center relative">
                            <div class="inline-flex items-center text-blue-400/80 font-mono text-lg relative">
                                <span class="animate-pulse mr-4 text-2xl">∞</span>
                                <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                                    Infinite Possibilities
                                </span>
                                <span class="animate-pulse ml-4 text-2xl">∞</span>
                            </div>
                            
                            <!-- Decorative mathematical symbols -->
                            <div class="mt-4 flex justify-center space-x-4">
                                {#each ['π', 'e', '∅', '∇', '∑'] as symbol}
                                    <span class="font-mono text-purple-400/60 animate-pulse text-sm" style="animation-delay: {Math.random() * 2}s;">
                                        {symbol}
                                    </span>
                                {/each}
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		{/if}
	</div>
</nav>



<style>
    @keyframes gridFlow {
        0% { background-position: 0 0, 0 0, 0 0, 0 0; }
        100% { background-position: 40px 40px, -40px -40px, 20px 20px, -30px -30px; }
    }
    
    @keyframes waveShimmer {
        0%, 100% { transform: translateX(-100%); opacity: 0.6; }
        50% { transform: translateX(100%); opacity: 1; }
    }
    
    @keyframes patternPulse {
        0%, 100% { opacity: 0; }
        50% { opacity: 0.3; }
    }
    
    @keyframes mobilePatternFlow {
        0% { background-position: 0 0, 0 0, 0 0, 0 0; }
        100% { background-position: 30px 30px, -40px -40px, 20px 20px, -25px -25px; }
    }
</style>
