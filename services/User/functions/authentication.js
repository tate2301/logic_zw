const router = require('express').Router()
const __firebase__admin = require('../../../utils/__firebase__')

const getAuthToken = (req, res, next) => {
    if (req.headers.authorization) {
      req.authToken = req.headers.authorization
    } else {
      req.authToken = null;
    }
    next();
};

router.use('/login', (req, res) => {
    getAuthToken(req, res, async () => {
        try {
          const { authToken } = req;
          const userInfo = await __firebase__admin
            .auth()
            .verifyIdToken(authToken);
    
          if (userInfo.admin === true) {
             res.json({class: "001"})
          } else {
            res.json({class: "002"})
          }
        } catch (e) {
          return res
            .status(401)
            .send({ e, error: 'You are not authorized to make this request' });
        }
      });
})

module.exports = router