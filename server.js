

var http = require('http');

var express = require('express')

var app = express();//create an express app
/****************************************/

app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();

});

//read req body as object
 var bparser = require("body-parser");
 app.use(bparser.json());

//to serve HTML,CSS,JS from the server

app.use(express.static(__dirname + '/views'));

var ejs = require('ejs');
app.set('views', __dirname + '/FSDI 107 Node JS lab 2'); // where are the HTML files ?
app.engine('html', ejs.renderFile);
app.set('view engine', ejs);

console.log(__dirname + '/views');
 // Storage options

 var items = [];
 var nextId = 0;


app.get('/', (req, res) => {
  res.render('index.html');
});


app.get('/admin', (req, res) => {
  res.render('admin.html');
});

app.get('/contact', (req, res) => {

});

app.get('/about', (req, res) => {
  res.render('/about.html');
});

app.get('/api/products', (req, res) => {
  res.json(items);
});



app.post('/api/products', (req, res) =>{
//asign ID
    var item = req.body;
    item.id = nextId;
    nextId += 1;
//store
    items.push(item);
//send back as a json
    res.status = 201;
    res.json(item);



});

app.get('/homework2', (req,res) => {


  /**

       * 1

       *    A ) print the name of the females

       *    B ) print the name of the males

       *

       * 2 print the fiend names of the females

       *

       */
       var data = [

        {

            "id": "5d5847889d6013c57eceb33b",

            "name": "Mai David",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Alford Fisher"

                },

                {

                    "id": 1,

                    "name": "Irma Serrano"

                },

                {

                    "id": 2,

                    "name": "Cooley Guzman"

                }

            ]

        },

        {

            "id": "5d58478887dcb823af142aaa",

            "name": "Ruiz Lucas",

            "gender": "male",

            "friends": [

                {

                    "id": 0,

                    "name": "Deana Santos"

                },

                {

                    "id": 1,

                    "name": "Macdonald Fischer"

                },

                {

                    "id": 2,

                    "name": "Carly Mcintyre"

                }

            ]

        },

        {

            "id": "5d584788eb0202e69a992ff5",

            "name": "Beverly Hutchinson",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Debora Vargas"

                },

                {

                    "id": 1,

                    "name": "Snow Hays"

                },

                {

                    "id": 2,

                    "name": "Leon Obrien"

                }

            ]

        },

        {

            "id": "5d58478831d9cfdede67749b",

            "name": "Meagan Ferguson",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Mooney Dyer"

                },

                {

                    "id": 1,

                    "name": "Roxanne Ross"

                },

                {

                    "id": 2,

                    "name": "Banks Kramer"

                }

            ]

        },

        {

            "id": "5d584788331ae655cd5415cf",

            "name": "Shannon Shepard",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Vicki Joyner"

                },

                {

                    "id": 1,

                    "name": "Hanson Evans"

                },

                {

                    "id": 2,

                    "name": "Sylvia Salinas"

                }

            ]

        },

        {

            "id": "5d584788cd32d81c3e6c9988",

            "name": "Alba Acevedo",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Lindsay Tate"

                },

                {

                    "id": 1,

                    "name": "Hodges Hinton"

                },

                {

                    "id": 2,

                    "name": "Knox Dominguez"

                }

            ]

        },

        {

            "id": "5d58478848247a725136b0a9",

            "name": "Lee Bullock",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Gates Underwood"

                },

                {

                    "id": 1,

                    "name": "Olga Valenzuela"

                },

                {

                    "id": 2,

                    "name": "Jillian Griffin"

                }

            ]

        },

        {

            "id": "5d5847888054f64fa4f29b00",

            "name": "Reyna Bradshaw",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Rosalie Salazar"

                },

                {

                    "id": 1,

                    "name": "Rosella Reed"

                },

                {

                    "id": 2,

                    "name": "Herring Stevenson"

                }

            ]

        },

        {

            "id": "5d5847880905dfc8e17b38b8",

            "name": "Hunt Andrews",

            "gender": "male",

            "friends": [

                {

                    "id": 0,

                    "name": "Bauer Palmer"

                },

                {

                    "id": 1,

                    "name": "Lenore Wall"

                },

                {

                    "id": 2,

                    "name": "Schmidt Greer"

                }

            ]

        },

        {

            "id": "5d584788a6471c91d2defb0d",

            "name": "Craft Pena",

            "gender": "male",

            "friends": [

                {

                    "id": 0,

                    "name": "Paige Giles"

                },

                {

                    "id": 1,

                    "name": "Letha Chandler"

                },

                {

                    "id": 2,

                    "name": "Jordan Browning"

                }

            ]

        },

        {

            "id": "5d5847880e38b3dd61e690e1",

            "name": "Wiley England",

            "gender": "male",

            "friends": [

                {

                    "id": 0,

                    "name": "Marianne Baker"

                },

                {

                    "id": 1,

                    "name": "Kramer Rush"

                },

                {

                    "id": 2,

                    "name": "Frieda Winters"

                }

            ]

        },

        {

            "id": "5d584788920208c8e838fbbd",

            "name": "Gomez Crosby",

            "gender": "male",

            "friends": [

              {

              "id": 0,

              "name": "Jacqueline Faulkner"

          },

          {

              "id": 1,

              "name": "Marissa Barr"

          },

          {

              "id": 2,

              "name": "Veronica Ochoa"

          }

     ]

   }

 ];


 var gt = "female";
var f = '';
var fr = '';


for (var i = 0; i < data.length; i++) {

if ( gt === data[i].gender)
{
    gt = data[i].gender;
    f = data[i].name;
    fr = data[i].friends;
    console.log(gt, f, fr);
};

};

var lt = "male";
var m = '';

for (var i = 0; i < data.length; i++){

if ( lt === data[i].gender) {

 lt = data[i].gender;
 m = data[i].name;
 console.log(lt, m );


};


};



});
  app.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
