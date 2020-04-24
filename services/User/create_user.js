const __firebase__admin = require('../../utils/__firebase__');
const Profile = require('../Profile/model_profile_full')

export const createUser = async (req, res) => {
    const {
        email,
        phoneNumber,
        password,
        firstName,
        lastName,
        photoUrl
        } = req.body;

    const {body} = req
    const profile = {
        first_names: body.first_name,
        last_name: body.last_name,
        gender: body.gender,
        phone_number: body.phone_number,
        physical_address: body.physical_address,
    }
    const newProfile = new Profile(profile)

    const user = await __firebase__admin.auth().createUser({
      email,
      phoneNumber,
      password,
      displayName: `${firstName} ${lastName}`,
      photoURL: photoUrl
    });

    newProfile.userID = user.uid
    await newProfile.save()

    return res.send(user);
}