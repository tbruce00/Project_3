const db = require('./connection');
const { User, Profile } = require('../models');

db.once('open', async () => {

    const Profile = await Profile.insertMany([
        { name: 'Ian Preston' },
        { bio: 'Professional web developer'},
        {location: 'Denver'},
    ]);

    await User.create({
        firstName:'Steven',
        lastName:'John',
        email:'steven@email.com',
        password: '123456'
    })
    await User.create({
        firstName: 'Stanley',
        lastName: 'Watt',
        email:'stanley@email.com',
        password: '123456'
<<<<<<< HEAD
    });

    process.exit();

});




=======
    })

    await Comments.create({
        name: 'Zach',
        comment: 'Hi I like your profile'
    })
})
>>>>>>> 0580eb1725870e373882081a85e511395c4a0a98
