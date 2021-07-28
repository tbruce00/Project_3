const db = require('./connection');
const { User, Profile, Comments } = require('../models');

db.once('open', async () => {

    const Profile = await Profile.insertMany([
        {
            name: 'Ian Preston',
            description: 'Professional web developer'
        }
    ])
    await User.create({
        firstname: 'Steven',
        lastname: 'John',
        email:'steven@email.com',
        password: '123456'
    })


    await User.create({
        firstname: 'Stanley',
        lastname: 'Watt',
        email:'stanley@email.com',
        password: '123456'
    })

    await Comments.create({
        name: 'Zach',
        comment: 'Hi I like your profile'
    })
    
})