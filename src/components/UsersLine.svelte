<script lang="ts">
    export let title:String;
    export let subjectArea:String;
    export let date:String;
    export let status:String;
    export let manage:String;

    import { EyeSolid } from "flowbite-svelte-icons";

    let color:String

    switch (status) {
        case "rejected":
            color = "red";
            break;
        
        case "review":
            color = "blue";
            break;

        case "pending":
            color = "yellow";
            break;
        

        default:
            color = "green";
            break;
    }
</script>

<div
	class=" flex bg-[#eaf2fd81] p-4 rounded-lg justify-between text-black space-x-2 lg:text-lg font-medium items-center mt-4"
>
	<p class=" text-sm w-[20%]">{title}</p>
	
	<p class=" text-sm w-[20%]">{date}</p>
    <p class=" text-sm  w-[20%]">{subjectArea}</p>
    
	<p class={` -translate-x-[15px] text-${color}-500 w-[12%] text-base uppercase font-semibold`}>{status}</p>
	
    <div class=" w-[11%]">
        <EyeSolid class=" text-blue-600" />
    </div>
	
</div>
