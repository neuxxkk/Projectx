

//aditional functions configs

function labelclick(){
  setTimeout(show, 1500)
  function show(){
  var label = document.getElementById("label").innerHTML="Arquivo Carregado!"
 
}}

function labelclick1(){
  setTimeout(show1, 1500)
  function show1(){
  var label1 = document.getElementById("label-icon").innerHTML="Ícone Carregado!"
 
}}



function input0focus(){
  var input0value=document.getElementsByTagName("input")[0].value=""
}
function input0blur(){
  var input0value1=document.getElementsByTagName("input")[0]
  if (input0value1.value=="") {
    input0value1.value="Este é o tópico do seu site"
  }
}



function input1focus(){
  var input1value=document.getElementsByTagName("input")[1].value=""
}
function input1blur(){
  var input1value1=document.getElementsByTagName("input")[1]
  if (input1value1.value=="") {
    input1value1.value="Descrição da sua imagem/vídeo"
  }
}


function input5focus(){
  var input5value=document.getElementsByTagName("input")[5].value=""
}
function input5blur(){
  var input5value1=document.getElementsByTagName("input")[5]
  if (input5value1.value=="") {
    input5value1.value="Escreva o que você quiser"
  }
}


function input6focus(){
  var input6value=document.getElementsByTagName("input")[6].value=""
}
function input6blur(){
  var input6value1=document.getElementsByTagName("input")[6]
  if (input6value1.value=="") {
    input6value1.value="Qual será o título do seu site?"
  }
}


function input8focus(){
  var input8value=document.getElementsByTagName("input")[8].value=""
}
function input8blur(){
  var input8value1=document.getElementsByTagName("input")[8]
  if (input8value1.value=="") {
    input8value1.value="Qual será a fonte da letra do seu site?"
  }
}
 


