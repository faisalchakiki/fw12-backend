const errorHandler = (err, res) => {
  if (err.message.includes('unique constraint "users_email_key"')) {
    return res.status(400).json({
      success: false,
      message: "Email sudah terdaftar",
    });
  }
  return res.status(500).json({
    success: false,
    message: "Something happend in our backend",
  });
};

module.exports = errorHandler;
