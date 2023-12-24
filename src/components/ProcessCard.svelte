<script lang='ts'>
    export let gif: string;
    export let title: string;
    export let description: string

</script>

<div
	class=" flex flex-col justify-center items-center min-h-[20em] py-6 border-[#333333] text-center border-2 rounded-lg"
>
	<div class=" w-[85%] space-y-6 mx-auto">
		<img class=" w-[60%] mx-auto" src={gif} alt="" />
		<h3 class=" text-2xl font-semibold">{title}</h3>
		<p class=" text-gray-600">
			{description}
		</p>
		<div class=" h-[3px] w-[30%] bg-[#2b2b2b] rounded-md mx-auto"></div>
	</div>
</div>
