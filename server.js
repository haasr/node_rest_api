const db = require('./db/cars');
const fastify = require('fastify')();

fastify.get('/cars', async(req, res) => {
    const results = await db.getAllCars();
    res.code(200).send({ results });
});

fastify.get('/cars/:id', async(req, res) => {
    const results = await db.getCar(req.params.id);
    res.code(200).send({ results });
});

fastify.post('/cars', async(req, res) => {
    const results = await db.createCar(JSON.parse(req.body));
    res.code(201).send({ id: results });
});

fastify.patch('/cars/:id', async(req, res) => {
    const results = await db.updateCar(req.params.id, 
                                        JSON.parse(req.body));
    res.code(200).send({ id: results });
})

fastify.delete('/cars/:id', async(req, res) => {
    const results = await db.deleteCar(req.params.id);
    res.code(200).send({ success: true });
});

fastify.listen(8000, function(err, address) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    else
        console.log('[ Yee! Server is running on 127.0.0.1:8000 ]')
});