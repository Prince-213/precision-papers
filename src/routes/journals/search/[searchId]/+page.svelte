<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import { page, navigating } from '$app/stores';

	import notFound from '$lib/assets/images/bubble-gum-magnifier-and-internet-search-bar.png';
	import Loader from '../../../../components/Loader.svelte';

	export let data;

	const getPath = $page.url;

	const navigate = (add: string) => {
		const path = `${getPath}${add}`;
		goto(path);
	};

	$: searchItem = data.journals;

	$: key = data.key;

	const searchTitles = [
		'International Journal Of Real-Time Applications And Computing Systems (IJORTACS)',
		'International Journal Of Cutting Edge Engineering Research (IJOCEER)',
		'International Journal Of Explorative Computing Systems (IJECOS)',
		'International Journal Of Next Generation Engineering Solutions (IJONGES)',
		'International Journal Of Advances In Artificial Intelligent Trends (IJAIT)',
		'International Journal Of Advanced Industrial Communications and Cyber Security Systems (IJAICCSS)',
		'International Journal Of Transformative Engineering Technology (IJOTET)',
		'International Journal Of Trending Biomedical Science (IJTBS)'
	];

	$: category = searchTitles[parseInt(key) - 1];
	$: title = data.title;
</script>

{#if $navigating}
	<Loader />
{:else}
	<div class=" font-inter w-full min-h-screen py-[15vh]">
		<div class=" w-[90%] mx-auto">
			<div class=" flex space-x-5 items-end">
				<h1 class=" text-2xl font-semibold">Search Results For:</h1>
				<h1 class=" text-xl font-medium">
					{title}
				</h1>
			</div>

			{#if searchItem.length < 1}
				<div class=" w-full flex justify-center">
					<img src={notFound} alt="" />
				</div>
			{:else}
				<div
					class=" mans mt-10 lg:w-full w-[95%] md:w-[80%] columns-4 grid lg:grid-cols-3 gap-5 mx-auto"
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
								Read More
							</button>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}
