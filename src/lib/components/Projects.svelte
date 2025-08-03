<script lang="ts">
    import { onMount } from 'svelte';
    
    let codeRain = $state<Array<{id: number, x: number, y: number, char: string, speed: number}>>([]);
    let selectedFilter = $state('all');
    
    const projects = [
        {
            id: 1,
            title: "Neural Network Visualizer",
            description: "Interactive deep learning visualization tool that demonstrates how neural networks process information through layers. Features real-time weight adjustment and backpropagation animation.",
            image: "/project-placeholder.jpg",
            technologies: ["Python", "TensorFlow", "D3.js", "WebGL", "Svelte"],
            githubUrl: "https://github.com/yourusername/neural-network-viz",
            liveUrl: "https://neural-viz-demo.vercel.app",
            featured: true,
            category: "ai",
            complexity: "∂²f/∂x²",
            impact: "95%"
        },
        {
            id: 2,
            title: "Mathematical Function Plotter",
            description: "Advanced 3D function plotting application with support for complex mathematical expressions, parametric equations, and interactive manipulation of mathematical surfaces.",
            image: "/project-placeholder.jpg",
            technologies: ["JavaScript", "Three.js", "Math.js", "WebGL", "React"],
            githubUrl: "https://github.com/yourusername/math-plotter",
            liveUrl: "https://math-plotter-demo.vercel.app",
            featured: true,
            category: "math",
            complexity: "∫∫∫ f(x,y,z) dxdydz",
            impact: "92%"
        },
        {
            id: 3,
            title: "Statistical Analysis Dashboard",
            description: "Comprehensive statistical analysis platform with support for regression analysis, hypothesis testing, and data visualization. Built for educational and research purposes.",
            image: "/project-placeholder.jpg",
            technologies: ["R", "Shiny", "ggplot2", "Python", "Pandas"],
            githubUrl: "https://github.com/yourusername/stats-dashboard",
            liveUrl: "https://stats-dashboard-demo.vercel.app",
            featured: false,
            category: "data",
            complexity: "σ² = E[(X-μ)²]",
            impact: "88%"
        },
        {
            id: 4,
            title: "AI-Powered Math Tutor",
            description: "Intelligent tutoring system that uses natural language processing and machine learning to provide personalized mathematics education and problem-solving assistance.",
            image: "/project-placeholder.jpg",
            technologies: ["Python", "OpenAI API", "Flask", "NLP", "SQLite"],
            githubUrl: "https://github.com/yourusername/ai-math-tutor",
            liveUrl: "https://ai-tutor-demo.vercel.app",
            featured: true,
            category: "ai",
            complexity: "P(correct|context)",
            impact: "97%"
        },
        {
            id: 5,
            title: "Fractal Generator",
            description: "Real-time fractal generation tool exploring the mathematical beauty of Mandelbrot sets, Julia sets, and other complex mathematical patterns with interactive zoom and customization.",
            image: "/project-placeholder.jpg",
            technologies: ["JavaScript", "Canvas API", "WebWorkers", "Complex.js"],
            githubUrl: "https://github.com/yourusername/fractal-generator",
            liveUrl: "https://fractal-gen-demo.vercel.app",
            featured: false,
            category: "math",
            complexity: "z_{n+1} = z_n² + c",
            impact: "90%"
        },
        {
            id: 6,
            title: "Monte Carlo Simulation Suite",
            description: "Comprehensive Monte Carlo simulation toolkit for solving complex mathematical problems through probabilistic methods and random sampling techniques.",
            image: "/project-placeholder.jpg",
            technologies: ["Python", "NumPy", "SciPy", "Matplotlib", "Jupyter"],
            githubUrl: "https://github.com/yourusername/monte-carlo-suite",
            liveUrl: "https://monte-carlo-demo.vercel.app",
            featured: false,
            category: "data",
            complexity: "∫ f(x)dx ≈ (b-a)/n ∑f(xᵢ)",
            impact: "89%"
        }
    ];
    
    const filters = [
        { id: 'all', name: 'All Projects', icon: '∀' },
        { id: 'featured', name: 'Featured', icon: '⭐' },
        { id: 'ai', name: 'AI & ML', icon: '🧠' },
        { id: 'math', name: 'Mathematics', icon: '∫' },
        { id: 'data', name: 'Data Science', icon: '📊' }
    ];
    
    const filteredProjects = $derived(
        selectedFilter === 'all' 
            ? projects 
            : selectedFilter === 'featured' 
            ? projects.filter(p => p.featured)
            : projects.filter(p => p.category === selectedFilter)
    );
    
    onMount(() => {
        const chars = ['0', '1', 'π', 'e', '∞', '∫', '∑', '∂', '∇', 'λ', 'θ', 'φ', 'α', 'β', 'γ', 'δ'];
        
        codeRain = Array.from({length: 25}, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            char: chars[Math.floor(Math.random() * chars.length)],
            speed: Math.random() * 0.5 + 0.2
        }));
        
        const rainInterval = setInterval(() => {
            codeRain = codeRain.map(drop => ({
                ...drop,
                y: (drop.y + drop.speed) > 105 ? -5 : drop.y + drop.speed,
                char: Math.random() > 0.98 ? chars[Math.floor(Math.random() * chars.length)] : drop.char
            }));
        }, 100);
        
        return () => {
            clearInterval(rainInterval);
        };
    });
