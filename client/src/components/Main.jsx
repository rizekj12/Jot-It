import React, { Component } from 'react'
import Header from './Head'
import { Route, withRouter } from 'react-router-dom'
import Login from './Login'
import { loginUser, registerUser, removeToken, verifyUser } from '../services/auth'
import Signup from "./Signup"
import CreateEntry from "./CreateEntry"
import EntryList from "./EntryList"
import HomePage from './HomePage'
import Entry from "./Entry"
import UpdateEntry from './UpdateEntry'
import { postEntry, putEntry, deleteEntry } from '../services/entries'


class Home extends Component {
  state = {
    authFormData: {
      username: "",
      password: "",
      confirmPassword: ""
    },
    loginFormData: {
      username: "",
      password: "",
    },
    currentUser: null,
    newEntry: {
      title: "",
      image_url: "",
      content: "",
      mood_id: ""
    },
    validPass: true
  }

  componentDidMount() {
    this.handleVerify();
  }

  loginHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value
      }
    }));
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
    try{const currentUser = await loginUser(this.state.loginFormData);
    this.setState({ currentUser })
    this.props.history.push('/entries-list');
    }catch(error){
      this.setState({validPass:false})
      console.log('username or password not valid')
    }
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
    if(this.state.authFormData.password === this.state.authFormData.confirmPassword){
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser })
    this.props.history.push('/create-entry');
    }else{alert("password does not match confirm password")}
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
      currentUser: {
        ...prevState.currentUser,
        entries: [...prevState.currentUser.entries, newEntry]
      }
    }))
  }

  handleVerify = async () => {

    const currentUser = await verifyUser();
    this.setState({ currentUser });
  }

  handleUpdate = async (entryData) => {
    const updated = await putEntry(entryData.id, entryData)
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        entries: prevState.currentUser.entries.map(entry => (
          entry.id === updated.id ? updated : entry
        ))
      }
    }))
    this.props.history.push("/entries-list")
  }

  handleDelete = async (id) => {
    await deleteEntry(id);
    this.setState(prevState => ({
      entries: prevState.currentUser.entries.filter(entry => entry.id !== id)
    }))
  }

  render() {
    return (
      <div>
        <div>
        <Header currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
        </div>
        <Route path="/login">
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.loginHandleChange}
            validPass={this.state.validPass}
          />
        </Route>

        <Route path="/" exact>
          <HomePage/>   
        </Route>

        <Route path="/signup">
          <Signup
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
          />
        </Route>

        <Route path="/create-entry">
          {this.state.currentUser &&
            <CreateEntry handleChange={this.handleChange} handleCreate={this.handleCreate} newEntry={this.state.newEntry} />}
        </Route>

        <Route path="/entries-list">
          <EntryList data={this.state.currentUser} />
        </Route>
        <Route path="/entry/:id">
          {this.state.currentUser &&
            <Entry entryData={this.state.currentUser.entries} handleDelete={this.handleDelete} />
          }
        </Route>

        <Route path="/update-entry/:id">
          {this.state.currentUser && <UpdateEntry entryData={this.state.currentUser.entries} handleChange={this.handleChange} handleUpdate={this.handleUpdate} />}
        </Route>
      </div>
    )
  }
}

export default withRouter(Home)

