const db = require('./connection');
const { User, Profile } = require ('../models');

db.once('open', async () => {
    await Profile.deletemany();

    const profiles = await Profile.insertMany([
        {  name: 'Andreas'},
        {  name: 'Brett' },
        {  name: 'Dingle' },
    ]);
    console.log("Profiles have been seeded");

    await Profile.deletemany();

    const profiles =
})
