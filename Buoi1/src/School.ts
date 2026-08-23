import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";

export class School {
    name: string;
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addStudent(student: Student): void {
        this.students.push(student);
        console.log(`Student "${student.name}" enrolled.`);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
        console.log(`Teacher "${teacher.name}" joined.`);
    }

    displayInfo(): void {
        console.log(`\n School: ${this.name}`);
        console.log(`${"─".repeat(40)}`);

        console.log(`\n Teachers (${this.teachers.length}):`);
        if (this.teachers.length === 0) {
            console.log("  No teachers.");
        } else {
            this.teachers.forEach((t, i) => {
                console.log(`  ${i + 1}. ${t.name} | Age: ${t.age} | Subject: ${t.subject}`);
            });
        }

        console.log(`\nStudents (${this.students.length}):`);
        if (this.students.length === 0) {
            console.log("  No students.");
        } else {
            this.students.forEach((s, i) => {
                console.log(`  ${i + 1}. ${s.name} | Age: ${s.age} | Grades: ${s.grades}`);
            });
        }

        console.log(`\nTotal members: ${this.students.length + this.teachers.length}`);
    }
}

const school = new School("Trường Đại học Công Nghiệp Tp Hồ Chí Minh");

school.addTeacher(new Teacher("Ms. Lan", 35, "Mathematics"));
school.addTeacher(new Teacher("Mr. Duc", 42, "Physics"));

school.addStudent(new Student("Hoang Nguyen", 21, 9.5));
school.addStudent(new Student("Thi Mai", 20, 8.7));
school.addStudent(new Student("Van Nam", 22, 7.9));

school.displayInfo();
