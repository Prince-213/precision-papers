<script lang="ts">
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';
	import { Button, Spinner } from 'flowbite-svelte';
	import { CardPlaceholder } from 'flowbite-svelte';
	import { BadgeCheckIcon, UserSearchIcon } from 'lucide-svelte'
	import { navigating } from '$app/stores';

	
	export let data;

	import {
		ChartBars3FromLeftSolid,
		UserOutline,
		MapPinOutline,
		BookOpenOutline,
		ClockOutline,
		
		ArchiveDownloadSolid
	} from 'flowbite-svelte-icons';
	import Loader from '../../../../../../components/Loader.svelte';

	const { journals } = data;

	let manu: string = journals[0]?.initial_man;

	let path = `https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/public/${manu}`;
	console.log(journals);
</script>

<div class=" w-[90%] font-poppins mx-auto min-h-screen space-y-10 py-[5vh]">
	{#if $navigating}
		<Loader />
	{:else}
		<div class=" py-20 space-y-8">
			<h1 class=" underline uppercase text-3xl font-semibold">
				{journals[0]?.title}
			</h1>
			<div
				class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md items-start shadow-gray-300 rounded-2xl justify-between p-10 flex"
			>
				<div class=" space-y-8">
					<p class=" text-gray-800 font-medium text-2xl">
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
					{#if journals[0].enabled}
						<BadgeCheckIcon class=" text-blue-500" />
						{:else}
						<UserSearchIcon />
					{/if}
					
					<p class=" lg:max-w-[90%] text-lg  font-medium">
						{journals[0]?.main_author}
					</p>
				</div>
				
			</div>
			<div
				class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all duration-200 hover:shadow-md items-start shadow-gray-300 rounded-2xl grid grid-cols-3 gap-y-10 p-10"
			>
				<div class=" text-lg flex items-center space-x-3">
					<ClockOutline />
					<p>{journals[0]?.created_at}</p>
				</div>

				<div class=" text-lg flex space-x-3">
					<BookOpenOutline class=" mt-[6px]" />
					<p>{journals[0]?.department}</p>
				</div>
				<div class=" text-lg flex space-x-3">
					<UserOutline class=" mt-[6px]" />
					<p>
						{journals[0]?.total_authors}
					</p>
				</div>
				<div class=" text-lg flex items-center space-x-3">
					<MapPinOutline />
					<p>{journals[0]?.address}</p>
				</div>
				<div class=" text-lg flex items-center space-x-3">
					<ChartBars3FromLeftSolid />
					<p>{journals[0]?.views}</p>
				</div>
				<div class=" text-lg flex items-center space-x-3">
					<BookOpenOutline />
					<p>{journals[0]?.volume}</p>
				</div>
			</div>
			<div
				class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md shadow-gray-300 rounded-2xl justify-between p-10"
			>
				<p class=" leading-9">
					{journals[0]?.intro}
				</p>
			</div>
			<br />
			<a class=" mt-5" href={path} download="proposed_file_name"
				><Button class=" bg-black-100 text-white py-5 font-medium flex items-center space-x-5"
					><p>Download Manuscript</p>

					<ArchiveDownloadSolid class=" text-white" />
				</Button></a
			>
		</div>
	{/if}
</div>
