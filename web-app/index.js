const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

const port = 3000;
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', engine({
    layoutsDir: './views/layouts',
    extname: ".hbs"
}));
app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World !'));

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