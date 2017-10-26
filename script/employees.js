// employees.js
var faker = require('faker')

function generateEmployees() {
    var employees = [];
    
    for (var id = 0; id < 50; id++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email();
        const city = faker.address.city();
        const address = faker.address.streetAddress();
        const zipCode = faker.address.zipCode();
        const phone = faker.phone.phoneNumberFormat();

        employees.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "phone": phone,
            "address": address,
            "city": city,
            "zip_code": zipCode
        })
    }
    return {
        "employees": employees
    }
}
module.exports = generateEmployees