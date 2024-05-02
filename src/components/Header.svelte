<script lang="ts">
	import logo from '$lib/assets/logo/Frame 2.png';
	import { Search } from 'flowbite-svelte';

	import { Button, Dropdown, DropdownItem, Checkbox, Helper } from 'flowbite-svelte';
	import {
		ChevronDownSolid,
		NewspapperOutline,
		BookOutline,
		EditOutline,
		InfoCircleOutline,
		CalendarWeekOutline,
		SearchOutline,
		FileImageOutline,
		GithubSolid,
		PhoneOutline
	} from 'flowbite-svelte-icons';

	import lottie, { type AnimationItem } from 'lottie-web';
	import animationData from '$lib/assets/lottie/Animation - 1699732843324.json';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let animationContainer: HTMLButtonElement;

	let open = false;

	let searchValue: string = "";

	const toggle = () => {
		open = !open;
		menuAnimation.setSpeed(3);
		if (open) {
			menuAnimation.goToAndPlay(0, true);
			menuAnimation.setDirection(1);
		} else {
			menuAnimation.goToAndPlay(60, true);
			menuAnimation.setDirection(-1);
		}
	};

	let menuAnimation: AnimationItem;

	let lastFrame: number;

	onMount(() => {
		menuAnimation = lottie.loadAnimation({
			container: animationContainer,
			animationData,
			loop: false,
			autoplay: false
		});

		lastFrame = menuAnimation.totalFrames - 1;

		menuAnimation.goToAndStop(0, true);
	});
</script>

