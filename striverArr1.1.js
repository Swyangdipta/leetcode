// https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    let newArr = []
    let oldArr = []
    let ihave = [1, 1]
    for (let j = 0; j < numRows - 2; j++) {

        for (let i = 0; i < ihave.length - 1; i++) {
            newArr.push(ihave[i] + ihave[i + 1])
        }
        newArr.push(1)
        oldArr.push([1].concat(newArr))
        ihave = [1].concat(newArr)
        newArr = []
    }
    if (numRows == 0) {
        return []
    } else if (numRows == 1) {
        return [[1]]
    } else if (numRows == 2) {
        return [[1], [1, 1]]
    } else {
        return [[1], [1, 1]].concat(oldArr)
    }


};