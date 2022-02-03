import Topbar from '../../components/tobar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                src='assets/post/3.jpeg'
                alt=''
                className='profileCoverImg'
              />
              <img
                src='assets/person/7.jpeg'
                alt=''
                className='profileUserImg'
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Ismail Jamiu</h4>
              <span className='profileInfoDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, a.
              </span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
