const express = require('express');
const app = express();

app.get('/api/items', (req, res) => {
  res.json([{ id: 1, name: 'アイテム1' }, { id: 2, name: 'アイテム2' }]);
});

app.listen(8000, () => {
  console.log('サーバーが起動しました。ポート: 8000');
});