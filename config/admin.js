module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '42de62bbdd5633d4cb651e4299bc34ec'),
  },
});
