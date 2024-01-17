<script lang="ts">
	import logo from '$lib/assets/logo/Frame 2.png';
	import Header from './../components/Header.svelte';
	import { supabase } from '$lib/supabaseClient';

	import {
		MapLocationOutline,
		EnvelopeOutline,
		PhoneOutline,
		FacebookSolid,
		TwitterSolid,
		TailwindSolid,
		GithubSolid
	} from 'flowbite-svelte-icons';
	import '../app.pcss';
	import { Label, Input, Button, Spinner } from 'flowbite-svelte';

	$: sending = false;

	$: email = '';

	const handleSubmit = async () => {
		try {
			sending = true;

			const { data, error } = await supabase
				.from('subscribers')
				.upsert([{ email: email }])
				.select();
		} catch (error) {
		} finally {
			sending = false;
		}
	};
</script>

<footer class=" shadow-xl relative z-50 w-full bg-[#f8f9fa] py-12">
	<div class=" w-[90%] space-y-8 lg:space-y-0 lg:flex-row flex-col flex justify-between mx-auto">
		<div class=" lg:w-[20%] space-y-5">
			<img src={logo} alt="" />
			<p class=" font-medium text-gray-500">
				Welcome to Precision Chronicles, a distinguished hub for academic excellence and scholarly discourse. As a premier organization dedicated to the dissemination of cutting-edge research.

			</p>
			<p>Copyright &copy; Precision Paper</p>
		</div>
		<div class=" lg:w-[20%] space-y-5">
			<h2 class=" font-semibold">Get in Touch</h2>
			<div class=" flex space-x-3">
				<MapLocationOutline />
				<p>8819 Ohio St. South Gate, CA 90280</p>
			</div>
			<div class=" flex space-x-3">
				<EnvelopeOutline />
				<p>Ourstudio@hello.com</p>
			</div>
			<div class=" flex space-x-3">
				<PhoneOutline />
				<p>+1 386-688-3295</p>
			</div>
		</div>
		<div class="lg:w-[20%] space-y-5">
			<div class=" flex space-x-6">
				<FacebookSolid size="lg" />
				<GithubSolid size="lg" />
				<TwitterSolid size="lg" />
				<TailwindSolid size="lg" />
			</div>
			
		</div>
		<div class=" lg:w-[20%] space-y-6">
			<h1 class=" font-medium">Join Our Newsletter</h1>
			<form on:submit|preventDefault={handleSubmit} class=" space-y-2">
				<Label class=" text-gray-500" defaultClass=" text-gray-500 font-medium text-base"
					>Your Email</Label
				>
				<Input
					class="  border-black border-2 focus-within:border-blue-600 focus:border-blue-600 focus-visible:border-blue-600"
					type="text"
					placeholder="Enter your email"
                    bind:value={email}
				/>
				<Button
					type="submit"
					class=" border-2 border-black-100 bg-black text-black font-medium flex items-center space-x-2"
				>
					<p>Subscribe</p>
					{#if sending}
						<Spinner currentFill="black" />
					{/if}
				</Button>
			</form>
		</div>
	</div>
</footer>
