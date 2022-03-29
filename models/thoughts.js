const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtsSchema = new Schema(
  {

    createdAt: {
      type: Date,
      default: Date.now,
    },
  
    thoughtText: {
      type: String,
      required:true,
      minLength: 1,
      maxLength: 280,
    },
    userName:{
    type:String,
    required:true,
    },
    reaction:[Reaction],
    },
  {
    toJSON: {
      virtuals: true,
      getters:true,
    },
    id: false,
  }
);

thoughtsSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reaction.length;
  });


const thoughts = model('thoughts', thoughtsSchema);

module.exports = thoughts;
