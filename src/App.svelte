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

  const addTask = async function(url, init){
    return new Promise(async (resolve) => {
      const task = await fetch(url, init)
      const receivedAddedTask = await task.json()
      console.log('task added', receivedAddedTask)
      updateStore(receivedAddedTask)
      console.log('updated store from db', $todoItems)
      todoItems.subscribe(value => {
        console.log('2')
        todosAdded = value
      })
      resolve(receivedAddedTask)
    })
  }

  function updateStore(todoAdded){
    todoItems.update(value => {
        console.log('1')
        return value = [...value, todoAdded]
      })
  }

  function addTodoHandler(event){
    console.log('task to add received')
    if(event.code === "Enter"){
      const todoAdded = {
        //id: $todoItems.length + 1,
        description: event.target.value,
        isDone: false
      }

      init.body = JSON.stringify(todoAdded)
      console.log('init body', init.body)
      const getAddedtask = async function(){
        let receiveAddedTask = await addTask(url, init)
      }
      console.log('updated store from db2', $todoItems)
      getAddedtask()
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
