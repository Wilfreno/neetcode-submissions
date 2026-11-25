class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

        const obj = {}
        for(const c of s){
            obj[c] = obj[c] ? obj[c] + 1 : 1
        }

        for(const c2 of t){
            if(!obj[c2]) return false
            obj[c2]--
        }
        return true
    }
}
