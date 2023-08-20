var conventionalChangelog = require('conventional-changelog')

console.log(
  conventionalChangelog({
    preset: 'angular'
  }).pipe(process.stdout)
) // or any writable stream
