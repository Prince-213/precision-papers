<script lang="ts">
	import { fly, slide, fade } from 'svelte/transition';
	import { dictionary } from './../../../../../.svelte-kit/generated/client/app.js';
	import type { PageData } from './$types';
	import { supabase } from '$lib/supabaseClient.js';

	export let data;

    export let form;

	let downloading = false;

	const { editors, journals } = data;

    import { page } from '$app/stores';

	import { navigating } from '$app/stores';
	import { Button, Skeleton, TextPlaceholder, MultiSelect, Badge, Spinner, Checkbox } from 'flowbite-svelte';
	import {
		BookOpenOutline,
		ChartBars3FromLeftSolid,
		ClockOutline,
		FilePdfSolid,
		MapPinOutline,
		UserOutline,
		ArchiveDownloadSolid,
		FileInvoiceSolid,
		PapperPlaneOutline,
		CloudArrowUpOutline,

		CloseCircleSolid,

		CheckCircleOutline,

		InfoCircleSolid



	} from 'flowbite-svelte-icons';

	let selected: any = [];

	console.log(journals[0]);

	const categories = [
		'International Journal Of Real-Time Applications And Computing Systems (IJORTACS)',
		'International Journal Of Cutting Edge Engineering Research (IJOCEER)',
		'International Journal Of Explorative Computing Systems (IJECOS)',
		'International Journal Of Next Generation Engineering Solutions (IJONGES)',
		'International Journal Of Advances In Artificial Intelligent Trends (IJAIT)',
		'International Journal Of Advanced Industrial Communications and Cyber Security Systems (IJAICCSS)',
		'International Journal Of Transformative Engineering Technology (IJOTET)',
		'International Journal Of Trending Biomedical Science (IJTBS)'
	];

    let sending = false

    let manu: string = journals[0]?.initial_man

    let path = `https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/public/${manu}`

	import { Section } from 'flowbite-svelte-blocks';
	import { Label, Input, Modal, Textarea, Select } from 'flowbite-svelte';
	import { invalidateAll } from '$app/navigation';
	import { enhance } from '$app/forms';
	let defaultModal = false;
	

	


    const fields: any = [
		{
			title: 'Manuscript Title',
			type: 'text',
            disabled: false,
		},
		{
			title: 'Subject Area',
			type: 'text',
            disabled: false,
            
		},
		{
			title: 'Total Authors',
			type: 'text',
            disabled: false,
		},
		
		{
			title: 'Main Author Email',
			type: 'email',
            disabled: false,
		},
		{
			title: 'Organization',
			type: 'text',
            disabled: false,
		},
		{
			title: 'Department',
			type: 'text',
            disabled: false,
		},

		{
			title: 'No Of Pages',
			type: 'text',
            disabled: false,
		}
	];

	let { manId } = $page.params

	type form = {
        journalid: string;
		manuscripttitle: string;
		subjectarea: string;
		totalauthors: string;
		mainauthorname: string;
		mainauthoremail: string;
		organization: string;
		department: string;
		noofpages: string;
		code: string;
		phonenumber: string;
		country: string;
		city: string;
		state: string;
        intro: string;
		personalstatus: string;
		publishingjournal: number;
        formermanuscript: string;
		initialmanuscript: string;
        
	};

	let formData: form = {
        journalid: manId,
		manuscripttitle: journals[0]?.title,
		subjectarea: journals[0]?.subject_area,
		totalauthors: journals[0]?.total_authors,
		mainauthorname: journals[0]?.main_author,
		mainauthoremail: journals[0]?.author_email,
		organization: journals[0]?.organisation,
		department: journals[0]?.department,
		noofpages: journals[0]?.no_of_pages,
		code: journals[0]?.code,
		phonenumber: journals[0]?.phone_number,
		country: journals[0]?.address,
		city: journals[0]?.address,
		state: journals[0]?.address,
        intro: journals[0]?.intro,
		personalstatus: journals[0]?.status,
		publishingjournal: journals[0]?.category,
        formermanuscript: journals[0]?.initial_man,
		initialmanuscript: ''
	};

    console.log(journals[0]?.main_author, journals[0]?.author_email)

	let message = '';

	
	export const snapshot = {
		capture: () => {
			return formData;
		},
		restore: (data) => {
			formData = data;
		}
	};

   
</script>

