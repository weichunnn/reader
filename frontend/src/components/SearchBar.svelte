<script lang="ts">
  import { searchTerm } from '../store'

  export let isNav: boolean = false
  export let handleSubmit: () => void
</script>

<form on:submit|preventDefault={handleSubmit} class="search-form">
  <input
    type="search"
    bind:value={$searchTerm}
    class="search"
    class:nav-search={isNav}
    placeholder="Try searching 'What is Gravity?'"
  />
  {#if !isNav}
    <div class="btn-bar">
      <button class="btn btn-right" style="margin-right:20px" type="submit">Google Search</button>
      <button class="btn" type="submit">I'm feeling lucky</button>
    </div>
  {/if}
</form>

<style>
  .search-form {
    width: 45%;
  }
  .search {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 10px 20px;
    font-size: 16px;
  }
  .nav-search {
    padding: 16px 20px;
    border: none;
    background-color: #f0f3f5;
  }

  .nav-search:hover {
    background-color: #cbd5e0;
  }
  .btn {
    border: none;
    padding: 16px 24px;
    border-radius: 12px;
  }
  .btn:hover {
    cursor: pointer;
  }
  .btn-bar {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>
