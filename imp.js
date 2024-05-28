
function main(){
document.querySelector(".rock").onclick=()=>{
let d=find(r);
 if(d==`rock`){
    alert("draw")
    setTimeout(()=>{
      document.querySelector("body").style.backgroundColor="black"
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>DRAW</h1>
       </div>
       <div class="main">
        <a href="aaa.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
},1000)
 }
 else if(d==`paper`)
 {
    alert("loose")
        setTimeout(()=>{
          document.querySelector("body").style.backgroundColor="black"
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>LOOSE</h1>
       </div>
       <div class="main">
        <a href="aaa.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
},1000)
 }
 else if(d==`scissor`){
    alert('win')
        setTimeout(()=>{
          document.querySelector("body").style.backgroundColor="black"
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>WIN</h1>
       </div>
       <div class="main">
        <a href="aaa.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
},1000)
 }
}
document.querySelector(".paper").onclick=()=>{
let d=find(r);
 if(d==`rock`){
    alert("win")
        setTimeout(()=>{
          document.querySelector("body").style.backgroundColor="black"
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>WIN</h1>
       </div>
       <div class="main">
        <a href="aaa.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
},1000)
 }
 else if(d==`paper`)
 {
    alert("draw")
        setTimeout(()=>{
          document.querySelector("body").style.backgroundColor="black"
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>DRAW</h1>
       </div>
       <div class="main">
        <a href="aaa.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
},1000)
 }
 else if(d==`scissor`){
    alert('loose')
        setTimeout(()=>{
          document.querySelector("body").style.backgroundColor="black"
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>LOOSE</h1>
       </div>
       <div class="main">
        <a href="aaa.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
},1000)
 }
}
document.querySelector(".scissor").onclick=()=>{
 let d=find(r);
 if(d==`rock`){
    alert("lose")
        setTimeout(()=>{
          document.querySelector("body").style.backgroundColor="black"
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>YOU LOSE</h1>
       </div>
       <div class="main">
        <a href="aaa.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
},1000)
 }
 else if(d==`paper`)
 {
    alert("win")
        setTimeout(()=>{
          document.querySelector("body").style.backgroundColor="black"
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>YOU WIN</h1>
       </div>
       <div class="main">
        <a href="aaa.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
},1000)
 }
 else if(d==`scissor`){
    alert('draw')
        setTimeout(()=>{
          document.querySelector("body").style.backgroundColor="black"
         document.querySelector("body").style=``
 document.querySelector("body").innerHTML=`<div class="hello">
        <h1>DRAW</h1>
       </div>
       <div class="main">
        <a href="aaa.html">
            <button>
                <h1>RESTART</h1>
            </button>
        </a>
       </div>`
},1000)
 }
}

}
let r=Math.random();
console.log(r)
function find(r)
{
if(0<r && r<0.3333333)
{
    document.querySelector(".main1").innerHTML=`<img src="scissor.jpg" width="200px"><h1>scissor</h1>>`
let c= `scissor`
return c
}
else if(0.333333<r && r<0.666666)
{
    document.querySelector(".main1").innerHTML=`<img src="rock.jpg" width="200px"><h1>rock</h1>`
let c= `rock`
return c
}
else if(r<0.999999)
{
     document.querySelector(".main1").innerHTML=`<img src="paper.jpg" width="200px"><h1>paper</h1>`
let c = `paper`
return c
}
}
main();




