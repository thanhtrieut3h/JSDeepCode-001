// Error handler middleware
export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  // Default error
  let error = { ...err };
  error.message = err.message;

  // MySQL duplicate entry error
  if (err.code === "ER_DUP_ENTRY") {
    const message = "Duplicate entry error";
    error = { statusCode: 409, message };
  }

  // MySQL foreign key error
  if (err.code === "ER_NO_REFERENCED_ROW") {
    const message = "Referenced record not found";
    error = { statusCode: 400, message };
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    const message = "Invalid token";
    error = { statusCode: 401, message };
  }

  if (err.name === "TokenExpiredError") {
    const message = "Token expired";
    error = { statusCode: 401, message };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal server error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

// 404 Not found middleware
export const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
};
