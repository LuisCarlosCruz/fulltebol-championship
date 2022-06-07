import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (_req: Request, res: Response) => res.status(200).send('yurao'));

export default router;
