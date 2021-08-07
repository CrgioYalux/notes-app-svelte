<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  const dispatcher = createEventDispatcher()
  type expectedArgs = {
    for:string;
    initialValue?:string
    placeholder?:string
    required?:boolean
    maxChars?:number
  }
  export let args:expectedArgs
  let value = ""
  $:valuelen = value.length
  $: {
    dispatcher(`${args.for}ValueLength`, value)
  }
</script>

<style>
  input {
    width: 100%;
  }
  label {
    margin-left: 5px;
    margin-bottom: 5px;
	  display: block;
    align-self: flex-start;
  }
  .label-outOfRange {
    color: rgba(225,0,0,.7);
  }
  .input-outOfRange {
    outline: 1px solid rgba(225,0,0,.7);
  }
  .label-inRange {
    color: rgba(0,200,0,.7);
  }
  .input-inRange {
    outline: 1px solid rgba(0,200,0,.7);
  }
</style>

{#if args.maxChars !== undefined }
    <label for={args.for}
           class={(valuelen <= 30 && valuelen > 0) ? "label-inRange" : "label-outOfRange"}>
      Title ({args.maxChars - valuelen})
    </label>
    <input type="text"
            class={(valuelen <= 30 && valuelen > 0) ? "input-inRange" : "input-outOfRange"}
            required={args.required} 
            name={args.for} 
            bind:value={value}
            placeholder={args.placeholder ? args.placeholder : `Enter the ${args.for}`}
    />
    {:else}
    <label for={args.for}>Title</label>
    <input type="text"
            required={args.required} 
            name={args.for} 
            bind:value={value}
            placeholder={args.placeholder ? args.placeholder : `Enter the ${args.for}`}
    />
{/if}