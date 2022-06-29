import express, { Application } from 'express';
import { AdminRoute, ProductRoute, CustomerRoute, OrderRoute } from '../routes';

export default async (app: Application) => {

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))

  app.use(express.json());

  app.use('/admin', AdminRoute);
  app.use('/products', ProductRoute);
  app.use('/customer', CustomerRoute);
  app.use('/orders', OrderRoute);


  return app;


}
