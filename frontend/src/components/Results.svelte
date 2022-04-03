<script>
  import { loop_guard } from 'svelte/internal'
  import { fade } from 'svelte/transition'
  import { currentId } from '../store'

  export let articles
  $: articles_length = articles.length
  let randomTime = Math.random().toFixed(2)
</script>

<div class="wrapper" transition:fade>
  <p>About {articles_length} results {randomTime} seconds</p>
  {#each articles as article (article.id)}
    <div class="card">
      <div>
        <a href={article.link} target="_blank">
          <p class="topLink">{article.link}</p>
          <h2>{article.title}</h2>
        </a>
        <p>{article.description}</p>
      </div>
      <div>
        <button class="metrics" on:click={() => ($currentId = article.id)}>View metrics</button>
      </div>
    </div>
  {/each}
</div>

<style>
  .wrapper {
    width: 45%;
  }

  a {
    text-decoration: none;
    position: relative;
  }

  a:hover {
    text-decoration: underline;
  }

  .card {
    display: flex;
    margin: 20px 0;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: #edf2f7;
    color: black;
  }

  .metrics {
    margin-left: 4rem;
    position: absolute;
    z-index: 100;
  }

  .card:hover {
    cursor: pointer;
    background-color: #cbd5e0;
  }

  .topLink {
    font-size: 14px;
  }

  p {
    margin: 0;
    padding: 0;
  }

  h2 {
    color: #1a0caa;
    margin: 0;
    font-weight: 500;
  }
</style>
