import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
const Rightbar = ({ profile }) => {
  const HomeRightbar = () => (
    <>
      <div className='birthdayContainer'>
        <img src='assets/gift.png' alt='' className='birthdayImg' />
        <span className='birthdayText'>
          <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
        </span>
      </div>
      <img src='assets/ad.png' alt='ads' className='rightbarAd' />
      <h4 className='rightbarTitle'>Online Friends</h4>
      <ul className='rightbarFriendList'>
        {Users.map((u) => {
          return <Online key={u.id} user={u} />
        })}
      </ul>
    </>
  )

  const ProfileRightbar = () => {
    return <h1>hey it's profile page</h1>
  }
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper' profile>
        {/* <ProfileRightbar /> */}
        <HomeRightbar />
      </div>
    </div>
  )
}

export default Rightbar
