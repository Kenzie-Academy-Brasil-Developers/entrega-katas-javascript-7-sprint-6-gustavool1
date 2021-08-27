// ------------------for each- -------------------
function newForEach(array, callback) { 
    for(let i=0; i<array.length;i++){
        index = i
        currentValue = array[i]
        callback(currentValue, index, array)
    }
    return undefined
}
let vetor = [1,3,4,3,54,53,56,67,6]
let vetorNewForEach  = []
let vetorForEach = []
function forEachCallBack (currentValue,index, array){
    vetorNewForEach.push(currentValue*2)
}

// ---------------- Fill --------------------

function newFill(array,value,begin=0,end=array.length){
    for(let i=begin; i<end;i++){
        array[i] = value
    }
    return array
}
// ---------------- map --------------------
let mapTeste = arrMap.map((elemento)=>elemento*2)
function newMap(array,callback){
    let retorno = []
    for(let i=0; i<array.length;i++){
        let currentElement = array[i]
        retorno.push(callback(currentElement, i, array))
    }
    return retorno
}   
 function mapCallBack(elemento, indice, array){
     return elemento*2
 } 
 
 // --------------------some ---------------------
 function newSome(array,callback){
    for(let i=0; i<array.length;i++){
        let currentElement = array[i]
        if(callback(currentElement,i,array)){
            return true
        }   
    }
    return false
 }

 function someCallBack(currentElement,index,array){
    if(currentElement > 30){
        return true
    }
    return false
 }
 // -----------------find---------------------
 let pizzas = ['marguerita','mussarela','chocolate','chumbinho']
 function newFind(array,callback){
     for(let i=0; i<array.length;i++){
         let currentElement = array[i]
         if(callback(currentElement,i,array)){
             return currentElement  
         }
     }
 }
 function findCallBack(currentElement,index,array){
    if(currentElement.startsWith('c')){
        return true
    }
 }
 // ----------------- findIndex -----------------
 let findIndexArr = ['carro','fumaça','comida','chocolate','bolo', 'bolo']
 function newFindIndex(array, callback){
     for(let index=0; index<array.length;index++){
        let currentElement = array[index]
        if(findIndexCallBack(currentElement,index,array) !== -1){
            return index
        }
     }
     return -1
 }
 function findIndexCallBack(currentElement,index,array){
    if(currentElement === 'bolo'){
        return index
    }
    return -1
 }
 //----------------every() -----------------
let everyArr = [0,2,3,4,5,6,7,6,8]
 function newEvery(array,callback){
    let cont = 0
    for(let index=0; index<array.length;index++){
        currentValue = array[index]
        cont+=callback(currentValue,index,array)
    }
    if(cont === array.length){
        return true
    } 
    return false
 }

 function newEveryCallBack(currentValue,index=0,array=0){
    if(currentValue > 0) return 1
 }

// -------------- filter ----------------
function  newFilter(array, callback){
    let newArr = []
    for(let index=0; index<array.length;index++){
        let currentElement = array[index]
        if(newFilterCallBack(currentElement,index,array) !== undefined){
            let filtered = 
            newArr.push(newFilterCallBack(currentElement,index,array))
        }
    }
    return newArr
}
function newFilterCallBack(currentElement,index,array){
    if(currentElement === 8){
        return currentElement
    }
}
// ----------- concat -----------------

function newConcat(...array){
    let newArr = []
    for(let i=0;i<array.length;i++){
        for(let j=0; j<array[i].length;j++){
            newArr.push(array[i][j])
        }
    }
    return newArr
}

// ----------- includes ----------------

function newIncludes(array,searchElement, fromIndex=0){
    for(let i= fromIndex; i<array.length;i++){
        if(array[i] === searchElement){
            return true
        }
    }
    return false
}
// ------------- indexOf ---------------

function newIndexOf(array,searchElement,fromIndex=0){
    for(let index=0;index<array.length;index++){
        if(array[index]===searchElement){
            return index
        }
    }
    return -1
}

// ---------------------- join -------------------
let word = ['Meu', 'nome', 'é', 'Gustavo']
function  newJoin(array, separator=','){
    let str = ''
    for(let i=0; i<array.length;i++){
        if(i=== array.length-1){
            str += array[i]    
        }else{
            str += array[i] + separator
        }
        
    }
    return str
}

function newReduce(array,callback){
    let acummulator = 0
    for(let index = 0 ; index<array.length;index++){
        let currentValue = array[index]
        acummulator = reduceCallBack(acummulator,currentValue,index,array,0)
    }
    return acummulator
}
function reduceCallBack(acummulator,currentValue,index,array,startValue=0){
    return acummulator+currentValue
}