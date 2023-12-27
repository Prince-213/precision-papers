<script lang="ts">
	
	import { navigating, page } from '$app/stores';
	

	import { Button, ImagePlaceholder } from 'flowbite-svelte';
	import Loader from '../../../../components/Loader.svelte';

	const { category } = $page.params;

	type Journal = {
		id: number;
		title: string;
		poster: string;
		intro: string;
		description: string[];
	};

	export let data;

	$: journals = data.journals;

	
</script>

<div class=" font-inter w-full min-h-screen lg:py-[10vh]">
	{#if $navigating}
		<ImagePlaceholder />
	{:else}
		<div
			style={` background-image: url(${journals[0].poster})`}
			class="main bg-fixed flex items-center bg-cover bg-center bg-blend-multiply w-full min-h-[50vh] lg:py-10 bg-[#0000009e]"
		>
			<div class=" w-[85%] space-y-4 mx-auto py-8">
				<h1 class=" font-semibold text-white text-3xl">{journals[0].title}</h1>
				<p class=" text-white">{journals[0].intro}</p>
			</div>
		</div>
	{/if}

	<div class=" w-[90%] mx-auto">
		{#if $navigating}
			<Loader />
		{:else}
			<div
				class=" mt-10 lg:w-[60%] bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md shadow-gray-300 rounded-2xl p-10"
			>
				<p>{journals[0].description}</p>

				<Button
					href={`/journals/search/${journals[0].short}`}
					type="submit"
					class=" py-3 text-black-100 hover:text-blue-600 hover:shadow-md w-full px-8 border-[#BBBFC1] border-2 rounded-md transition-all duration-100"
				>
					See More
				</Button>
			</div>
		{/if}
	</div>
</div>

<style>
</style>
