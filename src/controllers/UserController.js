const User = require('../models/UserModel');

module.exports = {
    async listAllUsers(request, response){
        const users = await User.find();
        return response.json(users);
    },

    async storeUser(request, response) {

        const { name, email } = request.body;

        const registryDate = new Date().toLocaleString(undefined, "America/Sao_Paulo");
        
        const user = await User.create({
            name,
            email,
            registryDate,
        })

        return response.json(user);
    }
};