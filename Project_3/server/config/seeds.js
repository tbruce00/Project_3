const db = require('./connection');
const { User, Profile, Comments } = require('../models');

db.once('open', async () => {

    const profile = await Profile.insertMany([
        { name: 'Ian Preston',
         bio: 'Professional web developer',
         location: 'Denver',
         email: '',
        linkedIn: '',
        gitHub: '',
        user: user[0]._id,
    },
        { name: 'Dave Grohl',
        bio: 'Bootcamp Student',
        location: 'Miami',
        email: '',
        linkedIn: '',
        gitHub: '',
        user: user[1]._id,  
    },
    ]);

    await User.create({
        name: 'Steven Segal',
        email: 'steven@email.com',
        bio: 'Bootcamp Student',
        location: 'Denver',
        avatarUrl: '',
    });

    await User.create({
        name: 'Stanley Tucci',
        email: 'stanley@email.com',
        bio: 'Freelance Web Developer',
        location: 'San Francisco',
        avatarUrl: '',
    })

    await Comments.create({
        name: 'Zach',
        comment: 'Hi I like your profile'
    })
})



