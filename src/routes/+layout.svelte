<nav>
	<a href="/">home</a>
	<a href="/edit">edit</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		border-bottom: 2px solid black;
		padding: 0.5rem;
		font-size: 1rem;
	}
</style>