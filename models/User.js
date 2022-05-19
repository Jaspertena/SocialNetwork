const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
      {
          Id: {
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
            required: true,
            default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
          },
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
        }
      );
      
      module.exports = assignmentSchema;

      export function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      