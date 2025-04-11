var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var course = {
    title: "Hello",
    subtitle: "sub...",
    stats: {
        lessonsCount: 10
    }
};
//Copiar l'objecte i els seus futurs canvis. (Com una sombra)
var newCourse = __assign({}, course);
console.log(newCourse);
//Modifiquem en l'objecte original i es modifica també en el nou. 
course.stats.lessonsCount = 100;
console.log(newCourse);
