const ev = require('express-validation');

module.exports = (err, req, res, next) => {
  console.log(err);

  // specific for validation errors
  if (err instanceof ev.ValidationError) return res.status(err.status).json(err);

  // other type of errors, it *might* also be a Runtime Error
  // example handling
  if (process.env.NODE_ENV !== 'production') {
    return res.status(500).send(err.stack);
  }
  return res.status(500);
};
