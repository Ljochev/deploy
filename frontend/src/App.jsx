import Header from './components/Header'
import ToDoList from './components/ToDoList'
// https://excalidraw.com/#json=4ecIPimYsPenPVqYYh3yy,1gH5XSwfRrE5C-qVn0Kwqg
// https://tailwindcss.com/
// https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

function App() {
  // HOMEWORK

  // 01. pri klik na checkmark pozadinata na inputot da e zelena
  // 02. napravete novo kopce za delete nekoe x ❌ ama iskoriteteja heroicons bibliotekata.
  // https://heroicons.com/
  // 03. pod ovaj page da ima history..
  // znaci site izbrishani todos taskovi
  // da gi imame vo toj history div

  return (
    <div className='bg-sky-400 h-100% flex flex-col items-center pt-56 pb-8 '>
      <Header />
      <ToDoList />
    </div>
  )
}

export default App
