<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const sayHello = () => {
		dispatch('myevent', { text: 'hello' });
	};
</script>

<button on:click={sayHello}>click</button>
