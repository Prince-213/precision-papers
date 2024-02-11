<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	
	import { supabase } from '$lib/supabaseClient';

	import Header from './../../../../components/Header.svelte'

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

	import { navigating } from '$app/stores';

	import { ListPlaceholder } from 'flowbite-svelte';

	import { EditOutline, TrashBinOutline } from 'flowbite-svelte-icons';

	
	import { Button, Modal } from 'flowbite-svelte';
	let defaultModal = false;
	const handleCancel = () => {
		defaultModal = false;
	};

	$: expectedDelete = 'Delete'
	$: journalDelete = ''

	const openModal = (title: any, id: any) => {
		expectedDelete = `Title: ${title} || \n Id: ${id}`;
		journalDelete = id;
		defaultModal = true
	}

	const handleDelete = async (id: any, title: string) => {

		
		const { error } = await supabase.from('journals').delete().eq('journal_id', `${journalDelete}`);
		if (!error) {
			defaultModal = false;
			invalidateAll()
		}
	};

	const summaryDate = ( input: any ) => {
		const inputDateString = input;
		const inputDate = new Date(inputDateString);
		const options = { year: 'numeric', month: 'short', day: 'numeric' };
		const formattedDate = inputDate.toLocaleDateString('en-US', options);

		return formattedDate
	}

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

	$: manuscripts = data.manuscripts;
	
	$: filteredItems = manuscripts.filter(
		(item) => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
</script>

<div class=" mx-auto">
	{#if $navigating}
		<ListPlaceholder class=" h-[30em]" />
	{:else}
		
		<div class=" w-full flex justify-center space-x-4 mx-auto">
			<button class=" p-3 rounded-md bg-red-500 text-white">Pending</button>
			<button class=" p-3 rounded-md bg-yellow-400 text-white">Review</button>
			<button class=" p-3 rounded-md bg-green-500 text-white">Published</button>
		</div>
		<div class=" lg:overflow-x-hidden overflow-x-scroll w-full">
			<TableSearch
				placeholder="Search by maker name"
				striped={true}
				hoverable={true}
				bind:inputValue={searchTerm}
			>
				<TableHead>
					<TableHeadCell>Date</TableHeadCell>
					<TableHeadCell>Title</TableHeadCell>
					<TableHeadCell>Subject Area</TableHeadCell>
					<TableHeadCell>Status</TableHeadCell>
					
					<TableHeadCell>Manage</TableHeadCell>
					<TableHeadCell>Journal Id</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each filteredItems as item}
						<TableBodyRow>
							<TableBodyCell>{ summaryDate(item['created_at']) }</TableBodyCell>
							<TableBodyCell class="  whitespace-pre-wrap"> <h1 class=" w-[80%] ">{item.title}</h1> </TableBodyCell>
							<TableBodyCell class=" whitespace-pre-wrap">{item['subject_area']}</TableBodyCell>
							<TableBodyCell>
								{#if item['state'] == 'pending'}
									<button class=" p-3 rounded-md bg-red-500 text-white">Pending</button>
								{:else if item['state'] == 'review' }
									<button class=" p-3 rounded-md bg-yellow-500 text-white">Review</button>
								{:else}
									<button class=" p-3 rounded-md bg-green-500 text-white">Published</button>
								{/if}
								
							</TableBodyCell>
							

							<TableBodyCell>
								<div class=" flex items-center space-x-4">
									<Button href={`/admin/manuscript/${item['journal_id']}`} >
										<EditOutline class=" text-blue-500" />
									</Button>
									<button on:click={() => openModal(item.title, item['journal_id'])}>
										<TrashBinOutline class=" text-red-500" />
									</button>
								</div>
							</TableBodyCell>

							<TableBodyCell class=" whitespace-pre-wrap">
								<h1>{item['journal_id']}</h1>
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
							<p class=" font-semibold text-red-500 text-center">
								{expectedDelete}
							</p>
							<div class="flex justify-center items-center space-x-4">
								<Button color="light" on:click={handleCancel}>No, cancel</Button>
								<Button color="red" on:click={() => handleDelete(item['journal_id'], item['title'])}
									>Yes, I'm sure</Button
								>
							</div>
						</Modal>
					{/each}
				</TableBody>
			</TableSearch>
		</div>
	{/if}
</div>
