const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  const github_token = "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";
})