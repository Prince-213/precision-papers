<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	

	import { Button } from 'flowbite-svelte';
	import { navigating } from '$app/stores';
	import Loader from '../../../../components/Loader.svelte';

	export let data;

	

    $: updated = data.updated;

	const navigate = async (id: number) => {
		await invalidateAll();
		goto(`/journals/category/${id}`);
	};
</script>

<div class=" w-full min-h-screen relative pb-[30vh]">
	{#if $navigating}
		<Loader />
	{:else}
		<slot />
		<div
			class=" h-[80vh] overflow-scroll lg:absolute right-10 top-[60vh] lg:mt-10 lg:w-[35%] bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 shadow-gray-300 rounded-2xl p-10"
		>
			<h3 class=" text-2xl font-medium text-center">Other Journal Catgories</h3>
			{#each updated as journal}
				<Button
					on:click={() => navigate(journal.short)}
					class=" text-black-100 bg-white w-full border-2 shadow-none cursor-pointer transition-all shadow-gray-300 rounded-2xl px-6 py-4"
				>
					<p class=" hover:text-blue-600 transition-all duration-100">{journal.title}</p>
				</Button>
			{/each}
		</div>
	{/if}
</div>
