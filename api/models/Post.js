/**
 * Idea.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mongo',
  attributes: {
    content:{ type:'string', maxLength: 1000},
    image:{ type:'string' },
    petRelate:{ model: 'pet'},
    isActive: {type:'boolean'},
    count: {type:'integer', defaultsTo:0},
    userId:{ model:'user' },
    react:{ collection:'react', via:'postId' },
    comments:{ collection:'comment', via:'postId' },
    timeMili: {type: 'integer'}
  }
};
