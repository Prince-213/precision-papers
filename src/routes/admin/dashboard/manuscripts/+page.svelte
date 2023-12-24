<script lang="ts">
	import { goto } from '$app/navigation';
	import UsersLine from '../../../../components/UsersLine.svelte';
	

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
    
	}

	export let data;

	import { navigating } from '$app/stores';

	import { Checkbox, ListPlaceholder, WidgetPlaceholder } from 'flowbite-svelte';

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

	const { manuscripts } = data;

	console.log(manuscripts)

	let items = [
		{ id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
		{ id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
		{ id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
		{ id: 4, maker: 'Saab', type: 'IJK', make: 2020 }
	];
	$: filteredItems = manuscripts.filter(
		(item) => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
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
					<TableHeadCell class="!p-4"></TableHeadCell>
					<TableHeadCell>Title</TableHeadCell>
					<TableHeadCell>Subject Area</TableHeadCell>
					<TableHeadCell>Date</TableHeadCell>
					<TableHeadCell>Manage</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each filteredItems as item}
						<TableBodyRow>
							<TableBodyCell><Checkbox /></TableBodyCell>
							<TableBodyCell>{item.title}</TableBodyCell>
							<TableBodyCell>{item['subject_area']}</TableBodyCell>
							<TableBodyCell>{item['created_at']}</TableBodyCell>
						
							
							<TableBodyCell>
								<div class=" flex items-center space-x-4">
									<button on:click={() => goto(`/admin/manuscript/${item['journal_id']}`)} >
										<EditOutline class=" text-blue-500" />
									</button>
									<button>
										<TrashBinOutline class=" text-red-500" />
									</button>
									
									
								</div>
							</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</TableSearch>
		</div>
	{/if}
</div>
