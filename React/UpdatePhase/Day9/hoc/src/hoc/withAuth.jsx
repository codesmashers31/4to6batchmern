const withAuth = (Component) => (props) => {


    return (
        <Component {...props}  />
    )

}

export default withAuth;