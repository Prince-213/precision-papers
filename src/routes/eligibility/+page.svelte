<script lang="ts">
	import type { PageData } from './$types';

	

	import background from '$lib/assets/images/pexels-marc-mueller-380769.jpg';
	import aim from '$lib/assets/images/pexels-lukas-590041.jpg';
	import review from '$lib/assets/images/pexels-lukas-669621.jpg';
	import { navigating } from '$app/stores'
	
	import { lazyLoad } from '$lib/data/lazyLoad';
	

	import { reveal } from 'svelte-reveal'

	import {
		CheckOutline,
		ChevronRightSolid,
		FacebookSolid,
		EnvelopeOutline,
		GlobeOutline,
        StarOutline
	} from 'flowbite-svelte-icons';
	import Loader from '../../components/Loader.svelte';

	

	const processes = [
		'2 year research or working experience in the related areas with Ph.D./Master Degree.',
		'Relevant working experience is preferred.',
		'The applicant should have a minimum of 10 papers, published with high impact journals and must be available for verification on demand.'
	];

	
</script>

<svelte:head>
  <title>Eligibility | Precision Chronicles</title>
	<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Eligibility",
      "description": "One of the world's largest fully open access journal publishers. We believe in openness, in scholarly publishing and research communication.",
      "url": "https://www.precisionchronicles.org/eligibility"
    }
  </script>
  <meta name="description" content="One of the world's largest fully open access journal publishers. We believe in openness, in scholarly publishing and research communication." />
  <meta name="keywords" content="eligibilty, our eligibility, company values" />
</svelte:head>

{#if $navigating}
	<Loader />
	{:else}
	<div class=" font-poppins w-full min-h-screen ">
		<div class="main w-full h-[60vh] bg-center bg-cover flex items-center">
			<div class=" text-white lg:w-[40%] space-y-6 w-[95%] mx-auto lg:ml-[10%] ">
				<h1 use:reveal class=" text-4xl font-medium">Eligibility Info</h1>
				<h3 class=" text-justify text-lg">One of the world's largest fully open access journal publishers. We believe in openness, in scholarly publishing and research communication.</h3>
				<button class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-lg rounded-md w-[60%] text-left p-5">
					<p>Publish with us</p>
					<ChevronRightSolid />
				</button>
			</div>
		</div>
	
		<div class=" w-[80%] py-10 mx-auto">
			<div use:reveal  class=" space-y-5">
				<h1 class=" text-3xl font-semibold">Eligibility Info and Benefits</h1>
				<div class=" relative w-full space-y-5 lg:space-y-20">
					<div class=" w-full lg:flex items-center relative">
						<img class=" lg:w-[70%] rounded-md h-auto" alt="review" use:lazyLoad={review} />
	
						<div
							class=" rounded-md shadow-lg shadow-gray-500 py-5 lg:py-10 lg:w-[55%] right-0 lg:absolute space-y-5 px-5 bg-blue-200 opacity-95"
						>
							<h1 class=" text-3xl font-semibold">Peer Review Process</h1>
							<div class=" space-y-3 ">
								{#each processes as process}
									<div class=" flex items-center space-x-3">
										<CheckOutline />
										<p class=" text-justify text-base text-gray-700">
											{process}
										</p>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
				<br />
	
			
			</div>
		</div>
	</div>
{/if}



<style>
	.main {
		background-image: url('../../lib/assets/images/pexels-pixabay-256381.jpg');
		background-color: rgba(27, 26, 26, 0.251);
		background-blend-mode: multiply;
	}

	
</style>
