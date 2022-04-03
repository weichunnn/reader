<script>
  import { fade } from 'svelte/transition'
  import { currentId } from '../store'

  export let articles

  const difficultyLevel = (val) => {
    if (['VERY_EASY', 'EASY', 'FAIRLY_EASY'].includes(val.toUpperCase())) {
      return 'Basic'
    } else if (['STANDARD', 'FAIRLY_DIFFICULT'].includes(val.toUpperCase())) {
      return 'Intermediate'
    } else if (['DIFFICULT', 'VERY_CONFUSING'].includes(val.toUpperCase())) {
      return 'Advanced'
    }
  }

  const colorMode = (value) => {
    if (value === 'Basic') return 'background-color:yellow'
    else if (value === 'Intermediate') return 'background-color:green'
    else return 'background-color:aqua'
  }

  $: articles_length = articles.length
  let randomTime = Math.random().toFixed(2)
</script>

<div class="wrapper" transition:fade>
  <p>About {articles_length} results {randomTime} seconds</p>
  {#each articles as article (article.id)}
    <div class="card">
      <div class="card-content">
        <a href={article.link} target="_blank">
          <div class="title">
            <span class="topLink">{article.link}</span>
            {#if difficultyLevel(article.metrics['Flesch reading ease']) === 'Basic'}
              <div class="badge" style="background-color:beige">
                {difficultyLevel(article.metrics['Flesch reading ease'])}
              </div>
            {:else if difficultyLevel(article.metrics['Flesch reading ease']) === 'Intermediate'}
              <div class="badge" style="background-color:#e1acff">
                {difficultyLevel(article.metrics['Flesch reading ease'])}
              </div>
            {:else}
              <div class="badge" style="background-color:aqua">
                {difficultyLevel(article.metrics['Flesch reading ease'])}
              </div>
            {/if}
          </div>

          <h2>{article.title}</h2>
        </a>
        <p>{article.description}</p>
      </div>
      <button class="metrics" on:click={() => ($currentId = article.id)}>Readr Metrics</button>
    </div>
  {/each}
</div>

<style>
  .wrapper {
    width: 45%;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }

  .badge {
    padding: 10px;
    border-radius: 10px;
    color: black;
    text-decoration: none;
  }

  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: #edf2f7;
    color: black;
  }

  .card-content {
    display: flex;
    flex-direction: column;
  }

  .metrics {
    border: none;
    padding: 16px 24px;
    border-radius: 12px;
    margin-left: 20px;
  }
  .metrics:hover {
    cursor: pointer;
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
