import React, { Component } from 'react';
import styles from './form.module.css'

 class Form extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            firstName: "",
            lastName :"",
            age:"",
            email:'',
            Gender :"",
            Qulaification:"",

        }

        this.handleSubmit=this.handleSubmit.bind(this)

    }
    firsthandler =(e) =>{
        this.setState({
            firstName:e.target.value
        })
    }
    lasthandler =(e) =>{
            this.setState({
                lastName:e.target.value
            })
         }
    GenderHandler=(e)=>{
        this.setState({
            Gender:e.target.value
        })
    }
    
    handleSubmit=(e)=>{
        alert('${this.state.firstName} ${this.state.lastName} Registerd successfully !!!!')
        console.log(this.state);
        this.setState({
            firstName:"",
            lastName:"",
            age:"",
            email:"",
            Gender:"",
            Qualification:"",
        })
  
    
    e.preventDefault()
 }

    render() {
        return (
            <div className={styles.main}>

                <form onSubmit={this.handleSubmit}>
                    
                  <div className={styles.user}>
                   <h1>User rejistration</h1>
                   </div>
                   <label>firstName :</label>
                      <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="firstName..."/> <br/>
                   
                   <label>lastName :</label>
                      <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="lastName..."/> <br/>
                  
                   <label>age:</label>
                      <input type="number"  onChange={this.age} placeholder="age..."/> <br/>
                   
                   <label>email :</label>
                      <input type="email"  onChange={this.email} placeholder="mail id..."/>
                     
                   
                  
                   <label>Gender :</label>
                      <select type="text"onChange={this.GenderHandler} >
                          <option defaultValue> Select </option>
                          <option>male</option>
                          <option>female</option>
                      </select> 
                     
                   
                   <label>Qualification :</label>
                      <select type="text"  onChange={this.QualificationHand} defaultValue="Select qualification" >
                      <option defaultValue>Select</option>
                      <option>10th</option>
                      <option>12th</option>
                      <option>Diploma</option>
                      <option>B.tech</option>
                      </select><br/> <br/>

                      <input type="submit" value="Submit" />
                      
                </form>

                
            </div>
        )
    }
}
export default  Form;