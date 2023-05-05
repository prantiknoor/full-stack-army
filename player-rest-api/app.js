const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const shortid = require('shortid');
const fs = require('fs/promises');
const path = require('path');

const dbLocation = path.resolve('data.json');

/**
* Player Microservice
* CRUD  - Create Read Update Delete
* GET   - find all players ✅
* POST  - / - create a new player and save into db ✅
* GET   - /:id - find a single player by id ✅
* PUT   - /:id - update or create player ✅
* PATCH - /:id - update player ✅
* DELETE- /:id - delete player from db ✅
*/

const app = express();
app.use(morgan('dev'), cors(), express.json());

app.listen(2023, () => console.log("App is listening on port 2023"));

app.get('/', async (req, res) => {
    const raw = await fs.readFile(dbLocation);
    const players = JSON.parse(raw);
    res.status(200).send(players);
});

app.post('/', async (req, res) => {
    const player = {
        ...req.body,
        id: shortid.generate(),
    }
    const raw = await fs.readFile(dbLocation);
    const players = JSON.parse(raw);
    players.push(player);
    await fs.writeFile(dbLocation, JSON.stringify(players));

    res.status(201).send(player);
});

app.get('/:id', async (req, res) => {
    const raw = await fs.readFile(dbLocation);
    const players = JSON.parse(raw);
    const player = players.find(currPlayer => currPlayer.id == req.params.id);
    if (!player) res.status(404).send({ message: "No player found" });
    else res.status(200).send(player);
});

app.put('/:id', async (req, res) => {
    const raw = await fs.readFile(dbLocation);
    const players = JSON.parse(raw);
    let player = players.find(currPlayer => currPlayer.id == req.params.id);
    if (!player) {
        player = {
            ...req.body,
            id: shortid.generate()
        };
        players.push(player);
    } else {
        player.name = req.body.name;
        player.country = req.body.country;
        player.rank = req.body.rank;
    }
    await fs.writeFile(dbLocation, JSON.stringify(players));

    res.status(201).send(player);
});

app.patch('/:id', async (req, res) => {
    const raw = await fs.readFile(dbLocation);
    const players = JSON.parse(raw);
    const player = players.find(currPlayer => currPlayer.id == req.params.id);
    if (!player) return res.status(404).send({ message: "No player found" });
    else {
        player.name = req.body.name ?? player.name;
        player.country = req.body.country ?? player.country;
        player.rank = req.body.rank ?? player.rank;

        await fs.writeFile(dbLocation, JSON.stringify(players));

        res.status(203).send(player);
    }
});


app.delete('/:id', async (req, res) => {
    const raw = await fs.readFile(dbLocation);
    const players = JSON.parse(raw);
    const otherPlayers = players.filter(currPlayer => currPlayer.id != req.params.id);
    if(otherPlayers.length === players.length) {
        return res.status(404).send({message: "No player found"});
    }
    await fs.writeFile(dbLocation, JSON.stringify(otherPlayers));
    res.status(203).send();
});