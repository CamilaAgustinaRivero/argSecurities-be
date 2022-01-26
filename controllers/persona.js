const {
    default: axios
} = require('axios');
const {
    response
} = require('express');

const personaFisica = async (req, res = response) => {
    const {
        titular,
        disposicionesGenerales,
        administrador
    } = req.body;

    const account =  await openAccount({titular, disposicionesGenerales, administrador})
    console.log(account)
    res.status(201).json({
        msg: 'Los datos fueron cargados de manera exitosa.',
        account
    });
};

const personaJuridica = (req, res = response) => {
    res.json({
        msg: 'Persona jurídica'
    });
};

const openAccount = async (payload) => {
    const { token } = await login()
    try {
        const endpoint = process.env.AUNESA_OPENING_ACOUNT_ENDPOINT

        const instance = axios.create({
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const res = await instance.post(endpoint, payload)
        return res
    } catch (error) {
        console.log(error.response.data);
        // console.log(error.toJSON())
        // console.error(error)
    }

    return 0
}

const login = async () => {
    const { AUNESA_USER, AUNESA_PASSWORD } = process.env

    const payload = {
        clientId: '123',
        username: AUNESA_USER,
        password: AUNESA_PASSWORD
    }

    const config = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    try {
        const endpoint = process.env.AUNESA_LOGIN_ENDPOINT
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
        const { data } = await axios.post(endpoint, payload, config)
        
        return data
    } catch(e) {
        console.error(e)
    }


};


module.exports = {
    personaFisica,
    personaJuridica,
}