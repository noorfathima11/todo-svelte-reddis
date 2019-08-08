<script>
  import { todoItems } from './store.js'
  export let todoItemAdded = ''
  let status = false

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

<div class="todolist">
  <input type="checkbox" name="todo" class="list" bind:checked={status} on:change={updateStore}>
  <p class="list">{todoItemAdded.description} {todoItemAdded.isDone} </p>
  <button class="list">X</button>
</div>
