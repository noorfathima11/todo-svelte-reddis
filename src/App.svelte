<script>
  import { todoItems } from './store.js'
  import Todo from './Todo.svelte'
  import Done from './Done.svelte'
  import InProgress from './InProgress.svelte'
  import TodoList from './TodoList.svelte'


  let todosAdded = []

  function updateStore(todoAdded){
    todoItems.update(value => {
        return value = [...value, todoAdded]
      })
  }

  function updateTodo(event){
    console.log('coming to updateTodo')
    //console.log('event', event, event.code, event.target,)
    if(event.code === "Enter"){
      const todoAdded = {
        id: $todoItems.length + 1,
        description: event.target.value,
        isDone: false
      }
      updateStore(todoAdded)
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
  <input type="text" class="todoInput" placeholder="What needs to be done?" on:keydown={updateTodo}>
</div>

<Todo taskItems={todosAdded} on:isDoneChange={updateTodo}/>

<Done taskItems={todosAdded} on:isDoneChange1={updateTodo}/>