function clicou(){ 


//video/img config
const file=document.getElementsByTagName('input')[2].files[0]
const reader=new FileReader();

  //video
  if (file!=undefined) {
  var nofile=false
if(file.type=="video/mp4"){

console.log("video")

document.getElementById("videos").style.display="block"; 
var preview=document.getElementById('videos');
const file=document.getElementsByTagName('input')[2].files[0];
const reader=new FileReader();

reader.addEventListener("load", function () {
// codigo que converte a imagem
preview.src=reader.result;
}, false);

if (file) {
reader.readAsDataURL(file);

console.log(preview)
}
const label=document.getElementsByTagName('label')[0].innerHTML="Vídeo arquivado"


}else{
if (file.type!="video/mp4") {
  if (file.type!="image/jpeg") {      
  window.alert("Arquivo não suportado!")
  }
}
}   

      //img
      if(file.type=="image/jpeg"){
    
        console.log("imagem")
    
    var preview=document.getElementById('img')
    const file=document.getElementsByTagName('input')[2].files[0]
    const reader=new FileReader();
    
    reader.addEventListener("load", function () {
    // codigo que converte a imagem
    preview.src=reader.result;
    }, false);
    
    if (file) {
    reader.readAsDataURL(file);
    
    console.log(preview)
    }
    const label=document.getElementsByTagName('label')[0].innerHTML="Imagem arquivada"

    
  }else{
    if (file.type!="video/mp4") {
      if (file.type!="image/jpeg") {      
      window.alert("Arquivo não suportado!")
      }
    }
  }

  const label=document.getElementsByTagName('label')[0].style.display="none"
  preview.style.borderRadius= "10px";


}else{
  var nofile=true
  var testando=document.getElementById('label').innerHTML='<label for="archive" id="label">Selecione um arquivo!</label>'
  window.alert("Não existe nenhum arquivo anexado!")
  console.log("the file is"+file)
  
}









    
    if (nofile==false) {

        console.log("funcionou")

          //h1 configs
let h1txt=document.getElementsByTagName('input')[0].value
let h1camp=document.querySelector('h1').innerHTML=h1txt

 console.log(h1txt)



  //bgcolor configs
let bgcolortxt=document.getElementsByTagName("input")[7].value

if(bgcolortxt=="#000000"){
  bgcolortxt="e6e6e6"
}
let bgcolor=document.querySelector("body").style.backgroundColor=bgcolortxt

  console.log(bgcolortxt)



  //title configs
    var titletxt=document.getElementsByTagName('input')[6].value;
    let title=document.getElementsByTagName('title')[0].innerHTML=titletxt;      
  


console.log(titletxt)




   //descrição config
   let destxt=document.getElementsByTagName('input')[1].value
   const descamp=document.getElementsByTagName('p')[0].innerHTML=destxt
 
   console.log(destxt)



    





//paragrafo livre config
let ptxt=document.getElementsByTagName('input')[5].value
const pcamp=document.getElementsByTagName('p')[1].innerHTML=ptxt    //OBS: SE VC NÃO RESPONDER UM DOS INPUTS NO SITE O POSTERIORES DRÃO ERRO



  //icon config

  const labell=document.getElementsByTagName('label')[2].style.display="none"



  var iconfile= document.querySelector("link[rel='shortcut icon']")
  const fileicon=document.getElementsByTagName('input')[9].files[0]
  const readericon=new FileReader();
  
  readericon.addEventListener("load", function () {
   //codigo que converte a imagem
  iconfile.href=readericon.result;
  }, false);
  
  if (fileicon) {
  readericon.readAsDataURL(fileicon);
  
  console.log(iconfile)
   }
  
  


    
      //body configs


      //site positions configs
      
var radios = document.getElementsByName("band-rock");
for (var i = 0; i < radios.length; i++) {
if (radios[i].checked) {
console.log(radios[i].value);

if (radios[i].value=="centro") {
  let position=document.getElementById("bodi").style.textAlign="center"

  if (nofile==false) {
  preview.style.display= "block";
  preview.style.marginLeft= "auto";
  preview.style.marginRight= "auto"
  }
  
}
if (radios[i].value=="esquerda") {
  let position=document.getElementById("bodi").style.textAlign="left"

  if (nofile==false) {
  preview.style.display="block"
  preview.style.marginLeft="0%"
  preview.style.marginRight="85%"
  }
  
}
if (radios[i].value=="direita") {
  let position=document.getElementById("bodi").style.textAlign="right"

  if (nofile==false) {
  preview.style.display="block"
  preview.style.marginLeft="85%"
  preview.style.marginRight="0%"
  }
  
}
            }
        }
        
    
    //fontFamily configs

      var options=document.getElementById("listbox").value
    
      if (options=="Padrao"){
        console.log(options)
        var bodi=document.getElementById("bodi").style.fontFamily="candara"
      }
    
      if (options=="Calibri"){
        console.log(options)
        var bodi=document.getElementById("bodi").style.fontFamily=options
      }
    
      if (options=="Candara"){
        console.log(options)
        var bodi=document.getElementById("bodi").style.fontFamily=options
      }


      if (options=="Sans-Serif"){
        console.log(options)
        var bodi=document.getElementById("bodi").style.fontFamily=options
      }

      if (options=="Arial"){
        console.log(options)
        var bodi=document.getElementById("bodi").style.fontFamily=options
      }

      if (options=="Courier"){
        console.log(options)
        var bodi=document.getElementById("bodi").style.fontFamily=options
      }

      if (options=="Optima"){
        console.log(options)
        var bodi=document.getElementById("bodi").style.fontFamily=options
      }

      if (options=="raleway"){
        console.log(options)
        var bodi=document.getElementById("bodi").style.fontFamily=options
      }

      if (options=="century gothic"){
        console.log(options)
        var bodi=document.getElementById("bodi").style.fontFamily=options
      }


      //hidden configs
          //input0
          document.getElementById("inptxt").style.display="none"
          //input1            
          document.getElementById("inptxt1").style.display="none"
          //input4
          document.getElementsByTagName("input")[4].hidden=true
          //input5
          document.getElementById("inptxt2").style.display="none"
          //input6
          document.getElementById("inptxt3").style.display="none"
          //input7
          document.getElementsByTagName("input")[7].hidden=true
          //input8
          document.getElementsByTagName("input")[8].hidden=true
          //input9
          document.getElementsByTagName("input")[9].hidden=true
          //input10
          document.getElementsByTagName("input")[10].hidden=true
          //input11
          document.getElementsByTagName("input")[11].hidden=true
           //input12
           document.getElementsByTagName("input")[12].hidden=true
          
          //h20
          document.getElementsByTagName("h2")[0].hidden=true
          //h30
          document.getElementsByTagName("h3")[0].hidden=true
          //h31
          document.getElementsByTagName("h3")[1].hidden=true
          //h32
          document.getElementsByTagName("h3")[2].hidden=true
          //button0
          document.getElementsByTagName("button")[0].hidden=true
          //div1
          document.getElementsByTagName("div")[1].hidden=true
          //select0
          document.getElementById("listbox").style.display="none"
          
          
          

        


      
    }
    let bgcolor=document.querySelector("body").style.fontWeight="lighter;"

    }
   


 