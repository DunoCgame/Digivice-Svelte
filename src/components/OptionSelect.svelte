<script>
import { onMount } from 'svelte'
import { nameselect } from "../GetData"
import axios from "axios";


  
  
  let posts = []
  let collection;
 
onMount(() => {

axios.get('https://digimon-api.vercel.app/api/digimon')
  .then(function ( response  ) {
    // handle success
    posts = response.data
    //console.log('Info-axios',response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
 
 	collection = document.getElementsByClassName("optionContainner");
 });
 
console.log('posts',posts)

function ButtonRight(){

       collection[0].scrollLeft+=100
 

}

function ButtonLeft(){

        collection[0].scrollLeft-=100

}

	
function ClickImage(name){

               nameselect.SendName(name)
}



 </script>

<div class="Informacion">
                <button on:click={ButtonLeft}  class="button1"  >A</button>
                <div class="optionContainner" id='l'>
                     <!---->
                               { #each posts as post (post.name)}
        <div class='Option'  on:click={ ()=>ClickImage(post.name)  }>
                                                <img src={post.img}>
                                  </div>
                                {/each}
                   
                        
                </div>
                <button on:click={ButtonRight} class="button2">B</button>
        </div>

<style>

.Informacion{
         width:100%;
         height:20vh;
  }

.Informacion{
         display:flex;
         justify-content: center;
         background:#ffffff;
 }
 

 
 .button1{align-self:center;}

 .button2{align-self:center;}
 
  .optionContainner{
          align-self:center; 
          width:80%; 
           height:auto;
          text-align:center;   
          display:flex;
        flex-direction:row;
      overflow-x:scroll;
      
      background:#d3d7cf;
        } 
        
        ::-webkit-scrollbar {
    display: none;
}
        
 .Option{
        width:200px;
        height:auto;
        margin:5px;
        display:flex;
        flex-direction:column;
   
 
 }
 
 .Option>img{
        width:80px;
        height:auto;
 }
 
 .Informacion>button{
        color:white;
        border-radius:100%;
        background:blue;
        margin:30px;
        width:50px;
        height:50px;
 }

</style>
