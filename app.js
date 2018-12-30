import express from 'express';

const port = process.env.PORT || 5000;

const app = express();

/**
 * server connection
 */
app.listen(port, () => {
  console.log(`port connected on port ${port}`);
});

export default app;
