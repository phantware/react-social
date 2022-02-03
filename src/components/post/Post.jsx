import { MoreVert } from '@material-ui/icons'
import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src='/assets/person/1.jpeg'
              alt=''
              className='postProfileImg'
            />
            <span className='postUsername'>Ismail Jamiu</span>
            <span className='postDate'>5 mins ago</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>Hey! it's my first post :)</span>
          <img src='/assets/post/1.jpeg' alt='post pics' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img src='/assets/like.png' alt='like-icon' className='likeIcon' />
            <img
              src='/assets/heart.png'
              alt='heart-icon'
              className='likeIcon'
            />
            <span className='postLikeCounter'>32 people liked it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
