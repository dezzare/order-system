import express, { Application } from 'express';
import path from 'path';
import { AdminRoute } from '../routes';

export default async (app: Application) => {

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))

  app.use(express.json());
  // TODO
  app.use('/admin', AdminRoute);
  // app.use('/customer', CustomerRoute);
  // app.use('/products', ProductsRoute);
  // app.use('/orders', OrdersRoute);


  return app;


}
