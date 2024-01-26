<script lang="ts">
	import { Button, Hr, Html, Text } from 'svelte-email';

	export let name: string;
    export let subject: string;
    export let message: string;
</script>

<Html lang="en">
	<Text>
		Hello, {name}!
	</Text>
    <Text class=" underline font-bold text-2xl">
		{subject}!
	</Text>
    <Text>
		{message}
	</Text>
	<Hr />
	<Button href="https://precisionchronicles.com">Visit Precision Chronicles</Button>
</Html>