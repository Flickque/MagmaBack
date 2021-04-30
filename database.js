const Pool = require('pg').Pool

const pool = new Pool({
  user: 'mgaflcfapoqtxe',
  host: 'ec2-34-254-69-72.eu-west-1.compute.amazonaws.com',
  database: 'dciob6944j740b',
  password: 'f5e080ba4f5521c34232cba95d8e8466c24fcfbb7c785a39e2aa6e9dfbc21e8f',
  port: 5432,
})

const getMatches = (request, response) => {
    pool.query('SELECT * FROM matches', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const insertMaches = (request, response) => {

    console.log(request.body)
    const { id, dateum, opponentone, opponenttwo, opponentonescore, opponenttwoscore} = request.body
  
    pool.query('INSERT INTO public.apidata(id, dateum, opponentone, opponenttwo, opponentonescore, opponenttwoscore) VALUES($1, $2, $3, $4, $5, $6)', [id, dateum, opponentone, opponenttwo, opponentonescore, opponenttwoscore], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Match added with ID: ${results.id}`)
    })
  }
  

module.exports = {
  getMatches,
  insertMaches
};
