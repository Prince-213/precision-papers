<script lang="ts">
	import type { PageData } from './$types';


	import background from '$lib/assets/images/pexels-marc-mueller-380769.jpg';
	import aim from '$lib/assets/images/pexels-lukas-590041.jpg';
	

	import { navigating } from '$app/stores';

	import {
		
		EnvelopeOutline,
		GlobeOutline,
		ChevronRightSolid
	} from 'flowbite-svelte-icons';
	import { CheckCheckIcon } from 'lucide-svelte';
	import Loader from '../../components/Loader.svelte';

	import { reveal  } from 'svelte-reveal'

	const processes = [
		'Interdisciplinary Approach: We recognize the interconnectedness of various domains and encourage interdisciplinary collaboration, believing that the convergence of ideas leads to groundbreaking innovations.',
		'Quality Peer Review: Rigorous peer review is at the heart of Precision Papers. Our esteemed panel of experts ensures the highest standards of quality, integrity, and validity in the research shared on our platform.',
		'3.	Global Community: Precision Papers serves as a hub for a global community of academics, researchers, and industry professionals. By providing a space for diverse perspectives, we contribute to a richer understanding of the challenges and opportunities within our scope.'
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

	const indexing = [
		'1.	Google Scholar: A freely accessible search engine that indexes scholarly articles across disciplines.',
		'2.	BASE (Bielefeld Academic Search Engine): A multidisciplinary search engine that provides access to academic resources available on the web.',
		'3.	CORE (COnnecting REpositories): Aggregates open access research outputs from repositories and journals worldwide.',
		'4.	JURN: A search engine indexing free and open-access academic journals in arts and humanities.',
		'5.	Microsoft Academic: A free search engine that indexes academic publications, including journals, conferences, and patents.',
		'6.	OpenAIRE: Infrastructure that provides access to open access research outputs and enhances their discoverability.',
		'7.	WorldWideScience: A global science gateway that enables searching of national and international scientific databases.',
		'8.	Bielefeld Academic Search Engine (BASE): A search engine that provides access to scholarly resources, including articles, theses, and conference papers.',
		'9.	FreeFullPDF: A search engine that offers access to millions of free full-text scientific articles.',
		'10.	OpenDOAR (Directory of Open Access Repositories): A directory of academic open access repositories that can enhance discoverability.',
		'11.	ROAD (Directory of Open Access Scholarly Resources): A service offering access to open access research resources.',
		'12.	Directory of Open Access Journals (DOAJ): A directory that indexes and provides access to high-quality, open-access, peer-reviewed journals.',
		'13.	Public Library of Science (PLOS): An open-access publisher that provides free access to a wide range of scientific articles.'
	];
</script>

<svelte:head>
	<title>ABOUT</title>
</svelte:head>

{#if $navigating}
	<Loader />
{:else}
	<div class=" font-poppins w-full min-h-screen ">
		<div class="main w-full h-[60vh] bg-center bg-cover flex items-center">
			<div class=" text-white lg:w-[50%] space-y-6 w-[90%] mx-auto lg:ml-[10%]">
				<h1 use:reveal  class=" text-4xl font-medium">About Us</h1>
				<h3 class=" lg:text-lg text-base">
					Welcome to Precision Papers, a leading platform dedicated to fostering knowledge and
					innovation in the realms of deep learning, power system engineering, control systems,
					communication, cybersecurity, biometric technology, database management systems,
					information security, and biomedical engineering.
				</h3>
				<button
					class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-lg rounded-md w-[60%] text-left p-5"
				>
					<p>Publish with us</p>
					<ChevronRightSolid />
				</button>
			</div>
		</div>

		<div class=" w-[80%] py-10 mx-auto">
			<div class=" space-y-5">
				<h1 use:reveal class=" text-3xl font-semibold">About Us</h1>
				<div class=" relative w-full space-y-5 lg:space-y-20">
					<div use:reveal  class=" w-full lg:flex items-center relative">
						<img class=" lg:w-[70%] rounded-md h-auto" alt="" src={background} />

						<div
							class=" rounded-md shadow-lg shadow-gray-500 py-5 lg:py-10 lg:w-[55%] right-0 lg:absolute space-y-5 px-5 bg-blue-200 opacity-95"
						>
							<h1 class=" text-xl lg:text-3xl font-semibold">About Precision Papers</h1>
							<p class=" lg:text-base text-gray-700">
								Our Mission: At Precision Papers, our mission is to facilitate the exchange of
								cutting-edge research and insights among scholars, researchers, and experts across
								diverse fields. We aim to provide a comprehensive platform that spans the
								interdisciplinary landscape, fostering collaboration and advancements in technology
								and science.
							</p>
						</div>
					</div>
					<br />
					<div use:reveal class=" w-full lg:flex lg:flex-row-reverse items-center relative">
						<img class=" lg:w-[70%] rounded-md h-auto" alt="" src={aim} />

						<div
							class=" rounded-md shadow-lg shadow-gray-500 py-5 lg:py-10 lg:w-[65%] left-0 lg:absolute space-y-5 px-5 bg-blue-200 opacity-95"
						>
							<h1 class=" text-3xl font-semibold">The Aim and Scope</h1>
							<p class=" text-base text-gray-700">
								Scope of Expertise: Precision Papers focuses on a broad spectrum of fields, each
								playing a crucial role in shaping the future of technology and research. From
								unraveling the mysteries of deep learning to optimizing power systems and securing
								information in the digital age, we are committed to offering a platform that
								accommodates the vast scope of contemporary advancements.
							</p>
						</div>
					</div>
					<br />
					<div class=" w-full py-5">
						<h1 class=" font-semibold text-3xl mb-4">What Sets Us Apart:</h1>
						{#each processes as process}
							<div use:reveal  class=" flex items-center space-x-3 mb-3">
								<CheckCheckIcon />
								<p>{process}</p>
							</div>
						{/each}
					</div>
					<div class=" w-full py-5">
						<h1 class=" font-semibold text-3xl mb-4">Join Our Community:</h1>
						<p>
							Whether you're a seasoned researcher, an aspiring scholar, or an industry expert,
							Precision Papers welcomes you to join our community. Share your insights, explore the
							latest advancements, and be part of a network that is dedicated to precision in
							research and technology. Thank you for being part of the Precision Papers community.
							Together, let's shape the future of knowledge and innovation.
						</p>
					</div>
					<div class=" w-full py-5">
						<h1 class=" font-semibold text-3xl mb-4">Indexing</h1>
						{#each indexing as index}
							<p use:reveal class=" font-medium mb-4">{index}</p>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class=" w-full bg-slate-100 mt-8 py-8">
			<div class=" w-[90%] space-y-10 mx-auto">
				<h3 class=" text-3xl font-semibold text-center">Management Teams</h3>
				<div class=" w-full lg:flex lg:space-x-6 space-y-10 lg:space-y-0 justify-between">
					{#each team as item}
						<div
							class=" flex border-b-2 py-5 lg:py-0 lg:border-b-0 space-y-4 flex-col items-center"
						>
							<h2 class=" text-2xl font-semibold">{item.name}</h2>
							<p class=" text-xl font-medium text-gray-700">{item.role}</p>
							<div class=" flex items-center space-x-4">
								<a href={item.site}><GlobeOutline size="xl" /></a>
								<a href={item.mail}><EnvelopeOutline size="xl" /></a>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.main {
		background-image: url('../../lib/assets/images/pexels-pixabay-256381.jpg');
		background-color: rgba(27, 26, 26, 0.444);
		background-blend-mode: multiply;
	}

	
</style>
