const { Schema, model } = require('mongoose');
const ThoughtsSchema = require('./Thoughts');

const ThoughtsSchema = new Schema(
    {
        thougtText: {
          type: String,
          required: true,
          maxlength: 280,
          minlength: 1,
        },
      
       createdAt: {
        createdAt: {
            type: Date,
            default: Date.now,
          },
        },
        {
          toJSON: {
            getters: true,
          },
          id: false,
        },

    username: {
            type: String,
            required: true,
    },
       
      friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        },
    ],
     },


    module.exports = ThoughtsSchema;