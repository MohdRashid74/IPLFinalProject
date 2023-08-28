import {Component} from 'react'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getApi()
  }

  getApi = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updateData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: updateData})
  }

  render() {
    const {teamsList} = this.state
    return (
      <div className="bg-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="un-list">
          {teamsList.map(eachitem => (
            <TeamCard ley={eachitem.id} Details={eachitem} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
