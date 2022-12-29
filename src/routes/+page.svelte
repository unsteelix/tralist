<script>
// @ts-nocheck

	import { onMount } from "svelte";
	
    /**
	 * @type {{ words: string; }}
	 */
	export let data;

	const dirtWords = data.words.split('\r\n')
    const cleanWords = dirtWords.filter(v => v.trim().length > 0)

	let selected = '';
	let showDescription = false;

	const getRandomWord = () => {
		const i = randomIntFromInterval(0, cleanWords.length - 1)
		return cleanWords[i]
	}

	const randomIntFromInterval = (min, max) => { // min and max included
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	const onNextBtn = () => {
		selected = getRandomWord()
		showDescription = false
	}

	const parseValue = (str) => {
		const val = str.split('-')[0].trim()
		return val
	}

	const parseDescription = (str) => {
		const desc = str.split('-')[1];
		return desc ? desc.trim() : '...';
	}

	const onSelectedWordClick = () => {
		showDescription = true
	}

	onMount(async () => {
		selected = getRandomWord()
	});
</script>

<div class="content">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="word" on:click={onSelectedWordClick}>{parseValue(selected)}</div>
	<div class="description">
		{#if showDescription}
			{parseDescription(selected)}
		{/if}
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="next" on:click={onNextBtn}>next</div>
</div>


<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		align-content: center;
		height: 90%;
	}
	.word {
		font-size: 3rem;
		text-align: center;
		margin: 2rem;
	}
	.description {
		font-size: 2rem;
		text-align: center;
		margin: 2rem;
    	line-height: 3rem;
	}
	.next {
		font-size: 3rem;
		color: rgb(113, 179, 255);
		text-align: center;
		margin: 2rem;
	}
</style>