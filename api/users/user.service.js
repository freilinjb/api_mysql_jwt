const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO registration (firstName,lastName, gender, email, password, number) VALUES(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
            ],
            (error, result, fields) => {
                if(error) {
                    return callback(error);
                }

                return callback(null, result);
            }
        );
    }
}