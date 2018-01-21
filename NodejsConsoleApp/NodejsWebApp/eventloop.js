var count = 0;

var t = setInterval(function () {
    count++;
    console.log("Interval of 10 ms, count = " + count);
    if (count === 20) {
        clearInterval(t);
    }
}, 300);

setTimeout(function () {
    console.log("Timeout at 1000 ms");
}, 1000);

console.log("Running!");