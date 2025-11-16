const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h2 style={{ color:'blue' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ fontWeight: 'bold'}}>Bio: <span style={{ fontWeight: 'normal' }}>{props.bio}</span></p>
        </div>
    );
}

export default UserProfile