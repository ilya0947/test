export default function Post({name, cb, id}) {
        return (
		<>
			<h2>{name}<button onClick={() => cb(id)}>Delete</button></h2>
		</>	
	)
}
