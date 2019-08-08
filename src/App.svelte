<script>
  import { todoItems } from './store.js'
  import Todo from './Todo.svelte'
  import Done from './Done.svelte'
  import InProgress from './InProgress.svelte'
  import TodoList from './TodoList.svelte'


  let todosAdded = []

  function update(todoAdded){
    todoItems.update(value => {
        return value = [...value, todoAdded]
      })
  }

  function setTodo(event){
    //console.log('event', event, event.code, event.target,)
    if(event.code === "Enter"){
      const todoAdded = {
        id: $todoItems.length + 1,
        description: event.target.value,
        isDone: false
      }
      update(todoAdded)
      console.log('store', $todoItems, $todoItems.length)
      todoItems.subscribe(value => {
        todosAdded = value
      })
      event.target.value = ' '
    }
  }
</script>

<style>

h2 {
    color: salmon;
  }
  input{
    border: solid;
    width: 50%;
  }

	h1 {
    color: purple;
	}
</style>

<div class="align-center">
   <h1>A simple To-do App</h1>
</div>

<p>Here {todosAdded}</p>

<div class="align-center">
  <input type="text" class="todoInput" placeholder="What needs to be done?" on:keydown={setTodo}>
</div>

<Todo todoItems={todosAdded} />

<Done  />
