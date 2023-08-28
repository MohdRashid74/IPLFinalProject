import './index.css'

const MatchCard = props => {
  const {matchDetail} = props

  return (
    <ul className="result-container">
      <li className="result-list">
        <img
          src={matchDetail.competing_team_logo}
          alt={matchDetail.competing_team_logo}
          className="logo2"
        />
        <p className="paragraph3">{matchDetail.competing_team}</p>
        <p className="paragraph3">{matchDetail.result}</p>
        <p className="paragraph3">{matchDetail.match_status}</p>
      </li>
    </ul>
  )
}

export default MatchCard
