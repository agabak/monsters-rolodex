import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
        monsters: [],
        searchText: ''
    }
  }

  componentDidMount() { 
    // api calll and change the state of monsters list
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => this.setState(() => {
           return {monsters: users}
        }, () => console.log(this.state.monsters)));
  }

  // change the state of search text
  onSearchChange = (event) => {
    const searchText = event.target.value;
    this.setState(() => {
      return {searchText}
    })
  }
  
  render() {

    const {monsters, searchText} = this.state;
    const {onSearchChange} = this;

    const filterMonsters = monsters.filter((monster) => {
        return  monster.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    })

     return(
        <div className='App'>
        <h1 className='app-title'>Monster Rolodex</h1>
         <SearchBox  onChangeHandler={onSearchChange} 
                     className='search-box' 
                     placeholder='search text' />
      
         <CardList  monsters={filterMonsters} />
        </div>
     )
  }
}
 
export default App;
