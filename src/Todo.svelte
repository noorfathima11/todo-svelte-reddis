<script>
  import TodoList from './TodoList.svelte'
  export let taskItems = []

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
    {#if taskItems.length !== 0}
      {#each taskItems as taskItem}
         <TodoList todoItemAdded={taskItem}/>
      {/each}
    {/if}
    <!--<TodoList todoItemAdded={todoItemAdded}-->

</div>

