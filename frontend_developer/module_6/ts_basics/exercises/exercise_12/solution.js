var Company;
(function (Company) {
    function isEmployeeEmail(email, domain) {
        return email.split('@')[1] === domain;
    }
    Company.isEmployeeEmail = isEmployeeEmail;
})(Company || (Company = {}));
console.log(Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io'));
console.log(Company.isEmployeeEmail('user@example.com', 'hexlet.io'));
