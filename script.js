// complete the given function

function palindrome(str){
int length = str.length;
str1 = str.toLowerCase();
for(int i =0 ; i< length /2; i++){
if(str1[i] != str1[length -1-i]){
return false;
}
}
return true;
}
module.exports = palindrome
