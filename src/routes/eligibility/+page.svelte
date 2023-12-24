<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import background from '$lib/assets/images/pexels-marc-mueller-380769.jpg';
	import aim from '$lib/assets/images/pexels-lukas-590041.jpg';
	import review from '$lib/assets/images/pexels-lukas-669621.jpg';

	import {
		CheckOutline,
		ChevronRightSolid,
		FacebookSolid,
		EnvelopeOutline,
		GlobeOutline,
        StarOutline
	} from 'flowbite-svelte-icons';

	const benefits = [
		'You can add your role as a Reviewer for the International Journal Of Real-Time Applications And Computing Systems (IJORTACS) through Art to their CV.',
		'This work helps to add in and provides a better way to create your identity as a well-known expert in your field and may lead to increased invitations to speak at conferences or demand for invited research of your specialized area.',
		'You will be among the contributors who will shape and decide the urgent ways as required with changing societal needs.',
		'Your ideas and subject inputs may help in arranging special issues as per topics of your interest and choice.',
		'You will come across the latest research before everyone else and gives you a position of leadership in your research community.',
		'The editors could enjoy discounts on Article Processing Charges if they publish articles in IJORTACS Journals.'
	];

	const processes = [
		'2 year research or working experience in the related areas with Ph.D./Master Degree.',
		'Relevant working experience is preferred.',
		'The applicant should have a minimum of 10 papers, published with high impact journals and must be available for verification on demand.'
	];

	const team = [
		{
			name: 'Engr. Prof. Hank Anaukwu K.',
			role: 'Editor in Chief',
			site: 'info@ijortacs.com',
			mail: 'cejeneral@yahoo.com'
		},

		{
			name: 'Prof. Lee Richards',
			role: 'Journal Manager',
			site: 'lee.richpoint@mit.edu.uk',
			mail: '#'
		},

		{
			name: 'Prof. Mark Williamson H.',
			role: 'Editor',
			site: 'markscholar@mit.edu.uk',
			mail: '#'
		},

		{
			name: 'Prof. Akpan Linus J.',
			role: 'Editor',
			site: '#',
			mail: 'akpanjonas@gmail.com'
		}
	];
</script>

<div class=" font-poppins w-full min-h-screen py-[10vh]">
	<div class="main w-full h-[60vh] bg-center bg-cover flex items-center">
		<div class=" text-white w-[40%] space-y-6 ml-[10%] ">
			<h1 class=" text-4xl font-medium">Eligibility Info</h1>
			<h3 class=" text-lg">One of the world's largest fully open access journal publishers. We believe in openness, in scholarly publishing and research communication.</h3>
			<button class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-lg rounded-md w-[60%] text-left p-5">
				<p>Publish with us</p>
				<ChevronRightSolid />
			</button>
		</div>
	</div>

	<div class=" w-[80%] py-10 mx-auto">
		<div class=" space-y-5">
			<h1 class=" text-3xl font-semibold">Eligibility Info and Benefits</h1>
			<div class=" relative w-full space-y-5 lg:space-y-20">
				<div class=" w-full lg:flex items-center relative">
					<img class=" lg:w-[70%] rounded-md h-auto" alt="" src={review} />

					<div
						class=" rounded-md shadow-lg shadow-gray-500 py-5 lg:py-10 lg:w-[55%] right-0 lg:absolute space-y-5 px-5 bg-blue-200 opacity-95"
					>
						<h1 class=" text-3xl font-semibold">Peer Review Process</h1>
						<div class=" space-y-3">
							{#each processes as process}
								<div class=" flex items-center space-x-3">
									<CheckOutline />
									<p class=" text-base text-gray-700">
										{process}
									</p>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
			<br />

			<div class=" relative w-full space-y-5 lg:space-y-20">
				<div class=" w-full lg:flex-row-reverse lg:flex items-center relative">
					<img class=" lg:w-[70%] rounded-md h-auto" alt="" src={aim} />

					<div
						class=" rounded-md shadow-lg shadow-gray-500 py-5 lg:py-10 lg:w-[55%] left-0 lg:absolute space-y-5 px-5 bg-blue-200 opacity-95"
					>
						<h1 class=" text-3xl font-semibold">Peer Review Process</h1>
						<div class=" space-y-3">
							{#each benefits as process}
								<div class=" border-b-2 border-gray-400 pb-2 flex  space-x-3">
									
									<p class=" text-base text-gray-700">
										{process}
									</p>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		background-image: url('../../lib/assets/images/pexels-pixabay-256381.jpg');
		background-color: rgba(27, 26, 26, 0.251);
		background-blend-mode: multiply;
	}

	.card {
		backdrop-filter: blur(3px) saturate(200%);
		-webkit-backdrop-filter: blur(3px) saturate(200%);
		background-color: rgba(17, 25, 40, 0.71);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.125);
	}
</style>
