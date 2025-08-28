import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'java', 'pages/api/js.js');
  const js = fs.readFileSync(filePath, 'utf8');
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(js);
}