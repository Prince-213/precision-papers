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
	import { Button, Checkbox } from 'flowbite-svelte';

	import { navigating } from '$app/stores';
	import Loader from '../../components/Loader.svelte';

	$: group = [];

	export let data;

	$: updated = data.updated;
</script>

<svelte:head>
	<title>JOURNALS</title>
</svelte:head>

{#if $navigating}
	<Loader />
{:else}
	<div class=" w-full py-[20vh]">
		<div class=" flex pl-10">
			<div class=" hidden lg:block space-y-8 h-fit p-5 w-[45%] bg-gray-100">
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
					<p class=" font-medium text-lg">Communication</p>
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
				<h1 class=" text-4xl lg:text-5xl lg:mb-10 lg:ml-10 font-semibold">Journals</h1>
				<div
					class=" -translate-x-5 lg:-translate-x-0 mans lg:w-[95%] w-[95%] md:w-[80%] grid lg:grid-cols-3 gap-5 mx-auto"
				>
					{#each updated as journal}
						<div
							class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md shadow-gray-300 rounded-2xl p-10 flex flex-col justify-between"
						>
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
	</div>
{/if}

<style>
</style>
