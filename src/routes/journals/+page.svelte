<script lang="ts">
	import type { PageData } from './$types';

	import maze from '$lib/assets/images/pexels-google-deepmind-17483848.jpg';
	import abstract from '$lib/assets/images/pexels-google-deepmind-17483848.jpg';
	import code from '$lib/assets/images/pexels-kevin-ku-577585.jpg';
	import think from '$lib/assets/images/pexels-pavel-danilyuk-8438918.jpg';
	import spark from '$lib/assets/images/pexels-pixabay-414860.jpg';
	import pie from '$lib/assets/images/pexels-lukas-590041.jpg';
	import review from '$lib/assets/images/pexels-lukas-669621.jpg';
	import office from '$lib/assets/images/pexels-marc-mueller-380769.jpg';
	import { goto } from '$app/navigation';
	import { Gallery } from 'flowbite-svelte';

	export let data;

	$: journals = data.journals;

	const journalss = [
		{
			title: 'International Journal Of Real-Time Applications And Computing Systems (IJORTACS)',
			poster: maze
		},
		{
			title: 'International Journal Of Cutting Edge Engineering Research (IJOCEER)',
			poster: abstract
		},
		{
			title: 'International Journal Of Explorative Computing Systems (IJECOS)',
			poster: code
		},
		{
			title: 'International Journal Of Next Generation Engineering Solutions (IJONGES)',
			poster: think
		},
		{
			title: 'International Journal Of Advances In Artificial Intelligent Trends (IJAIT)',
			poster: spark
		},
		{
			title:
				'International Journal Of Advanced Industrial Communications and Cyber Security Systems (IJAICCSS)',
			poster: pie
		},
		{
			title: 'International Journal Of Transformative Engineering Technology (IJOTET)',
			poster: review
		},
		{
			title: 'International Journal Of Trending Biomedical Science (IJTBS)',
			poster: office
		}
	];
</script>

<div class=" w-full py-[20vh]">
	
	<div class=" mans lg:w-[95%] w-[90%] md:w-[80%] columns-4 grid lg:grid-cols-3  gap-5 mx-auto">
		{#each journals as journal}
			<div
				class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md shadow-gray-300 rounded-2xl p-10"
			>
				<h2 class=" text-2xl font-medium">
					{journal.title}
				</h2>

				<img src={journal.poster} class=" h-[35vh] rounded-md w-full" alt="" />
				<button
					on:click={() => goto(`/journals/category/${journal.id}`)}
					type="submit"
					class=" py-3 hover:shadow-md w-full px-8 border-[#BBBFC1] border-2 rounded-md transition-all duration-100"
				>
					See More
				</button>
			</div>
		{/each}
	</div>
</div>

<style>
	
</style>