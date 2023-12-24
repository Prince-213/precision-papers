<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import background from '$lib/assets/images/pexels-marc-mueller-380769.jpg';
	import aim from '$lib/assets/images/pexels-lukas-590041.jpg';
	import review from '$lib/assets/images/pexels-lukas-669621.jpg';

	import {
		CheckOutline,
		FacebookSolid,
		EnvelopeOutline,
		GlobeOutline,
		ChevronRightSolid
	} from 'flowbite-svelte-icons';

	const processes = [
		'Manuscript must be submitted online via the journal webpage.',
		'Plagiarism check is performed (Manuscript must score at most 20%).',
		'A double blind review process is applied.',
		'Manuscript is sent to at least 2 editors for review within 24hours of submission.',
		'Review takes about 3week at most from the date of submission.',
		'Manuscript is sent to the Author after review if accepted/with corrections.',
		'Manuscript is checked for corrections.',
		'Payment for publications',
		'Manuscript is published and online.'
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
			<h1 class=" text-4xl font-medium">About Us</h1>
			<h3 class=" text-lg">One of the world's largest fully open access journal publishers. We believe in openness, in scholarly publishing and research communication.</h3>
			<button class=" bg-blue-500 flex justify-between items-center text-white font-semibold text-lg rounded-md w-[60%] text-left p-5">
				<p>Publish with us</p>
				<ChevronRightSolid />
			</button>
		</div>
	</div>

	<div class=" w-[80%] py-10 mx-auto">
		<div class=" space-y-5">
			<h1 class=" text-3xl font-semibold">About Us</h1>
			<div class=" relative w-full space-y-5 lg:space-y-20">
				<div class=" w-full lg:flex items-center relative">
					<img class=" lg:w-[70%] rounded-md h-auto" alt="" src={background} />

					<div
						class=" rounded-md shadow-lg shadow-gray-500 py-5 lg:py-10 lg:w-[55%] right-0 lg:absolute space-y-5 px-5 bg-blue-200 opacity-95"
					>
						<h1 class=" text-xl lg:text-3xl font-semibold">
							International Journal Of Real-Time Applications And Computing Systems (IJORTACS)
						</h1>
						<p class=" lg:text-base text-gray-700">
							International Journal Of Real-Time Applications And Computing Systems (IJORTACS) is an
							emerging open source access global academic journal in the field of science and
							technology which deals with all facets in the related fields. The aim is to improve
							academic research impact through open source, for effective collaborative innovations
							and reshaping existing knowledge. IJORTACS focused on publishing novel research
							conducted within the academic scope of science and technology. It therefore invites
							scholars from the related discipline to submit their research for peer review and
							publication.
						</p>
					</div>
				</div>
				<br />
				<div class=" w-full lg:flex lg:flex-row-reverse items-center relative">
					<img class=" lg:w-[70%] rounded-md h-auto" alt="" src={aim} />

					<div
						class=" rounded-md shadow-lg shadow-gray-500 py-5 lg:py-10 lg:w-[65%] left-0 lg:absolute space-y-5 px-5 bg-blue-200 opacity-95"
					>
						<h1 class=" text-3xl font-semibold">The Aim and Scope</h1>
						<p class=" text-base text-gray-700">
							The aim is to improve academic research impact through open source, for effective
							collaborative innovations and reshaping existing knowledge. IJORTACS focused on
							publishing novel research conducted within the academic area of science and
							technology. It therefore invites scholars from the related discipline to submit their
							research for peer review and publication.
						</p>

						<h1 class=" text-3xl font-semibold">Pioneers</h1>
						<p class=" text-base text-gray-700">
							International Journal of Real Time Application and Computing Systems (IJORTACS) is
							pioneered by Destinet Smart Technologies Limited. This is a research company in
							Nigeria which collaborates with academic institutions all over the world for the
							management of postgraduate research, carrier episodes, seminars, training programs,
							etc. to achieve the best solution to research problems.
						</p>

						<h1 class=" text-3xl font-semibold">The Journal</h1>
						<p class=" text-base text-gray-700">
							nternational Journal of Real Time Application and Computing Systems (IJORTACS) is an
							emerging open source access global academic journal in the field of science and
							technology which deals with all facets in the related fields. The aim is to improve
							academic research impact through open source, for effective collaborative innovations
							and reshaping existing knowledge. IJORTACS focused on publishing novel research
							conducted within the academic scope of science and technology. It therefore invites
							scholars from the related discipline to submit their research for peer review and
							publication.
						</p>
					</div>
				</div>
				<br />
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
		</div>
	</div>

	<div class=" w-full bg-slate-100 mt-8 py-8">
		<div class=" w-[90%] space-y-10 mx-auto">
			<h3 class=" text-3xl font-semibold text-center">Management Teams</h3>
			<div class=" w-full lg:flex lg:space-x-6 space-y-10 lg:space-y-0  justify-between">
				{#each team as item}
					<div class=" flex border-b-2 py-5 lg:py-0 lg:border-b-0 space-y-4  flex-col items-center">
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
