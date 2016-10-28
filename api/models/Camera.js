/**
 * Camera.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nom: {
        type: 'text',
        required: true
      },
      url: {
        type: 'string'
      },
      state: {
        type: 'boolean',
        default: false
      },
      uuid: {
        type: 'string',
        unique: true,
        default: "francois emile"
      },
      UserRoleCamera: {
        collection: 'UserRoleCamera',
        via: 'cameras'
      }

    }
  };

