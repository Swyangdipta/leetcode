/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest=0
    let set = new Set()
    let right=0
    let left=0
    while(right<s.length){
        let letter =s[right]
        if(!set.has(letter)){
            set.add(letter)
            longest=Math.max(longest,set.size)
            right++
        }else{
            set.delete(s[left])
            left++
        }
    }
    return longest
};