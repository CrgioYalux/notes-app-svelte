<script lang="ts">
	// Components
	import CreateNote from './components/CreateNote.svelte';
	import DisplayNotes from './components/DisplayNotes.svelte';

	import {Notes} from './helpers/Note'

	const Noter = new Notes()
	let notes = [{title:'thing',content:'more thing',author:'me',date: new Date().toDateString(), id:"gg"}]

	const addNote = (event) => {
		Noter.add({...event.detail});
		notes = Noter.getAll()
	}

	const deleteNote = (event) => {
		Noter.delete(event.detail)
		notes = Noter.getAll()
	}

</script>

<style>
	h3 {
		text-align: center;
	}

	@media (min-width: 480px) {
		main {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
</style>

<main>
	<h3>Your book notes</h3>
	<DisplayNotes on:delete={deleteNote} {notes}/>
	<CreateNote on:created={addNote}/>
</main>
