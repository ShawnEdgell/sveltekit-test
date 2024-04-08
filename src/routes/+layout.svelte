<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="flex flex-col h-screen">
	<div class="sticky top-0 z-10">
		<Header />
	</div>

	<main class="flex justify-center overflow-y-auto mx-auto w-full py-8 px-4">
		<div class="max-w-4xl">
			<slot />
		</div>
	</main>
</div>
