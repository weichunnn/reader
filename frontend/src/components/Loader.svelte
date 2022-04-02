<script>
  import { slide } from 'svelte/transition'
</script>

<img src="/loading.gif" alt="loading animation" class="loading-img" transition:slide />

<style>
  .loading-img {
    height: 200px;
    width: 200px;
  }
</style>
