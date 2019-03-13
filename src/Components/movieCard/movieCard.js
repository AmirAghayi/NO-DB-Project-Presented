import React, { Component } from 'react';
import Favorites from '../favorite/favorites';
import Axios from 'axios';


class MovieCard extends Component {
        
state = {
   showOverview : false,
   comments: []
}

    readMore(){
        this.setState({ showOverview : !this.state.showOverview })  
     }



    postComments( e => this.state.comments={ text })
    Axios.post()
    .then( results => {
        this.setState({
            comments: text
        })
    })


    render (){
        const movie = this.props.movie
       return (
        <div className="infoCards">
        {this.props.liked.toString()}
        <table className="tableInfo">
            <tr>
              <th>Title:</th>
              <td>{movie.original_title}</td>
            </tr>

            <tr>
               <th>Original Language:</th>
               <td><p>{movie.original_language}</p></td>
            </tr>


            <tr>
                <th>Plot:</th>
                <td><p>{(movie.overview.length >= 200 && !this.state.showOverview) ? movie.overview.substring(0,200) + "..." : movie.overview}</p></td>
            </tr>    
        </table>

      <div className="buttons-container">
          <div className="read-more">
            { movie.overview.length >= 200 &&
                <button type="button" onClick={ () => this.readMore() } >
                    Read { !this.state.showOverview ? 'More' : 'Less' }
                </button>
            }
          </div>

          <div className="like-button">
              <Favorites likeHandler={() => this.props.likeMovie(movie)} isFavorite={this.props.liked}/>
          </div>

          <div className="comments-Box">
             <p>Comments: </p>
             <textarea 
             type="text" 
             className="commentsArea"
             placeholder="Comments..."
             
             ></textarea>
             <button className="submit"
             onClick={this.postComments}
             > Post </button>
          </div>
      </div>
      
        
      </div>
       )
    }


}


export default MovieCard;



