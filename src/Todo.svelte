<script>
  import TodoList from './TodoList.svelte'
  export let todoItemAdded = []

</script>

<style>
  .main {
    float : left;
    width: 50%;
    min-height: 100%;
    background: peachpuff;
    border: solid;
  }

</style>

<div class="main">
    <div>
        <h2 class="align-center">To-dos</h2>
    </div>
    <!-- <p>{todoItemAdded}</p> -->
    {#if todoItemAdded.length !== 0}
      {#each todoItemAdded as todoItem}
         <TodoList todoItemAdded={todoItem}/>
      {/each}
    {/if}
    <!--<TodoList todoItemAdded={todoItemAdded}-->

</div>

