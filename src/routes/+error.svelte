<script>
	import { page } from '$app/stores';
</script>

<div class="flex h-dvh w-full flex-col items-center justify-center space-y-6">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="icon icon-tabler icon-tabler-mood-puzzled"
		width="100"
		height="100"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="#8097de"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M14.986 3.51a9 9 0 1 0 1.514 16.284c2.489 -1.437 4.181 -3.978 4.5 -6.794" />
		<path d="M10 10h.01" />
		<path d="M14 8h.01" />
		<path d="M12 15c1 -1.333 2 -2 3 -2" />
		<path d="M20 9v.01" />
		<path d="M20 6a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
	</svg>
	<h1
		class="bg-gradient-to-r from-red-700 to-blue-400 bg-clip-text font-sans text-6xl text-transparent"
	>
		{$page.status} : {$page.error?.message}
	</h1>
	<a class="font-serif text-2xl font-bold text-blue-400 hover:text-blue-300" href="/comp/home"
		>跳转首页</a
	>
</div>
