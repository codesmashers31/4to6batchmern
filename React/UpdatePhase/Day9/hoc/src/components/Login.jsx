

const Login = ({authtext}) => {
  return (
    <>
    <div>
       <h1>
         {authtext}
       </h1>
       <input type="text" placeholder="Enter the email"  />
       <input type="text" placeholder="Enter the Password" />
       <button>{authtext}</button>
    </div>
    </>
  )
}

export default Login