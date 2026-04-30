const fs = require('fs');
let data = fs.readFileSync('lib/courses.ts', 'utf8');
data = data.replace(/\s*level:\s*"Beginner to Pro",/g, '');
data = data.replace(/\s*feeRange:\s*"₹50k - ₹2L \(Est\.\)",/g, '');
fs.writeFileSync('lib/courses.ts', data);
console.log('Done!');
