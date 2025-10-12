
import MainContent from "../components/MainContent"
import Sidebar from "../components/Sidebar"


const Home = () => {
  return (
    <div className="bg-[linear-gradient(95deg,#111729_3%,#1d1b48_99.61%)] w-full md:h-screen h-auto py-5 text-white   flex flex-col md:flex-row justify-center items-center gap-6  md:gap-20">
      <Sidebar />

      <MainContent />

    </div>
  )
}

export default Home