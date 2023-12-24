<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
    import type { LayoutData } from './$types';
    
    export let data;

    $: journals = data.journals;

    const navigate = async ( id: number ) => {
        await invalidateAll();
        goto(`/journals/category/${id}`);
        
    }
</script>

<div class=" relative pb-[30vh]">
    
    <slot />
    <div class=" lg:absolute right-10 top-[60vh] lg:mt-10 lg:w-[35%] bg-white border-2 shadow-none cursor-pointer transition-all space-y-4  shadow-gray-300 rounded-2xl p-10">
        <h3 class=" text-2xl font-medium text-center">Other Journal Catgories</h3>
        {#each journals as journal }
            <button on:click={() => navigate(journal.id)}  class=" bg-white w-full border-2 shadow-none cursor-pointer transition-all shadow-gray-300 rounded-2xl px-6 py-4">
                <p  class=" hover:text-blue-600 transition-all duration-100">{journal.title}</p>
            </button>
        {/each}
    </div>
</div>
