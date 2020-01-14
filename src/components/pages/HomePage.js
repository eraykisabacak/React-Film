import React, {Component} from 'react';
import ActorList from '../ActorList'

class HomePage extends Component {
    state = {
      actors: [
          {
              name:"Kemal Sunal",
              description : "Born in 1944 Istanbul, Turkey. Graduated from Vefa High School, Fatih, Istanbul. Sunal acted in many popular films, although he began his artistic career in the theater. His first play was called, \"Unwilling Doctor\" and he later worked at the Devekusu Kabare Theatre with Ulvi Uraz. Although Sunal had minor roles at first, after 1973 he was highly ",
              photo: "https://m.media-amazon.com/images/M/MV5BNGYwOTkyNjAtZWJmYy00ODI4LWEyYzktOGY4ZDFjZjI0ZTFlXkEyXkFqcGdeQXVyMjc2Mzk3ODA@._V1_SY1000_SX768_AL_.jpg"
          },
          {
              name:"Yilmaz Erdogan",
              description : "He spent his childhood in Ankara until he moved to Istanbul along with his family. His family is of Kurdish origin. In 1987, he dropped out of his civil engineering studies at Istanbul Technical University and joined the On Duty Theater Staff (Turkish: Nöbetçi Tiyatrosu) managed by Ferhan Sensoy.",
              photo: "https://m.media-amazon.com/images/M/MV5BMjEyMjE5NjQ2OV5BMl5BanBnXkFtZTgwOTgwODYzNTE@._V1_SY1000_CR0,0,710,1000_AL_.jpg"
          },
          {
              name:"Aras Bulut Iynemli",
              description : "He was born in Istanbul. He continues his education at Istanbul Technical University Department of Airplane Engineering. His first TV Series was \"Oyle Bir Gecer Zaman ki\" directed by Mehmet Ada Öztekin. After his success in this series, he shot his first movie \"Mahmut ile Meryem\" directed by Mehmet Ada Öztekin in 2013 ",
              photo: "https://m.media-amazon.com/images/M/MV5BMzYyMTgyOTYtZDViNy00Y2VmLTk1ZWYtYjk2ZjkxZjVlZWExXkEyXkFqcGdeQXVyNDU5ODk0NjA@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
          },
          {
              name: "Kenan Imirzalioglu",
              description : "Kenan Imirzalioglu was born at Ucem Village, Bala, Ankara on June 17th, 1974. He is the third kid of Yildiz and Mustafa Imirzalioglu. His brother's name is Dervis and sister is Zubeyde. Imirzalioglu finished elementary school in his village Ucem. Kenan Imirzaliogul moved to Ankara, capitol of Turkey when he was 12 years old.",
              photo:"https://boxofficeturkiye.com/images/person/200x250/a87ff679a2f3e71d9181a67b7542122c.jpg"
          },
          {
              name:"Murat Yildirim",
              description : "Murat Yildirim was born on April 13, 1979 in Konya, Turkey. He is an actor, known for Suskunlar (2012), Gecenin Kraliçesi (2016) and Kirimli (2014). He has been married to Iman Albani since 2016.",
              photo: "https://boxofficeturkiye.com/images/person/200x250/3210ddbeaa16948a702b6049b8d9a202.jpg"
          },
          {
              name: "Jack Nicholson",
              description : "Jack Nicholson, an American actor, producer, director and screenwriter, is a three-time Academy Award winner and twelve-time nominee. Nicholson is also notable for being one of two actors - the other being Michael Caine - who have received Oscar nomination in every decade from the 1960s through the",
              photo:"https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_.jpg"
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
