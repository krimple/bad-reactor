import { faker } from '@faker-js/faker';
import { Response, Router } from 'express';

const router = Router();

const { name } = faker;

router.get('/account', (_, response: Response) => {
  setTimeout(() => {
    response.status(200).send({
      name: `${name.firstName()} ${name.lastName()}`
    });
  }, 4000);
});

  export default router;
