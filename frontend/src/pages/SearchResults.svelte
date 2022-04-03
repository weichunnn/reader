<script lang="ts">
  import router from 'page'
  import Results from '../components/Results.svelte'
  import SearchBar from '../components/SearchBar.svelte'
  import Loader from '../components/Loader.svelte'
  import { searchArticles, searchTerm } from '../store'

  let searchQuery = ''
  let isLoading = false

  async function handleSubmit() {
    searchQuery = $searchTerm.trim()
    if (!searchQuery) return
    await searchGoogle()
  }

  async function searchGoogle() {
    isLoading = true
    const endpoint = `http://localhost:8000/search?query=${searchQuery}`

    try {
      const res = await fetch(endpoint)
      const data = await res.json()
      $searchArticles = data

    } catch (e) {
      alert('An error occured!')
    }
    isLoading = false
  }
</script>

<div class="wrapper">
  <div class="nav">
    <img
      src="google.png"
      style="margin-right:45px"
      alt="google logo"
      class="logo"
      on:click={() => router.redirect('/')}
    />
    <SearchBar {handleSubmit} isNav />
  </div>
  <div class="divider" />
  <div class="content">
    {#if isLoading}
      <div class="loader">
        <Loader />
      </div>
    {:else}
      <Results articles={$searchArticles} />
      <div class="stats" />
    {/if}
  </div>
</div>

<style>
  .stats {
    width: 45%;
    height: 400px;
    border-radius: 12px;
    background-color: #edf2f7;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .loader {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }
  .logo:hover {
    cursor: pointer;
  }
  .nav {
    display: flex;
    align-items: center;
  }
  .divider {
    margin: 20px 0;
    border-bottom: #eaeaeb solid 2px;
  }
  .wrapper {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
    max-width: 1500px;
  }
</style>
