// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { mySql } from 'mysql'
// const db = mySql.createConnection({
//   user: 'user',
//   host: 'localhost',
//   password: '',
//   database: 'developer_hunt'
// })

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
