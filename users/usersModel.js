const db = require('../data/db-connection')

module.exports = {
    // add,
    find,
    // findBy,
    // findById
}

function find() {
    return db('users')
    .select('id', 'username', 'department')
    .orderBy('id')
}