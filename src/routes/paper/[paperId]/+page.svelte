<script lang="ts">
	
	import { Button, Spinner } from 'flowbite-svelte';

	import { BadgeCheckIcon, UserSearchIcon, EyeIcon } from 'lucide-svelte';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import SEO from '../../../lib/components/SEO.svelte'

	export let data;

	import {
		
		BookOpenOutline,
		ClockOutline,
		ArchiveDownloadSolid,
		UsersOutline
	} from 'flowbite-svelte-icons';
	import Loader from '../../../components/Loader.svelte';

	import { page } from '$app/stores';

  $: fullUrl = $page.url.href;

	const { journals } = data;

	//let manu: string = journals[0]?.initial_man;
	//
	//let path = `https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/public/${manu}`;

	let manu: string = journals[0]?.initial_man;

	let path = `https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/public/${manu}`;
	console.log(journals);

	let view = journals[0].views;

	const inputDateString = journals[0]?.created_at;
	const inputDate = new Date(inputDateString);
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const formattedDate = inputDate.toLocaleDateString('en-US', options);

	let title = journals[0]?.title
	let metadescription = journals[0].intro

</script>


<SEO {title} {metadescription} />

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={metadescription} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={metadescription} />
	<meta property="og:url" content={fullUrl} />
	<meta property="og:image" content="https://www.precisionchronicles.com/frame2.webp" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"headline": journals[0].title,
			"description": journals[0].intro,
			"author": {
				"@type": "Person",
				"name": journals[0].main_author
			},
			"datePublished": formattedDate,
			"articleBody": journals[0].intro,
			"image": "https://www.precisionchronicles.com/frame2.webp"
		})}
	</script>
</svelte:head>

<div class="w-[90%] font-poppins mx-auto min-h-screen space-y-10 pb-[5vh]">
	{#if $navigating}
		<Loader />
	{:else}
		<article class="flex flex-col justify-start items-start py-20 space-y-8">
			<h1 class="underline uppercase text-2xl lg:text-3xl font-semibold">
				{title}
			</h1>
			
			<!-- Section 1: Publication Details -->
			<section class="lg:w-full bg-white border-2 shadow-sm rounded-2xl p-6 space-y-6">
				<div class="space-y-4">
					<p class="text-gray-800 font-medium text-xl lg:text-2xl">
						Subject Area: {journals[0]?.subject_area}
					</p>
					<div class={`max-w-fit rounded-md py-2 px-4 text-white font-medium
						${journals[0].state === 'published' ? 'bg-emerald-500' : 
						journals[0].state === 'review' ? 'bg-yellow-500' : 'bg-red-500'}`}>
						{journals[0].state === 'published' ? 'Published' : 
						journals[0].state === 'review' ? 'On-going Review' : 'Pending'}
					</div>
				</div>

				<div class="flex items-center space-x-2">
					{#if journals[0].enabled}
						<BadgeCheckIcon class="text-blue-500 w-5 h-5" />
					{:else}
						<UserSearchIcon class="w-5 h-5" />
					{/if}
					<span class="font-medium">Author:</span>
					<span class="truncate">{journals[0]?.main_author}</span>
				</div>
			</section>

			<!-- Section 2: Metadata Grid -->
			<section class="lg:w-full bg-white border-2 shadow-sm rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
				<div class="flex items-center space-x-3">
					<ClockOutline class="flex-shrink-0" />
					<span>Published:</span>
					<time datetime={journals[0]?.created_at} class="font-semibold">{formattedDate}</time>
				</div>

				<div class="flex items-center space-x-3">
					<UsersOutline class="flex-shrink-0" />
					<span>Authors:</span>
					<span class="font-semibold">{journals[0]?.total_authors}</span>
				</div>

				<div class="flex items-center space-x-3">
					<EyeIcon class="flex-shrink-0" />
					<span>Views:</span>
					<span class="font-semibold">{journals[0]?.views}</span>
				</div>

				<div class="flex items-center space-x-3">
					<BookOpenOutline class="flex-shrink-0" />
					<span>Volume:</span>
					<span class="font-semibold">{journals[0]?.volume}</span>
				</div>
			</section>

			<!-- Section 3: Abstract -->
			<section class="lg:w-full bg-white border-2 shadow-sm rounded-2xl p-6 space-y-4">
				<h2 class="font-semibold text-xl">Abstract</h2>
				<p class="text-justify leading-relaxed">
					{journals[0]?.intro}
				</p>
			</section>

			<!-- Download Button -->
			<a
				href={path}
				class="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full lg:w-auto"
				aria-label="Download manuscript"
				rel="noopener"
			>
				Download Manuscript
				<ArchiveDownloadSolid class="ml-2 w-5 h-5" />
			</a>
		</article>
	{/if}
</div>
