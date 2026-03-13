const STREAM_URL = 'http://91.98.239.43'

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

