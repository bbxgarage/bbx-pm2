module.exports = {
  apps : [{
    name      : 'API',
    script    : 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      key: '/root/github_rsa',
      user : 'root',
      host : '159.65.46.80',
      ref  : 'origin/master',
      repo : 'git@github.com:EBDS-TECNOLOGIA/Zuni.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
