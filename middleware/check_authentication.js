const __firebase__admin = require('../utils/__firebase__')
const Profile = require('../services/Profile/model_profile_full')

const getAuthToken = (req, res, next) => {
    if (req.headers.authorization) {
      req.authToken = req.headers.authorization
    } else {
      req.authToken = null;
    }
    next();
  };
  
  
  exports.checkIfAuthenticated = (req, res, next) => {
   getAuthToken(req, res, async () => {
      try {
        const { authToken } = req;
        const userInfo = await __firebase__admin
          .auth()
          .verifyIdToken(authToken);

        try {
            await Profile.findOne({uid: userInfo.uid}, async (err, doc) => {
                if(err) {
                    console.log(err)
                    return res
                        .status(401)
                        .json({ error: 'No such profile exists' });
                } else if(doc === null) {
                    const newProfile = new Profile({
                        uid: userInfo.uid,
                        full_name: userInfo.name,
                        email_address: userInfo.email
                    })

                    newProfile.save((err, profile) => {
                        if(err) {
                            console.log(err)
                        } else {
                            req.profile = profile._id
                            req.userID = userInfo.uid;
                            console.log(userInfo)
                            return next();
                        }
                    })
                } else {
                    req.profile = doc._id
                    req.userID = userInfo.uid;
                    console.log(userInfo)
                    return next();
                }
            })

        } catch (err) {
            console.log(e)
            return res
                .status(401)
                .json({ error: 'No such profile exists' });
        
        }
      } catch (e) {
          console.log(e)
            return res
            .status(401)
            .send({ error: 'You are not authorized to make this request' });
        }
    });
  };

  exports.checkIfAdmin = (req, res, next) => {
    getAuthToken(req, res, async () => {
       try {
         const { authToken } = req;
         const userInfo = await __firebase__admin
           .auth()
           .verifyIdToken(authToken);
           console.log(authToken)
   
         if (userInfo.admin === true) {
            try {
                await Profile.findOne({uid: userInfo.uid}, (err, doc) => {
                    if(err) {
                        console.log(err)
                        return res
                            .status(401)
                            .json({ error: 'No such profile exists' });
                    } else if(doc === null) {
                        return res
                            .status(401)
                            .json({ error: 'No such profile exists' });
                    } else {
                        return req.profile = doc._id
                    }
                })
                req.userID = userInfo.uid;
                return next();
    
            } catch (err) {
                console.log(e)
                return res
                    .status(401)
                    .json({ error: 'No such profile exists' });
            
            }
         }
   
         throw new Error('unauthorized')
       } catch (e) {
         return res
           .status(401)
           .send({ error: 'You are not authorized to make this request' });
       }
     });
   };
   