import "./styles.css";

export const PostCard = ({ post }) => {
  //const { post } = props;

  return (
    <div className='post'>
      <img src={post.cover} alt={post.title} />
      <div className='post-content'>
        <h2>({post.id}) {post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  )
}