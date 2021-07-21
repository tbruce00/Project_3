const { AuthenticationError } = require('apollo-server-express');
const { User, Profile } = require('../models');
const { signToken } = require('../utils/auth');

