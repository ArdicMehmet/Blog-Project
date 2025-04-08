const errorResponse = (message, statusCode = 500) => ({
  message,
  status: false,
  errorCode: statusCode,
});

module.exports = { errorResponse };
