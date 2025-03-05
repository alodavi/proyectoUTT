const express = require('express');
const { engine } = require('express-handlebars');
const mysql= require ("mysql")

const app = express();

const port = 3000;
const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    datanbase:"alumnos2"
})
connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión exitosa a la base de datos MySQL');
  });
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', engine({
    layoutsDir: './views/layouts',
    extname: ".hbs"
}));

app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World !'));
// Rutas de la API
app.get('/api/datos', (req, res) => {
    connection.query('SELECT * FROM alumnos___hoja_1', (err, rows) => {
      if (err) throw err;
      res.json(rows);
    });
  });
app.get('/login', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    // 
    res.render('main', {layout : 'index', });
});

app.get('/registro', (req, res) => {
    res.render('registro', {layout : 'index'})
})

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));