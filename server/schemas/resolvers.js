const { AuthenticationError } = require('apollo-server-express');
const { User, Book} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, {userId}) => {
            return User.findOne({_id: userId});
        },
        books: async () =>{
            return Book.find();
        },
        book: async (parent, {bookId}) => {
            return Book.findOne({_id: bookId});
        },
        me: async (parent, args, context) =>{
            if (context.user){
                return User.findOne({_id: context.user._id})
            }
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
      
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user with this email found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
          },
          saveBook: async (parent, {userId, authors, bookInput}, context) =>{
            if(context.user){
                return User.findOneAndUpdate(
                    {_id: userId},

                    // gotta ask if this is right, do Book.findOne to find the book?
                    {$addToSet: {savedBooks:bookInput }},
                    {
                        new: true,
                        runValidators: true,
                      }
                    )
            }
            throw new AuthenticationError('You need to be logged in!');
          },
          removeBook: async (parent,{bookId}, context)=>{
                if(context.user){
                    return User.findOneAndUpdate(
                        {_id: context.user._id},
                        {$pull: {savedBooks: bookId}},
                        {new: true}
                    )
                }
                throw new AuthenticationError('You need to be logged in!');
          }

    }
}
module.exports = resolvers;