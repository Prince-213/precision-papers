<script lang="ts">
	import journal from '$lib/assets/images/isometric-white-book.png';
	import { Checkbox, Input } from 'flowbite-svelte';
	import { enhance } from '$app/forms';
	import { navigating } from '$app/stores';
	import {
		LockSolid,
		CloseOutline,
		InfoCircleSolid,
		CloudArrowUpOutline
	} from 'flowbite-svelte-icons';
	import Loader from '../../components/Loader.svelte';

	export let form;

	export const snapshot = {
		capture: () => {
			return formData;
		},
		restore: (data) => {
			formData = data;
		}
	};

	type final = {
		uniquemanuscriptid: string;
		correspondingauthorsnames: string;
		finalmanuscript: string;
		authordeclaration: string;
	};

	let formData: final = {
		uniquemanuscriptid: '',
		correspondingauthorsnames: '',
		finalmanuscript: '',
		authordeclaration: ''
	};

	const fields = [
		{
			title: 'Unique Manuscript ID',
			type: 'text'
		},
		{
			title: 'Corresponding Authors Names',
			type: 'text'
		}
	];

	const choices = [
		{
			title: 'Payment Method',
			options: ['PayStack', 'Stripe', 'Flutter Wave', 'Opay', 'MoniePoint']
		}
	];

	const files = [
		{
			title: 'Final Manuscript'
		},
		{
			title: 'Author Declaration'
		}
		//{
		//	title: 'Payment Proof'
		//}
	];

	$: val = '';
</script>

{#if $navigating}
	<Loader />
{:else}
	<div class=" w-full min-h-screen py-[20vh] bg-white">
		<div class=" lg:flex w-[90%] flex lg:space-x-14 mx-auto">
			<div class=" relative w-[0%] hidden lg:block lg:w-[30%]">
				<img src={journal} class=" w-[25em] fixed left-10 top-[30vh]" alt="" />
			</div>
			<div class=" w-full lg:w-[45%] space-y-8">
				<div class=" space-y-3">
					<h1 class=" text-3xl font-semibold">Upload Finial Manuscript</h1>
					<p class=" text-[#575F6E] text-[16px] font-medium">
						The article must be submitted in the form of a Microsoft word-compatible file (PDF not
						allowed). Articles should be submitted using our online submission system only. We do
						not accept submissions by email.
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

				<form method="post" action="?/final" use:enhance class=" space-y-8">
					{#each fields as field}
						<div class=" border-2 border-[#E2E4E5] rounded-md space-y-5 py-8 px-6">
							<h2 class=" text-lg text-[#242426] font-medium">{field.title}</h2>
							<input
								required
								type="text"
								placeholder={`Enter ${field.title}`}
								name={`${field.title.toLowerCase().replace(' ', '')}`}
								bind:value={formData[`${field.title.toLowerCase().replace(' ', '')}`]}
								class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-l-0 border-t-0 border-r-0 border-b-2 border-[#E2E4E5]"
							/>
						</div>
					{/each}

					{#each files as file}
						<div
							class=" overflow-x-hidden border-2 border-[#E2E4E5] flex justify-center items-center rounded-md space-y-5 py-8 px-6"
						>
							<div class=" space-y-6 flex flex-col items-center">
								<p class=" font-medium text-gray-500 text-lg">{file.title}</p>
								<CloudArrowUpOutline class=" text-[#BBBFC1] h-[6em] w-[6em]" size="xl" />

								<input
									required
									name={`${file.title.toLowerCase().replace(' ', '')}`}
									type="file"
									placeholder="Upload Manuscript"
									bind:value={formData[`${file.title.toLowerCase().replace(' ', '')}`]}
								/>
							</div>
						</div>
					{/each}

					<p>{val}</p>
					<div class=" flex items-center space-x-4">
						<input type="checkbox" name="accepted" bind:value={val} required />

						<p class=" font-medium">I accept the attached Author's Declaration</p>
					</div>
					<button
						type="submit"
						class=" py-3 px-8 border-[#BBBFC1] border-2 rounded-md hover:font-medium transition-all duration-100"
					>
						Submit
					</button>
					<p>{form?.message || ''}</p>
				</form>
			</div>
		</div>
	</div>
{/if}

<style>
	.box-in {
		outline: transparent;
	}
</style>
