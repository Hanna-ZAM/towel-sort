
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
    let arr= [];
    if (matrix==undefined) {
        return arr;
    } else {
    if (matrix===[]) {
        return matrix;
    } else {
    for (let i=0; i<matrix.length; i++) {
  if (i%2===0) {
      arr=[...arr,...matrix[i]];
    } else {
    matrix[i]= matrix[i].reverse();
     
        arr=[...arr,...matrix[i]];
   }
}
      
      
  return arr;
}
    }
}
