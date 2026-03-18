const fs = require('fs');
const html = fs.readFileSync('../final portolio.html', 'utf-8');
const match = html.match(/src="data:image\/jpeg;base64,([^"]+)"/);
if (match) {
  const base64Data = match[1];
  fs.mkdirSync('./src/assets', { recursive: true });
  fs.writeFileSync('./src/assets/profile.jpg', Buffer.from(base64Data, 'base64'));
  console.log('Profile image extracted');
} else {
  console.log('Not found');
}
