<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { PageData } from '../../$types';

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

	$: description = journals.description;
</script>

<div class=" font-inter w-full min-h-screen py-[10vh]">
	<div
		style={` background-image: url(${journals.poster})`}
		class="main flex items-center bg-cover bg-center bg-blend-multiply w-full min-h-[50vh] py-10 bg-[#0000009e]"
	>
		<div class=" w-[90%] space-y-4 mx-auto py-8">
			<h1 class=" font-semibold text-white text-3xl">{journals.title}</h1>
			<p class=" text-white">{journals.intro}</p>
		</div>
	</div>
	<div class=" w-[90%] mx-auto">
		<div
			class=" mt-10 lg:w-[60%] bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md shadow-gray-300 rounded-2xl p-10"
		>
			{#each description as detail}
				<p>{detail}</p>
			{/each}
			<button
                on:click={() => goto(`/journals/search/${journals.id}`)}
				type="submit"
				class=" py-3 hover:text-blue-600  hover:shadow-md w-full px-8 border-[#BBBFC1] border-2 rounded-md transition-all duration-100"
			>
				See More
			</button>
		</div>
	</div>
</div>

<style>
</style>
