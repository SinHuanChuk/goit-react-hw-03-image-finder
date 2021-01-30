import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import Button from './Components/Button/Button'
import Loader from './Components/Loader/Loader'
import Modal from './Components/Modal/Modal'
import './styles.css'
import axios from 'axios'


export default class App extends Component {
  state = {
    mass: [],
    loader: true,
    query: '',
    filter: '',
    page: 1,
    active: false,
    dataURL: null
  }

  componentDidMount() {
    this.setState({loader: true})
    axios
    .get(`https://pixabay.com/api/?q=&page=1&key=19312549-a0ff2c4a175ff1a1853f83c49&image_type=photo&orientation=horizontal&per_page=20`)
    .then(res => this.setState({mass: res.data.hits, loader: false}))
  }

  goSeacrh = (page = this.state.page, query = this.state.query) => {
    this.setState({loader: true})
    axios
    .get(`https://pixabay.com/api/?q=${query}&page=${page}&key=19312549-a0ff2c4a175ff1a1853f83c49&image_type=photo&orientation=horizontal&per_page=20`)
    .then(res => this.setState((prevState) => ({mass: [...prevState.mass, ...res.data.hits], loader: false})))
  }

  handleClose = () => {
    this.setState({
      active: false,
      dataURL: null
    })
  }

  handleOpen = (e) => {
    this.setState({
      active: true,
      dataURL: e.target.dataset.img
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault()

    this.setState({
      mass: [],
      query: this.state.filter,
      page: 1
    }, this.goSeacrh)
  }

  onChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  handlePlus = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }), this.goSeacrh);
  }

  render() {
    const {mass, loader, active, dataURL} = this.state

    return(
      <div className = 'App'>
        <SearchBar onChange = {this.onChange} onSubmit = {this.onSubmit}/>
        {loader ? <Loader />: <ImageGallery mass = {mass} handleOpen = {this.handleOpen}/>}
        <Button handlePlus = {this.handlePlus}/>
        <Modal active = {active} dataURL = {dataURL} handleClose = {this.handleClose}/>
      </div>
    )
  }
}