import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'

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
        Please try pressing <Badge variant="secondary">F12</Badge> to open the devTool
      </p>
      <div className="flex gap-4">
        <Button variant="secondary" asChild>
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </Button>
        <Button variant="secondary" onClick={ipcHandle}>
          Send IPC
        </Button>
      </div>
      <Versions />
    </div>
  )
}

export default App
