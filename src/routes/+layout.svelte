<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo/Frame 2.png';
	import Header from './../components/Header.svelte';
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
	import { Label, Input, Button } from 'flowbite-svelte';
	import Footer from '../components/Footer.svelte';

	const path = $page.url.pathname;

	import { afterUpdate } from 'svelte';

	let show = false;

	afterUpdate(() => {
		show = true;
	});
</script>

<div class=" relative font-inter">
	{#if !path.includes('/admin')}
		<Header />
	{/if}

	{#if show}
		<slot />
	{/if}
	

	{#if !path.includes('/admin')}
		<Footer />
	{/if}
</div>
