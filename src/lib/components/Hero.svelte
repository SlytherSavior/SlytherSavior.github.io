<script lang="ts">
    import profileImage from '$lib/assets/profile.png'; 
</script>


<section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
	<div class="container mx-auto px-6 text-center">
		<div class="max-w-4xl mx-auto">
            <!-- profile image -->
            <div class="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
				<img src={profileImage} alt="Profile" class="w-full h-full rounded-full object-cover" />
			</div>
			
			<h1 class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
				Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Shrijan Poudel</span>
			</h1>
			
			<p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
				Mathematics & Tech Enthusiast 
			</p>
			
			<!-- Description -->
			<p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
				I'm deeply curious about <span class="font-semibold text-blue-700 dark:text-blue-300">mathematics</span>, 
				<span class="font-semibold text-purple-700 dark:text-purple-300">artificial intelligence</span>, and the 
				potential of <span class="font-semibold text-emerald-700 dark:text-emerald-300">teaching & learning</span> to spark real transformation.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button 
					onclick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
					class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
				>
					Learn More About Me
				</button>
				<button 
					onclick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
					class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
				>
					Get In Touch
				</button>
			</div>
            
			<!-- downward arrow  -->
			<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
				</svg>
			</div>
		</div>
	</div>
</section>
