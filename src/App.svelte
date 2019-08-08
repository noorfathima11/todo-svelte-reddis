<script>
  import { todoItems } from './store.js'
  import Todo from './Todo.svelte'
  import Done from './Done.svelte'
  import InProgress from './InProgress.svelte'
  import TodoList from './TodoList.svelte'


  let todosAdded = []
  let uid = todosAdded.length + 1
  let id = $todoItems.length + 1

  todoItems.subscribe(value => {
    todosAdded = value
  })

  function setTodo(event){
    //console.log('event', event, event.code, event.target,)
    if(event.code === "Enter"){
      const todoAdded = {
        id: id,
        description: event.target.value,
        isDone: false
      }
      todoItems.update(value => {
        console.log('value', value)
        value = [todoAdded, ...value]
        console.log('updated value', value)
        console.log('store', $todoItems )
      })
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

<Todo todoItemAdded={todosAdded} />

<Done />
