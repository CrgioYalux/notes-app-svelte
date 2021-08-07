<script>
	import DisplayNote from './DisplayNote.svelte'
  export let notes
</script>

<style>
  ul {
    display: flex;
    flex-flow: row wrap;
    gap: .4em;
  }
  @media (min-width:480px) {
    ul {
      width: 70vw;
    }
  }
</style>


<ul>
	{#each notes as note (note.id)}
		<DisplayNote on:delete {note}/>
	{/each}
</ul>