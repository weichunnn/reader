<script>
  import router from 'page'
  import Home from './pages/Home.svelte'
  import SearchResults from './pages/SearchResults.svelte'

  let page
  router('/', () => (page = Home))
  router('/results', () => (page = SearchResults))
  router.start()
</script>

<svelte:component this={page} />
