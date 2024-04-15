// https://leetcode.com/problems/set-matrix-zeroes/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let newArr = []
    for(let i = 0 ; i<matrix.length;i++){
       for(let j = 0;j<matrix[i].length;j++){
        if(matrix[i][j]==0){
           newArr.push([i,j])
        }
       }
    }

    newArr.forEach((data)=>{
matrix[data[0]]=Array.from({ length: matrix[0].length }, () => 0)
matrix.forEach((data2)=>data2[data[1]]=0)
    })
    console.log(matrix)
};
