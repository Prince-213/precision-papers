<script lang="ts">
	import { onMount } from 'svelte';
	//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
	import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

	let ParticlesComponent: any;

	onMount(async () => {
		const module = await import('svelte-particles');

		ParticlesComponent = module.default;
	});

	let particlesUrl = 'http://foo.bar/particles.json'; // placeholder, replace it with a real url

	let particlesConfig = {
		particles: {
			color: {
				value: '#fff'
			},
			links: {
				enable: true,
				color: '#fff'
			},
			move: {
				enable: true
			},
			number: {
				value: 100
			},
			fullScreen: {
				enable: false
			},
			resove: true
		}
	};

	let onParticlesLoaded = (event: any) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let particlesInit = async (engine: any) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(main);
		await loadSlim(engine);
	};
</script>

<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	class="foo-bar -z-10"
	style=" position: fixed !important; width: 20em; z-index: 1; "
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
	{particlesInit}
/>

<canvas data-generated="true" style="width: 100% !important; height: 100% !important; position: fixed !important; z-index: 1 !important; top: 0px !important; left: 0px !important; pointer-events: none;" width="2386" height="1961"></canvas>


