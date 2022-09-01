function what() {
    alert("bye, get lost idiot")
    return 23
}

let say = what
    // console.log(say())

// let age = prompt("enter your age", 18);

// let ans = (age > 18) ? function() { alert("greeting sensei!!!") } : function() { alert("hello buoyyy") };

// ans()


// ARROW FUNCTION

// let check = (a) => (a > 18) ? alert("hello sensei") : alert("whatta buoyyy");
// check(prompt("Enter your age"))

// MultiLine Arrow Func

let comp = (a, b) => {
    let result = a + b;
    return result;
};
console.log(comp(2, 5));