import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <img alt="logo" className="w-32 h-32 mb-8" src={electronLogo} />
      <div className="text-sm text-gray-400 mb-4">Powered by electron-vite</div>
      <div className="text-2xl font-semibold mb-6">
        Build an Electron app with <span className="text-blue-400">React</span>
        &nbsp;and <span className="text-blue-500">TypeScript</span>
      </div>
      <p className="text-gray-300 mb-8">
        Please try pressing <code className="px-2 py-1 bg-gray-800 rounded text-sm">F12</code> to
        open the devTool
      </p>
      <div className="flex gap-4">
        <a
          href="https://electron-vite.org/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          Documentation
        </a>
        <button
          onClick={ipcHandle}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors cursor-pointer"
        >
          Send IPC
        </button>
      </div>
      <Versions />
    </div>
  )
}

export default App
