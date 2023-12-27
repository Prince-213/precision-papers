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
	import { Button, Checkbox, Gallery } from 'flowbite-svelte';

	import { CardPlaceholder } from 'flowbite-svelte';
	import { navigating } from '$app/stores';
	import Loader from '../../components/Loader.svelte';

	$: group = []

	export let data;

	$: journals = data.journals;

	$: updated = data.updated;


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
	
	{#if $navigating}
		<Loader />
	{:else}
		<div class=" flex pl-10">
			<div class=" space-y-8 h-fit p-5 w-[45%] bg-gray-100">
				
				<h3 class=" border-b-2 border-white pb-2 font-medium text-2xl">Filter By Discipline</h3>
				<div class="  mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'deep_learning'} />
					<p class=" font-medium text-lg">Deep Learning</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'power_system_engineering'} />
					<p class=" font-medium text-lg">Power System Engineering</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'control_system'} />
					<p class=" font-medium text-lg">Control System</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'communication'} />
					<p class=" font-medium text-lg">Communication </p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'biometric_technology'} />
					<p class=" font-medium text-lg">Biometric Technology</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'dms'} />
					<p class=" font-medium text-lg">Database Management System</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'is'} />
					<p class=" font-medium text-lg">Information Security</p>
				</div>
			</div>
			<div class=" space-y-4">
				<h1 class=" text-5xl mb-10 ml-10 font-semibold">Journals</h1>
				<div
					class=" mans lg:w-[95%] w-[90%] md:w-[80%] columns-4 grid lg:grid-cols-3 gap-5 mx-auto"
				>
					{#each updated as journal}
						<div
							class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md shadow-gray-300 rounded-2xl p-10 flex flex-col justify-between">
						
							<h2 class="h-[40%] text-lg font-semibold">
								{journal.title}
							</h2>

							<div
								style={`background-image: url(${journal.poster});`}
								class=" w-full rounded-md h-28 bg-center bg-cover"
							></div>

							<Button
								href={`/journals/category/${journal.short}`}
								
								class=" py-3 hover:shadow-md w-full px-8 text-black-100 border-[#BBBFC1] border-2 rounded-md transition-all duration-100"
							>
								See More
							</Button>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
</style>
