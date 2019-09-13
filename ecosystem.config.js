module.exports = {
  apps : [{
    name: 'kali web',
    script: 'keystone.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '138.68.195.172',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/home/repn/keystone-kali',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
