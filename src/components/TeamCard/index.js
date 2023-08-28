import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {Details} = props
  const {id, name, teamImageUrl} = Details

  return (
    <Link to={`/team-matches/${id}`} className="team-container">
      <li className="list">
        <div className="internal-container">
          <img src={teamImageUrl} alt=" name" className="image2" />
        </div>
        <div className="internal-container">
          <p className="paragraph2">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
