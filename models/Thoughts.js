const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
      reactionId: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
      },

      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
             
        toJSON: {
          getters: true,
    
        id: false,
      },
      }, 

      username: {
        type: String,
        required: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
    },
)

const ThoughtsSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
      },
      
       createdAt: {
            type: Date,
            default: Date.now,
        },
     
          toJSON: {
            getters: true,
      
          id: false,
        },
//(The user that created this thought)
    username: {
            type: String,
            required: true,
    },
       
      reactions: [
       { type: Schema.Types.ObjectId,
        ref: 'reactionsSchema',}
    ]
     })


    module.exports = ThoughtsSchema;