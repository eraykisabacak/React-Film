import React, {Component} from 'react';
import ActorList from '../ActorList'

class HomePage extends Component {
    state = {
      actors: [{
          name: "Jack Nicholson",
          description : "Jack Nicholson, an American actor, producer, director and screenwriter, is a three-time Academy Award winner and twelve-time nominee. Nicholson is also notable for being one of two actors - the other being Michael Caine - who have received Oscar nomination in every decade from the 1960s through the",
          photo:"https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_.jpg"
      },
          {
              name:"Yilmaz Erdogan",
              description : "He spent his childhood in Ankara until he moved to Istanbul along with his family. His family is of Kurdish origin. In 1987, he dropped out of his civil engineering studies at Istanbul Technical University and joined the On Duty Theater Staff (Turkish: Nöbetçi Tiyatrosu) managed by Ferhan Sensoy.",
              photo: "https://m.media-amazon.com/images/M/MV5BMjEyMjE5NjQ2OV5BMl5BanBnXkFtZTgwOTgwODYzNTE@._V1_SY1000_CR0,0,710,1000_AL_.jpg"
          }]
    };

    render() {
        return (
            <div>
                <ActorList actors={this.state.actors}/>
            </div>
        );
    }
}

export default HomePage;
