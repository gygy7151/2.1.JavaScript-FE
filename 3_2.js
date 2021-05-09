// 함수 - arguments 속성
function a() {
    console.log(arguments);
}
a(1,2,3);

function a() {
    console.log(arguments);
    for(var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
a(1,2,3);
//결과
//1
//2
//3

function a() {
    console.log('my name is ', arguments[2])
}
a(1,2,"jisu");
//my name is jisu

function a() {
    if(arguments.length < 3) return; /**arguments값은 수정조심 & 왠만하면 바꾸면 안됨 */
    console.log('my name is ', arguments[2])
}
a(1,2,"jisu");
//my name is jisu

//arrow function
// ES2015에서 추가됨.
function getName(name) {
    return "Kim" + name ;
}

// 위 함수는 아래 arrow함수와 같다.
var getName = (name/**파라미터 */) => "Kim " + name


