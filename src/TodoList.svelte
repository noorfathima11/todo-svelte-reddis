<script>
  import { todoItems } from './store.js'
  import { createEventDispatcher } from 'svelte'
  export let todoItemAdded = ''
  let status = false

  const dispatch = createEventDispatcher()

  function updateStore(){
    console.log("id", todoItemAdded.id)
    todoItemAdded.isDone = status
    for(let i = 0; i < $todoItems.length; i++){
      if(todoItemAdded.id === $todoItems[i].id){
        $todoItems[i].isDone = status
        console.log("elementid", $todoItems[i].id, "todoid", todoItemAdded.id, 'isdone', $todoItems[i].isDone)
        console.log('$todo', $todoItems)
        todoItems.subscribe(value=>
          console.log('store updated', value))
      }
    }
    dispatch('isDoneChange')
  }

  function remove(todo) {
		  $todoItems = $todoItems.filter(task => task !== todo);
  }

</script>

<style>
  .list{
    display: inline;
  }

  .todolist{
    border: solid;
    margin : 10px;
  }

  input{
    margin: 10px;
  }

  button{
    margin: 10px;
  }

  p{
    margin: 10px;
  }
</style>

{#each $todoItems as todoItem}
  {#if todoItem.id === todoItemAdded.id && !todoItem.isDone}
    <div class="todolist">
      <input type="checkbox" name="todo" class="list" bind:checked={status} on:change={updateStore}>
      <p class="list">{todoItemAdded.description} {todoItemAdded.isDone} </p>
      <button class="list" on:click={() => remove(todoItem)}>X</button>
    </div>
  {/if}
{/each}



<!-- <div class="todolist">
  <input type="checkbox" name="todo" class="list" bind:checked={status} on:change={updateStore}>
  <p class="list">{todoItemAdded.description} {todoItemAdded.isDone} </p>
  <button class="list">X</button>
</div> -->

