const { AuthenticationError } = require('apollo-server-express');
const { User, Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profile: async () => {
            return await Profile.find()
        },
        user: async (context) => {
            if (context.user) {
            const user = await User.findById(context.user._id)
    
            return user;
            }
  
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        updateProfile: async (parent, args, context) => {
            if (context.user) {
            return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
          }
        
    }
}
module.exports = resolvers;
