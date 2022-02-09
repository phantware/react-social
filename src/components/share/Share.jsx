import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import axios from 'axios'
import { useState } from 'react'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './share.css'

const Share = () => {
  const { user } = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const desc = useRef()
  const [file, setFile] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    }
    try {
      await axios.post('/posts', newPost)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img
            src={
              user.ProfilePicture
                ? PF + user.ProfilePicture
                : PF + 'person/noAvatar.pgn'
            }
            alt='profile-pics'
            className='shareProfileImg'
          />
          <input
            placeholder={"What's in your mind " + user.username + '?'}
            className='shareInput'
            ref={desc}
          />
        </div>
        <hr className='shareHr' />
        <form className='shareBottom' onSubmit={submitHandler}>
          <div className='shareOptions'>
            <label htmlFor='file' className='shareOption'>
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo or Video</span>
              <input
                type='file'
                id='file'
                style={{ display: 'none' }}
                accept='.png,.jpeg,.jpg'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className='shareOption'>
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className='shareOption'>
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className='shareOption'>
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton' type='submit'>
            Share
          </button>
        </form>
      </div>
    </div>
  )
}

export default Share
