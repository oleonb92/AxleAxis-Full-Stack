// models/User.js

// Mock database
const users = [];

class User {
    constructor(id, firstName, lastName, email, passwordHash) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.passwordHash = passwordHash;
    }

    // Save a new user
    static save(user) {
        users.push(user);
    }

    // Find a user by email
    static findByEmail(email) {
        return users.find(user => user.email === email);
    }
}

module.exports = User;
