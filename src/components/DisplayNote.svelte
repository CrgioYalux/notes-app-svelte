<script lang="ts">
  import type {Note} from '../helpers/Note'
  import {createEventDispatcher} from 'svelte'
  const dispatcher = createEventDispatcher()
  const deleteNote = () => {
    dispatcher('delete', note)
  }
  export let note:Note

  
</script>

<style>
  li {
    position: relative;

    width: 100%;
    padding: .6em;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: var(--ind-700);

    border-top-left-radius: 16px;

    box-shadow: 3px 3px 0 0 rgba(0,0,0,.5);
  }
  @media (min-width: 480px) {
    li {
      max-width: max-content;
    }
  }
  div {
    width: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 2rem;
  }
  strong {
    font-family: sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    color: rgba(0,0,0,.9);
  }
  small:nth-child(1) {
    position: relative;
    color: rgba(0,0,0,.9);
  }
  small:nth-child(2) {
    position: relative;
    color: rgba(0,0,0,.9);
  }
  p {
    padding: .6em 0;
    width: 100%;
    text-align: center;
    font-size: .9rem;
    overflow: auto;
    white-space: wrap;
    scrollbar-width: thin;
    color: rgba(0,0,0,.9);
  }
  button {
    margin: 0;
    padding: 0;

    position: absolute;
    top: 5px;
    left: 5px;

    width: 1.3rem;
    height: 1.3rem;

    display: grid;
    place-items: center;

    border: 1px solid rgba(0,0,0,.8);
    border-radius: 50%;

    background-color: transparent;

    cursor:pointer;
  }
  i {
    color: rgba(0,0,0,.8);
    font-size: .7em;
  }

</style>

<li data-id={note.id}>
  <button on:click={deleteNote}><i class="fas fa-times"/></button>
  <strong>{note.title}</strong>
  <p>"{note.content}"</p>
  <div>
    <small>by {note.author}</small>
    <small>{note.date}</small>
  </div>
</li>