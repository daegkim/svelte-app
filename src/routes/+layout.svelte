<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import SideNav from '../components/SideNav.svelte';
</script>

<nav class="fixed top-0 left-0 h-header w-full px-2 bg-amber-400">
	<Header />
</nav>
<nav
	class="fixed top-header left-0 h-[calc(100%-theme(spacing.header))] w-sidenav p-2 bg-amber-600 overflow-auto"
>
	<SideNav />
</nav>
<div
	class="fixed top-header left-sidenav h-[calc(100%-theme(spacing.header))] w-[calc(100%-theme(spacing.sidenav))] p-2 overflow-auto"
>
	<slot />
</div>
