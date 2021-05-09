function printName(firstname) {
    var myname = "jisu";
    return myname+","+firstname;
}

// js엔진 리딩순서 : 13, 7, 8, 9,( 1, 2, 3, 4), 9(result), 10, 11, 
function run(firstname) {
    var firstname = firstname || "Youn";/*firstname이 undefined이면 false값 Youn이 출력됨*/
    var result = printName(fristname);
    console.log(result);
}

run();
