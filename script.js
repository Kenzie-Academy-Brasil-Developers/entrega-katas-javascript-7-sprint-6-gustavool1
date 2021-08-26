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
newForEach(vetor,forEachCallBack)
vetor.forEach((elemento)=>vetorForEach.push(elemento*2)) 


// ---------------- Fill --------------------

function newFill(array,value,begin=0,end=array.length){
    for(let i=begin; i<end;i++){
        array[i] = value
    }
    return array
}
let fillArr = [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]
let fillArr2 = [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]
fillArr2.fill(1,1,4)
newFill(fillArr,1,1,4)

// ---------------- map --------------------
let arrMap = [10,4,2,6,20,8]
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