</script>

<section id="projects" class="py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900 relative overflow-hidden">
    <!-- Animated Code Rain Background -->
    <div class="absolute inset-0 overflow-hidden">
        {#each codeRain as drop (drop.id)}
            <div 
                class="absolute text-lg font-mono text-blue-400/30 pointer-events-none"
                style="left: {drop.x}%; top: {drop.y}%"
            >
                {drop.char}
            </div>
        {/each}
    </div>
    
    <!-- Circuit Board Pattern -->
    <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#ffffff" stroke-width="0.5"/>
                    <circle cx="20" cy="20" r="2" fill="#ffffff"/>
                    <circle cx="80" cy="20" r="2" fill="#ffffff"/>
                    <circle cx="80" cy="80" r="2" fill="#ffffff"/>
                    <circle cx="20" cy="80" r="2" fill="#ffffff"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
            <div class="inline-flex items-center mb-4">
                <span class="text-4xl text-blue-400 font-mono mr-3">∏</span>
                <h2 class="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
                <span class="text-4xl text-purple-400 font-mono ml-3">∑</span>
            </div>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Exploring the intersection of mathematics, artificial intelligence, and computational innovation
            </p>
        </div>
        
        <!-- Filter Buttons -->
        <div class="flex justify-center mb-12">
            <div class="flex flex-wrap gap-2 bg-black/40 backdrop-blur-sm p-3 rounded-2xl border border-gray-700/50">
                {#each filters as filter}
                    <button
                        onclick={() => selectedFilter = filter.id}
                        class="px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center {
                            selectedFilter === filter.id 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                            : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                        }"
                    >
                        <span class="text-xl mr-2 font-mono">{filter.icon}</span>
                        {filter.name}
                    </button>
                {/each}
            </div>
        </div>
        
        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each filteredProjects as project (project.id)}
                <div class="group bg-black/40 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 overflow-hidden border border-gray-700/50 hover:border-blue-500/50">
                    <!-- Project Visual -->
                    <div class="h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 relative overflow-hidden">
                        <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div class="text-center">
                                <div class="text-white text-3xl font-mono mb-2">{project.complexity}</div>
                                <span class="text-blue-200 text-sm font-semibold">Mathematical Model</span>
                            </div>
                        </div>
                        <!-- Animated mathematical symbols -->
                        <div class="absolute top-4 right-4 text-white/70 font-mono text-sm animate-pulse">
                            {project.impact} accuracy
                        </div>
                        {#if project.featured}
                            <div class="absolute top-4 left-4">
                                <span class="bg-yellow-500/90 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                    ⭐ Featured
                                </span>
                            </div>
                        {/if}
                    </div>
                    
                    <!-- Project Content -->
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                            {project.title}
                        </h3>
                        
                        <p class="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors leading-relaxed">
                            {project.description}
                        </p>
                        
                        <!-- Technologies with Mathematical Styling -->
                        <div class="flex flex-wrap gap-2 mb-6">
                            {#each project.technologies as tech}
                                <span class="bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-sm font-mono hover:border-blue-400/50 transition-colors">
                                    {tech}
                                </span>
                            {/each}
                        </div>
                        
                        <!-- Action Buttons -->
                        <div class="flex gap-3">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 text-center group/btn"
                            >
                                <span class="group-hover/btn:animate-bounce inline-block mr-2">🚀</span>
                                Live Demo
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex-1 border-2 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-300 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 text-center group/btn"
                            >
                                <span class="group-hover/btn:animate-spin inline-block mr-2">⚡</span>
                                Code
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        
        <!-- Mathematical Stats Section -->
        <div class="mt-16 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 class="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
                <span class="text-blue-400 font-mono text-3xl mr-3">∑</span>
                Project Impact Analytics
                <span class="text-purple-400 font-mono text-3xl ml-3">∏</span>
            </h3>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 font-mono">
                        {projects.length}
                    </div>
                    <div class="text-gray-300 group-hover:text-white transition-colors">Active Projects</div>
                </div>
                <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 font-mono">
                        ∞
                    </div>
                    <div class="text-gray-300 group-hover:text-white transition-colors">Lines of Mathematical Code</div>
                </div>
                <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2 font-mono">
                        π²
                    </div>
                    <div class="text-gray-300 group-hover:text-white transition-colors">AI Models Trained</div>
                </div>
                <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2 font-mono">
                        e^5
                    </div>
                    <div class="text-gray-300 group-hover:text-white transition-colors">Problems Solved</div>
                </div>
            </div>
        </div>
        
        <!-- View More Projects Button -->
        <div class="text-center mt-12">
            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 hover:from-blue-800 hover:to-purple-800 text-white px-8 py-4 rounded-2xl font-semibold border-2 border-gray-600 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-2xl"
            >
                <span class="text-2xl mr-3 group-hover:animate-spin">⚡</span>
                <span>Explore All Mathematical Projects</span>
                <span class="text-2xl ml-3 font-mono group-hover:text-blue-300">→</span>
            </a>
        </div>
    </div>
</section>
