const { Schema, Types } = require('mongoose');


const userSchema = new Schema(
      {
          id: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
          },
          username: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 4,
            trim: true,
            unique: true
          },
        
          email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
          },
          toJSON: {
            getters: true,
          },
          id: false,
       

        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts',
            },
        ],
         
        friends: [
          {
          type: Schema.Types.ObjectId,
          ref: 'Users',
          },
      ]
       })


      module.exports = userSchema;