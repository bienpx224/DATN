/**
 * Friend.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection:'mongo',
  attributes: {
    userId:{
      model:'user'
    },
    followed:{
      model:'user'
    },
    isActive: {type: 'boolean'}
  }
};

