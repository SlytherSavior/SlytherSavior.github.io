<script lang="ts">
    import { onMount } from 'svelte';
    import profileImage from '$lib/assets/profile.png'; 
    
    let floatingElements = $state<Array<{id: number, x: number, y: number, symbol: string, speed: number}>>([]);
    let typewriterText = $state('');
    
    const phrases = [
        'Mathematics & Tech Enthusiast',
        'AI / ML Enthusiast',
        'Problem Solver & Innovator',
        'Lifelong Learner',
        'Open Source Lover and Contributor'
,    ];
    
    const mathSymbols = ['∫', '∑', '∂', '∇', 'λ', 'π', '∞', '∃', '∀', '⊕', '⊗', '≈', '≡', '∈'];
    
    onMount(() => {
        // Initialize floating mathematical symbols
        floatingElements = Array.from({length: 15}, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
            speed: 0.2 + Math.random() * 0.3
        }));
        
        // Animate floating symbols
        const floatingInterval = setInterval(() => {
            floatingElements = floatingElements.map(el => ({
                ...el,
                y: (el.y - el.speed) < -5 ? 105 : el.y - el.speed,
                x: el.x + Math.sin(Date.now() * 0.001 + el.id) * 0.1
            }));
        }, 50);
        
        // Typewriter effect
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        const typeEffect = () => {
            const currentPhraseText = phrases[phraseIndex];
            
            if (isDeleting) {
                typewriterText = currentPhraseText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterText = currentPhraseText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentPhraseText.length) {
                setTimeout(() => { isDeleting = true; }, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        };
        
        typeEffect();
        
        return () => {
            clearInterval(floatingInterval);
        };
    });
</script>

<section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
    <!-- Floating Mathematical Symbols Background -->
    <div class="absolute inset-0 overflow-hidden">
        {#each floatingElements as element (element.id)}
            <div 
                class="absolute text-2xl md:text-4xl font-mono text-blue-300/20 pointer-events-none animate-pulse"
                style="left: {element.x}%; top: {element.y}%; transform: translate(-50%, -50%)"
            >
                {element.symbol}
            </div>
        {/each}
    </div>
    
    <!-- Gradient Mesh Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
    
	<div class="container mx-auto px-6 text-center relative z-10">
		<div class="max-w-4xl mx-auto">
            <!-- Interactive Profile Image with Mathematical Border -->
            <div class="relative w-40 h-40 mx-auto mb-8 group cursor-pointer">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full animate-spin-slow group-hover:animate-pulse"></div>
                <div class="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                    <img src={profileImage} alt="Shrijan Poudel" class="w-32 h-32 rounded-full object-cover border-2 border-blue-400/50 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <!-- Mathematical symbols orbiting the image -->
                <div class="absolute inset-0 animate-spin-slow">
                    <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 text-blue-400 text-xl font-mono">∫</div>
                    <div class="absolute top-1/2 -right-2 transform -translate-y-1/2 text-purple-400 text-xl font-mono">∑</div>
                    <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-emerald-400 text-xl font-mono">∂</div>
                    <div class="absolute top-1/2 -left-2 transform -translate-y-1/2 text-orange-400 text-xl font-mono">∇</div>
                </div>
            </div>
			
			<h1 class="text-5xl md:text-7xl font-bold text-white mb-6 relative">
				Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient-x">Shrijan Poudel</span>
			</h1>
			
			<!-- Typewriter Effect for Subtitle -->
			<div class="h-16 flex items-center justify-center mb-8">
                <p class="text-xl md:text-2xl text-gray-300 font-mono">
                    {typewriterText}<span class="animate-blink text-blue-400">|</span>
                </p>
            </div>
			
			<!-- Enhanced Description with Mathematical Emphasis -->
			<div class="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-blue-500/20">
                <p class="text-lg md:text-xl text-gray-200 leading-relaxed">
                    I’m deeply curious about 
                    <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:scale-105 inline-block transition-transform cursor-pointer">mathematics</span>, 
                    <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 hover:scale-105 inline-block transition-transform cursor-pointer">technology</span>, 
                    <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:scale-105 inline-block transition-transform cursor-pointer">artificial intelligence</span>, 
                    and the potential of 
                    <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 hover:scale-105 inline-block transition-transform cursor-pointer">teaching & learning</span> 
                    to spark real transformation.
                </p>

                
                <!-- Turing Machine Transition Rule -->
                <div class="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-400/30">
                    <p class="text-blue-300 font-mono text-lg">
                        δ(q, σ) → (q′, σ′, D)
                    </p>
                    <p class="text-gray-400 text-sm mt-2">
                        From symbols and rules, emerge thought and machines.
                    </p>
                </div>
            </div>
			
			<!-- Interactive CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button 
					onclick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
					class="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg border border-blue-400/50 hover:border-blue-300 relative overflow-hidden"
				>
                    <span class="relative z-10 flex items-center justify-center">
                        <span class="text-xl mr-2 group-hover:animate-bounce">∫</span>
                        Explore My Journey
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
				</button>
				<button 
					onclick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
					class="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 relative overflow-hidden"
				>
                    <span class="relative z-10 flex items-center justify-center">
                        <span class="text-xl mr-2 group-hover:animate-spin">∑</span>
                        Let's Connect
                    </span>
				</button>
                </div>
			</div>
            
			<!-- Enhanced Scroll Indicator -->
			<div class="flex flex-col items-center animate-bounce mt-6">
				<div class="text-blue-400 text-sm font-mono">SCROLL DOWN</div>
				<svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
				</svg>
			</div>
		</div>
	</div>
</section>

<style>
    @keyframes gradient-x {
        0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
        }
        50% {
            background-size: 200% 200%;
            background-position: right center;
        }
    }
    
    @keyframes spin-slow {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .animate-gradient-x {
        animation: gradient-x 3s ease infinite;
    }
    
    .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
    }
    
    .animate-blink {
        animation: blink 1s infinite;
    }
</style>
