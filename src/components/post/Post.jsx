import { MoreVert } from '@material-ui/icons'
import './post.css'
import { Users } from '../../dummyData'

const Post = ({ post }) => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=''
              className='postProfileImg'
            />
            <span className='postUsername'>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img src={post.photo} alt='post pics' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img src='/assets/like.png' alt='like-icon' className='likeIcon' />
            <img
              src='/assets/heart.png'
              alt='heart-icon'
              className='likeIcon'
            />
            <span className='postLikeCounter'>{post.like} people liked it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
