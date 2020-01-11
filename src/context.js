import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider, Consumer / Sağlayıcı--Tüketici

const reducer = (state,action) => {
        switch (action.type){
        case "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        default :
            return state
    }
}

export class UserProvider extends Component {
    state = {

        users:[
          {
            id:1,
            name:"Eray Kısabacak",
            salary:"0",
            department:"Yazılım"
          },
          {
            id:2,
            name:"Hakan Öksüz",
            salary:"100",
            department:"Makina"
          },
          {
            id:3,
            name:"Semih Ünal",
            salary:"500",
            department:"Bilgisayar"
          }
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
    
      }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;