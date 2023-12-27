<script lang="ts">
	import ProcessCard from './../components/ProcessCard.svelte';
	import Particle from './../components/Particle.svelte';

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
</script>

{#if $navigating}
	<Loader />
{:else}
	<div class=" w-full pt-[4%] lg:pt-[2%]">
		<div class="main w-full flex pt-[15%] pb-[18vh] lg:pt-[0%] bg-cover overflow-x-hidden">
			<div
				class=" card w-[95%] lg:w-[60%] flex items-center py-8 lg:py-10 h-fit mt-[10%] lg:mt-[8%] ml-[6%] overflow-hidden"
			>
				<div class=" w-[90%] space-y-10 mx-auto">
					<h1 class=" text-white font-extrabold font-nova text-6xl w-[90%] lg:text-5xl">
						Open Access publishing for the scientific community
					</h1>
					<p class=" font-poppins font-medium lg:text-lg w-[80%] text-gray-300">
						Maximizing the impact of research through openness. Because science works best when
						research is open.
					</p>
					<div class=" w-full flex justify-between items-center">
						<button
							on:click={() => goto('/journals')}
							class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-lg rounded-md w-[48.5%] text-left p-5"
						>
							<p>Our Jounals</p>
							<ChevronRightSolid />
						</button>
						<button
							on:click={() => goto('/initial-manuscript-submission')}
							class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-lg rounded-md w-[48.5%] text-left p-5"
						>
							<p>Publish with us</p>
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
					<p class=" text-lg text-gray-800 mb-4">
						International Journal Of Real-Time Applications And Computing Systems (IJORTACS) is an
						open-source global academic journal focused on the field of science and technology. The
						journal aims to improve the impact of academic research by providing an open platform
						for effective collaborative innovations and reshaping existing knowledge. IJORTACS is
						committed to publishing novel research conducted within the academic scope of science
						and technology. The journal invites scholars from the related disciplines to submit
						their research for peer review and publication, making it a valuable resource for
						researchers in the field.
					</p>
					<p>
						IJORTACS offers a unique opportunity for scholars to showcase their research to a global
						audience. The journal is dedicated to advancing the field of science and technology by
						publishing high-quality research articles that are relevant to the current industry
						trends. With its commitment to open-source access, IJORTACS is making a significant
						contribution to the academic community, enabling researchers to share their work freely
						and fostering collaboration across different disciplines. Through its rigorous
						peer-review process, IJORTACS ensures that only the highest-quality research is
						published, making it a trusted source of information for researchers, academics, and
						practitioners in the field of science and technology.
					</p>
				</div>
			</div>
		</div>
		<div class=" relative w-full z-50 bg-white flex justify-center items-center py-10">
			<div class=" w-full">
				<div class=" text-center space-y-2">
					<h3 class=" text-lg lg:text-3xl font-medium">Biggest Research Formation</h3>
					<h1 class=" text-3xl lg:text-5xl font-semibold">Publication Process Flow</h1>
				</div>
				<div class=" gap-5 w-[90%] mx-auto mt-8 lg:grid-cols-4 grid font-poppins">
					{#each process as pro}
						<ProcessCard gif={pro.gif} title={pro.title} description={pro.description} />
					{/each}
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
					<h2 class=" text-lg lg:text-2xl text-gray-500">
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
		<div class=" hidden relative w-full z-50 bg-white py-4 lg:py-10">
			<div class=" w-[90%] mx-auto flex flex-col items-center text-center">
				<h1 class=" lg:text-xl font-medium">TRENDING BLOGS</h1>
				<h1 class=" lg:text-4xl font-semibold">Show About Our Popular Researches</h1>
				<div class=" space-y-6 lg:space-y-0 w-full lg:flex lg:justify-between mt-10">
					<div class=" lg:w-[32%] space-y-3">
						<img src={think} alt="" class=" w-full h-[300px] rounded-md" />
						<p class=" lg:text-base font-medium text-gray-400">MAR 12, 2022</p>
						<h2 class=" lg:text-2xl font-semibold">New Researches...</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ea inventore fugit
							optio. Eos autem labore dolorum rem perspiciatis dolore quo consectetur! Facilis
							perspiciatis voluptas suscipit qui non tempore aliquid!
						</p>
					</div>
					<div class=" lg:w-[32%] space-y-3">
						<img src={think} alt="" class=" w-full h-[300px] rounded-md" />
						<p class=" lg:text-base font-medium text-gray-400">MAR 12, 2022</p>
						<h2 class=" lg:text-2xl font-semibold">Plant Disease...</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ea inventore fugit
							optio. Eos autem labore dolorum rem perspiciatis dolore quo consectetur! Facilis
							perspiciatis voluptas suscipit qui non tempore aliquid!
						</p>
					</div>
					<div class=" lg:w-[32%] space-y-3">
						<img src={think} alt="" class=" w-full h-[300px] rounded-md" />
						<p class=" lg:text-base font-medium text-gray-400">MAR 12, 2022</p>
						<h2 class=" lg:text-2xl font-semibold">Science Progress...</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ea inventore fugit
							optio. Eos autem labore dolorum rem perspiciatis dolore quo consectetur! Facilis
							perspiciatis voluptas suscipit qui non tempore aliquid!
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class=" relative w-full z-20 py-4 lg:py-10">
			<div
				class=" w-[90%] lg:flex lg:flex-row-reverse flex flex-col lg:justify-between lg:items-strech space-y-5 mx-auto"
			>
				<div class=" min-h-[40vh] w-full lg:w-[45%] overflow-hidden rounded-md">
					<img src={write} alt="" />
				</div>

				<div class=" flex flex-col lg:items-start items-center lg:w-[50%] text-center lg:text-left">
					<h3 class=" mb-10 uppercase text-xl font-medium">
						A Comprehensive Guide to Science Communication
					</h3>

					<p class=" text-gray-800 mb-4">
						The research journey does not end when a paper is published. It is then that the work of
						helping others discover and understand the research begins. To help you be successful in
						this stage of your journey is why we, in collaboration with leading science
						communicators, created this science communication guide.
					</p>
					<p>
						A Comprehensive Guide to Science Communication is a free resource available to read and
						use by anyone, anywhere in the world that can serve as a tool for you to increase
						visibility and thus maximize the impact of your work.
					</p>
					<button
						class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-lg rounded-md w-[50%] mt-10 text-left p-6"
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
				<div class=" w-[50%] border-r-2 pr-32">
					<h1 class=" text-3xl mb-8 font-medium pl-14">For authors</h1>
					<div class=" flex space-x-10">
						<PenNibOutline strokeWidth=".5" class=" w-14 h-14" />
						<div>
							<p>
								With the researcher at the heart of the publishing experience, we have created a
								diverse portfolio of peer-reviewed, open access journals across a wide range of
								scientific and medical disciplines. Choose the journal that fits your niche.
							</p>
							<button
								on:click={() => goto('/initial-manuscript-submission')}
								class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-lg rounded-md w-full mt-10 text-left p-5"
							>
								<p>Publish with us</p>
								<ChevronRightSolid />
							</button>
						</div>
					</div>
				</div>

				<div class=" w-[50%] pl-24">
					<h1 class=" text-3xl mb-8 font-medium pl-14">For publishers</h1>
					<div class=" flex space-x-10">
						<BookOutline strokeWidth=".5" class=" w-14 h-14" />
						<div>
							<p>
								With the researcher at the heart of the publishing experience, we have created a
								diverse portfolio of peer-reviewed, open access journals across a wide range of
								scientific and medical disciplines. Choose the journal that fits your niche.
							</p>
							<button
								on:click={() => goto('/apply-as-reviewer')}
								class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-lg rounded-md w-full mt-10 text-left p-5"
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
		background-color: rgba(36, 36, 36, 0.162);
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
		background-color: rgba(17, 25, 40, 0.882);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.048);
	}

	.neo-btn {
		border-radius: 50px;
		background: #ffffff;
		box-shadow:
			2px 2px 3px #a6a8ad,
			-2px -2px 8px #9da0a5;
	}
</style>
