<script lang="ts">
	type journals = {
		id: number;
		created_at: string;
		title: string;
		subject_area: string;
		main_author: string;
		views: number;
		volume: string;
		journal_id: string;
		category: string;
		address: string;
		intro: string;
		verified: boolean;
		total_authors: string;
		author_email: string;
		organisation: string;
		department: string;
		phone_number: string;
		status: string;
		no_of_pages: string;
		initial_man: string;
		author_declaration: string;
		state: string;
	};

	export let data;

	import { navigating, page } from '$app/stores';

	import { Button, Checkbox, ListPlaceholder } from 'flowbite-svelte';
	import { Input, Label, Select} from 'flowbite-svelte';

	import { EditOutline, TrashBinOutline } from 'flowbite-svelte-icons';

	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch
	} from 'flowbite-svelte';

	let searchTerm = '';

	
	import { Modal } from 'flowbite-svelte';

	let defaultUpdateModal = false;

	let selected = false;
	let items = [
		{ value: true, name: 'VERIFY' },
		{ value: false, name: 'UNVERIFY' }
	];
	const productData = {
		fname: 'John',
		lname: 'Smith',
		email: '',
		category: false
	};

	let defaultModal = false;
	const handleCancel = () => {
		defaultModal = false;
	};
	const handleDelete = async (email: string) => {
		const { error } = await supabase.from('users').delete().eq('email', `${email}`);
		if (!error) {
			defaultModal = false;
			
			invalidateAll();
		}
	};

	const handleUpdate = async ( email: string ) => {
		const { data, error } = await supabase
			.from('users')
			.update({ verified: productData.category })
			.eq('email', email)
			.select();
		
		invalidateAll()
		
	};

	
	import { goto, invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';

	$: path = $page.url.pathname;

	$: editors  = data.editors;

	$: filteredItems = editors.filter(
		(item) => item.email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
</script>

<div class=" mx-auto">
	{#if $navigating}
		<ListPlaceholder class=" h-[30em]" />
	{:else}
		<div class=" lg:overflow-x-hidden overflow-x-scroll w-full">
			<TableSearch
				placeholder="Search by maker name"
				striped={true}
				hoverable={true}
				bind:inputValue={searchTerm}
			>
				<TableHead>
					<TableHeadCell>S/N</TableHeadCell>
					<TableHeadCell>Email</TableHeadCell>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell>Status</TableHeadCell>
					<TableHeadCell>Manage</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each filteredItems as item, idx}
						<TableBodyRow>
							<TableBodyCell>{idx + 1}</TableBodyCell>
							<TableBodyCell>{item['email']}</TableBodyCell>
							<TableBodyCell>{item['first_name']} {item['last_name']}</TableBodyCell>
							<TableBodyCell>
								{#if item['verified'] == true}
									<Button class=" text-emerald-500 border-2 w-fit p-3 border-emerald-600 rounded-md"
										>Verified</Button
									>
								{:else}
									<Button class=" text-red-500 border-2 border-red-600 w-fit p-3 rounded-md"
										>Un-Verified</Button
									>
								{/if}
							</TableBodyCell>
							<TableBodyCell>
								<div class=" flex items-center space-x-4">
									<button on:click={() => (defaultUpdateModal = true)}>
										<EditOutline class=" text-blue-500" />
									</button>
									<button on:click={() => (defaultModal = true)}>
										<TrashBinOutline class=" text-red-500" />
									</button>
								</div>
							</TableBodyCell>
						</TableBodyRow>
						<Modal title="" bind:open={defaultModal} autoclose size="sm" class="w-full">
							<svg
								class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
									clip-rule="evenodd"
								/></svg
							>
							<p class="mb-4 text-gray-500 dark:text-gray-300 text-center">
								Are you sure you want to delete this item?
							</p>
							<div class="flex justify-center items-center space-x-4">
								<Button color="light" on:click={handleCancel}>No, cancel</Button>
								<Button color="red" on:click={() => handleDelete(item['email'])}
									>Yes, I'm sure</Button
								>
							</div>
						</Modal>
						<Modal title="Edit Account" bind:open={defaultUpdateModal} autoclose class="min-w-full">
							<form >
								<div class="grid gap-4 mb-4 sm:grid-cols-2">
									<div>
										<Label for="f_name" class="mb-2">First Name</Label>
										<Input
											type="text"
											name="f_name"
											id="f_name"
											placeholder=""
											value={item['first_name']}
											required
										/>
									</div>
									<div>
										<Label for="l_name" class="mb-2">Last Name</Label>
										<Input
											type="text"
											id="l_name"
											name="l_name"
											placeholder=""
											value={item['last_name']}
											required
										/>
									</div>
									<div>
										<Label for="email" class="mb-2">Email</Label>
										<Input
											type="text"
											id="email"
											name="email"
											placeholder=""
											value={item['email']}
											required
										/>
									</div>
									<div>
										<Label
											>Verification
											<Select class="mt-2" {items} bind:value={productData.category} required />
										</Label>
									</div>

									<div class="flex items-center space-x-4">
										<Button on:click={() => handleUpdate(item['email'])}  color="blue" type="submit" class="w-64" 
											>Update Info</Button
										>
									</div>
								</div>
							</form>
						</Modal>
					{/each}
				</TableBody>
			</TableSearch>
		</div>
	{/if}
</div>
