<script lang="ts">
	import journal from '$lib/assets/images/techny-electronic-shield.png';
	import { Checkbox, Input, Spinner, Label, InputAddon, Toast, ButtonGroup } from 'flowbite-svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { goto, invalidateAll } from '$app/navigation';

	import { UserCircleSolid, CloseCircleSolid } from 'flowbite-svelte-icons';

	const redirectTo = $page.url.searchParams.get('redirectTo') || '/';

	let sending = false;

	import {
		LockSolid,
		CloseOutline,
		InfoCircleSolid,
		CloudArrowUpOutline,
        CheckCircleSolid,
		CheckCircleOutline
	} from 'flowbite-svelte-icons';
	import { fromJSON } from 'postcss';
	import { slide } from 'svelte/transition';

	export let form;

	type form = {
		email: string;
		password: string;
	};

	let formData: form = {
		email: '',
		password: ''
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

    const confirm = async () => {
        if (!form?.error) {
            new Promise(resolve => setTimeout(resolve, 1000))
            goto('/admin/dashboard')
        }
        
    }
</script>

<div class=" w-full min-h-screen py-[20vh] bg-white">
	<div class=" lg:flex w-[85%] flex lg:space-x-14 mx-auto">
		<div class=" relative w-[0%] hidden lg:block lg:w-[30%]">
			<img src={journal} class=" w-[25em] fixed left-10 top-[30vh]" alt="" />
		</div>
		<div class=" w-full lg:w-[45%] space-y-8">
			<div class=" space-y-3">
				<h1 class=" text-3xl font-semibold">Administration Panel</h1>
				<p class=" text-[#575F6E] text-[16px] font-medium">
					Enter the authorized information to gain access to the admin station.
				</p>
			</div>
			<Toast transition={slide} color="blue">
                <svelte:fragment slot="icon">
                    <LockSolid class="w-5 h-5" />
                    <span class="sr-only">Check icon</span>
                </svelte:fragment>
                For Admin Personnel Only 
            </Toast>

			<form
				method="post"
				action="?/login&redirectTo={redirectTo}"
                
				class=" space-y-8"
				use:enhance={() => {
					sending = true;
					return ({ update }) => {
						update().finally(async () => {
							sending = false;
							// Optionally if you'd like to reload the data for the current page after form submission.
							// This is the default behavior for use:enhance.
							await invalidateAll();
                            
                            await confirm();
						});
					};
				}}
			>
				<div class="mb-6">
					<Label for="name" class="block mb-2">Username</Label>
					<ButtonGroup class="w-full">
						<InputAddon>
							<UserCircleSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
						</InputAddon>
						<Input id="name" name="name" />
					</ButtonGroup>
				</div>

				<div class="mb-6">
					<Label for="password" class="block mb-2">Password</Label>
					<ButtonGroup class="w-full">
						<InputAddon>
							<LockSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
						</InputAddon>
						<Input id="password" name="password" type="password" />
					</ButtonGroup>
				</div>

				<button
					type="submit"
					class=" py-3 lg:min-w-[20%] mx-auto flex items-center space-x-5 px-8 border-[#BBBFC1] border-2 rounded-md hover:font-medium transition-all duration-100"
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
				{#if form}
					{#if form.error}
						<Toast color="red" transition={slide}>
							<svelte:fragment slot="icon">
								<CloseCircleSolid class="w-5 h-5" />
								<span class="sr-only">Error icon</span>
							</svelte:fragment>
							{form?.message || ''}
						</Toast>
					{:else}
						<Toast transition={slide} color="green">
							<svelte:fragment slot="icon">
								<CheckCircleSolid class="w-5 h-5" />
								<span class="sr-only">Check icon</span>
							</svelte:fragment>
							{form?.message || ''}
						</Toast>
					{/if}
				{:else}
					<p></p>
				{/if}
				
			</form>
		</div>
	</div>
</div>

<style>
	.box-in {
		outline: transparent;
	}
</style>
