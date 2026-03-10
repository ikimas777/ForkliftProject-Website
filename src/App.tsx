const STREAM_URL = 'https://forklift-project-website.vercel.app'

function App() {
  return (
    <div className="page stream-page">
      <div className="stream-wrap">
        <iframe
          className="stream-iframe"
          src={STREAM_URL}
          allow="autoplay; fullscreen; microphone; camera; clipboard-read; clipboard-write; gamepad"
          title="UE5 Pixel Streaming"
        />
      </div>
    </div>
  )
}

export default App

