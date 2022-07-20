<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
</script>

<main class="Main">

        <div class="Images-Containner">
                <h1 class="Nombre">Nombre</h1>
                <div class="Data1">
                        <p>Item</p>
                        <p>Item</p>
                        <p>Item</p>
                </div>
                <img class="Digimon-Images" src="src/assets/svelte.png">
                <div class="Data2">
                        <p>Item</p>
                        <p>Item</p>
                        <p>Item</p>
                </div>
        </div>
        <!---->
        <div class="Informacion">
                
                <button class="button1">A</button>
                <div class="option">sdgssyjfyjf</div>
                <button class="button2">B</button>
        </div>
        
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
  .Informacion{
         width:100%;
         height:20vh;
  }
  
  .Images-Containner{
        width:100%;
         height:80vh;

  }
 .Informacion{
         display:flex;
         justify-content: center;
         background:#ffffff;
 }
 
  p{
         align-self:center;
         padding:10px;
 }
 
 .button1{align-self:center;}
 .option{align-self:center; width:80%; text-align: center;} 
 .button2{align-self:center;}
 
 .Informacion>button{
        color:white;
        border-radius:100%;
        background:blue;
        margin:30px;
        width:50px;
        height:50px;
 }
  .Images-Containner{
        background:rgba(0, 128, 0, 0.4);
        
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        justify-content: center;
        align-content: center;
        grid-template-areas:
                            'Data1 Image Data2'
                            'Nombre Nombre Nombre';

 }
 
 .Images-Containner>p{color:white; font-size:20px; } 
 .Images-Containner>h1{color:white; }
 .Data1{grid-area:Data1; text-align: center; color:white; }
 
  .Data2{grid-area:Data2; text-align: center;  color:white;}
   
  .Data1>p{margin-top:50px;}
  .Data2>p{margin-top:50px;}
  .Nombre{   grid-area:Nombre; text-align: center; }
 
 .Digimon-Images{
 
        grid-area:Image;
        
        width:300px;
        height:300px;
        background:green;
        padding:10px;
        align-self:center;
       
        border-radius: 175px 175px 175px 175px;
        -moz-border-radius: 175px 175px 175px 175px;
        -webkit-border-radius: 175px 175px 175px 175px;
        border: 9px solid #00aeff;
        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count: infinite;

 
 }
 
 @keyframes example {
  0%   {border: 9px solid red;}
  10%  {border: 9px solid #75507b;}
  20%  {border: 9px solid blue;}
  30% {border: 9px solid #c17d11;}
   40%  {border: 9px solid #75507b;}
  50%  {border: 9px solid blue;}
  60% {border: 9px solid #c17d11;}
     70%  {border: 9px solid #75507b;}
  80%  {border: 9px solid blue;}
  90% {border: 9px solid #c17d11;}
  100% {border: 9px solid #c17d11;}
}
</style>