<div class="  sticky w-full z-50">
	
	<header class=" border-b-2 py-4 w-full mx-auto shadow-xl rounded-br-md rounded-bl-md bg-white">
		<div class=" flex w-[95%] mx-auto justify-between items-center">
			<div class=" w-[40%] flex justify-between items-center">
				<div class=" flex items-center space-x-4">
					<button on:click={() => goto('/')}>
						<img src={logo} alt="" />
					</button>
				</div>

				<div class="hidden lg:block w-[60%]">
					<!-- <Search /> -->
					<form  on:submit|preventDefault={ () => goto(`/search/${searchValue}`) }  class=" py-3 px-5 rounded-xl bg-slate-5 flex items-center space-x-4 border-2 border-blue-100 shadow-lg">
						<button type="submit" class=" border-none outline-none">
							<SearchOutline />
						</button>
						
						<input type="text"  class=" p-0 border-none outline-none ring-0 focus:border-none focus:outline-none ring-offset-0" placeholder="Click to search journal" required bind:value={searchValue} />
					</form>
				</div>
			</div>
			<div class="hidden lg:flex space-x-6 items-center">
				<ul class=" flex space-x-6 font-medium">
					<button
						on:click={() => goto('/')}
						class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
					>
						<h2>Home</h2>
					</button>
					<Button
						class=" border-0 border-white focus:border-0 text-black outline-none hover:bg-white border-none focus:border-none focus:outline-none bg-white text-base font-medium p-0"
						>Journal Submission<ChevronDownSolid
							class="w-3 bg-transparent h-3 ms-2 text-black dark:text-white"
						/></Button
					>
					<Dropdown class="w-60 p-3 space-y-1 text-sm">
						<button
							on:click={() => goto('/initial-manuscript-submission')}
							class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
						>
							<NewspapperOutline class=" text-black" size="md" />

							<h2>Initial Manuscript Submission</h2>
						</button>
						<button
							on:click={() => goto('/final-manuscript-submission')}
							class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
						>
							<NewspapperOutline class=" text-black" size="md" />

							<h2>Final Manuscript Submission</h2>
						</button>
					</Dropdown>
					<Button
						class=" border-0 border-white focus:border-0 text-black outline-none hover:bg-white border-none focus:border-none focus:outline-none bg-white text-base font-medium p-0"
						>Details<ChevronDownSolid
							class="w-3 bg-transparent h-3 ms-2 text-black dark:text-white"
						/></Button
					>
					<Dropdown class="w-60 p-3 space-y-1 text-sm">
						<a href="/about" data-sveltekit-preload-code="hover" data-sveltekit-preload-data="hover">
							<button
								on:click={() => goto('/about')}
								class="rounded w-full flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
							>
								<InfoCircleOutline class=" text-black" size="md" />
	
								<h2>About</h2>
							</button>
						</a>
	
						<a href="/eligibility" data-sveltekit-preload-code="hover" data-sveltekit-preload-data="hover">
							<button
								on:click={() => goto('/eligibility')}
								class="rounded w-full flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
							>
								<InfoCircleOutline class=" text-black" size="md" />
	
								<h2>Eligibility Info</h2>
							</button>
						</a>
					</Dropdown>
					<Button
						class=" border-0 border-white focus:border-0 text-black outline-none hover:bg-white border-none focus:border-none focus:outline-none bg-white text-base font-medium p-0"
						>Editor<ChevronDownSolid
							class="w-3 bg-transparent h-3 ms-2 text-black dark:text-white"
						/></Button
					>
					<Dropdown class="w-60 p-3 space-y-1 text-sm">
						<button
							on:click={() => goto('/apply-as-reviewer')}
							class="rounded w-full flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
						>
							<InfoCircleOutline class=" text-black" size="md" />

							<h2>Apply as Editor</h2>
						</button>
					</Dropdown>
					<a
						href="/journals"
						data-sveltekit-preload-code="hover"
						data-sveltekit-preload-data="hover"
					>
						<button
							on:click={() => goto('/journals')}
							class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
						>
							<h2>Journals</h2>
						</button>
					</a>
				</ul>
			</div>
			<div class=" lg:hidden flex items-center space-x-6">
				<SearchOutline />
				<button class=" w-[24px] h-[24px]" bind:this={animationContainer} on:click={toggle} />
			</div>
		</div>
	</header>
	<div
		class={` w-full transition-all duration-200 ${
			open ? 'h-fit' : 'h-[0vh]'
		}  overflow-y-hidden bg-white lg:hidden`}
	>
		<div class="flexflex-col lg:hidden pl-8 py-8">
			<ul class=" space-y-6 flex flex-col justify-start items-start font-medium">
				<button
					on:click={() => { goto('/'); toggle() }}
					class="rounded flex items-center text-left hover:bg-gray-100 dark:hover:bg-gray-600"
				>
					<h2>Home</h2>
				</button>
				<Button
					class=" border-0 border-white focus:border-0 text-black outline-none hover:bg-white border-none focus:border-none focus:outline-none bg-white text-base font-medium p-0"
					>Journal Submission<ChevronDownSolid
						class="w-3 bg-transparent h-3 ms-2 text-black dark:text-white"
					/></Button
				>
				<Dropdown class="w-60 p-3 space-y-1 text-sm">
					<button
						on:click={() => {goto('/initial-manuscript-submission'); toggle()}}
						class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
					>
						<NewspapperOutline class=" text-black" size="md" />

						<h2>Initial Manuscript Submission</h2>
					</button>
					<button
						on:click={() => {goto('/final-manuscript-submission'); toggle()}}
						class="rounded flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
					>
						<NewspapperOutline class=" text-black" size="md" />

						<h2>Final Manuscript Submission</h2>
					</button>
				</Dropdown>
				<Button
					class=" border-0 border-white focus:border-0 text-black outline-none hover:bg-white border-none focus:border-none focus:outline-none bg-white text-base font-medium p-0"
					>Details<ChevronDownSolid
						class="w-3 bg-transparent h-3 ms-2 text-black dark:text-white"
					/></Button
				>
				<Dropdown class="w-60 p-3 space-y-1 text-sm">
					<a href="/about" data-sveltekit-preload-code="hover" data-sveltekit-preload-data="hover">
						<button
							on:click={() => {goto('/about'); toggle()}}
							class="rounded w-full flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
						>
							<InfoCircleOutline class=" text-black" size="md" />

							<h2>About</h2>
						</button>
					</a>

					<a href="/eligibility" data-sveltekit-preload-code="hover" data-sveltekit-preload-data="hover">
						<button
							on:click={() => {goto('/eligibility'); toggle()}}
							class="rounded w-full flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
						>
							<InfoCircleOutline class=" text-black" size="md" />

							<h2>Eligibility Info</h2>
						</button>
					</a>
				</Dropdown>
				<Button
					class=" border-0 border-white focus:border-0 text-black outline-none hover:bg-white border-none focus:border-none focus:outline-none bg-white text-base font-medium p-0"
					>Editor<ChevronDownSolid
						class="w-3 bg-transparent h-3 ms-2 text-black dark:text-white"
					/></Button
				>
				<Dropdown class="w-60 p-3 space-y-1 text-sm">
					<button
						on:click={() => {goto('/apply-as-reviewer'); toggle()}}
						class="rounded w-full flex items-center text-left space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
					>
						<InfoCircleOutline class=" text-black" size="md" />

						<h2>Apply as Editor</h2>
					</button>
				</Dropdown>
				<a href="/journals" data-sveltekit-preload-code="hover" data-sveltekit-preload-data="hover">
					<button on:click={toggle}>
						<h2>Journals</h2>
					</button>
					
				</a>
			</ul>
		</div>
	</div>
</div>

<style>
</style>
