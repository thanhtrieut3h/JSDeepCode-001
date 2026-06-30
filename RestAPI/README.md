# Tạo thư mục dự án
mkdir express-backend-api
cd express-backend-api

# Khởi tạo package.json
npm init -y

# Cấu hình type module (ES Modules)
# Sửa package.json:
{
  "type": "module",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}

# Cấu trúc thư mục
express-backend-api/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── User.js
│   │   └── index.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── index.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── services/
│   │   └── jwtService.js
│   ├── validations/
│   │   └── authValidation.js
│   ├── utils/
│   │   └── constants.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md

# Cài đặt dependencies
# Dependencies chính
npm install express mysql2 dotenv cors helmet morgan compression bcrypt jsonwebtoken

# Development dependencies
npm install -D nodemon eslint prettier

# Các bước triển khai:
# 1 - Tạo file .env
# 2 - .gitignore
# 3 - Cấu hình database trên xampp
# 4 - Tạo File config/database.js
# 5 - Tạo model và migration
# Tạo bảng users
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  role ENUM('user', 'admin') DEFAULT 'user',
  is_verified BOOLEAN DEFAULT FALSE,
  last_login DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_role (role)
);
# 6 - Tạo File services/jwtService.js
# 7 - Tạo File models/User.js
# 8 - Tạo File models/index.js
# 9 - Tạo File validations/authValidation.js
# 10 - Tạo File middleware/auth.js
# 11 - Tạo File middleware/errorHandler.js
# 12 - Tạo File controllers/authController.js
# 13 - Tạo File controllers/userController.js
# 14 - Tạo File routes/authRoutes.js
# 15 - Tạo File routes/userRoutes.js
# 16 - Tạo File routes/index.js
# 17 - Tạo File app.js
# 18 - Tạo File server.js
# 19 -  Chạy ứng dụng : npm run dev
