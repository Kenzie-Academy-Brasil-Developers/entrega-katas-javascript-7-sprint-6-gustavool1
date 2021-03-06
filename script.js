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
        if(callback(currentElement,index)){
            return index
        }
     }
     return -1
 }
 let everyArr = [0,2,3,4,5,6,7,6,8]
 //----------------every() -----------------

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
        if(callback(currentElement,index,array ) !== undefined){
            newArr.push(callback(currentElement,index,array))
        }
    }
    return newArr
}

// ----------- concat -----------------

function newConcat(...array){
    let newArr = []
    
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            for(let j=0; j<array[i].length;j++){
                newArr.push(array[i][j])
            }
        }else{
            newArr.push(array[i])

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
let word = ['Meu', 'nome', , 'Gustavo']
function  newJoin(array, separator=','){
    let str = ''
    for(let i=0; i<array.length;i++){
        if(i=== array.length-1){
            if(array[i] === undefined || array[i]===null){
                array[i] = ""
            }
            str += array[i]    
        }else{
            if(array[i] === undefined || array[i]===null ){
                array[i] = ""
            }
            str += array[i] + separator
        }
        
    }
    return str
}
// ---------------------- newREduce -------------------

function newReduce(array,callback, acumulador){
    let acc = acumulador
    for(let index = 0 ; index<array.length;index++){
        let currentValue = array[index]
        acc = callback(acc,currentValue,index,array)
    }
    return acc
}

// ------------------- newSlice --------------------
function newSlice(array,begin=0, end=array.length){
    let arr = []
    if(begin>=0){
        for(let i=begin;i<end;i++){
            arr.push(array[i])
        }
    }else{
        begin = end +begin
        console.log(begin)
        for(let i=begin;i<end;i++){
            arr.push(array[i])
        }
    }
    
    return arr
}

// function newFlat(array, profundidade=1){
//     let arr = []
//     let j = 0    
//     for(let i=0; i<array.length;i++){
//         if(Array.isArray(array[i])){
//             console.log(array[i])
//         }
//         arr.push(array[i]) 
//     }   
//     console.log(ar      r)
// }

