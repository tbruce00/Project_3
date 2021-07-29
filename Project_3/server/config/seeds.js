const db = require('./connection');
const { User, Profile, Comments } = require('../models');

db.once('open', async () => {

    const Profile = await Profile.insertMany([
        { name: 'Ian Preston' },
        { bio: 'Professional web developer' },
        { location: 'Denver' },
    ]);

    await User.create({
        userName: 'SJOHN316',
        firstName: 'Steven',
        lastName: 'John',
        email: 'steven@email.com',
        password: '123456'
    })
    await User.create({
        userName: 'swatt420',
        firstName: 'Stanley',
        lastName: 'Watt',
        email: 'stanley@email.com',
        password: '123456'
    })

    await Comments.create({
        name: 'Zach',
        comment: 'Hi I like your profile'
    })
})


