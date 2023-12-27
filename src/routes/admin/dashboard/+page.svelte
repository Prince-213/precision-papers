<script lang="ts">
	export let data;

	import { navigating } from '$app/stores';

	import { ListPlaceholder } from 'flowbite-svelte';

	const { subscribers, editors, manuscript }: any = data

	const links = [
		{
			name: 'Users',
			path: '/admin/dashboard/users',
			value: subscribers + editors
		},
		{
			name: 'Editors',
			path: '/admin/dashboard/editors',
			value: editors
		},
		{
			name: 'Manuscripts',
			path: '/admin/dashboard/manuscripts',
			value: manuscript
		},
		{
			name: 'Subscribers',
			path: '/admin/dashboard/subscribers',
			value: subscribers
		},
		{
			name: 'Authors',
			path: '/admin/dashboard/authors',
			value: manuscript
		}
	];
</script>

<div class=" w-full font-inter space-y-10">
	{#if $navigating}
		<ListPlaceholder />
	{:else}
		<h1 class=" text-3xl font-medium">Overview</h1>
		<div class=" w-full gap-y-5 grid grid-cols-3">
			{#each links as link, idx}
				<div class=" bg-[#427A5B] space-y-4 w-[90%] px-4 py-8 rounded-lg">
					<h3 class="  text-white text-2xl font-semibold">{link.name}</h3>
					<a href={link.path} class=" text-xl font-medium text-white">{link.value}</a>
				</div>
			{/each}
		</div>
	{/if}
</div>
