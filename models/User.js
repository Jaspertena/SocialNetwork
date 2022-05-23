const { Schema, Types, model } = require('mongoose');


const userSchema = new Schema(
      {
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
            required: true,
            // validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
          },
       

        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts',
            },
        ],
         
        friends: [
          {
          type: Schema.Types.ObjectId,
          ref: 'User',
          },
      ]
       },
       {          
          toJSON: {
        virtuals:true,
        getters: true,
      },
      id: false,
}
       )

userSchema.virtual ("friendsCount").get(function(){
  return this.friends.length
})
const User = model("User", userSchema)

module.exports = User