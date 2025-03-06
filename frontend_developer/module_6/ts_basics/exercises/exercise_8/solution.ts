const isComplete = (course: { name: string, lessons: string[] }): boolean => course.lessons.length >= 4;

const course1 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
};
const course2 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions', 'conditions'],
};

console.log(isComplete(course1));
console.log(isComplete(course2));
