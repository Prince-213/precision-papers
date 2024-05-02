<script lang="ts">
	import { goto } from '$app/navigation';
	
	
	import { page, navigating } from '$app/stores';

	import notFound from '$lib/assets/images/bubble-gum-magnifier-and-internet-search-bar.png';
	import Loader from '../../../components/Loader.svelte';

	export let data;

	const getPath = $page.url;

	const navigate = async (add: string) => {
		const path = await `${getPath}${add}`;
		await goto(path);
	};

	$: searchItem = data.journals;

	


	
	$: title = data.title;
</script>

{#if $navigating}
	<Loader />
{:else}
	<div class=" font-inter w-full overflow-hidden min-h-screen pt-10 pb-[15vh]">
		<div class=" w-[90%] mx-auto">
			<div class=" flex lg:flex-row flex-col lg:space-x-5 lg:items-end">
				<h1 class=" text-xl font-semibold">Search Results For:</h1>
				<h1 class=" text-lg font-medium">
					{title}
				</h1>
			</div>

			{#if searchItem.length < 1}
				<div class=" w-full flex justify-center">
					<img src={notFound} alt="" />
				</div>
			{:else}
				<div
					class=" mans mt-10 lg:w-full w-[95%] md:w-[80%] grid-cols-1 grid lg:grid-cols-3 gap-5 mx-auto"
				>
					{#each searchItem as item}
						<div
							class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md shadow-gray-300 rounded-2xl p-10"
						>
							<h2 class=" text-2xl font-medium">{item.title}</h2>

							<p>{item.main_author}</p>
							<p class=" truncate">
								{item.intro}
							</p>

							<button
								on:click={() => navigate(`/paper/${item.journal_id}`)}
								type="submit"
								class=" py-3 hover:shadow-md w-full px-8 border-[#BBBFC1] border-2 rounded-md transition-all duration-100"
							>
							<a href={`${getPath}/paper/${item.journal_id}`} data-sveltekit-preload-data='hover'>Read More</a>
								
							</button>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}
