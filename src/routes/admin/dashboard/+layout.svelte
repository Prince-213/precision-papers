<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import type { LayoutData } from './$types';

	import { Button, Indicator, Avatar, ButtonGroup, InputAddon, Input, WidgetPlaceholder } from 'flowbite-svelte';

	import logout from '$lib/assets/images/logout.png';

	import { page, navigating } from '$app/stores';

	

    const redirectTo = $page.url.searchParams.get('redirectTo') || '/';

    let sending = false;

	import {
		BellSolid,
		LockSolid,
		UserCircleSolid,
		SearchOutline,
		DotsHorizontalOutline,
		DatabaseSolid,
		UsersSolid,
		BookSolid,
		PenSolid,
		MailBoxSolid,
		UserGroupSolid
	} from 'flowbite-svelte-icons';
	import { enhance } from '$app/forms';


	const links = [
		{
			name: 'Overview',
			path: '/admin/dashboard',
			icon: DatabaseSolid
		},
		{
			name: 'Users',
			path: '/admin/dashboard/users',
			icon: UsersSolid
		},
		{
			name: 'Editors',
			path: '/admin/dashboard/editors',
			icon: PenSolid
		},
		{
			name: 'Manuscripts',
			path: '/admin/dashboard/manuscripts',
			icon: BookSolid
		},
		{
			name: 'Subscribers',
			path: '/admin/dashboard/subscribers',
			icon: MailBoxSolid
		},
		{
			name: 'Authors',
			path: '/admin/dashboard/authors',
			icon: UserGroupSolid
		}
	];

	$: active = $page.url.pathname;
</script>

<div class=" font-inter w-full overflow-hidden h-screen bg-[#f7f7f7]">
	<header
		class=" flex space-x-6 justify-between items-center w-full p-6 rounded-br-2xl rounded-bl-2xl bg-[#ffffff]"
	>
		<div class=" flex w-[20%] justify-between items-end">
			<div class=" flex space-x-4 items-center">
				<UserCircleSolid size="xl" class="text-[#2F80ED] dark:text-white" />
				<h3 class=" font-semibold text-xl">Admin.</h3>
			</div>
			<DotsHorizontalOutline />
		</div>

		<div class=" flex justify-between w-[80%]">
			<ButtonGroup class="w-[50%]">
				<InputAddon>
					<SearchOutline class="w-4 h-4 text-gray-500 dark:text-gray-400" />
				</InputAddon>
				<Input id="password" name="password" type="password" />
			</ButtonGroup>
			<button class="relative">
				<BellSolid strokeWidth="1.4" size="lg" class="text-[#2F80ED] dark:text-white" />
				<span class="sr-only">Notifications</span>
				<Indicator
					color="dark"
					border
					size="lg"
					placement="top-right"
					class="text-xs p-1 -translate-x-[1px] translate-y-[1px] bg-[#EB5757] font-bold"
				></Indicator>
			</button>
		</div>
	</header>
	<main class=" space-x-6 flex justify-between w-full min-h-screen p-5">
		<aside class=" w-[14%] h-screen space-y-6">
			<div class=" space-y-5 p-6 bg-white h-fit rounded-xl">
				
				{#each links as link, idx}
					<button
						on:click={() => {
							goto(link.path);
						}}
						class={` w-full p-4 rounded-md ${
							active == link.path ? 'bg-[#eaf2fd]' : 'bg-transparent'
						}    flex space-x-4 items-center cursor-pointer`}
					>
						<svelte:component
							this={link.icon}
							class={`${active == link.path ? 'text-[#2f80fd]' : 'text-[#8E8E93]'} `}
						/>
						<p
							class={` font-medium text-sm ${
								active == link.path ? 'text-[#2f80fd]' : 'text-black'
							}`}
						>
							{link.name}
						</p>
					</button>
				{/each}
			</div>
			<form
            method="post"
            action="?/logout&redirectTo={redirectTo}"
            
            
            use:enhance={() => {
                sending = true;
                return ({ update }) => {
                    update().finally(async () => {
                        sending = false;
                        // Optionally if you'd like to reload the data for the current page after form submission.
                        // This is the default behavior for use:enhance.
						await goto('/admin/dashboard')
                        await invalidateAll();
                        
                        await confirm();
                    });
                };
            }}
				class=" w-full rounded-xl flex px-10 py-4 space-x-4 bg-white cursor-pointer"
			>
				<button   class=" flex items-center space-x-4">
					<img src={logout} alt="" />
					<p>Logout</p>
				</button>
			</form>
		</aside>
		<div class=" w-[86%] h-[84vh] overflow-y-scroll bg-white rounded-xl p-6">
			<slot />
		</div>
	</main>
</div>
