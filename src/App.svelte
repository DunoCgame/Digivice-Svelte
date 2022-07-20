<script>
  

   import DataShow from './components/DataShow.svelte'
   import OptionSelect from './components/OptionSelect.svelte'
  
   
</script>
 
<main class="Main">

      <DataShow/>
      <OptionSelect />
    
</main>

<style>

:root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {

        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        justify-content: center;
        background-image: url("./src/assets/abstract-1278077_1920.jpg");
        background-position:center center; 
	background-repeat:no-repeat; 
	background-size: 100% 100%;
	
  }
  
  

 
 
</style>
