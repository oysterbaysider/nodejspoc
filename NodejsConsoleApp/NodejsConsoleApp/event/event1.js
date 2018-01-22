﻿var EventEmitter = require('events').EventEmitter;

var getResource = function (c) {
    var e = new EventEmitter();
    process.nextTick(function () {
    //setTimeout(function () {
        var count = 0;
        e.emit('start');
        var t = setInterval(function () {
            e.emit('data', ++count);
            if (count === c) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 100);
    });
    console.log("Check if I started?");
    return (e);
};

var r = getResource(5);

r.on('start', function () {
    console.log("I've started!");
});

r.on('data', function (d) {
    console.log("   I received data -> " + d);
});

r.on('end', function (t) {
    console.log("I'm done, with " + t + " data events.");
});