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

