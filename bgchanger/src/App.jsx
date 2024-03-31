import {useState} from "react"

function App() {

  const [color , setColor] = useState("red")
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}
    >
      <div className="flex flex-wrap fixed bottom-12 px-2 justify-center inset-x-0 ">
        <div className="flex flex-wrap justify-center bg-white rounded-3xl px-3 py-2 gap-3 text-white">
            <button className=" outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
            <button className=" outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"green"}} onClick={() => setColor("green")}>Green</button>
            <button className=" outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button className=" outline-none px-4 rounded-full shadow-lg text-black" style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
            <button className=" outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"purple"}} onClick={() => setColor("purple")}>Purple</button>
            <button className=" outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"olive"}} onClick={() => setColor("olive")}>Olive</button>
            <button className=" outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"grey"}} onClick={() => setColor("grey")}>Grey</button>
            <button className=" outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"pink"}} onClick={() => setColor("pink")}>Pink</button>
            <button className=" outline-none px-4 rounded-full shadow-lg" style={{backgroundColor:"black"}} onClick={() => setColor("black")}>Black</button>
        </div>
      </div>
    </div>

  )
}

export default App
