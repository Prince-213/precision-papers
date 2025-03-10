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

<svelte:head>
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/frame2.png">

  <!-- Open Graph (OG) Meta Tags for Social Sharing -->
  <meta property="og:title" content="Precision Chronicles">
  <meta property="og:description" content="Welcome to Precision Chronicles, a distinguished hub for academic excellence and scholarly discourse. As a premier organization dedicated to the dissemination of cutting-edge research.">
  <meta property="og:image" content="/frame2.png"> <!-- Change to your logo's URL -->
  <meta property="og:url" content="https://www.precisionchronicles.org/">
  <meta name="twitter:card" content="summary_large_image">
	
</svelte:head>

<div class=" relative font-inter min-h-screen flex flex-col justify-between ">
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