<div class=" w-full py-[5vh] min-h-screen">
	{#if $navigating}
		<div>
			<div class=" w-[90%] grid grid-cols-2 mx-auto">
				<Skeleton class=" w-full" />
				<TextPlaceholder />
			</div>
			<div class=" mt-[5em] w-[90%] grid grid-cols-2 gap-10 mx-auto">
				<TextPlaceholder size="xxl" />
				<TextPlaceholder size="xxl" />
				<TextPlaceholder size="xxl" />
				<TextPlaceholder size="xxl" />
			</div>
		</div>
	{:else}
		<div class=" flex justify-between items-start">
			<Modal  title="Edit Manuscript" bind:open={defaultModal}    class="min-w-full">
				<div>
                    <h3 class=" font-semibold text-lg">Issue Details</h3>
                    <div class=" bg-[#F0F2F4] items-center rounded-md p-4 flex justify-between">
                        <div class=" flex space-x-4">
                            <InfoCircleSolid class=" text-[#79808F]  " size="lg" />
                            <p class=" text-lg font-medium text-[#242426]">{journals[0]?.volume}</p>
                        </div>
                    </div>
                </div>
    
                <form
                    method="post"
                    action="?/update"
                    class=" space-y-8"
            
                    use:enhance={() => {
                        sending = true;
                        return ({ update }) => {
                            update().finally(async () => {
                                sending = false;
                                // Optionally if you'd like to reload the data for the current page after form submission.
                                // This is the default behavior for use:enhance.
                                await invalidateAll();
                            });
                        };
                    }}
                >
                <div class=" border-2 border-[#E2E4E5] rounded-md space-y-5 py-8 px-6">
                    <h2 class=" text-lg text-[#242426] font-medium">Journal ID</h2>
                    
                    <input
                            
                            required
                                type="text"
                                name="journalid"
                                
                                bind:value={formData.journalid}
                                class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
                    />
                    
                    
                </div>
                    {#each fields as field}
                        <div class=" border-2 border-[#E2E4E5] rounded-md space-y-5 py-8 px-6">
                            <h2 class=" text-lg text-[#242426] font-medium">{field.title}</h2>
                            {#if field.type == 'text'}
                                <input
                                    required
                                    type="text"
                                    name={`${field.title.toLowerCase().replace(' ', '')}`}
                                    placeholder={`Enter ${field.title}`}
                                    bind:value={formData[`${field.title.toLowerCase().replace(' ', '')}`]}
                                    class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
                                />
                            {:else}
                                <input
                                    required
                                    type="email"
                                    name={`${field.title.toLowerCase().replace(' ', '-')}`}
                                    placeholder={`Enter ${field.title}`}
                                    bind:value={formData.mainauthoremail}
                                    class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
                                />
                            {/if}
                        </div>
                    {/each}
                    <div class=" border-2 border-[#E2E4E5] rounded-md space-y-5 py-8 px-6">
                        <h2 class=" text-lg text-[#242426] font-medium">Main Author Name</h2>
                        
                        <input
                                    required
                                    type="text"
                                    name="main-author name"
                                    placeholder={`Enter Main Author Name`}
                                    bind:value={formData.mainauthorname}
                                    class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
                        />
                        
                        
                    </div>
                    <div class=" border-2 border-[#E2E4E5] rounded-md space-y-5 py-8 px-6">
                        <h2 class=" text-lg text-[#242426] font-medium">Abstract</h2>
                        
                        <Textarea id="intro" placeholder="Write an abstract for the journal with a minimum of 200 words" rows="4" name="intro" bind:value={formData.intro} />
                        
                        
                    </div>
                    <div class=" border-2 border-[#E2E4E5] rounded-md space-y-5 py-8 px-6">
                        <h2 class=" text-lg text-[#242426] font-medium">Enter your phone number</h2>
                        <div class=" flex space-x-5">
                            <select name="code" id="codes" bind:value={formData.code}>
                                <option value="+234">234</option>
                                <option value="+234">234</option>
                                <option value="+234">234</option>
                                <option value="+234">234</option>
                                <option value="+234">234</option>
                                <option value="+234">234</option>
                                <option value="+234">234</option>
                                <option value="+234">234</option>
                                <option value="+234">234</option>
                            </select>
                            <input
                                required
                                type="text"
                                bind:value={formData['phonenumber']}
                                placeholder="123456"
                                name="phonenumber"
                                class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
                            />
                        </div>
                    </div>
                    <div class=" border-2 border-[#E2E4E5] rounded-md space-y-5 py-8 px-6">
                        <h2 class=" text-lg text-[#242426] font-medium">Address</h2>
                        <div class=" grid grid-cols-2 gap-4">
                            <div>
                                <h2 class=" text-lg text-[#242426] font-medium">Country</h2>
                                <input
                                    required
                                    type="text"
                                    name="country"
                                    placeholder={`Enter Country`}
                                    bind:value={formData.country}
                                    class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
                                />
                            </div>
                            <div>
                                <h2 class=" text-lg text-[#242426] font-medium">City</h2>
                                <input
                                    required
                                    type="text"
                                    name="city"
                                    placeholder={`Enter City`}
                                    bind:value={formData.city}
                                    class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
                                />
                            </div>
                            <div>
                                <h2 class=" text-lg text-[#242426] font-medium">State</h2>
                                <input
                                    required
                                    type="text"
                                    name="state"
                                    placeholder={`Enter State`}
                                    bind:value={formData.state}
                                    class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
                                />
                            </div>
                        </div>
                    </div>
    
                    
                    
                    <div class=" overflow-x-hidden border-2 border-[#E2E4E5] rounded-md space-y-5 py-8 px-6">
                        <h2 class=" text-lg text-[#242426] font-medium">Personal Status</h2>
                        <select
                            required
                            class=" max-w-full overflow-x-hidden font-inter"
                            name="personalstatus"
                            id="personalstatus"
                            bind:value={formData.personalstatus}
                            disabled
                        >
                        
                            <option   class=" font-inter">Post Graduate Student</option>
                            <option   class=" font-inter">Under Graduate Student</option>
                            <option   class=" font-inter">Doctoral Candidate/ PHD Student</option>
                            <option   class=" font-inter">Academian</option>
                            
                    
                            
                        </select>
                    </div>
                    
    
                    <div class=" overflow-x-hidden border-2 border-[#E2E4E5] rounded-md space-y-5 py-8 px-6">
                        <h2 class=" text-lg text-[#242426] font-medium">Publishing Journal</h2>
                        <select
                            required
                            class=" max-w-full overflow-x-hidden font-inter"
                            name="publishingjournal"
                            id="publishingjournal"
                            bind:value={formData.publishingjournal}
                        >
                        
                            <option value={1}  class=" font-inter">International Journal Of Real-Time Applications And Computing Systems (IJORTACS)</option>
                            <option value={2}  class=" font-inter">International Journal Of Cutting Edge Engineering Research (IJOCEER)</option>
                            <option value={3}  class=" font-inter">International Journal Of Explorative Computing Systems (IJECOS)</option>
                            <option value={4}  class=" font-inter">International Journal Of Next Generation Engineering Solutions (IJONGES)</option>
                            <option value={5}  class=" font-inter">International Journal Of Advances In Artificial Intelligent Trends (IJAIT)</option>
                            <option value={6}  class=" font-inter">International Journal Of Advanced Industrial Communications and Cyber Security Systems (IJAICCSS)</option>
                            <option value={7}  class=" font-inter">International Journal Of Transformative Engineering Technology (IJOTET)</option>
                            <option value={8}  class=" font-inter">International Journal Of Trending Biomedical Science (IJTBS)</option>
                    
                            
                        </select>
                    </div>

                    <div class=" border-2 border-[#E2E4E5] rounded-md space-y-5 py-8 px-6">
                        <h2 class=" text-lg text-[#242426] font-medium">Former Manuscript</h2>
                        
                        <input
                                
                                required
                                    type="text"
                                    name="formermanuscript"
                                    
                                    bind:value={formData.formermanuscript}
                                    class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
                        />
                        
                        
                    </div>
    
                    <div
                        class=" overflow-x-hidden border-2 border-[#E2E4E5] flex justify-center items-center rounded-md space-y-5 py-8 px-6"
                    >
                        <div class=" space-y-6 flex flex-col items-center">
                            <p class=" font-medium text-gray-500 text-lg">Upload Manuscript</p>
                            <CloudArrowUpOutline class=" text-[#BBBFC1] h-[6em] w-[6em]" size="xl" />
    
                            <input
                                required
                                type="file"
                                name="initialmanuscript"
                                bind:value={formData['initialmanuscript']}
                                placeholder="Upload Manuscript"
                            />
                        </div>
                    </div>
    
                    
                    <button
                        type="submit"
                        class=" py-3 flex items-center space-x-5 px-8 border-[#BBBFC1] border-2 rounded-md hover:font-medium transition-all duration-100"
                    >
                        <p>Edit</p>
                        {#if sending}
                            <Spinner currentColor="black" class={` w-6 h-6 `} currentFill="white" />
                        {:else if form}
                            {#if form.error}
                                <CloseCircleSolid class=" text-red-500" />
                                {:else}
                                <CheckCircleOutline class=" text-emerald-500" />
                            {/if}
                            
                        {:else}
                            <p></p>
                            
                        {/if}
                    </button>
                    <p>{form?.message || ''}</p>
                </form>
			</Modal>
			<div class=" font-poppins mx-auto min-h-screen space-y-5 w-[60%]">
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
						<div
							class={` ${
								journals[0].state == 'published' ? 'bg-emerald-600' : 'bg-red-600'
							}  max-w-fit rounded-md py-3 px-6 text-white font-medium`}
						>
							<p>{journals[0]?.state}</p>
						</div>
					</div>
					<p class=" lg:max-w-[50%] text-lg font-medium">
						{journals[0]?.main_author}
					</p>
				</div>
				<div
					class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all duration-200 hover:shadow-md items-start shadow-gray-300 rounded-2xl grid grid-cols-3 gap-y-10 p-10"
				>
					<div class=" text-lg flex items-center space-x-3">
						<ClockOutline />
						<p>{journals[0]?.subject_area}</p>
					</div>

					<div class=" text-lg flex space-x-3">
						<BookOpenOutline class=" mt-[6px]" />
						<p>{categories[journals[0]?.category]}</p>
					</div>
					<div class=" text-lg flex space-x-3">
						<UserOutline class=" mt-[6px]" />
						<p>
							{journals[0]?.main_author}
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
				<button
					on:click={() => (defaultModal = true)}
					type="submit"
					class=" py-3 flex space-x-5 items-center hover:shadow-md max-w-fit px-9 border-[#BBBFC1] border-2 rounded-md transition-all duration-100"
				>
					<FilePdfSolid />
					<p class=" text-lg font-medium">Edit Manuscript</p>
				</button>
			</div>
			<div
				class=" w-[32%] mt-[8vh] -translate-x-8 border-2 rounded-lg border-gray-300 p-6 min-h-[10em]"
			>
				<h1 class=" font-semibold text-4xl text-center">Manage Projects</h1>
				<div class=" space-y-[3em]">
					<div class=" font-poppins mt-5 space-y-4">
						<h1 class=" text-xl font-semibold">Study More</h1>
						<a
							href={path}
							download="proposed_file_name"
							><Button
								
								class=" bg-black-100 text-white font-medium flex items-center space-x-5"
								><p >Show Initial Manuscript</p>
								{#if downloading}
									<Spinner class=" w-4 h-4" currentFill="white" />
								{:else}
									<ArchiveDownloadSolid class=" text-white" />
								{/if}
							</Button></a
						>
					</div>

					<div class=" mt-5 space-y-4">
						<h1 class=" text-lg font-semibold">Enter Editor email</h1>
						<MultiSelect items={data.editors} bind:value={selected} let:item let:clear>
							<Badge color="green" dismissable params={{ duration: 100 }} on:close={clear}>
								{item.name}
							</Badge>
						</MultiSelect>
						<Button
							class=" flex items-start space-x-4 w-fit text-black-100 border-2 border-black-100 rounded-md"
						>
							<p>Send</p>
							<PapperPlaneOutline class=" -translate-y-1 rotate-45" /></Button
						>
					</div>

					<div class=" mt-5 space-y-4">
						<h1 class=" text-lg font-semibold">Send Payment Ticket</h1>
						<p class=" font-medium ">
							The payment ticket is an invoice for publishing your manuscript
						</p>
						<div
							class=" overflow-x-hidden border-2 border-[#E2E4E5] flex justify-center items-center rounded-md space-y-5 py-8 px-6"
						>
							<div class=" space-y-3 flex flex-col items-center">
								<p class=" font-medium text-gray-500 ">Payment Invoice</p>
								<CloudArrowUpOutline class=" text-[#BBBFC1] h-[2em] w-[2em]" />

								<input required name="payment" type="file" placeholder="Upload Manuscript" />
							</div>
						</div>
						<Button
							class=" flex items-start space-x-4 w-full text-black-100 border-2 border-black-100 rounded-md"
						>
							<p>Send</p>
							<FileInvoiceSolid class=" " /></Button
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
