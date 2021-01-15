const User = require('../models/UserModel');

module.exports = {
    async index(request, response){
        const usuario =request.body
        const user = await User.find();

        const newArray = user.filter(function (el) {
            return el.name.toUpperCase().includes(usuario.name.toUpperCase().trim())
          });
         return response.json(newArray);
    }
}