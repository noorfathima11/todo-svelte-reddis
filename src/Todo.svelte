<script>
  import TodoList from './TodoList.svelte'
</script>

<style>
  .main {
    float : left;
    width: 50%;
    height: 100%;
    background: peachpuff;
    border: solid;
  }

</style>

<div class="main">
    <div>
        <h2 class="align-center">To-dos</h2>
    </div>
    <TodoList />
</div>

