<script>
import { onMount , afterUpdate, beforeUpdate } from 'svelte'
import { nameselect } from "../GetData"
import axios from "axios";


let DigiData = []

beforeUpdate(async()=>{

        let url = 'https://digimon-api.vercel.app/api/digimon'
           let Addres = url+'/name/'+$nameselect
                //console.log("URL = "+Addres)
                
                
    await fetch(Addres)
      .then(response => response.json())
      .then(function(result){   DigiData = result; })

        //console.log('date',$nameselect)

});




</script>
<!---->
<div class="Images-Containner">
        {#each DigiData as data (  data.name  )}
                <div class="Data1">
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                       when an unknown printer took a galley of type and scrambled it to make a type 
                       specimen book.</p>
                       <p>
                       Lorem Ipsumは、印刷および植字業界の単なるダミーテキストです。 Lorem Ipsumは、未知のプリンターがタイプのギャレーを取り、それをスクランブルしてタイプの見本帳を作成した1500年代以来、業界の標準的なダミーテキストでした。
Lorem Ipsum wa
                       </p>
                </div>
                <div class="Digimon-Images">
                         <img class="Images" src={data.img}>
                </div>     
                <div class="Data2">
                        <h2>Level</h2>
                        <h3 class="Level">{data.level}</h3>
                        <p>Lorem Ipsumは、印刷および植字業界の単なるダミーテキストです。 Lorem Ipsumは、未知のプリンターがタイプのギャレーを取り、それをスクランブルしてタイプの見本帳を作成した1500年代以来、業界の標準的なダミーテキストでした。
Lorem Ipsum wa</p>
                       
                        
                </div>
                <div class="Name">
                        <h1 class="Nombre">{data.name}</h1>
                        
                </div>
        {/each}
</div>
             
                      
   <style>
   
   .Images-Containner{
        width:100%;
         height:80vh;

  }
  
   .Images-Containner{
        background:rgba(0, 0, 0, 0.3);
        
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 70px;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        justify-content: center;
        align-content: center;
        grid-template-areas:
                            'Data1 Image Data2'
                            ' Name Name Name ';

 }
 .Data1{
 
 grid-area:Data1; 
        text-align: center; 
        color:white; 
        width:auto;
       /*background:#73d216;*/
        box-shadow: inset 0 0 18px #fff,
        inset 6px 0 18px #f3bad6,
        inset -6px 0 18px #0ff,
        inset 6px 0 30px #f3bad6, 
        inset -6px 0 30px #0ff,
        0 0 18px #fff, -4px 0 18px #f3bad6,
        4px 0 18px #0ff;
         margin:30px 0px 0px 60px;
 }
 .Data2{
         margin:30px 60px 0px 0px;
        grid-area:Data2; 
         text-align: center; 
         color:white; 
         width:auto; 
        /* background:#5c3566;*/
        box-shadow: inset 0 0 18px #fff,
        inset 6px 0 18px #f3bad6,
        inset -6px 0 18px #0ff,
        inset 6px 0 30px #f3bad6, 
        inset -6px 0 30px #0ff,
        0 0 18px #fff, -4px 0 18px #f3bad6,
        4px 0 18px #0ff;
 }
 
 .Data1>p, .Data2>p{
         margin-top:30px;
         padding:6px;
 }
 .Data2>h2{ margin-top:30px;}
 .Name{
 
 grid-area:Name; text-align: center; color:white; width:auto;
 /*background:#a40000;*/
 text-shadow:
 
 0 0 40px #ffffff , 
 0 0 70px #476bff , 
 0 0 80px #729fcf ,
  0 0 100px #ffffff ;
  
  font-size:26px;
 }
 
 .Digimon-Images{
 
        grid-area:Image;
        
        width:100%;
        height:auto;
 
  text-align: center;
  

 }
 
 .Digimon-Images>img{  text-align: center; 

         border-radius: 175px 175px 175px 175px;
        -moz-border-radius: 175px 175px 175px 175px;
        -webkit-border-radius: 175px 175px 175px 175px;
        //border: 9px solid #00aeff;
      /*   */
        
        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        
        margin-top:30px;
 box-shadow: 
      
     
         -2px -2px 25px 12px rgba(255,255,255,0.94),
         2px 2px 25px 12px rgba(0,163,176,0.75);
  }
  /*
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
}*/
  </style>
