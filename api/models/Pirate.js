/**
 * Pirate.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName:{
      type: 'string',
      alpha: 'true',
      required: true
    },
    lastName: {
      type: 'string',
      alphanumeric: true
    },
    nickName: {
      type: 'string',
      unique: true
    },
    saltWives: {
      type: 'integer',
      integer: true
    },
    saltyDog: {
      type: 'string'

    }

    }

};
