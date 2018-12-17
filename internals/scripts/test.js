// throw new Error('got an error');
// import {spawn} from 'child_process';
const exec = require('child_process').exec;
exec('npm -v', (err, stdout) => {
  console.log(stdout);
})
