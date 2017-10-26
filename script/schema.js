var schema = {
    "type": "object",
    "properties": {
        "employees": {
            "type": "array",
            "minItems": 5,
            "maxItems": 100,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 0
                    },
                    "firstName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "lastName": {
                        "type": "string",
                        "faker": "name.lastName",
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email",
                    },
                    "phone": {
                        "type": "string",
                        "faker": "phone.phoneNumber",
                    },
                    "city": {
                        "type": "string",
                        "faker": "address.city",
                    },
                    "address": {
                        "type": "string",
                        "faker": "address.streetAddress",
                    }
                },
                required: ['id', 'firstName', 'lastName', 'email', 'phone', 'city']
            }
        }
    },
    required: ['employees']
};

module.exports = schema