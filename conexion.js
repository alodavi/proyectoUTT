import { createConnection } from "mysql";

let conexion = createConnection({
    host: "localhost",
    database: "alumnos2",
    user: "root",
    password: ""
});
conexion.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err.stack);
      return;
    }
    console.log('Conectado a la base de datos MySQL');
  });
  
  