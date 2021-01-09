const pool = require("../../config/database");

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
        if (error) {
          return callback(error);
        }

        return callback(null, result);
      }
    );
  },

  getUsers: (callback) => {
    pool.query(`SELECT id,lastName,firstName,gender,email,number from registration`, [], (error, result, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, result);
    });
  },
  getUserByUserId: (id, callback) => {
    pool.query(`SELECT * FROM registration WHERE id = ?`, [id], (error, result, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, result[0]);
    });
  },
  updateUser: (data, callback) => {
    pool.query(
      `update registration SET firstName=?, lastName=?, gender=?,email=?, password=?,number=? WHERE id = ?`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id,
      ],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result[0]);
      }
    );
  },
  deleteUser: (data, callback) => {
    `DELETE FROM registration WHERE id = ?`,
      [data.id],
      (error, result, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, result[0]);
      };
  },
};
