<script lang="ts">
	import journal from '$lib/assets/images/isometric-documents.png';
	import { Checkbox, Input, Spinner, Textarea } from 'flowbite-svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';
	import { loading } from '../../store';

	const redirectTo = $page.url.searchParams.get('redirectTo') || '/';

	let sending = false;

	import {
		LockSolid,
		CloseOutline,
		InfoCircleSolid,
		CloudArrowUpOutline,
		CheckCircleOutline,
		CloseCircleSolid
	} from 'flowbite-svelte-icons';
	import { fromJSON } from 'postcss';

	export let form;

	const fields: any = [
		{
			title: 'Manuscript Title',
			type: 'text'
		},
		{
			title: 'Subject Area',
			type: 'text'
		},
		{
			title: 'Total Authors',
			type: 'text'
		},
		{
			title: 'Main Author Name',
			type: 'text'
		},
		{
			title: 'Main Author Email',
			type: 'email'
		},
		{
			title: 'Organization',
			type: 'text'
		},
		{
			title: 'Department',
			type: 'text'
		},

		{
			title: 'No Of Pages',
			type: 'text'
		}
	];

	

	type form = {
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
		intro: string;
		state: string;
		personalstatus: string;
		publishingjournal: string;
		initialmanuscript: string;
	};

	let formData: form = {
		manuscripttitle: '',
		subjectarea: '',
		totalauthors: '',
		mainauthorname: '',
		mainauthoremail: '',
		organization: '',
		department: '',
		noofpages: '',
		code: '',
		intro: "",
		phonenumber: '',
		country: '',
		city: '',
		state: '',
		personalstatus: '',
		publishingjournal: '',
		initialmanuscript: ''
	};

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

<div class=" w-full min-h-screen py-[20vh] bg-white">
	<div class=" lg:flex w-[90%] flex lg:space-x-14 mx-auto">
		<div class=" relative w-[0%] hidden lg:block lg:w-[30%]">
			<img src={journal} class=" w-[25em] fixed left-10 top-[30vh]" alt="" />
		</div>
		<div class=" w-full lg:w-[45%] space-y-8">
			<div class=" space-y-3">
				<h1 class=" text-3xl font-semibold">Upload Initial Manuscript</h1>
				<p class=" text-[#575F6E] text-[16px] font-medium">
					The article must be submitted in the form of a Microsoft word-compatible file (PDF not
					allowed). Articles should be submitted using our online submission system only. We do not
					accept submissions by email.
				</p>
			</div>
			<div class=" bg-[#F0F2F4] rounded-md p-4 flex justify-between">
				<div class=" flex space-x-4">
					<LockSolid class=" text-[#79808F]  " size="lg" />
					<p class=" w-[80%] text-[13px] text-[#242426]">
						We take privacy issues seriously. You can be sure that your personal data is securely
						protected.
					</p>
				</div>

				<CloseOutline class=" mt-[2px] text-[#79808F] " size="sm" />
			</div>
			<div>
				<h3 class=" font-semibold text-lg">Issue Details</h3>
				<div class=" bg-[#F0F2F4] items-center rounded-md p-4 flex justify-between">
					<div class=" flex space-x-4">
						<InfoCircleSolid class=" text-[#79808F]  " size="lg" />
						<p class=" text-lg font-medium text-[#242426]">Volume 2 Issue XII, Dec 2023</p>
					</div>
				</div>
			</div>

			<form
				method="post"
				action="?/initial&redirectTo={redirectTo}"
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
								bind:value={formData[`${field.title.toLowerCase().replace(' ', '')}`]}
								class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
							/>
						{/if}
					</div>
				{/each}
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
						bind:value={formData['publishingjournal']}
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

				<div class=" flex items-center space-x-4">
					<Checkbox color="blue" required />

					<p class=" font-medium">I accept the Author's Declaration</p>
				</div>
				<button
					type="submit"
					class=" py-3 flex items-center space-x-5 px-8 border-[#BBBFC1] border-2 rounded-md hover:font-medium transition-all duration-100"
				>
					<p>Submit</p>
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
		</div>
	</div>
</div>

<style>
	.box-in {
		outline: transparent;
	}
</style>
