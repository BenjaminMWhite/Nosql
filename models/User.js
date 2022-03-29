const { Schema, model } = require('mongoose');
function emailValid(mail) 
{
 return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
}
// Schema to create User model
const userSchema = new Schema(
  {
    username:{type: String, unique:true, required:true, trim:true },
    email:{type: String,unique:true, required:true,validate:{validator:emailValid, message:"Email not valid"} },
    thoughts: [{type:Schema.Types.ObjectId, ref:"Thoughts" }],
    friends: [{type:Schema.Types.ObjectId, ref: "Friends"}]
  
  },
  {
   
    toJSON: {
      virtuals: true,
      getters:true
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })
  // Setter to set the first and last name

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
