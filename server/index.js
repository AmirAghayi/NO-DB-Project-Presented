const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

// Make "favorites" variable and assign an empty array
const favorites = [];


app.use(cors());
app.use(bodyParser.json());

app.get('/api/favorites', (req,response) => {
    response.send(favorites)
})




// Create POST to /api/favorites
// Make it add the provided ID from the req.body to the `favorites` array
// It should send the response being the whole "favorites" array
app.post( '/api/favorites', (req,res) => {
    const favoritemovie = req.body;
    favoritemovie.comments = '';
    
    let isFavorited = false;
    const favoriteIndex = favorites.findIndex((favorite) => {
       if(favoritemovie.id === favorite.id){
            isFavorited = true;
            return true;
       }
    })

    if(isFavorited === true){
        favorites.splice(favoriteIndex,1)
    } else {
        favorites.push(favoritemovie);
    }
    

    res.send(favorites)


});


// Create DELETE to /api/favorites/:id




//create a PUT to /api/favorites/:id




// http://localhost:3002
app.listen(3002,  () =>{
    console.log("app is up and running");
});