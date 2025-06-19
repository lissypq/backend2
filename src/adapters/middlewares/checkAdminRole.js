module.exports = function checkAdminRole(req, res, next) {
    try {
      const roles = req.userRoles;
  
      if (!roles || !Array.isArray(roles)) {
        throw new Error('No hay roles definidos');
      }
  
      if (!roles.includes('admin')) {
        return res.status(403).json({ message: 'No tienes autorización (requiere rol de admin)' });
      }
  
      next(); // Tiene rol admin, pasa al siguiente middleware/controlador
    } catch (error) {
      res.status(403).json({ message: error.message || 'Acceso no autorizado' });
    }
  };