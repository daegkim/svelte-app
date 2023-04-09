<script>
	const navs = [
		{ path: '/post', name: 'post' },
		{ path: '/sample', name: 'sample' }
	];
</script>

<div class="h-full w-full flex flex-col">
	{#each navs as nav}
		<a href={nav.path}>
			<div class="h-10 flex items-center">{nav.name}</div>
		</a>
	{/each}
</div>
