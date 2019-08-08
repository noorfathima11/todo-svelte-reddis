<script>
  export let todoItemAdded = ''

  $: isDone = todoItemAdded.isDone

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
  <input type="checkbox" name="todo" class="list" bind:checked={todoItemAdded.isDone}>
  <p class="list">{todoItemAdded.description} {todoItemAdded.isDone} </p>
  <button class="list">X</button>
</div> 


