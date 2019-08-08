<script>
  import TodoList from './TodoList.svelte'
  export let doneItems = []
</script>

<style>
    div {
      float: right;
      width: 50%;
      min-height: 100%;
      background: peachpuff;
      border: solid;
    }

  </style>

  <div>
    <h2 class="align-center">Done</h2>
  </div>
<!-- 
  {#each doneItems.filter(item => item.done) as doneItem}
  <TodoList todoItemAdded = {doneItem}/>
  {/each} -->
