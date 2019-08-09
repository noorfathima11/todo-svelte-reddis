<script>
  import { todoItems } from './store.js'
  import Todo from './Todo.svelte'
  import Done from './Done.svelte'
  import InProgress from './InProgress.svelte'
  import TodoList from './TodoList.svelte'

  const url = 'http://localhost:3000/task/add'
  let data = {
    name: 'Noor'
  }
  let fetchData = {
    method : 'POST',
    body: data,
    headers: new Headers()
  }

  let todosAdded = []

  function updateStore(todoAdded){
    todoItems.update(value => {
        return value = [...value, todoAdded]
      })
  }

  function addTodoHandler(event){
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
      fetch(url, data)
      .then(function(response){
        response.text().then(function(text){
          console.log('text', text)
        })
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
    color: black;
  }

</style>

<div class="align-center">
   <h1>A simple To-do App</h1>
</div>

<!-- <p>Example{todosAdded}</p> -->

<div class="align-center">
  <input type="text" class="todoInput" placeholder="What needs to be done?" on:keydown={addTodoHandler}>
</div>

<Todo taskItems={todosAdded} on:isDoneChange={addTodoHandler}/>

<Done taskItems={todosAdded} on:isDoneChange1={addTodoHandler}/>
