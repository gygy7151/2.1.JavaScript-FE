// 삼항 연산자로도 어떤값을 다룰 수 있음
var a = "";

// a에 뭐가 있으으면 ok, 아무값이 없으면 not okay
var result = (a) ? "ok" : "not ok";

console.log(result);
// not okay

var a = "something..";

var result = (a)? "ok" : "not ok";

console.log(result);
// ok


// swithch문은 어떤 케이스들이 명확하게 있고, 헷갈리면 모든 case에 default값도 존재함

// 반복문 

function howMany(selectObject) {
    var numberSelected = 0;
    for (var i =0; i<selectObject.length; i++) {
        if(selectObject.options[i].selected) {
            numberSelected++;
        }
    }
}
//for문
varr = [1,2,3];
for(var i=0, len = arr.len; i<len; i) {

}

// reverse for문
varr = [1,2,3];
var len = arr.length;
for(var i=len; i>0; i--) {

}

//모든 문자열도 객체로 읽힘
"ab:cd".split(":"); //["ab,"cd]
"ab:cd".replace(":", "$"); //"ab$cd"
" abcde  ".trim(); //"abcde"

//Split는 배열을 만들어주는 메소드
var result = "ab:cd".split("");
console.log(toString.call(result));//[object Array]
console.log(typeof result);
