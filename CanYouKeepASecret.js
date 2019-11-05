/**
 * @param  {Number} secret
 * @return {Object}
 */
function createSecretHolder(secret) {
  return {
    getSecret: function() {
      return secret;
    },
    setSecret: function(val) {
      secret = val;
    },
  };
}

const obj = createSecretHolder(4);
console.log(obj.getSecret());
