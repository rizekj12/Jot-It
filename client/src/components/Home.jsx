import React, {Component} from 'react'
import Header from './Header'
import Nav from './Nav'
import { Link, Route, withRouter} from 'react-router-dom'
import Login from './Login'
import { loginUser, registerUser, removeToken, verifyUser } from '../services/auth'
import Signup from "./Signup"
import CreateEntry from "./CreateEntry"
import EntryList from "./EntryList"
import { getAllEntries, postEntry, putEntry, deleteEntry } from '../services/entries'






class Home extends Component {
    state = {
        authFormData: {
            username: "",
            password: "",
            confirmPassword: ""
        },
        currentUser: null,
        newEntry: {
          title: "",
          image_url: "",
          content: "",
          mood_id: ""
        }
    }

    authHandleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
          authFormData: {
            ...prevState.authFormData,
            [name]: value
          }
        }));
      }

      handleLogin = async () => {
        const currentUser = await loginUser(this.state.authFormData);
        this.setState({ currentUser })
        this.props.history.push('/entries-list');
      }

      handleLogout = () => {
        this.setState({
          currentUser: null
        })
        localStorage.removeItem('authToken');
        removeToken();
        this.props.history.push('/')
      }

      handleRegister = async () => {
        const currentUser = await registerUser(this.state.authFormData);
        this.setState({ currentUser })
        this.props.history.push('/create-entry');
      }


      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
          newEntry: {
            ...prevState.newEntry,
            [name]: value
          }
        }));
      }
      
      handleCreate = async (entryData) => {
        const newEntry = await postEntry(entryData);
        this.setState(prevState => ({
          currentUser: [...prevState.currentUser.entries, newEntry]
        }))
      }

    render() {
        return (
            <div>
              
                <Route path="/login">
                    <Login 
                    handleLogin = {this.handleLogin} 
                    handleChange = {this.authHandleChange} 
                    />
                </Route>

                <Route path="/" exact>
                <Header/>
                <Nav handleLogout ={this.handleLogout}/>
               <Link to="/signup"><button>sign up</button></Link>
               
               <h2>Welcome to Jot-It!</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis. Excepturi id eveniet ipsa iste tempora quidem quo minus rem praesentium. Voluptatem necessitatibus temporibus commodi, in totam tenetur dolorum adipisci.</p>
               </Route>

               <Route path="/signup">
                 <Header/>
                   <Signup
                   handleRegister = {this.handleRegister}
                   handleChange = {this.authHandleChange}
                   />
               </Route> 

              <Route path="/create-entry">
                <CreateEntry handleChange={this.handleChange} handleCreate={this.handleCreate} newEntry={this.state.newEntry}/>
              </Route>

              <Route path="/entries-list"> 
                <EntryList data={this.state.currentUser}/>
              
              </Route>

            </div>
        )
    }
}

export default withRouter(Home)

