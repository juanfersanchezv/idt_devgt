//server.js

var express     = require('express');  
var app         = express();  
var mongoose     = require('mongoose');
//express 4.x
var env = process.env.NODE_ENV || 'development';
// Conexión con la base de datos
mongoose.connect('mongodb://localhost:27017/angular-todo');

// Configuración

//express 4.x
if('developmnet' == env)
{
     // Localización de los ficheros estaticos
    app.use(express.static(__dirname + '/nodep'));
    // Muestra un log de todos los request en la consola        
    app.use(express.logger('dev')); 
    // Permite cambiar el HTML con el método POST                   
    app.use(express.bodyParser());
    // Simula DELETE y PUT                      
    app.use(express.methodOverride());  
}
/* para express 3.x
app.configure(function() {  
    // Localización de los ficheros estaticos
    app.use(express.static(__dirname + '/nodep'));
    // Muestra un log de todos los request en la consola        
    app.use(express.logger('dev')); 
    // Permite cambiar el HTML con el método POST                   
    app.use(express.bodyParser());
    // Simula DELETE y PUT                      
    app.use(express.methodOverride());                  
});
*/
// Definición de modelos
var Todo = mongoose.model('Todo', {  
    text: String
});
// Rutas de nuestro API
// GET de todos los TODOs
app.get('/api/todos', function(req, res) {  
    Todo.find(function(err, todos) {
        if(err) {
            res.send(err);
        }
        res.json(todos);
    });
});

// POST que crea un TODO y devuelve todos tras la creación
app.post('/api/todos', function(req, res) {  
    Todo.create({
        text: req.body.text,
        done: false
    }, function(err, todo){
        if(err) {
            res.send(err);
        }

        Todo.find(function(err, todos) {
            if(err){
                res.send(err);
            }
            res.json(todos);
        });
    });
});

// DELETE un TODO específico y devuelve todos tras borrarlo.
app.delete('/api/todos/:todo', function(req, res) {  
    Todo.remove({
        _id: req.params.todo
    }, function(err, todo) {
        if(err){
            res.send(err);
        }

        Todo.find(function(err, todos) {
            if(err){
                res.send(err);
            }
            res.json(todos);
        });

    })
});

// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend
app.get("*", function(req, res)
//app.get('*', function(req, res) 
{  
    //res.sendFile('./index.html');     
    res.sendFile("index.html", {"root": __dirname});           
});



// Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {  
    console.log('App listening on port 8080');
});