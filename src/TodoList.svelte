<script>
  import { todoItems } from './store.js'
  import { createEventDispatcher } from 'svelte'
  export let todoItemAdded = ''
  let status = false
  let id = 0
  $: paramID = () => id;

  $: url = `http://localhost:3000/task/isDone/:${paramID()}/update`
  let data = {}

  $: request = new Request(url, {
    method : 'POST',
    body: JSON.stringify(data),
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
  })

  const dispatch = createEventDispatcher()

  function updateStore(){
    console.log('updating store')
    todoItemAdded.isDone = status
    id = todoItemAdded.id
    console.log('paramID', paramID(), 'id', id)
    for(let i = 0; i < $todoItems.length; i++){
      if(todoItemAdded.id === $todoItems[i].id){
        $todoItems[i].isDone = status
        todoItems.subscribe(value=>
          console.log('store updated', value))
      }
    }
    data.todoItems = $todoItems
    console.log('data', data)
    console.log('URL', request.url)

    fetch(request)
      .then(function(response){
        response.text()
        .then(function(text){
          console.log('response text', text)
        })
      })

    status = false
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
    background: (0, 0, 0, 0.6);
  }

  input{
    margin: 10px;
    height: 10px;
    width: 10px;
  }

  button{
    float: right;
    margin: 10px;
    width: 50px;
    font-size: 7px;
  }

  p{
    font-weight: bold;
    color: black;
    margin: 10px;
    font-size: 15px;
  }

</style>

{#each $todoItems as todoItem}
  {#if todoItem.id === todoItemAdded.id && !todoItem.isDone}
    <div class="todolist">
      <input type="checkbox" name="todo" class="list" bind:checked={status} on:change={updateStore}>
      <p contentEditable="true" class="list">{todoItemAdded.description} </p>
      <button class="list" on:click={() => remove(todoItem)}>x</button>
    </div>
  {/if}
{/each}

