import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import'./onglet.css'


class Onglet extends React.Component {
    
    render () {
      return (

      

      <Button 
      className="bouton"
      variant='outline-dark ' 
      onClick={this.props.onClick}>
      {this.props.children}
      </Button>
          
       
    


        
      )
    }
  }
  export default Onglet