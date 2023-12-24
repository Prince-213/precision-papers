<script lang="ts">
	import {
		Button,
		Modal,
		Label,
		Input,
		Checkbox,
		Textarea,
		ListPlaceholder
	} from 'flowbite-svelte';
	let formModal = false;

	import { navigating } from '$app/stores';

	import EmailLine from '../../../../components/EmailLine.svelte';
	export let data;

	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch
	} from 'flowbite-svelte';

	import { MailBoxSolid, PapperPlaneOutline } from 'flowbite-svelte-icons'
	let searchTerm = '';

	const { subscribers } = data;

	console.log(searchTerm);

	let items = [
		{ id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
		{ id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
		{ id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
		{ id: 4, maker: 'Saab', type: 'IJK', make: 2020 }
	];
	$: filteredItems = subscribers.filter(
		(item) => item.email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

	$: recipient = ''
</script>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
	<form class="flex flex-col space-y-6 items-center" action="#">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Email Broadcast</h3>
		<Label class=" w-full">
			<span>To</span>
			<div class=" w-full bg-[#61616150] rounded-md p-4">
				<p class=" text-gray-600 font-semibold">{recipient}</p>
			</div>
		</Label>

		<Label class="space-y-2 w-full">
			<span>Subject</span>
			<Input type="text" name="subject" placeholder="subject" required />
		</Label>

		<div class=" w-full">
			<Label class=" w-full mb-2" for="textarea-id" >Your message</Label>
			<Textarea class=" w-full" id="textarea-id" placeholder="Your message" rows="4" name="message" />
		</div>

		<Button  class=" flex items-start space-x-4 w-fit text-black-100 border-2 border-black-100 rounded-md"> <p>Send</p> <PapperPlaneOutline class=" -translate-y-1 rotate-45" /></Button>
	</form>
</Modal>
<div class=" mx-auto">
	{#if $navigating}
		<ListPlaceholder class=" h-[30em]"/>
	{:else}

		<div class=" w-full justify-end flex">
			<Button on:click={
				() => {
						recipient = "Everyone"
						formModal = true
					}
				} class=" text-black-100 border-2 border-black-100 rounded-md">
				Broadcast Mail
			</Button>
		</div>
		
		
		<div class=" lg:overflow-x-hidden overflow-x-scroll w-full">
			<TableSearch
				placeholder="Search by maker name"
				striped={true}
				hoverable={true}
				bind:inputValue={searchTerm}
			>
				<TableHead>
					<TableHeadCell class="!p-4"></TableHeadCell>
					<TableHeadCell>Id</TableHeadCell>
					<TableHeadCell>Email</TableHeadCell>
					<TableHeadCell>Date</TableHeadCell>
					<TableHeadCell>Manage</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each filteredItems as item}
						<TableBodyRow>
							<TableBodyCell><Checkbox /></TableBodyCell>
							<TableBodyCell>{item.id}</TableBodyCell>
							<TableBodyCell>{item['email']}</TableBodyCell>
							<TableBodyCell>{item['created_at']}</TableBodyCell>

							<TableBodyCell>
								<div class=" flex items-center space-x-4">
									<button on:click={
										() => {
												recipient = item['email']
												formModal = true
											}
										}>
										<MailBoxSolid class=" text-blue-500" />
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
