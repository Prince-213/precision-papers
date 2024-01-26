<script lang="ts">
	export let data;

	import ProcessCard from './../components/ProcessCard.svelte';
	import Particle from './../components/Particle.svelte';

	import { lazyLoad } from '$lib/data/lazyLoad';

	import work from '$lib/assets/images/pexels-pavel-danilyuk-8438922.jpg';

	import write from '$lib/assets/images/6642641.jpg';

	import { reveal } from 'svelte-reveal';

	import { ChevronRightSolid, PenNibOutline, BookOutline, UserOutline, ClockOutline } from 'flowbite-svelte-icons';
	import { goto } from '$app/navigation';

	import { navigating } from '$app/stores';
	import Loader from '../components/Loader.svelte';

	import anotherDeep from '$lib/assets/images/pexels-google-deepmind-18069239.jpg';

	let blog = data.blog;

	const convertDate = (input: string) => {
		const inputDateString = input;
		const inputDate = new Date(inputDateString);
		const options = { year: 'numeric', month: 'short', day: 'numeric' };
		const formattedDate = inputDate.toLocaleDateString('en-US', options);

		return formattedDate;
	};

	const title = ['Welcome', 'To', 'Precision', 'Chronicles'];
</script>

<svelte:head>
	<title>PRECISION CHRONICLES</title>
	<script>
		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = 'https://www.clarity.ms/tag/' + i + '?ref=bwt';
			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, 'clarity', 'script', 'kocoimrx6u');
	</script>
	<meta
		name="description"
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

		<div class=" relative w-full z-50 bg-white py-4 lg:py-10">
			<div class=" w-[90%] mx-auto flex flex-col items-center text-center">
				<h1 class=" lg:text-xl font-medium">TRENDING JOURNALS</h1>
				<h1 class=" lg:text-4xl font-semibold">Show About Our Latest Published Journals</h1>
				<div class=" lg:grid-cols-3 grid-cols-1 gap-10 w-full grid  mt-10">
					{#each blog as item}
						<a
							href={`/journals/search/${item.category}/paper/${item.journal_id}`}
							data-sveltekit-preload-data="hover"
							class=" text-left flex flex-col justify-between border-2 rounded-md lg:w-[32%] space-y-5"
						>
							<div class=" p-8 pb-2 space-y-4">
								<h2 class=" lg:text-lg font-semibold">{item.title}</h2>

								<div class=" flex items-center space-x-3">
									<p class=" font-medium lg:text-lg">Subject Area:</p>
									<p class=" text-justify font-semibold text-blue-600 line-clamp-2">
										{item.subject_area}
									</p>
								</div>
								

								<div class=" space-y-2">
									<h1 class=" font-medium lg:text-lg">Abstract</h1>
									<p class=" text-justify line-clamp-5">
										{item.intro}
									</p>
								</div>
								
							</div>

							<div class=" border-t-2 space-y-4 text-gray-600 px-8 py-6">
								<div class=" flex items-center space-x-2">
									<UserOutline />
									<p class=" text-left lg:text-base font-medium text-gray-400">
										{item.main_author}
									</p>
								</div>
								<div class=" flex items-center space-x-2">
									<ClockOutline />
									<p class=" text-left lg:text-base font-medium text-gray-400">
										{convertDate(item.created_at)}
									</p>
								</div>
								
							</div>
							
						</a>
					{/each}
					<div></div>
				</div>
			</div>
		</div>
		<div class=" relative w-full z-20 py-4 lg:py-10">
			<div
				class=" w-[90%] lg:flex lg:flex-row-reverse flex flex-col lg:justify-between lg:items-strech space-y-5 mx-auto"
			>
				<div use:reveal class=" min-h-[40vh] w-full lg:w-[45%] overflow-hidden rounded-md">
					<img use:lazyLoad={write} alt="Precision Chronicles comprehensive" />
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
