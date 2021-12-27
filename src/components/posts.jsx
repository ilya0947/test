import Post from './post';
export default function Posts({posts, cb}) {
    return (<div>{
         posts.map(post => (
                      <Post key={post.id} id={post.id} name={post.name} cb={cb}/>
                    ))
			}</div>)
    
}