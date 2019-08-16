/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function (s) {
      let strArr=s.split(" ");
      let result=[];
      for(let i=0,len=strArr.length;i<len;i++){
          let wordArr=strArr[i].split("");
            wordArr=wordArr.reverse().join("");
            result.push(wordArr);
      }
      result=result.join(" ");
      return result;
    };