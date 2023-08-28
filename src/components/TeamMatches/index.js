import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {isloading: true, TeamList: {}}

  componentDidMount() {
    this.getApiTeams()
  }

  getApiTeams = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedata = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetail: data.latest_match_details,
      RecentMatch: data.recent_matches,
    }
    this.setState({TeamList: updatedata, isloading: false})
  }

  getteamsmatches = () => {
    const {TeamList} = this.state
    const {teamBannerUrl, RecentMatch, latestMatchDetail} = TeamList

    console.log(latestMatchDetail)

    return (
      <div className="team-banner-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <p className="match">Latest Matches</p>
        <LatestMatch details={latestMatchDetail} RecentDetails={RecentMatch} />
      </div>
    )
  }

  getloader = () => {
    const {isloading} = this.state
    return (
      <div className="loader2">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )
  }

  render() {
    const {isloading, TeamList, latestMatchDetail} = this.state
    return (
      <div className="red-container">
        {isloading ? this.getloader() : this.getteamsmatches()}
      </div>
    )
  }
}
export default TeamMatches
