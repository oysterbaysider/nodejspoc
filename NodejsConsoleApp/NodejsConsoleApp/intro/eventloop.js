var count = 0;
var intervalMs = 300;

var t = setInterval(function () {
    count++;
    console.log("Interval of " + intervalMs+" ms, count = " + count);
    if (count === 20) {
        clearInterval(t);
    }
}, intervalMs);

setTimeout(function () {
    console.log("Timeout at 1000 ms");
}, 1000);

console.log("Running!");