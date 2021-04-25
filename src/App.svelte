<script>
  let todos = []
  let todo = ''

  const add = () => {
    todos = [{
      title: todo,
      completed: false
    }, ...todos]

    todo = ''
  }

  const done = (index) => {
    todos[index].completed = !todos[index].completed
  }
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>

<form on:submit|preventDefault={add}>
  <input type="text" bind:value={todo}>
  <button>OK</button>
</form>

<ul>
  {#each todos as item, index}
  <li on:click={() => done(index)} class="{item.completed ? 'done' : ''}">{item.title} {item.completed}</li>
  {/each}
</ul>

