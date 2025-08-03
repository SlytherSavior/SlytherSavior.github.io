<script lang="ts">
    import { onMount } from 'svelte';

    let matrixElements = $state<Array<{id: number, x: number, y: number, char: string, opacity: number}>>([]);
    let hoveredSkill = $state<string | null>(null);

    const codeSnippets = ['01', '10', '11', '00', 'π', 'e', '∞', 'λ', '∫', '∑', '∂', '∇'];

    const skills = [
        { name: 'Mathematics', level: 95, color: 'from-blue-500 to-cyan-500', formula: '∫₀¹ f(x)dx' },
        { name: 'Theoretical CS & Research', level: 90, color: 'from-purple-500 to-pink-500', formula: 'δ(q, σ) → (q′, σ′, D)' },
        { name: 'Full Stack Development', level: 88, color: 'from-green-500 to-emerald-500', formula: '<div>↦ React | Node | DB</div>' },
        { name: 'Machine Learning (YOLO)', level: 85, color: 'from-orange-500 to-red-500', formula: 'P(object | image)' }
    ];

    const interests = [
        { icon: '🧠', title: 'Theoretical Computer Science', desc: 'Automata, Computability, Formal Logic' },
        { icon: '📐', title: 'Mathematics', desc: 'Abstract Algebra, Analysis, Discrete Structures' },
        { icon: '🤖', title: 'Machine Learning', desc: 'Computer Vision, Object Detection, NLP' },
        { icon: '💼', title: 'Economics', desc: 'New Interest, Game Theory' },
        { icon: '💻', title: 'Software Engineering', desc: 'System Design, Software Architecture' },
        { icon: '🔍', title: 'Research', desc: 'Interdisciplinary Exploration of Math & Computation' }
    ];

    onMount(() => {
        matrixElements = Array.from({length: 50}, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            char: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
            opacity: Math.random() * 0.3 + 0.1
        }));

        const matrixInterval = setInterval(() => {
            matrixElements = matrixElements.map(el => ({
                ...el,
                y: (el.y + 0.5) > 105 ? -5 : el.y + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                char: Math.random() > 0.95 ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)] : el.char
            }));
        }, 100);

        return () => {
            clearInterval(matrixInterval);
        };
    });
</script>

<section id="about" class="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
    <!-- Matrix Rain Background -->
    <div class="absolute inset-0 overflow-hidden">
        {#each matrixElements as element (element.id)}
            <div 
                class="absolute text-sm font-mono text-green-400 pointer-events-none"
                style="left: {element.x}%; top: {element.y}%; opacity: {element.opacity}"
            >
                {element.char}
            </div>
        {/each}
    </div>
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
    
	<div class="container mx-auto px-6 relative z-10">
        <!-- Section Header with Mathematical Accent -->
		<div class="text-center mb-16">
            <div class="inline-flex items-center mb-4">
                <span class="text-4xl text-blue-400 font-mono mr-3">∃</span>
                <h2 class="text-4xl md:text-5xl font-bold text-white">About Me</h2>
                <span class="text-4xl text-purple-400 font-mono ml-3">∀</span>
            </div>
			<div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
		</div>

		<div class="grid md:grid-cols-2 gap-12 items-start">
			<!-- Story Section -->
			<div class="space-y-6">
                <div class="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                        <span class="text-blue-400 font-mono text-3xl mr-3">∫</span>
                        My Journey
                    </h3>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        My fascination with mathematics began early on, where abstract reasoning and structure captivated me. Over time, my interests expanded into the realm of computer science, particularly in areas like theoretical CS, algorithms, and machine learning. I discovered how mathematics isn’t just a tool but a language that underpins modern computation.
                    </p>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        This led me to explore the synergy between mathematics and computer science — from symbolic logic and Turing machines to the deep layers of neural networks. I'm an active contributor to the open-source ecosystem and a proud member of GNOME Nepal, where I advocate for accessible and community-driven development.
                    </p>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        Today, I find joy in research, teaching, and building tech that bridges theoretical understanding with practical impact. Whether it’s designing systems, solving math problems, or contributing to open-source projects, I’m driven by curiosity and purpose.
                    </p>
                    <!-- CS & Math Quote -->
                    <div class="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border-l-4 border-blue-400">
                        <p class="text-blue-300 font-mono italic">
                            "Computer science is no more about computers than astronomy is about telescopes. At its heart, it's about the power of abstraction — something it shares deeply with mathematics."
                        </p>
                        <p class="text-gray-400 text-sm mt-2">– Michael R. Fellows</p>
                    </div>
                </div>
            </div>
            
			<!-- Right Column: Areas of Interest -->
			<div class="space-y-6">
				<div class="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                        <span class="text-emerald-400 font-mono text-3xl mr-3">∇</span>
                        Areas of Interest
                    </h3>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{#each interests as interest}
                            <div class="group bg-gray-800/50 hover:bg-gray-700/50 p-4 rounded-xl border border-gray-600/30 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer">
                                <div class="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                    {interest.icon}
                                </div>
                                <h4 class="font-semibold text-white group-hover:text-emerald-400 transition-colors mb-1">
                                    {interest.title}
                                </h4>
                                <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {interest.desc}
                                </p>
                            </div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Row: By The Numbers & Core Competencies -->
		<div class="grid md:grid-cols-2 gap-12 mt-12">
			<!-- Left Column: By The Numbers -->
			<div class="space-y-6">
				<div class="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                        <span class="text-orange-400 font-mono text-3xl mr-3">π</span>
                        By The Numbers
                    </h3>
					<div class="grid grid-cols-2 gap-6">
						<div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
							<div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                                ∞
                            </div>
							<p class="text-gray-400 text-sm">Problems Solved</p>
						</div>
						<div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
							<div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                                e²
                            </div>
							<p class="text-gray-400 text-sm">Coding Projects</p>
						</div>
						<div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
							<div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                                π³
                            </div>
							<p class="text-gray-400 text-sm">Opensource Contributions</p>
						</div>
						<div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
							<div class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">
                                φ
                            </div>
							<p class="text-gray-400 text-sm">Golden Ratio of Learning</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Column: Core Competencies -->
			<div class="space-y-6">
				<div class="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                        <span class="text-purple-400 font-mono text-3xl mr-3">∑</span>
                        Core Competencies
                    </h3>
					<div class="space-y-4">
						{#each skills as skill}
							<div 
								class="group cursor-pointer"
								role="button"
								tabindex="0"
								onmouseenter={() => hoveredSkill = skill.name}
								onmouseleave={() => hoveredSkill = null}
							>
								<div class="flex justify-between items-center mb-2">
									<span class="text-gray-300 font-semibold group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
									<span class="text-gray-400 text-sm font-mono">
                                        {skill.level}%
                                    </span>
								</div>
								<div class="relative">
                                    <div class="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                        <div 
                                            class="h-full bg-gradient-to-r {skill.color} rounded-full transition-all duration-1000 ease-out relative"
                                            style="width: {skill.level}%"
                                        >
                                            <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
                                        </div>
                                    </div>
                                    
                                    <!-- Formula tooltip -->
                                    {#if hoveredSkill === skill.name}
                                        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-blue-300 px-3 py-2 rounded-lg text-sm font-mono whitespace-nowrap border border-blue-500/30 animate-fadeIn">
                                            {skill.formula}
                                            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                                        </div>
                                    {/if}
                                </div>
							</div>
						{/each}
					</div>
				</div>
			</div>
        </div>
    </div>
</section>

<style>
    @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -10px); }
        to { opacity: 1; transform: translate(-50%, 0); }
    }
    
    .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
    }
</style>
