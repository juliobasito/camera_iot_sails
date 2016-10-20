/**
 * Camera.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      identifier: {
          type: 'string',
          nom: {
              type: 'string',
          },
          url: {
              type: 'string'
          },
          etat: {
              type: 'boolean',
              default: true
          },
          uuid: {
              type: 'string',
              unique: true,
              default: "francois emile"
          },
          user_role_camera: {
              collection: 'user_role_camera',
              via: 'cameras'
          }
      }
  }
};
