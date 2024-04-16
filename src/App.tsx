import Card from "./components/Card"
import Navbar from "./components/Navbar"


function App() {

  return (
    <section className="w-screen h-max min-h-screen pb-10 bg-[#DDD3C9]/90 overflow-x-hidden overflow-y-auto max-w-full">

      <Navbar/>
      <img className="w-screen " src="/1.jpeg"/>
      <div className="mt-2 flex flex-col items-center w-max mx-auto">
        <span className="text-gray-800 text-3xl font-bold self-start">Topics</span>
        <div className="grid grid-cols-4 gap-4 mt-4 w-max">
          <Card title ="Random"/>
          <Card title="Random" />
          <Card title="Random" />
          <Card title="Random" />
        </div>
      </div>
    </section>
  )
}

export default App
