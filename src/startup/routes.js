
const clinicsRouter = require('../api/v1/routes/clinics.route');
const usersRouter = require('../api/v1/routes/users.route');
const specialitiesRouter = require('../api/v1/routes/specialities.route');
const authRouter = require('../api/v1/routes/auth.route');
const reservationRouter = require('../api/v1/routes/reservation.route');
const error = require('../api/v1/middlewares/error');

module.exports = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/clinics', clinicsRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/speciality', specialitiesRouter);
  app.use('/api/reservation', reservationRouter);
  // error handler
  app.use(error);
};
