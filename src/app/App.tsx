import Form from '@/components/Form'
import Preview from '@/components/Preview'
import Markdown from '@/components/Markdown'

const App = () => {
  return (
    <main className="flex justify-evenly">
      <Form />
      <Markdown />
      <Preview />
    </main>
  )
}

export default App
