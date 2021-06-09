
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Onglet from './components/Onglet'
import Add from './components/Add'
import List from './components/List'



class App extends React.Component {
  constructor () {
    super()
    this.state = {
      activeTab: 'add',
      items: [],
    }
  }
  render () {
    return (
      <div className="App">
<Onglet
isSelected={this.state.activeTab === 'add'}
onClick ={() => this.setState({activeTab:'add'})}
>
  Add
</Onglet>


<Onglet
isSelected={this.state.activeTab === 'list'}
onClick ={() => this.setState({activeTab:'list'})}
> 
 list
</Onglet>


<Onglet
isSelected={this.state.activeTab === 'pay'}
onClick ={() => this.setState({activeTab:'pay'})}
> 
  Pay
</Onglet>
          
{this.state.activeTab === 'add' && <Add/>}    
   

      </div>
    )
  }
}
export default App
