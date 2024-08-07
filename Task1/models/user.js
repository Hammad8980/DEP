const db = require('../config/database');

class User {
  static create(newUser, result) {
    db.query('INSERT INTO users SET ?', newUser, (err, res) => {
        if (err) {
            console.error('Error creating user:', err);
            result(err, null);
            return;
        }
      console.log('created user: ', { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  }

  static findAll(result) {
    db.query('SELECT * FROM users', (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('users: ', res);
      result(null, res);
    });
  }

  static findById(userId, result) {
    db.query('SELECT * FROM users WHERE id = ?', userId, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log('found user: ', res[0]);
        result(null, res[0]);
      } else {
        result({ kind: 'not_found' }, null);
      }
    });
  }

  static updateById(id, user, result) {
    db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [user.name, user.email, id], (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }
      console.log('updated user: ', { id: id, ...user });
      result(null, { id: id, ...user });
    });
  }

  static remove(id, result) {
    db.query('DELETE FROM users WHERE id = ?', id, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null);
        return;
      }
      console.log('deleted user with id: ', id);
      result(null, res);
    });
  }
}

module.exports = User;
