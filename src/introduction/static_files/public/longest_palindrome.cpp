// 5. Longest Palindromic Substring

class Solution {
public:
    string longestPalindrome(string s) {
        const long mod = 1e9 + 7;
        string ans;
        int maxv = 0;

        for (int i = 0; i < s.size(); i++) {
            long v1 = 0, v2 = 0, x = 1;
            for (int j = i; j < s.size(); j++) {
                v1 = (v1 + x * (s[j] - 'a')) % mod;
                v2 = (v2 * 37 + (s[j] - 'a')) % mod;
                if (v1 == v2 and j - i + 1 > maxv) {
                    maxv = j - i + 1;
                    ans = s.substr(i, j - i + 1);
                }
                x = (x * 37) % mod;
            }
        }
        return ans;
    }
};