<script>
	const navs = [
		{ id: 0, path: '/post', name: 'post' },
		{ id: 1, path: '/sample', name: 'sample' }
	];
</script>

<div class="h-full w-full flex flex-col">
	{#each navs as nav (nav.id)}
		<a href={nav.path}>
			<div class="h-10 flex items-center">{nav.name}</div>
		</a>
	{/each}
</div>
