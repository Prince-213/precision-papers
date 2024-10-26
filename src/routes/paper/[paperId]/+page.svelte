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



<SEO   {title} {metadescription} />

<svelte:head>
	<title>{journals[0].title}</title>
	<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "BlogPosting",
		  "headline": `${journals[0].title}`,
		  "description": `${journals[0].intro}`,
		  "author": {
			"@type": "Person",
			"name": `${journals[0].main_author}`
		  },
		  "datePublished": `${formattedDate}`,
		  "articleBody": `${journals[0].into}`
		}
		</script>
	<meta
		name="description"
		content={journals[0]?.intro}
	/>
	<meta
		name="keywords"
		content="Precision Chronicles, precision chronicles, precisionchronicles, precision, journals, precision journals, articles, Precision chronicles, precision Chronicles, Academic Journals,
	Scholarly Publications,
	Research Papers,
	Manuscript Submission,
	Precision Chronicles,
	Journal Articles,
	Peer-reviewed Journals,
	Scholarly Writing,
	Academic Publishing,
	Manuscript Review,
	Submission Guidelines,
	Editorial Process,
	Open Access Journals,
	Research Manuscripts,
	Scholarly Communication,
	Publication Platform,
	Author Guidelines,
	Journal Submission System,
	Research Article Submission,
	Editorial Board."
	/>
	<meta property="og:title" content={journals[0]?.title} />
  <meta property="og:description" content={journals[0]?.description} />
  <meta property="og:url" content={fullUrl} />
	<meta property="og:image" content="https://www.precisionchronicles.com/frame2.png" />
  
</svelte:head>

<div class=" w-[90%] font-poppins mx-auto min-h-screen space-y-10 pb-[5vh]">
	{#if $navigating}
		<Loader />
	{:else}
		<div class=" flex flex-col justify-start items-start py-20 space-y-8">
			<h1 class=" underline uppercase text-2xl lg:text-3xl font-semibold">
				
				{journals[0]?.title}
			</h1>
			<div
				class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-8 duration-200 hover:shadow-md items-start shadow-gray-300 rounded-2xl flex-col lg:flex-row  lg:space-y-0 lg:justify-between p-10 flex"
			>
				<div class=" lg:space-y-8">
					<p class=" text-gray-800 font-medium text-xl lg:text-2xl">
						Subject Area: {journals[0]?.subject_area}
					</p>
					{#if journals[0].state == 'published'}
						<div class={` bg-emerald-500  max-w-fit rounded-md py-3 px-6 text-white font-medium`}>
							<p class=" font-medium">Published</p>
						</div>
					{:else if journals[0].state == 'review'}
						<div class={` bg-yellow-500  max-w-fit rounded-md py-3 px-6 text-white font-medium`}>
							<p class=" font-medium">On-going Review</p>
						</div>
					{:else}
						<div class={` bg-red-500  max-w-fit rounded-md py-3 px-6 text-white font-medium`}>
							<p class=" font-medium">Pending</p>
						</div>
					{/if}
				</div>
				<div class=" flex space-x-4 items-center w-fit">
					<div class=" flex items-center space-x-2">
						{#if journals[0].enabled}
							<BadgeCheckIcon class=" text-blue-500" />
						{:else}
							<UserSearchIcon />
						{/if}
						<h1>Author Name :</h1>
					</div>

					<p class=" lg:max-w-[90%] text-lg font-medium">
						{journals[0]?.main_author}
					</p>
				</div>
			</div>
			<div
				class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all duration-200 hover:shadow-md items-start shadow-gray-300 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-y-10 p-10"
			>
				<div class=" text-lg flex lg:justify-start justify-between items-center space-x-3">
					<div class=" flex items-center space-x-3">
						<ClockOutline />
						<h3>Date Of Publication :</h3>
					</div>
					<p class=" font-semibold">{formattedDate}</p>
				</div>

				<div class=" text-lg flex lg:justify-start justify-between items-center space-x-3">
					<div class=" flex items-center space-x-3">
						<UsersOutline class=" " />
						<h3>No. Of Authors :</h3>
					</div>
					<p class=" font-semibold">
						{journals[0]?.total_authors}
					</p>
				</div>

				<div class=" text-lg lg:justify-start justify-between flex items-center space-x-3">
					<div class=" flex items-center space-x-3">
						<EyeIcon />
						<h3>No. Of Views :</h3>
					</div>
					<p class=" font-semibold">{journals[0]?.views}</p>
				</div>
				<div class=" text-lg lg:justify-start justify-between flex items-center space-x-3">
					<div class=" flex items-center space-x-3">
						<BookOpenOutline />
						<h3>Volume :</h3>
					</div>
					<p class=" font-semibold">{journals[0]?.volume}</p>
				</div>
			</div>
			<div
				class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md shadow-gray-300 rounded-2xl justify-between p-10"
			>
				<h1 class=" font-semibold text-xl">Abstract</h1>
				<p class=" text-justify leading-9">
					{journals[0]?.intro}
				</p>
			</div>
			<br />

			<Button
				href={path}
				class=" bg-black-100 lg:w-[30%]  text-white py-5 font-medium flex items-center space-x-5"
				><p>Download Manuscript</p>

				<ArchiveDownloadSolid class=" text-white" />
			</Button>
		</div>
	{/if}
</div>
