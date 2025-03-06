namespace Company {
    export function isEmployeeEmail(email: string, domain: string): boolean {
        return email.split('@')[1] === domain;
    }
}

console.log(Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io'));
console.log(Company.isEmployeeEmail('user@example.com', 'hexlet.io'));
