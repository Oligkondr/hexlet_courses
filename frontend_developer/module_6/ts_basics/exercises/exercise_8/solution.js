var isComplete = function (course) { return course.lessons.length >= 4; };
var course1 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
};
var course2 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions', 'conditions'],
};
console.log(isComplete(course1));
console.log(isComplete(course2));
