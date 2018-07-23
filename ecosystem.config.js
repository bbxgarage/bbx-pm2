module.exports = {
  apps : [{
    name: 'API',
    script: 'app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      key: "/root/deploy-key.pem",
      user: 'root',
      host: '159.65.46.80',
      ref : 'origin/master',
      repo: 'git@github.com:bbxgarage/bbx-pm2.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
