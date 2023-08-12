import Form from '@/components/Form'
import Preview from '@/components/Preview'
import Markdown from '@/components/Markdown'
import { HydrationZustand } from '@/components/HydrationZustand'

const App = () => {
  return (
    <HydrationZustand>
      <main className="flex flex-col gap-10 p-10 xl:flex-row">
        <Form />
        <Markdown />
        <Preview />
      </main>
    </HydrationZustand>
  )
}

export default App
