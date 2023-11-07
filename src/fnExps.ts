
/**
 *@returns {number} double the input
 */
 export function double(num: number): number {
  return num * 2; 
}


/**
 * @returns {number} 100 times the input
 */
export function times100(m:number):number{
  
    let multiple=1;
    multiple=100*m;
    return multiple;
}

 


/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function  myMap(arr:number[],callback:(num:number)=>number):number[]{
  const newArray:number[]=[];
  for(let elem of arr){
      newArray.push(callback(elem));
  }
    return newArray;
 }





