<script lang="ts">
	import type { PageData } from './$types';

	export let data;

	import {
		ChartBars3FromLeftSolid,
		UserOutline,
		MapPinOutline,
		BookOpenOutline,
		ClockOutline,
		FilePdfSolid
	} from 'flowbite-svelte-icons';

    $: journal = data.journals
</script>

<div class=" font-poppins mx-auto min-h-screen py-[15vh] space-y-5 w-[90%]">
	<h1 class=" underline uppercase text-3xl font-semibold">
    
		{journal?.title}
	</h1>
	<div
		class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md items-start shadow-gray-300 rounded-2xl justify-between p-10 flex"
	>
		<div class=" space-y-8">
			<p class=" text-gray-800 font-medium text-2xl">Subject Area: {journal?.subject_area}</p>
			<div class=" bg-emerald-600 max-w-fit rounded-md py-3 px-6 text-white font-medium">
				<p>Published</p>
			</div>
		</div>
		<p class=" lg:max-w-[50%] text-lg font-medium">
			{journal?.main_author}
		</p>
	</div>
	<div
		class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all duration-200 hover:shadow-md items-start shadow-gray-300 rounded-2xl grid grid-cols-3 gap-y-10 p-10"
	>
		<div class=" text-lg flex items-center space-x-3">
			<ClockOutline />
			<p>{journal?.date}</p>
		</div>

		<div class=" text-lg flex space-x-3">
			<BookOpenOutline class=" mt-[6px]" />
			<p>{journal?.journal_category}</p>
		</div>
		<div class=" text-lg flex space-x-3">
			<UserOutline class=" mt-[6px]" />
			<p>
				{journal?.main_author}
			</p>
		</div>
		<div class=" text-lg flex items-center space-x-3">
			<MapPinOutline />
			<p>{journal?.address}</p>
		</div>
		<div class=" text-lg flex items-center space-x-3">
			<ChartBars3FromLeftSolid />
			<p>{journal?.views}</p>
		</div>
		<div class=" text-lg flex items-center space-x-3">
			<BookOpenOutline />
			<p>{journal?.volume}</p>
		</div>
	</div>
	<div
		class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md shadow-gray-300 rounded-2xl justify-between p-10"
	>
		<p class=" leading-9">
			{journal?.intro}
		</p>
	</div>
	<button
		
		type="submit"
		class=" py-3 flex space-x-5 items-center hover:shadow-md max-w-fit px-9 border-[#BBBFC1] border-2 rounded-md transition-all duration-100"
	>
        <FilePdfSolid />
		<p class=" text-lg font-medium">Download File</p>
	</button>
</div>
