module.exports = {
  apps: [{
    name: 'ec2-tutorial',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-78-114-90.ap-northeast-1.compute.amazonaws.com',
      key: '~/.ssh/test1.pem',
      ref: 'origin/main',
      repo: 'git@github.com:PPKan/ec2-tutorial.git',
      path: '/home/ubuntu/ec2-tutorial',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}