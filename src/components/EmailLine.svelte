<script lang="ts">
    export let email:String;
    export let date:String;
    export let mail:String;
 
    import { EyeSolid, MailBoxSolid } from "flowbite-svelte-icons";

    let color:String

</script>

<div
	class=" flex bg-[#eaf2fd81] p-4 rounded-lg justify-between text-black space-x-2 lg:text-lg font-medium items-center mt-4"
>
	<p class=" text-sm w-[33%]">{email}</p>
	
	<p class=" text-center text-sm w-[33%]">{date}</p>
    
    <div class=" text-center flex items-center justify-center w-[33%]">
        <MailBoxSolid class=" text-blue-600" />
    </div>
	
</div>
