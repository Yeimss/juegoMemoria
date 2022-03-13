document.addEventListener("DOMContentLoaded",function(){
    const cuadrosTablero = document.querySelectorAll(".tablero div")
    const resultadoAliens = document.querySelector(".conteo")
    let cuadros = 15;
    let posicionNave = 202;
    let posicionAliens = 0;
    let aliensMuertos = 0;
    let resultado = 0;
    let direccion = 1;
    let alienID = 0;
    let aliens = [  ]
    for (i=0;i<42;i++){
        aliens.push(i)
    }
    console.log(aliens)

   

    // aliens.forEach(alien => cuadrosTablero[posicionAliens+alien].classList.add("aliens"))

    function ubicarAliens(){
        for(let index = 0; index < aliens.length; index++){
            cuadrosTablero[aliens[index]].classList.add("aliens")
        }

    }

    ubicarAliens();

    function quitarAliens(){
        for(let index = 0; index < aliens.length; index++){
            cuadrosTablero[aliens[index]].classList.remove("aliens")
        }

    }
    

    cuadrosTablero[posicionNave].classList.add('nave')
  
    // para mover la nave a los lados

    function moverNave(evento){

        cuadrosTablero[posicionNave].classList.remove('nave')
        switch(evento.key){
            case "ArrowLeft":
                if(posicionNave % cuadros !== 0){
                    posicionNave -= 1;
                }
            break
            case "ArrowRight":
                if((posicionNave % cuadros) < cuadros -1){
                    posicionNave += 1;
                }
            break;
            
            
        }
        cuadrosTablero[posicionNave].classList.add("nave")
    }
    document.addEventListener('keydown',moverNave)
    

})