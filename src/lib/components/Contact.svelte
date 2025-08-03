<script lang="ts">
	import { onMount } from 'svelte';

	let hoveredCard = $state<string | null>(null);
	let mathematicalExpression = $state('∫₀^∞ e^(-x²) dx = √π/2');
	let currentExpressionIndex = $state(0);

	const expressions = [
		'∫₀^∞ e^(-x²) dx = √π/2',
		'∑_{n=1}^∞ 1/n² = π²/6',
		'e^(iπ) + 1 = 0',
		'H(X) = -∑ p(x)log₂p(x)',
		'∂L/∂θ = ∇J(θ)',
		'P(A|B) = P(B|A)P(A)/P(B)'
	];

	const contactMethods = [
		{
			name: 'GitHub',
			url: 'https://github.com/SlytherSavior',
			icon: '⟨code⟩',
			description: 'Coding Projects and Open Source Contributions',
			color: 'from-gray-600 to-gray-800',
			hoverColor: 'from-gray-700 to-gray-900'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/slyther',
			icon: '∑',
			description: 'Professional Network & Collaboration',
			color: 'from-blue-600 to-blue-800',
			hoverColor: 'from-blue-700 to-blue-900'
		},
		{
			name: 'Email',
			url: 'mailto:contact@shrijanpoudel.com.np',
			icon: '∀',
			description: 'Let’s Discuss Ideas or Projects',
			color: 'from-purple-600 to-purple-800',
			hoverColor: 'from-purple-700 to-purple-900'
		},
		{
			name: 'GNOME Nepal',
			url: 'https://nepal.gnome.org/',
			icon: '⊂⊃',
			description: 'Join the community & OSS advocacy',
			color: 'from-emerald-600 to-emerald-800',
			hoverColor: 'from-emerald-700 to-emerald-900'
		}
	];

	onMount(() => {
		const interval = setInterval(() => {
			currentExpressionIndex = (currentExpressionIndex + 1) % expressions.length;
			mathematicalExpression = expressions[currentExpressionIndex];
		}, 3000);
		return () => clearInterval(interval);
	});
</script>

<section id="contact" class="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
	<!-- Mathematical Accent Background -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute top-10 left-10 text-6xl font-mono text-blue-400 animate-pulse">∫</div>
		<div class="absolute top-32 right-20 text-4xl font-mono text-purple-400 animate-bounce">∑</div>
		<div class="absolute bottom-20 left-32 text-5xl font-mono text-emerald-400 animate-ping">∂</div>
		<div class="absolute bottom-40 right-10 text-3xl font-mono text-orange-400 animate-spin">∇</div>
		<div class="absolute top-1/2 left-1/4 text-4xl font-mono text-pink-400 animate-pulse">λ</div>
	</div>

	<div class="container mx-auto px-6 relative z-10">
		<div class="max-w-5xl mx-auto text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
				Get in Touch
			</h2>
			<div class="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 mx-auto mb-6"></div>
			<div class="bg-black/30 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-blue-500/20">
				<p class="text-2xl font-mono text-blue-300 mb-2 transition-all duration-500">
					{mathematicalExpression}
				</p>
				<p class="text-gray-300">
					Driven by curiosity and collaboration — let’s explore open source, theory, and innovation together.
				</p>
			</div>
		</div>

		<div class="grid md:grid-cols-2 gap-10">
			{#each contactMethods as method}
				<a
					href={method.url}
					target="_blank"
					rel="noopener noreferrer"
					class="block group"
					onmouseenter={() => hoveredCard = method.name}
					onmouseleave={() => hoveredCard = null}
				>
					<div class="bg-gradient-to-r {hoveredCard === method.name ? method.hoverColor : method.color} p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<div class="text-4xl mr-4 font-mono text-white group-hover:animate-pulse">
									{method.icon}
								</div>
								<div>
									<h4 class="text-xl font-bold text-white mb-1">{method.name}</h4>
									<p class="text-gray-200 text-sm">{method.description}</p>
								</div>
							</div>
							<svg class="w-6 h-6 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
							</svg>
						</div>
					</div>
				</a>
			{/each}

		</div>
	</div>
</section>
