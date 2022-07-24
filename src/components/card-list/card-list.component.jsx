
import { Component } from "react";

class CardList extends Component {

     render() {
        const  {filterMonsters} = this.props
        return (
            <div>
            {
                filterMonsters.map((monster) => {
                   return <h1 key={monster.id}>{monster.name}</h1>
                })
             }
            </div>
        )
     }
}

export default CardList;