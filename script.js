//Solución Angel

//Solución Alejandro

var solution = function(firstArray, secondArray) {
    return firstArray
            .map((elem,i)=>(elem - secondArray[i]) ** 2)
            .reduce((acc,val)=>acc+val,0)
            /firstArray.length
  }
  var solution = (firstArray, secondArray) => firstArray
              .map((elem,i)=>(elem - secondArray[i]) ** 2)
              .reduce((acc,val)=>acc+val,0)
              /firstArray.length

              
//Mi solución en proceso

var solution = function(firstArray, secondArray) {
  
    let arrDifCuadrado = [];
    
    for (let i = 0; i < firstArray.length; i++){
     arrDifCuadrado[i] = ((firstArray[i] - secondArray[i])**(firstArray[i] - secondArray[i]));  
     arrDifCuadrado.push(arrDifCuadrado[i]);
    }
   let total = 0
    for (let i=0; i < arrDifCuadrado.length;i++){
      total = total+arrDifCuadrado[i];
    }
    return total/arrDifCuadrado.length
    
  }