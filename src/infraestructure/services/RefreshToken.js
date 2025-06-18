const jwt = require('jsonwebtoken');
const config = require('../../config');

class RefreshToken {
  generateRefreshToken(payload) {
    return jwt.sign(
      { id: payload.id, roles: payload.roles },
      config.jwtSecret,
      { expiresIn: '7d' }
    );
  }
}

module.exports = RefreshToken;