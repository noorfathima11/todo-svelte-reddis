<script>
  import { todoItems } from './store.js'
  import Todo from './Todo.svelte'
  import Done from './Done.svelte'
  //import InProgress from './InProgress.svelte'
  import TodoList from './TodoList.svelte'
  import {onMount} from 'svelte'

  let todosAdded = []

  onMount(async () => {
    const tasks = await fetch('http://localhost:3000/task/getall')
    const tasksArray = await tasks.json()
    console.log('all tasks received', tasksArray)
    for(let i = 0; i < tasksArray.length; i++){
      todoItems.update(value => {
        return value = [...value, tasksArray[i]]
      })
    }
    todoItems.subscribe(value => {
        todosAdded = value
    })
  })

  const url = 'http://localhost:3000/task/add'
  let data = {}
  let init = {
    method : 'POST',
    body: JSON.stringify(data),
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
  }

  function updateStore(todoAdded){
    todoItems.update(value => {
        return value = [...value, todoAdded]
      })
  }

  function addTodoHandler(event){
    if(event.code === "Enter"){
      const todoAdded = {
        id: $todoItems.length + 1,
        description: event.target.value,
        isDone: false
      }

      updateStore(todoAdded)
      init.body = JSON.stringify($todoItems)

      fetch(url, init)
      .then(function(response){
        response.json()
        .then(function(text){
          console.log('response text', text)
        })
      })

      todoItems.subscribe(value => {
        todosAdded = value
      })
      event.target.value = ''
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

<div class="align-center">
  <input type="text" class="todoInput" placeholder="What needs to be done?" on:keydown={addTodoHandler}>
</div>

<Todo taskItems={todosAdded} on:isDoneChange={addTodoHandler}/>

<Done taskItems={todosAdded} on:isDoneChange1={addTodoHandler}/>
