<script>
import { onMount } from 'svelte'
import A from "../GetData"

console.log(A())
//https://jsonplaceholder.typicode.com/posts')
//const [data] = fetchStore( 'https://digimon-api.vercel.app/api/digimon'  )
 
//console.log('Infiormacion',$data)
let url = 'https://digimon-api.vercel.app/api/digimon'
let Addres = url+'/name/Koromon'
let DigiData = []
console.log("URL = "+Addres)

onMount(() => {
    fetch( Addres )
      .then(response => response.json())
      .then(function(result){   DigiData = result; console.log(DigiData) })

 });

console.log(DigiData)



</script>
<!---->
        <div class="Images-Containner">
       
   {#each DigiData as data (data.name)}
          <div class="Digimon-Images">
                <img class="Images" src={data.img}>
          </div>     
                <div class="Data">
                    <h1 class="Nombre">{data.name}</h1>
                    <h2 class="Level">{data.level}</h2>
                </div>

 {/each}                  
 </div>
             
                      
   <style>
  .Images-Containner{
        width:100%;
         height:80vh;

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
                            'Image Image Image'
                            'Data Data Data';

 }
 

 
 
.Data2{grid-area:Data2; text-align: center;  color:white;}
   
  
  .Data2>p{margin-top:50px;}
  .Nombre{   grid-area:Nombre; text-align: center; background:red; }
 

 .Data{grid-area:Data; text-align: center; color:white; width:auto; background:red;}
 .Digimon-Images{
 
        grid-area:Image;
        
        width:100%;
        height:300px;
 
  text-align: center;
  
  background:yellow;
 }
  .Digimon-Images>img{  text-align: center; 
 
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
