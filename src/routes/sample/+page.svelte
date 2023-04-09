<script>
	import Child from './components/Child.svelte';
	import ChildMapper from './components/ChildMapper.svelte';
	import ChildMessage from './components/ChildMessage.svelte';
	import ChildProps from './components/ChildProps.svelte';
	import Button from '../../components/Button.svelte';
	let count = 0;
	const increase = () => {
		count += 1;
	};

	$: doubledCount = count * 2;
	$: {
		if (count > 10) {
			alert('10을 넘지 못해!');
			count = 10;
		}
	}

	let array = [1, 2, 3, 4];
	let arrayMap = {
		1: 'a',
		2: 'b',
		3: 'c',
		4: 'd'
	};
	const pushArray = () => {
		// 배열의 push는 변경사항을 감지하지 못함
		array = [...array, array.length + 1];
	};
	const changeArray = () => {
		array[0] += 1;
	};

	let obj = {
		name: 'ferde'
	};
	const changeName = () => {
		obj.name = obj.name + 'a';
	};

	let flag = false;
	const login = () => {
		flag = false;
	};
	const logout = () => {
		flag = true;
	};

	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(10);
		}, 2000);
	});

	let message = '';
</script>

<p>style sample</p>
<p class="p-style">parent style</p>
<Child />
<hr />

<p>{count}</p>
<p>{doubledCount}</p>
<button on:click={increase}>click</button>
<hr />

<br />
<button on:click={pushArray}>click</button>
<button on:click={changeArray}>click</button>
{#each array as item}
	<p>{item}</p>
{/each}
<br />
<button on:click={changeName}>click</button>
<p>{obj.name}</p>
<hr />

<ChildProps {...obj} />
<hr />

{#if flag}
	<button on:click={login}>login</button>
{:else}
	<button on:click={logout}>logout</button>
{/if}
<hr />

<button
	on:click={() => {
		array = array.slice(1);
	}}>click</button
>
{#each array as item (item)}
	<ChildMapper {item} />
{/each}
<hr />

{#await promise}
	<p>waiting...</p>
{:then item}
	<p>{item}</p>
{:catch error}
	<p>error : {error.message}</p>
{/await}
<hr />

<!-- child가 부모에게 역으로 값을 전달해준다. -->
<ChildMessage
	on:myevent={(e) => {
		message = e.detail.text;
	}}
/>
<p>{message}</p>
<hr />

<Button value="click" on:click={() => alert('hello')} />

<style>
	p.p-style {
		font-weight: bold;
	}

	hr {
		@apply my-2;
	}
</style>
