<script>
  import App from '../App.svelte'

  export let metrics

  const extract = (val) => {
    if (['VERY_EASY', 'EASY', 'FAIRLY_EASY'].includes(val.toUpperCase())) {
      return 'Basic readers'
    } else if (['STANDARD', 'FAIRLY_DIFFICULT'].includes(val.toUpperCase())) {
      return 'College and graduate students'
    } else if (['DIFFICULT', 'VERY_CONFUSING'].includes(val.toUpperCase())) {
      return 'Professionals'
    }
  }
</script>

<div class="stats">
  {#if metrics}
    <h1>Reading Metrics</h1>
    <a href="https://readable.com/readability/flesch-reading-ease-flesch-kincaid-grade-level/"
      >More about readability</a
    >
    <strong>This text is suitable for {extract(metrics['Flesch reading ease'])}</strong>

    {#each Object.keys(metrics) as metric_name}
      <p style="width:100%" class="metrics">
        {metric_name}: {!isNaN(metrics[metric_name])
          ? parseFloat(metrics[metric_name]).toFixed(2)
          : metrics[metric_name]}
      </p>
    {/each}
  {:else}
    <div class="placeholder"><h3>Click one of the search results to show its readability</h3></div>
  {/if}
</div>

<style>
  .stats {
    width: 45%;
    min-height: 400px;
    height: 100%;
    border-radius: 12px;
    background-color: #edf2f7;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    margin: 1rem;
  }

  .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .metrics {
    padding: 0.2rem;
  }
</style>
