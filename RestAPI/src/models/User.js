import { pool } from '../config/database.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../services/jwtService.js';

class User {
  // Create user
  static async create(userData) {
    const { email, password, full_name, phone, role = 'user' } = userData;
    
    // Hash password
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const [result] = await pool.execute(
      `INSERT INTO users (email, password, full_name, phone, role) 
       VALUES (?, ?, ?, ?, ?)`,
      [email, hashedPassword, full_name, phone, role]
    );

    // Get created user
    const user = await this.findById(result.insertId);
    delete user.password;
    return user;
  }

  // Find user by email
  static async findByEmail(email) {
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return rows[0] || null;
  }

  // Find user by id
  static async findById(id) {
    const [rows] = await pool.execute(
      'SELECT id, email, full_name, phone, role, is_verified, last_login, created_at, updated_at FROM users WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  }

  // Update user
  static async update(id, data) {
    const fields = [];
    const values = [];

    if (data.full_name) {
      fields.push('full_name = ?');
      values.push(data.full_name);
    }
    if (data.phone) {
      fields.push('phone = ?');
      values.push(data.phone);
    }
    if (data.password) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      fields.push('password = ?');
      values.push(hashedPassword);
    }
    if (data.is_verified !== undefined) {
      fields.push('is_verified = ?');
      values.push(data.is_verified);
    }
    if (data.last_login) {
      fields.push('last_login = ?');
      values.push(data.last_login);
    }

    if (fields.length === 0) return null;

    values.push(id);
    const query = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;
    
    await pool.execute(query, values);
    return this.findById(id);
  }

  // Delete user
  static async delete(id) {
    const [result] = await pool.execute(
      'DELETE FROM users WHERE id = ?',
      [id]
    );
    return result.affectedRows > 0;
  }

  // Get all users with pagination
  static async findAll({ page = 1, limit = 10, role = null }) {
    const offset = (page - 1) * limit;
    let query = 'SELECT id, email, full_name, phone, role, is_verified, last_login, created_at FROM users';
    const params = [];

    if (role) {
      query += ' WHERE role = ?';
      params.push(role);
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));

    const [rows] = await pool.execute(query, params);
    
    // Get total count
    let countQuery = 'SELECT COUNT(*) as total FROM users';
    if (role) {
      countQuery += ' WHERE role = ?';
    }
    const [countResult] = await pool.execute(
      countQuery,
      role ? [role] : []
    );

    return {
      data: rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: countResult[0].total,
        pages: Math.ceil(countResult[0].total / limit)
      }
    };
  }

  // Verify password
  static async verifyPassword(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  // Update last login
  static async updateLastLogin(id) {
    await pool.execute(
      'UPDATE users SET last_login = NOW() WHERE id = ?',
      [id]
    );
  }
}

export default User;