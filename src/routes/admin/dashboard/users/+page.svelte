<script lang="ts">
	import {
		Button,
		Modal,
		Label,
		Input,
		Checkbox,
		Textarea,
		ListPlaceholder,
		Spinner
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

	import { MailBoxSolid, PapperPlaneOutline } from 'flowbite-svelte-icons';
	import emailjs from '@emailjs/browser';

	let searchTerm = '';

	$: subscribers = data.subscribers;

    $: authors = data.authors;

	let items = [
		{ id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
		{ id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
		{ id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
		{ id: 4, maker: 'Saab', type: 'IJK', make: 2020 }
	];
	$: filteredItems = subscribers.filter(
		(item) => item.email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

    $: filteredAuths = authors.filter(
		(item) => item.author_email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

    let subject = '';

	let message = '';

	$: sending = false;

	const sendMail = async () => {
		try {
			
			if (recipient != 'Everyone') {
				sending = true;
				await emailjs.send('service_066spww', 'template_a3jpj1k', {
					to_name: recipient,
					message: `Subject: ${subject} \n 
                            ${message}`,
					reply_to: recipient,
					
				}, '_VUsFZj_ItEgocPVw');
			} else {
				sending = true;
				await emailjs.send('service_066spww', 'template_a3jpj1k', {
					to_name: filteredItems.map((name) => `${name.email}`).join(','),
					message: `Subject: ${subject} \n 
                            ${message}`,
					reply_to: recipient,
					
				}, '_VUsFZj_ItEgocPVw');
			}
		} catch (error) {
			console.log(error)
		} finally {
			sending = false;
		}
	};

	$: recipient = '';
</script>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
	<form on:submit|preventDefault={sendMail} class="flex flex-col space-y-6 items-center">
		<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Email Broadcast</h3>
		<Label class=" w-full">
			<span>To</span>
			<div class=" w-full bg-[#61616150] rounded-md p-4">
				<p class=" text-gray-600 font-semibold">{recipient}</p>
			</div>
		</Label>

		<Label class="space-y-2 w-full">
			<span>Subject</span>
			<Input type="text" bind:value={subject} name="subject" placeholder="subject"/>
		</Label>

		<div class=" w-full">
			<Label class=" w-full mb-2" for="textarea-id">Your message</Label>
			<Textarea
				class=" w-full"
				id="textarea-id"
				placeholder="Your message"
				rows="4"
				bind:value={message}
				name="message"
			/>
		</div>

		<Button
			type="submit"
			class=" flex items-start space-x-4 w-fit text-black-100 border-2 border-black-100 rounded-md"
		>
			<p>Send</p>
			{#if sending}
			<Spinner currentColor="black" class={` w-6 h-6 `} currentFill="white" />
			{:else}
				<PapperPlaneOutline class=" -translate-y-1 rotate-45" />
			{/if}
		</Button>
	</form>
</Modal>
<div class=" mx-auto">
	{#if $navigating}
		<ListPlaceholder class=" h-[30em]" />
	{:else}
		<div class=" w-full justify-end flex">
			<Button
				on:click={() => {
					recipient = 'Everyone';
					formModal = true;
				}}
				class=" text-black-100 border-2 border-black-100 rounded-md"
			>
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
					<TableHeadCell>Id</TableHeadCell>
					<TableHeadCell>Email</TableHeadCell>
					<TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Status</TableHeadCell>
					<TableHeadCell>Manage</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each filteredItems as item, idx}
						<TableBodyRow class=" font-medium">
							<TableBodyCell>{idx + 1}</TableBodyCell>
							<TableBodyCell>{item['email']}</TableBodyCell>
							<TableBodyCell>{item['first_name']}{item['last_name']}</TableBodyCell>
                            <TableBodyCell class=" uppercase">{item['role']}</TableBodyCell>
							<TableBodyCell>
								<div class=" flex items-center space-x-4">
									<button
										on:click={() => {
											recipient = item['email'];
											formModal = true;
										}}
									>
										<MailBoxSolid class=" text-blue-500" />
									</button>
								</div>
							</TableBodyCell>
						</TableBodyRow>
					{/each}
                    {#each filteredAuths as item, idx}
						<TableBodyRow class=" font-medium">
							<TableBodyCell>{filteredItems.length + 1 + idx}</TableBodyCell>
							<TableBodyCell>{item['author_email']}</TableBodyCell>
							<TableBodyCell>{item['main_author']}</TableBodyCell>
                            <TableBodyCell class=" font-medium uppercase">{item['role']}</TableBodyCell>
							<TableBodyCell>
								<div class=" flex items-center space-x-4">
									<button
										on:click={() => {
											recipient = item['author_email'];
											formModal = true;
										}}
									>
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
