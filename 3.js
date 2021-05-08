//함수선언식 grammer
// function printName(firstname) {
//     return "name is " + firstname;
// }

console.log(printName('jisu', 'crong'));
// jisu -> 함수 매개변수와 일치하지 않는걸 입력시 함수는 오류를 리턴하지 않음

//함수표현식 Grammer -> 함수표현식이란 함수의 변수값에 함수식을 담은것
function printName(firstname) {

    var inner = function() {
        return "inner valuel";
    }

    var result = inner();
    console.log("name is " + result);
}

printName();

// undefined란 값이 선언은 되어 있는데 할당이 안되어 있는경우를 의미
// js는 쭉 훑은데 함수는 맨 위로 끌어올린다고 함
// 함수 표현식은 변수만 앞으로 올라감
// -> 이게 호이스팅****
// 함수선언문은 함수가 올라감 이게 함수표현식과의 차이


// return 대신 void같은건 없고 그냥 undefined만 반환됨

function a() {
    return "";
}
console.log(a());

//함수의 호출.
function printname(firstname) {
    var myname = "jisu";
    return myname + " " + firstname;
}

function printname(firstname /*undefined*/) {
    var myname = "jisu";
    return "name is " + firstname;
}

function printName(firstname) {
    console.log("name is " + firstname);

    var inner = function() {
        return "inner value";
    }

    var result = inner();
    console.log("name is " + result);s
}