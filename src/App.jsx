import ReactFlipCard from "@holbech/react-flip-card";
import './App.css'

function App() {
  return (
    <div style={{ "--width": "500px", "--height": "500px" }}>
      <ReactFlipCard>
        <div>
          <h2>Hej</h2>
          <p>hej mere</p>
        </div>
        <div>
          <h1>Back</h1>
          <p>hva så</p>
        </div>
      </ReactFlipCard>
    </div>
  )
}
export default App