export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    autoOpen: false,
  },
  bootstrap: async () => {
    // Esto se ejecuta al iniciar
    if (env('RESET_ADMIN') === 'true') {
      await strapi.db.query('admin::user').deleteMany();
      console.log('Admin users borrados');
    }
  },
});
