/**
 * Login
 */
export function login(req, res) {
  if (!req.body.credentials.email || !req.body.credentials.password) {
    res.status(403).end();
  }

  //TODO Auth stuff
  res.json({ message: 'OK' });

}

/**
 * Logout
 */
export function logout(req, res) {
  if (!req.body.credentials.email || !req.body.credentials.password) {
    res.status(403).end();
  }

  //TODO Auth stuff
  res.json({ message: 'OK' });

}
