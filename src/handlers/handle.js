const { pool } = require("../DB/dbconection.js");
const { verify, hasMutation } = require("../utils/util.js");

// Obtiene el ADN, verifica si está mutado y guarda el ADN en la base de datos, siempre y cuando no se encuentre en la base de datos.
const mutationHandler = async (req, res) => {
  const info = req.body;
  const adn = info.dna.join("").toUpperCase();

  // Verifica que la cadena de ADN esté en un formato correcto.
  const veri = await verify(info);

  if (!veri) {
    return res.status(403).send();
  }

  // Comprueba si el ADN está mutado.
  const mutation = await hasMutation(info);

  // Verifica si el ADN introducido ya se encuentra en la base de datos. Si se encuentra, lo guarda, de lo contrario devuelve un mensaje por consola.
  pool.getConnection((e, con) => {
    if (e) return console.log("Ha ocurrido un error.");

    con.query("SELECT adn FROM stats WHERE adn = ?", adn, (e, row) => {
      if (e) return console.log("Ha ocurrido un error.");

      if (row.length > 0) {
        console.log("El ADN ya ha sido guardado en la base de datos.");
      } else {
        con.query(
          "INSERT INTO stats SET adn = ?, mutation = ?",
          [adn, mutation],
          (e, row) => {
            if (e) return console.log("El registro no se ha guardado en la base de datos.");
          }
        );
      }
    });
    con.release();
  });

  // Si se encuentra una mutación, me va a devolver un código 200, de lo contrario me va a devolver un 403.
  if (mutation === true) {
    return res.status(200).send();
  } else {
    return res.status(403).send();
  }
};

// Obtiene todos los registros de la base de datos y devuelve los ADN mutados y no mutados.
const getMutationsHandler = (req, res) => {
  const info = { mutates: 0, noMutates: 0 };

  pool.getConnection(async (e, con) => {
    if (e) return console.log("Ha ocurrio un error.");

    con.query("SELECT * FROM stats", (e, row) => {
      if (e) return console.log("No se encuentran registros.");

      // Verifica si se encuentran registros en la base de datos.
      if (row.length > 0) {
        for (let i = 0; i < row.length; i++) {
          if (row[i].mutation === 1) {
            info.mutates = info.mutates + 1;
          } else {
            info.noMutates = info.noMutates + 1;
          }
        }
      }

      return res.json(info);
    });
  });
};

module.exports = { mutationHandler, getMutationsHandler };
