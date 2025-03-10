const lessonsCount = ({lessons}: { lessons: string[] }): number => {
    return lessons.length
}

const course = {lessons: ['intro', 'lala']};
console.log(lessonsCount(course))
