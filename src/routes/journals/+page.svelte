<script lang="ts">
	import type { PageData } from './$types';

	
	import { Checkbox } from 'flowbite-svelte';

	import { navigating } from '$app/stores';
	import Loader from '../../components/Loader.svelte';

	$: group = [];

	export let data;

	$: updated = data.streamed.updated;

	import { reveal } from 'svelte-reveal'
</script>

<svelte:head>
	<title>PRECISION CHRONICLES JOURNALS</title>
	<script>
		(function(c,l,a,r,i,t,y){
			c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
			t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
			y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
		})(window, document, "clarity", "script", "kocoimrx6u");
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
	<div class=" w-full py-[5vh] lg:py-[10vh]">
		<div class=" flex pl-10">
			<div class=" hidden lg:block space-y-8 h-fit p-5 w-[45%] bg-gray-100">
				<h3 class=" border-b-2 border-white pb-2 font-medium text-2xl">Filter By Discipline</h3>
				<div class="  mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'deep_learning'} />
					<p class=" font-medium text-lg">Deep Learning</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'power_system_engineering'} />
					<p class=" font-medium text-lg">Power System Engineering</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'control_system'} />
					<p class=" font-medium text-lg">Control System</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'communication'} />
					<p class=" font-medium text-lg">Communication</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'biometric_technology'} />
					<p class=" font-medium text-lg">Biometric Technology</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'dms'} />
					<p class=" font-medium text-lg">Database Management System</p>
				</div>
				<div class=" mt-5 flex items-center space-x-4">
					<Checkbox bind:group value={'is'} />
					<p class=" font-medium text-lg">Information Security</p>
				</div>
			</div>
			<div class=" space-y-4">
				<h1 class=" text-4xl lg:text-5xl lg:mb-10 lg:ml-10 font-semibold">Journals</h1>
				<div
					class=" -translate-x-5 lg:-translate-x-0 mans lg:w-[95%] w-[95%] md:w-[80%] grid lg:grid-cols-3 gap-5 mx-auto"
				>
					{#each updated as journal, idx}
						<div
							use:reveal={ { transition: 'fly', threshold: 0.3, duration: 500 } }
							
							class=" lg:w-full max-h-fit bg-white border-2 shadow-none cursor-pointer transition-all space-y-4 duration-200 hover:shadow-md shadow-gray-300 rounded-2xl p-10 flex flex-col justify-between"
						>
							<h2 class="h-[40%] text-lg font-semibold">
								{journal.title}
							</h2>

							<div
								style={`background-image: url(${journal.poster});`}
								class=" w-full rounded-md h-28 bg-center bg-cover"
							></div>

							<a
								data-sveltekit-preload-data="hover"
								href={`/journals/category/${journal.short}`}
								class=" py-3 text-center hover:shadow-md w-full px-8 text-black-100 border-[#BBBFC1] border-2 rounded-md transition-all duration-100"
							>
								See More
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
