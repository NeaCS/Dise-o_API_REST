const { Pool } = require("pg");
const format = require('pg-format');

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "naldi1291",
  database: "farmacia",
  allowExitOnIdle: true,
});

// Agregamos la función obtenerMedicamentos
const obtenerMedicamentos = async ({ limits = 10, order_by =
  "id_ASC"}) => {
  const [campo, direccion] = order_by.split("_")
  const formattedQuery = format('SELECT * FROM medicamentos order by %s %s LIMIT %s', campo, direccion, limits);
  const { rows: medicamentos } = await
  pool.query(formattedQuery)
  return medicamentos
  }
  


 const obtenerPersonal = async ({limits = 9}) => {
    let consulta = "SELECT * FROM personal LIMIT $1"
    const { rows: personal } = await pool.query(consulta,
    [limits])
    return personal
 }
    module.exports = {obtenerMedicamentos, obtenerPersonal}

