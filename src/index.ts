import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const allroutes = new Hono();

allroutes.get('', (context) => {
  return context.json({
    message: 'Hello World!',
});
}
);