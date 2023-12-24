<script lang="ts">
	import { enhance } from '$app/forms';
	import { Checkbox, Input, Spinner } from 'flowbite-svelte';

	import { Toast, Button } from 'flowbite-svelte';
	import { slide, blur, fly, fade } from 'svelte/transition';
	import { CheckCircleOutline, CheckCircleSolid, CloseCircleSolid } from 'flowbite-svelte-icons';
	import { quintOut, elasticInOut, quadInOut } from 'svelte/easing';

	import {  } from 'lucide-svelte'

	export let data;

	export let form;

	let sending = false;

	let open = false;
	let counter = 6;

	function trigger() {
		open = true;
	}


	import {
		UserOutline,
		EnvelopeOutline,
		LockOutline,
		BriefcaseOutline
	} from 'flowbite-svelte-icons';
	import { invalidateAll } from '$app/navigation';

	export const snapshot = {
		capture: () => {
			return formData;
		},
		restore: (data) => {
			formData = data;
		}
	};

	type final = {
		firstname: string;
		lastname: string;
		email: string;
		password: string;
	};

	let formData: final = {
		firstname: '',
		lastname: '',
		email: '',
		password: ''
	};
</script>

<div class=" relative w-full pb-[10vh] pt-[20vh] flex items-center justify-center font-poppins">

	<form
		method="post"
		
		action="?/register"
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
		class=" lg:w-[40%] bg-white border-2 shadow-md shadow-gray-300 rounded-2xl p-10"
	>
		<h2 class=" ml-3 mb-10 font-medium text-2xl">Register as A Editor</h2>

		<div class=" space-y-10">
			<div
				class=" flex py-1 items-center space-x-3 border-l-0 border-t-0 ml-3 border-r-0 border-b-2 border-[#E2E4E5]"
			>
				<UserOutline size="lg" class=" text-gray-400" />
				<input
					type="text"
					name="firstname"
					bind:value={formData.firstname}
					placeholder="Enter First name"
					class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-none"
				/>
			</div>

			<div
				class=" flex py-1 items-center space-x-3 border-l-0 border-t-0 ml-3 border-r-0 border-b-2 border-[#E2E4E5]"
			>
				<UserOutline size="lg" class=" text-gray-400" />
				<input
					type="text"
					name="lastname"
					bind:value={formData.lastname}
					placeholder="Enter Last name"
					class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-none"
				/>
			</div>

			<div
				class=" flex py-1 items-center space-x-3 border-l-0 border-t-0 ml-3 border-r-0 border-b-2 border-[#E2E4E5]"
			>
				<EnvelopeOutline size="lg" class=" text-gray-400" />
				<input
					type="email"
					name="email"
					bind:value={formData.email}
					placeholder="Enter email"
					class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-none"
				/>
			</div>

			<div
				class=" flex py-1 items-center space-x-3 border-l-0 border-t-0 ml-3 border-r-0 border-b-2 border-[#E2E4E5]"
			>
				<LockOutline size="lg" class=" text-gray-400" />
				<input
					type="password"
					name="password"
					bind:value={formData.password}
					placeholder="Enter password"
					class=" focus-within:outline-none box-in outline-none focus-within:border-none focus:border-none focus:outline-transparent w-full border-none"
				/>
			</div>
			<div class=" bg-[#F0F2F4] rounded-md p-4 flex justify-between">
				<div class=" flex space-x-4">
					<BriefcaseOutline class=" text-[#79808F]  " size="lg" />
					<p class=" w-[80%] text-lg font-medium text-[#242426]">Editor</p>
				</div>
			</div>

			<div class=" flex items-center space-x-4">
				<Checkbox color="blue" required />
				<p class=" font-medium">I accept the Terms of Use and Privacy Policy</p>
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
				

			<p class=" space-x-2">
				Already have an account? <a href="login-as-reviewer" class=" text-blue-600">Login</a>
			</p>
		</div>
	</form>
</div>
