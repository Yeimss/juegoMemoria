//imagenes

let imgs=[
    {
        number:1,   
        img:"media/gon.png",
        name:"gon"
    },
    {
        number:2,
        img:"media/killua.jpg",
        name:"killua"
    },
    {
        number:3,
        img:"media/hisoka.jpg",
        name:"hisoka"
    },
    {
        number:4,
        img:"media/kurapika.jpg",
        name:"kurapika"
    },
    {
        number:5,
        img:"media/meruem.jpg",
        name:"meruem"
    },
    {
        number:6,
        img:"media/neferpitou.jpg",
        name:"neferpitou"
    },
    {
        number:7,
        img:"media/gon.png",
        name:"gon"
    },
    {
        number:9,
        img:"media/killua.jpg",
        name:"killua"
    },
    {
        number:8,
        img:"media/hisoka.jpg",
        name:"hisoka"
    },
    {
        number:10,
        img:"media/kurapika.jpg",
        name:"kurapika"
    },
    {
        number:11,
        img:"media/meruem.jpg",
        name:"meruem"
    },
    {
        number:0,
        img:"media/neferpitou.jpg",
        name:"neferpitou"
    }
]
//tablero html
let tablero= document.querySelector(".tablero")

//arreglo para guardar el nombre en el tablero 
let imgElegida = [];

//arreglo para guardar el numero de la img
let imgNumber=[];

//arreglo para guardar el ID de las imagenes
let imgElegidaId = [];
let imgElegidaId2 = [];
let aciertos = document.querySelector(".conteo"); 
let conteo = [];
let errores=document.querySelector(".conteoErrores");
let conteoErrores=[];


//funcion para colocar las imagenes en html
function crarTablero(){
    imgs.sort(function(){
        return Math.random() -0.5
    })
    
        imgs.forEach(fotitos => {
            let img=document.createElement("img")
            img.setAttribute("data-id",imgs.indexOf(fotitos))
            img.setAttribute("src", "media/x.png")
            img.setAttribute("width","200px");
            tablero.appendChild(img)
            img.addEventListener("click", descubrirImagen);
           
        });
    }


//funcion para descubrir una imagen
function descubrirImagen(){
    
    let img = this.getAttribute("data-id");
    imgElegida.push(imgs[img].name);
    imgElegidaId.push(img);
    imgElegidaId2.push(imgs[img].number);


    if(imgNumber.includes(imgElegidaId2.pop())){
        alert("no selecciones elementos que ya descubriste")
        imgElegida=[]
        imgElegidaId=[]
    }else{
        this.setAttribute("src", imgs[img].img);
        if(imgElegida.length === 2){
            setTimeout(compararImagen, 300)
        }
    }

}



//funcion para comparar las imagenes
function compararImagen(){
    let todasLasImg = document.querySelectorAll("img");
    let opcion1 = imgElegidaId[0];
    let opcion2 = imgElegidaId[1];
    
        if(imgElegida[0] === imgElegida[1]){    
            if(opcion1!=opcion2 ){
                todasLasImg[opcion1].setAttribute("src", "media/si.png");
                todasLasImg[opcion2].setAttribute("src", "media/si.png");
                imgNumber.push(imgs[opcion1].number)
                imgNumber.push(imgs[opcion2].number)
                conteo.push(imgElegida);
            }else{
                alert("no selecciones dos veces la misma imagen")
                todasLasImg[opcion1].setAttribute("src", "media/x.png")
            }
        }else{
            todasLasImg[opcion1].setAttribute("src", "media/x.png")
            todasLasImg[opcion2].setAttribute("src", "media/x.png")
            conteoErrores.push("jaja, fallaste :p")
            
        }   
//volver a llenar el arreglo
imgElegida = [];
imgElegidaId = [];
aciertos.textContent = conteo.length;
errores.textContent = conteoErrores.length;

if(conteo.length === 6){
    setTimeout(()=>{
        alert("GANASTEEE!!")
        location.reload()
    }, 3000)
} 
}

crarTablero()