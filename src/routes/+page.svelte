<script lang="ts">
	export let data;

	import ProcessCard from './../components/ProcessCard.svelte';
	import Particle from './../components/Particle.svelte';

	import { lazyLoad } from '$lib/data/lazyLoad';

	import Icon from '@iconify/svelte';

	import think from '$lib/assets/images/pexels-pavel-danilyuk-8438918.jpg';

	import initial from '$lib/assets/images/florid-student-studying-and-taking-notes.gif';

	import reviewprocess from '$lib/assets/images/techny-artificial-intelligence-on-tablet-screen.gif';

	import check from '$lib/assets/images/techny-searching-for-a-file-in-a-folder.gif';

	import final from '$lib/assets/images/martina-boy-working-on-computer-with-checklist.gif';

	import verified from '$lib/assets/images/beam-check-mark-in-a-circle.gif';

	import result from '$lib/assets/images/network-current-biotech-research-and-discoveries.gif';

	import online from '$lib/assets/images/isometric-cloud-computing-and-virtualization-technology.gif';

	import work from '$lib/assets/images/pexels-pavel-danilyuk-8438922.jpg';

	import write from '$lib/assets/images/6642641.jpg';

	import { reveal } from 'svelte-reveal';

	import {
		ChevronRightSolid,
		PenNibOutline,
		PenToSquareSolid,
		PapperPlaneOutline,
		BookOutline
	} from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';

	import { navigating } from '$app/stores';
	import Loader from '../components/Loader.svelte';

	import anotherDeep from '$lib/assets/images/pexels-google-deepmind-18069239.jpg'

	const process = [
		{
			gif: initial,
			title: 'Initial Submission',
			description:
				'Vestibulum lacinia arcu eget nulla taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
		},
		{
			gif: check,
			title: 'Plegiarism Check with Turnitin Software',
			description:
				'Vestibulum lacinia arcu eget nulla taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
		},
		{
			gif: reviewprocess,
			title: 'Review Process',
			description:
				'Vestibulum lacinia arcu eget nulla taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
		},
		{
			gif: result,
			title: 'Review Result',
			description:
				'Vestibulum lacinia arcu eget nulla taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
		},
		{
			gif: verified,
			title: 'If Verified & Confirmed',
			description:
				'Vestibulum lacinia arcu eget nulla taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
		},
		{
			gif: final,
			title: 'Registration & Final Submission',
			description:
				'Vestibulum lacinia arcu eget nulla taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
		},
		{
			gif: online,
			title: 'Online Publication',
			description:
				'Vestibulum lacinia arcu eget nulla taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
		}
	];

	let blog = data.blog;

	const convertDate = (input: string) => {
		const inputDateString = input;
		const inputDate = new Date(inputDateString);
		const options = { year: 'numeric', month: 'short', day: 'numeric' };
		const formattedDate = inputDate.toLocaleDateString('en-US', options);

		return formattedDate
	};

	const title = ['Welcome', 'To', 'Precision', 'Chronicles'];

	const posters = [
		{
			short: 'ccs',

		}
	]
</script>

<svelte:head>
	<title>PRECISION CHRONICLES</title>
	<meta
		name="Precision chronicles homepage"
		content="Welcome to Precision Chronicles, a distinguished hub for academic excellence and scholarly discourse. As a premier organization dedicated to the dissemination of cutting-edge research."
	/>
	<meta
		name="keywords"
		content="Precision Chronicles, precision chronicles, precisionchronicles, precision, journals, precision journals, articles, Precision chronicles, precision Chronicles, Academic Journals,
	Scholarly Publications,
	Research Papers,
	Manuscript Submission,
	Precision Chronicles,
	Journal Articles,
	Peer-reviewed Journals,
	Scholarly Writing,
	Academic Publishing,
	Manuscript Review,
	Submission Guidelines,
	Editorial Process,
	Open Access Journals,
	Research Manuscripts,
	Scholarly Communication,
	Publication Platform,
	Author Guidelines,
	Journal Submission System,
	Research Article Submission,
	Editorial Board."
	/>
</svelte:head>

