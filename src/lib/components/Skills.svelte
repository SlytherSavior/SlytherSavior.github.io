<script lang="ts">
    import { onMount } from 'svelte';

    let particleSystem = $state<Array<{id: number, x: number, y: number, vx: number, vy: number, size: number, color: string}>>([]);
    let hoveredSkill = $state<string | null>(null);

    const skillCategories = [
        {
            title: "Mathematics",
            icon: "∑",
            color: "from-blue-500 to-cyan-500",
            skills: [
                { name: "Calculus", level: 90, formula: "∫ f(x) dx" },
                { name: "Linear Algebra", level: 85, formula: "Ax = λx" },
                { name: "Probability", level: 82, formula: "P(A|B) = P(B|A)P(A)/P(B)" },
            ]
        },
        {
            title: "Artificial Intelligence",
            icon: "🧠",
            color: "from-purple-500 to-pink-500",
            skills: [
                { name: "YOLO & Object Detection", level: 88, formula: "YOLOv5 → bbox" },
                { name: "OpenCV", level: 85, formula: "cv2.imread()" },
                { name: "NLP", level: 80, formula: "P(w|context)" },
            ]
        },
        {
            title: "Backend & APIs",
            icon: "⚙️",
            color: "from-green-500 to-emerald-500",
            skills: [
                { name: "Flask", level: 90, formula: "@app.route()" },
                { name: "PostgreSQL", level: 85, formula: "SELECT * FROM users" },
                { name: "Redis", level: 80, formula: "SET key value" },
                { name: "JWT & Crypto", level: 88, formula: "HS256 & AES" },
            ]
        },
        {
            title: "Software & Teaching",
            icon: "💻",
            color: "from-yellow-500 to-orange-500",
            skills: [
                { name: "iOS App (React Native)", level: 80, formula: "expo + nativewind" },
                { name: "Electron.js", level: 78, formula: "main.js + preload.js" },
                { name: "Teaching", level: 85, formula: "Explain like I'm 5" },
            ]
        },
        {
            title: "Development & Tools",
            icon: "🛠️",
            color: "from-pink-500 to-red-500",
            skills: [
                { name: "Discord Bots", level: 83, formula: "client.on('message')" },
                { name: "Full Stack Dev", level: 87, formula: "MERN + Tailwind" },
                { name: "Git & Linux", level: 85, formula: "git push && chmod" },
            ]
        }
    ];

    const achievements = [
        {
            title: "Built Authentication System",
            description: "Secure login flow with JWT and Redis",
            icon: "🔐",
            metric: "Sessions secured",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Mathematics Projects",
            description: "Applied math concepts in code",
            icon: "📘",
            metric: "Concepts implemented",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Cross-platform Software",
            description: "Created Electron.js and iOS apps",
            icon: "🖥️",
            metric: "Apps built",
            color: "from-yellow-500 to-orange-500"
        },
        {
            title: "Open Source Contributions",
            description: "Actively involved in OSS community",
            icon: "🌍",
            metric: "Repos contributed",
            color: "from-green-500 to-emerald-500"
        }
    ];

    onMount(() => {
        particleSystem = Array.from({length: 30}, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            size: Math.random() * 3 + 1,
            color: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'][Math.floor(Math.random() * 4)]
        }));

        const particleInterval = setInterval(() => {
            particleSystem = particleSystem.map(particle => ({
                ...particle,
                x: (particle.x + particle.vx + 100) % 100,
                y: (particle.y + particle.vy + 100) % 100
            }));
        }, 50);

        return () => {
            clearInterval(particleInterval);
        };
    });
</script>



<section id="skills" class="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
    <!-- Animated Particle Background -->
    <div class="absolute inset-0 overflow-hidden">
        {#each particleSystem as particle (particle.id)}
            <div 
                class="absolute rounded-full opacity-30 animate-pulse"
                style="left: {particle.x}%; top: {particle.y}%; width: {particle.size}px; height: {particle.size}px; background-color: {particle.color}"
            ></div>
        {/each}
    </div>
    
    <!-- Mathematical Grid Overlay -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle, #3B82F6 1px, transparent 1px); background-size: 50px 50px;"></div>
    
    <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
            <div class="inline-flex items-center mb-4">
                <span class="text-4xl text-blue-400 font-mono mr-3">∇</span>
                <h2 class="text-4xl md:text-5xl font-bold text-white">Skills & Expertise</h2>
                <span class="text-4xl text-purple-400 font-mono ml-3">∂</span>
            </div>
            <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Mathematical foundations powering AI innovation and analytical excellence
            </p>
        </div>
        
        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {#each skillCategories as category}
                <div class="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                    <div class="flex items-center mb-6">
                        <div class="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r {category.color} mr-4 group-hover:scale-110 transition-transform duration-300">
                            {category.icon}
                        </div>
                        <h3 class="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {category.title}
                        </h3>
                    </div>
                    
                    <div class="space-y-4">
                        {#each category.skills as skill}
                            <div 
                                class="group/skill cursor-pointer"
                                onmouseenter={() => hoveredSkill = skill.name}
                                onmouseleave={() => hoveredSkill = null}
                            >
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                    <span class="text-sm text-gray-400 font-mono group-hover/skill:text-blue-300 transition-colors">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div class="relative">
                                    <div class="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                        <div 
                                            class="bg-gradient-to-r {category.color} h-2 rounded-full transition-all duration-1000 ease-out relative"
                                            style="width: {skill.level}%"
                                        >
                                            <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
                                        </div>
                                    </div>
                                    
                                    <!-- Formula tooltip -->
                                    {#if hoveredSkill === skill.name}
                                        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-blue-300 px-3 py-2 rounded-lg text-sm font-mono whitespace-nowrap border border-blue-500/30 animate-fadeIn z-20">
                                            {skill.formula}
                                            <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                                        </div>
                                    {/if}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
        
        <!-- Achievements Grid -->
        <div class="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 mb-12">
            <h3 class="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                <span class="text-yellow-400 font-mono text-4xl mr-3">∑</span>
                Areas of Achievement
                <span class="text-yellow-400 font-mono text-4xl ml-3">∏</span>
            </h3>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {#each achievements as achievement}
                    <div class="group bg-gray-800/50 hover:bg-gray-700/50 p-6 rounded-xl border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
                        <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {achievement.icon}
                        </div>
                        <h4 class="font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                            {achievement.title}
                        </h4>
                        <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-3">
                            {achievement.description}
                        </p>
                        <div class="text-transparent bg-clip-text bg-gradient-to-r {achievement.color} font-mono text-sm font-bold">
                            {achievement.metric}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        
        <!-- Mathematical Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 font-mono">
                    ∞
                </div>
                <div class="text-gray-300 group-hover:text-white transition-colors">Mathematical Concepts Mastered</div>
            </div>
            <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 font-mono">
                    e^π
                </div>
                <div class="text-gray-300 group-hover:text-white transition-colors">Projects Completed</div>
            </div>
            <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2 font-mono">
                    φ²
                </div>
                <div class="text-gray-300 group-hover:text-white transition-colors">Areas of Interest</div>
            </div>
            <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2 font-mono">
                    √π
                </div>
                <div class="text-gray-300 group-hover:text-white transition-colors">Lines of Code</div>
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
