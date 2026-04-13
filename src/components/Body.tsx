import Sidebar from "./Sidebar"
import MainContent from "./MainContent"

const Body = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default Body