const knex = require('./knex');

// CREATE
function createCar(car) {
    return knex('cars').insert(car); // cars being the table name.
}

// READ (SPECIFIC ROW)
function getCar(id) {
    return knex('cars').where('id', '=', id);
}

// READ (ALL)
function getAllCars() {
    return knex('cars').select('*');
}

// UPDATE
function deleteCar(id) {
    return knex('cars').where('id', id).del();
}

// DELETE
function updateCar(id, car) {
    return knex('cars').where('id', id).update(car);
}

module.exports = {
    createCar,
    getCar,
    getAllCars,
    deleteCar,
    updateCar
}