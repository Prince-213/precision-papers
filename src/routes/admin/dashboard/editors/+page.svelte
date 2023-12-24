<script lang="ts">
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

	import { Button, Checkbox, ListPlaceholder, WidgetPlaceholder } from 'flowbite-svelte';

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

	const { editors } = data;

	console.log(editors)

	
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
					<TableHeadCell class="!p-4"></TableHeadCell>
                    <TableHeadCell>S/N</TableHeadCell>
					<TableHeadCell>Email</TableHeadCell>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell>Status</TableHeadCell>
                    <TableHeadCell>Manage</TableHeadCell>
					
				</TableHead>
				<TableBody>
					{#each filteredItems as item, idx}
						<TableBodyRow>
							<TableBodyCell><Checkbox /></TableBodyCell>
							<TableBodyCell>{idx + 1}</TableBodyCell>
							<TableBodyCell>{item['email']}</TableBodyCell>
							<TableBodyCell>{item['first_name']} {item['last_name']}</TableBodyCell>
							<TableBodyCell>
                                {#if item['status'] == true }
                                    <Button class=" text-emerald-500 border-2 w-fit p-3 border-emerald-600 rounded-md">Verified</Button>
                                    {:else}
                                    <Button class=" text-red-500 border-2 border-red-600 w-fit p-3 rounded-md">Un-Verified</Button>
                                {/if}
                                
                            </TableBodyCell>
							<TableBodyCell>
								<div class=" flex items-center space-x-4">
									<button>
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
