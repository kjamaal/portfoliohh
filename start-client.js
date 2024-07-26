const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'crypto-abstraction-client', shell: true };
require('child_process').spawn('npm', args, opts);
