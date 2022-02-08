import Topbar from '../../components/tobar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './profile.css'

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                src={`${PF}post/3.jpeg`}
                alt=''
                className='profileCoverImg'
              />
              <img
                src={`${PF}person/7.jpeg`}
                alt=''
                className='profileUserImg'
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Ismail Jamiu</h4>
              <span className='profileInfoDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique.
              </span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed username='john' />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
