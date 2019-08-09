<script>
  import { todoItems } from './store.js'
  import DoneList from './DoneList.svelte'
  export let taskItems = []
  let i = 0
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

  <div >
    <h2 class="align-center">Done</h2>

    {#if taskItems.length !== 0}
    {#each taskItems as taskItem}
       <DoneList todoItemAdded={taskItem}/>
    {/each}
  {/if}
  </div>




