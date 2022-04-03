<script lang="ts">
  import router from 'page'
  import Results from '../components/Results.svelte'
  import SearchBar from '../components/SearchBar.svelte'
  import Loader from '../components/Loader.svelte'
  import { searchArticles, searchTerm, currentId } from '../store'
  import Metrics from '../components/Metrics.svelte'

  let searchQuery = ''
  let isLoading = false
  async function handleSubmit() {
    searchQuery = $searchTerm.trim()
    if (!searchQuery) return
    await searchGoogle()
  }

  async function searchGoogle() {
    isLoading = true
    const endpoint = `https://api.readabl.tech/results?query=${searchQuery}`

    try {
      const res = await fetch(endpoint)
      const data = await res.json()
      $currentId = null
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
    {:else if $searchArticles.length !== 0}
      <Results articles={$searchArticles} />
      {#if $currentId !== null}
        <Metrics metrics={$searchArticles.find((article) => article.id === $currentId).metrics} />
      {/if}
    {/if}
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
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
    height: 100%;
    width: 100%;
    max-width: 1500px;
  }
</style>
