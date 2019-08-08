<script>
    import { todoItems } from './store.js'
    import { createEventDispatcher } from 'svelte'
    export let todoItemAdded = ''
    let status = true

    const dispatch = createEventDispatcher()

    function updateStore(){
      console.log("id1", todoItemAdded.id)
      todoItemAdded.isDone = status
      for(let i = 0; i < $todoItems.length; i++){
        if(todoItemAdded.id === $todoItems[i].id){
          $todoItems[i].isDone = status
          console.log("elementid1", $todoItems[i].id, "todoid1", todoItemAdded.id, 'isdone1', $todoItems[i].isDone)
          console.log('$todo1', $todoItems)
          todoItems.subscribe(value=>
            console.log('store updated1', value))
        }
      }
      //dispatch('isDoneChange1')
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
    {#if todoItem.id === todoItemAdded.id && todoItem.isDone}
      <div class="todolist">
        <input type="checkbox" name="todo" class="list" bind:checked={status} on:change={updateStore}>
        <p class="list">{todoItemAdded.description} {todoItemAdded.isDone} </p>
        <button class="list" on:click={() => remove(todoItem)}>X</button>
      </div>
    {/if}
  {/each}
