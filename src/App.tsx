const STREAM_URL = 'http://localhost'

function App() {
  return (
    <div className="page contact-page">
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
