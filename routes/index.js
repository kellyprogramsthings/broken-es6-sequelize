import { Router } from 'express';
import controllers from '../controllers/index.js';
import authJwt from '../util/authJwt.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Welcome');
})

router.post('/page', (req, res) => {
  controllers.createPage(req, res);
});

router.get('/pages', (req, res) => {
  controllers.getAllPages(req, res);
});

router.post('/auth/signin'), (req, res) => {
  authJwt.verifyToken(req, res);
}

export default router;