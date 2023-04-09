<script>
	export let value;
</script>

<!-- 아래와 같이 event forwarding을 해줘야 함 -->
<button class="border border-amber-700 rounded-md px-2 bg-amber-300" on:click>{value}</button>
