<script lang="ts">
  import SearchBar from '../components/SearchBar.svelte'
  import Loader from '../components/Loader.svelte'
  import router from 'page'
  import { searchArticles, searchTerm } from '../store'

  let isLoading = false
  let searchQuery = ''

  async function handleSubmit() {
    searchQuery = $searchTerm.trim()
    if (!searchQuery) return
    await searchGoogle()
  }

  async function searchGoogle() {
    isLoading = true
    const endpoint = `http://localhost:8000/results?query=${searchQuery}`

    try {
      const res = await fetch(endpoint)
      const data = await res.json()
      $searchArticles = data
      router.redirect('/')
    } catch (e) {
      alert('An error occured!')
    }
    isLoading = false
  }
</script>

<div class="App">
  {#if isLoading}
    <Loader />
  {:else}
    <h1>Gooogle</h1>
    <SearchBar {handleSubmit} />
  {/if}
</div>

<style>
  .App {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
    max-width: 1500px;
  }

  h1 {
    font-size: 70px;
  }
</style>
