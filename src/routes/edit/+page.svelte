<script>
	/**
	 * @type {{ words: string; }}
	 */
	export let data;

	let value = data.words;
</script>

<form method="POST" action="?/update">
	<textarea bind:value name="words" />
	<input type="submit" value="update" />
</form>

<style>
	textarea {
		width: 100%;
		height: calc(100vh - 5rem);
	}
	input[type="submit"] {
		width: 100%;
		padding: 0.5rem;
		text-align: center;
		border-top: 2px solid black;
	}
</style>