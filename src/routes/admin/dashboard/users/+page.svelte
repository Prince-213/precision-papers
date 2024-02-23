<script lang="ts">
	import {
		Button,
		Modal,
		Label,
		Input,
		
		Textarea,
		ListPlaceholder,
		Spinner
	} from 'flowbite-svelte';
	let formModal = false;

	import { navigating } from '$app/stores';

	import { Select } from 'flowbite-svelte';
  	let selected;
  	let countries = [
    { value: 'review', name: 'REVIEW MAIL', content: '' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
];

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

	//$: subscribers = data.subscribers;

    let authors = data.authors;

	let items = [
		{ id: 1, maker: 'Toyota', type: 'ABC', make: 2017 },
		{ id: 2, maker: 'Ford', type: 'CDE', make: 2018 },
		{ id: 3, maker: 'Volvo', type: 'FGH', make: 2019 },
		{ id: 4, maker: 'Saab', type: 'IJK', make: 2020 }
	];
	

    $: filteredAuths = authors.filter(
		(item) => item.author_email.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

    let subject = '';

	let message = '';

	$: sending = false;

	//let sumMail = subscribers.map(item => item.email)
	let authMail = authors.map(item => item['author_email'])

	let allEmail = [...authMail]

	const sendMail = async () => {
		try {
			
			if (recipient != 'Everyone') {
				sending = true;
				try {
                const response = await fetch(`/api/email-api/custom`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    email: recipient,
                    content: message,
                    subject: subject
                    }),
                });
        
                const responseData = await response.json();
                console.log(responseData);
            } catch (e) {
                console.error(e);
            }
			} else {
				sending = true;
				try {
                const response = await fetch(`/api/email-api/custom`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    email: allEmail,
                    content: message,
                    subject: subject
                    }),
                });
        
                const responseData = await response.json();
                console.log(responseData);
            } catch (e) {
                console.error(e);
            }
				
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
					
                    {#each filteredAuths as item, idx}
						<TableBodyRow class=" font-medium">
							<TableBodyCell>{idx + 1}</TableBodyCell>
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