{#if $navigating}
	<Loader />
{:else}
	<div class=" w-full">
		<div class="main w-full flex pt-[15%] pb-[18vh] lg:pt-[0%] bg-cover overflow-x-hidden">
			<div
				use:reveal={{ transition: 'blur' }}
				class=" card w-[95%] lg:w-[60%] mx-auto flex items-center py-8 lg:py-10 h-fit mt-[10%] lg:mt-[8%] lg:ml-[6%] overflow-hidden"
			>
				<div class=" w-[90%] space-y-10 mx-auto">
					<div class=" w-[90%] gap-4 flex flex-wrap lg:flex-nowrap">
						{#each title as heading, idx}
							<h1
								use:reveal={{ transition: 'fly', y: 100, delay: (idx + 2) * 250 }}
								class=" text-white font-extrabold font-nova text-4xl lg:text-5xl"
							>
								{heading}
							</h1>
						{/each}
					</div>

					<p class=" text-justify font-poppins font-medium lg:text-lg w-[90%] text-gray-300">
						Open Access publishing for the scientific community Maximizing the impact of research
						through openness. Because science works best when research is open.
					</p>
					<div class=" w-full flex justify-between items-center">
						<button
							on:click={() => goto('/journals')}
							class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-sm lg:text-lg rounded-md w-[48.5%] text-left p-5"
						>
							<p>Our Jounals</p>
							<ChevronRightSolid />
						</button>
						<button
							on:click={() => goto('/initial-manuscript-submission')}
							class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-sm lg:text-lg rounded-md w-[48.5%] text-left p-5"
						>
							<p>Publish</p>
							<ChevronRightSolid />
						</button>
					</div>
				</div>
			</div>
			<Particle />
		</div>
		<div class=" relative w-full z-50 bg-slate-50 py-4 lg:py-10">
			<div
				class=" w-[90%] lg:flex lg:flex-row flex flex-col lg:justify-between lg:items-strech space-y-5 mx-auto"
			>
				<div class=" min-h-[40vh] think w-full lg:w-[40%] overflow-hidden rounded-md"></div>

				<div class=" flex flex-col lg:items-start items-center lg:w-[57%] text-center lg:text-left">
					<h3 class=" uppercase text-xl font-medium">you know about us</h3>
					<br />
					<h1 class=" mb-4 text-3xl font-semibold">Science, is Necessary</h1>
					<p use:reveal class=" text-lg text-justify text-gray-800 mb-4">
						Welcome to Precision Chronicles, a distinguished hub for academic excellence and
						scholarly discourse. As a premier organization dedicated to the dissemination of
						cutting-edge research, we take pride in our commitment to fostering intellectual
						curiosity and advancing knowledge across various disciplines. At Precision Papers, our
						primary mission is to publish high-quality academic journals that showcase
						groundbreaking research and contribute to the global academic community.
					</p>
					<p use:reveal class=" text-justify">
						Our platform serves as a beacon for researchers, scholars, and academics seeking a
						reputable avenue to share their innovative work with the world. With a rigorous
						peer-review process, we ensure the utmost accuracy, integrity, and precision in every
						publication. Precision Chronicles stands at the forefront of academic publishing,
						providing a space where original contributions thrive and intellectual boundaries are
						pushed. As a testament to our commitment to excellence, our journals span diverse
						fields, from the sciences and humanities to technology and social sciences, catering to
						the varied interests and expertise of our esteemed contributors. Explore Precision
						Papers to embark on a journey of discovery, where each page unfolds new insights,
						challenges established norms, and contributes to the collective wisdom of the academic
						community. Join us in our dedication to precision, excellence, and the pursuit of
						knowledge that transcends boundaries.
					</p>
				</div>
			</div>
		</div>

		<div class=" hidden relative w-full z-50 bg-slate-50 py-4 lg:py-10">
			<div
				class=" w-[90%] mx-auto flex flex-col lg:flex-row lg:flex lg:justify-between lg:items-center"
			>
				<div class=" space-y-5">
					<div class=" pl-10 py-4 border-l-[3px] border-blue-500">
						<h1 class=" lg:text-lg font-semibold">OUR WORK</h1>
					</div>
					<img src={work} alt="" class=" h-[350px]" />
				</div>
				<div class=" w-full lg:w-[60%] space-y-8">
					<h1 class=" text-3xl mt-5 lg:mt-0 lg:text-[2.5em]">
						Lorem ipsum consectetur adipiscing elit.
					</h1>
					<h2 class=" text-justify text-lg lg:text-2xl text-gray-500">
						Fusce nec tellus sed augue semper porta lacinia arcu eget nullat taciti sociosqu ad
						litora torquent per conubia nostra.
					</h2>
					<div class=" lg:h-1"></div>
					<div class=" w-full space-y-6 lg:space-y-0 lg:flex lg:justify-between">
						<div class=" space-y-5 lg:w-[30%]">
							<h1 class=" font-medium text-3xl">Our Officer</h1>
							<p class=" text-xl text-gray-500 mb-4">
								Class aptent taciti sociosqu ad litora torquent.
							</p>

							<button class=" py-4 px-12 rounded-full font-medium border-2 border-blue-500">
								View More
							</button>
						</div>
						<div class=" space-y-5 lg:w-[30%]">
							<h1 class=" font-medium text-3xl">Our Scientist</h1>
							<p class=" text-xl text-gray-500 mb-4">
								Class aptent taciti sociosqu ad litora torquent.
							</p>

							<button class=" py-4 px-12 rounded-full font-medium border-2 border-blue-500">
								View More
							</button>
						</div>
						<div class=" space-y-5 lg:w-[30%]">
							<h1 class=" font-medium text-3xl">Our Director</h1>
							<p class=" text-xl text-gray-500 mb-4">
								Class aptent taciti sociosqu ad litora torquent.
							</p>

							<button class=" py-4 px-12 rounded-full font-medium border-2 border-blue-500">
								View More
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class=" relative w-full z-50 bg-white py-4 lg:py-10">
			<div class=" w-[90%] mx-auto flex flex-col items-center text-center">
				<h1 class=" lg:text-xl font-medium">TRENDING JOURNALS</h1>
				<h1 class=" lg:text-4xl font-semibold">Show About Our Latest Published Journals</h1>
				<div class=" space-y-6 lg:space-y-0 w-full lg:flex lg:justify-between mt-10">
					{#each blog as item}
						<div class=" text-left  lg:w-[32%] space-y-3">
							<img src={ item.category == 'ccs' ? work : anotherDeep} alt="" class=" w-full h-[300px] rounded-md" />
							<div class=" w-full flex items-center justify-between">
								
								<p>{item.main_author}</p>
							</div>
							
							<h2 class=" lg:text-xl font-semibold truncate">{item.title}</h2>
							<p class=" text-justify truncate">
								{item.intro}
							</p>
							<p class=" text-left lg:text-base font-medium text-gray-400">{ convertDate(item.created_at) }</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class=" relative w-full z-20 py-4 lg:py-10">
			<div
				class=" w-[90%] lg:flex lg:flex-row-reverse flex flex-col lg:justify-between lg:items-strech space-y-5 mx-auto"
			>
				<div use:reveal class=" min-h-[40vh] w-full lg:w-[45%] overflow-hidden rounded-md">
					<img src={write} alt="" />
				</div>

				<div class=" flex flex-col lg:items-start items-center lg:w-[50%] text-center lg:text-left">
					<h3 class=" mb-10 uppercase text-xl font-medium">
						A Comprehensive Guide to Science Communication
					</h3>

					<p class=" text-gray-800 mb-4 text-justify">
						The research journey does not end when a paper is published. It is then that the work of
						helping others discover and understand the research begins. To help you be successful in
						this stage of your journey is why we, in collaboration with leading science
						communicators, created this science communication guide.
					</p>
					<p class=" text-justify">
						A Comprehensive Guide to Science Communication is a free resource available to read and
						use by anyone, anywhere in the world that can serve as a tool for you to increase
						visibility and thus maximize the impact of your work.
					</p>
					<button
						class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-sm lg:text-lg rounded-md w-[60%] mt-10 text-left p-6"
					>
						<p>Our Jounals</p>
						<ChevronRightSolid />
					</button>
				</div>
			</div>
		</div>
		<div class=" relative w-full z-20 py-4 lg:py-10">
			<div
				class=" w-[80%] lg:flex lg:flex-row lg:items-center flex flex-col lg:justify-between space-y-5 mx-auto"
			>
				<div class=" lg:w-[50%] lg:border-r-2 lg:pr-32">
					<h1 class=" text-3xl mb-8 font-medium lg:pl-14">For authors</h1>
					<div class=" flex space-x-10">
						<PenNibOutline strokeWidth=".5" class=" w-14 h-14" />
						<div>
							<p class=" text-justify">
								With the researcher at the heart of the publishing experience, we have created a
								diverse portfolio of peer-reviewed, open access journals across a wide range of
								scientific and medical disciplines. Choose the journal that fits your niche.
							</p>
							<button
								on:click={() => goto('/initial-manuscript-submission')}
								class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-sm lg:text-lg rounded-md w-full mt-10 text-left p-5"
							>
								<p>Publish with us</p>
								<ChevronRightSolid />
							</button>
						</div>
					</div>
				</div>

				<div class=" lg:w-[50%] lg:pl-24">
					<h1 class=" text-3xl mb-8 font-medium pl-14">For publishers</h1>
					<div class=" flex space-x-10">
						<BookOutline strokeWidth=".5" class=" w-14 h-14" />
						<div>
							<p class=" text-justify">
								With the researcher at the heart of the publishing experience, we have created a
								diverse portfolio of peer-reviewed, open access journals across a wide range of
								scientific and medical disciplines. Choose the journal that fits your niche.
							</p>
							<button
								on:click={() => goto('/apply-as-reviewer')}
								class=" text-sm bg-blue-500 flex justify-between items-center text-white font-semibold lg:text-lg rounded-md w-full mt-10 text-left p-5"
							>
								<p>Partner with us</p>
								<ChevronRightSolid />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.main {
		background-image: url('../lib/assets//images/pexels-google-deepmind-17483811.jpg');
		background-color: rgba(96, 155, 245, 0.162);
		background-blend-mode: multiply;
		background-position: center;
	}

	.think {
		background-image: url('../lib/assets//images/pexels-google-deepmind-17483848.jpg');
		background-color: transparent;
		background-blend-mode: multiply;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}

	.card {
		backdrop-filter: blur(3px) saturate(200%);
		-webkit-backdrop-filter: blur(3px) saturate(200%);
		background-color: rgba(17, 25, 40, 0.695);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.048);
		z-index: 99;
	}
</style>
