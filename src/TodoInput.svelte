<script>
  let todoAdded = ''

  function setTodo(event){
    todoAdded = event.target.value

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
</style>

<p>{todoAdded}</p>

<div class="align-center">
  <input type="text" placeholder="What needs to be done?" bind:value={todoAdded} on:input={setTodo}>
</div>

