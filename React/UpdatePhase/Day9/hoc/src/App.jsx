import LandingPage from "./components/LandingPage"
import withLanding from "./hoc/withLanding"

const AdminLanding = withLanding(LandingPage)
const VendorLogin = withLanding(LandingPage)

const App = () => {
  return (
    <>
    <VendorLogin colortext={"red"} textprocessing = "This is the Vendor Landing page"  />
    <LandingPage textprocessing = "This is the Landing page"  />
    <AdminLanding colortext={"green"} textprocessing = "This is the Admin Landing page"  />
    </>
  )
}

export default App