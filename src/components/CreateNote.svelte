<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import InputText from './InputText.svelte'

  const dispatch = createEventDispatcher()
  const createNote = () => {
    if (checkInputsValueLength) dispatch('created', {
      title, content, author
    })
    title = ""
    content = ""
    author = ""
  }

  let title = ""
  let content = ""
  let author = ""

  $:titlelen = title.length
  $:contentlen = content.length
  $:authorlen = author.length

  $:checkInputsValueLength = titlelen !== 0 && titlelen <= 30 && contentlen !== 0 && contentlen <= 60 && authorlen !== 0 && authorlen <= 10

</script>

<style>
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80vw;
    max-width: 675px;
    padding: 1.2rem 1.4rem;
    border-radius: 16px;

    background-color: rgba(20,100,100,.2);

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 100%;
    max-width: 400px;
    padding: .2em 4em;
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,1);
    color: rgba(0,0,0,1);
    line-height: 1.4;
    cursor: pointer;
  }
  button:disabled {
    border: 1px solid rgba(0,0,0,.4);
    color: rgba(0,0,0,.4);
    cursor:default;
  }
  input[type="checkbox"], form {
    display: none;
  }
  input[type="checkbox"]:checked ~ form {
    display: flex;
  }
  .bt-openCreate {
    margin: 0;
    padding: 0;

    position: absolute;
    bottom: 10px;
    left: 10px;
    
    width: max-content;

    cursor: pointer;
  }
  i {
    font-size: 2.5rem;
    color: var(--green-600);
  }
</style>

  <label for="openCreate" class="bt-openCreate">
    <i class="far fa-plus-square" />
  </label>
  <input type="checkbox" id="openCreate" checked={true}/>
  <form on:submit|preventDefault={createNote}>
    <InputText on:titleValueLength={(e) => title = e.detail} args={{for:"title",initialValue:title,maxChars:30,placeholder:"Enter the book's title",required:true}}/>
    <InputText on:contentValueLength={(e) => content = e.detail} args={{for:"content",initialValue:content,maxChars:60,placeholder:"Enter the note's content",required:true}}/>
    <InputText on:authorValueLength={(e) => author = e.detail} args={{for:"author",initialValue:author,maxChars:10,placeholder:"Enter the book's author",required:true}}/>
    <button type="submit" disabled="{!checkInputsValueLength}">Create note</button>
  </form>

