<script>
  import TodoInput from './TodoInput.svelte'
  import Todo from './Todo.svelte'
  import Done from './Done.svelte'
  import TodoList from './TodoList.svelte'

</script>

<style>

	h1 {
    color: purple;
	}
</style>

<div class="align-center">
   <h1>A simple To-do App</h1>
</div>

<TodoInput />
<Todo />
<Done />
