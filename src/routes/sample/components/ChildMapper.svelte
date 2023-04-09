<script>
	export let item;
	const mapper = {
		1: 'a',
		2: 'b',
		3: 'c',
		4: 'd'
	};
	const value = mapper[item];
</script>

<p>{item} / {value}</p>
