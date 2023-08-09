import Form from '@/components/Form'
import Preview from '@/components/Preview'
import Markdown from '@/components/Markdown'
import { HydrationZustand } from '@/components/HydrationZustand'

const App = () => {
  return (
    <main className="flex justify-evenly">
      <HydrationZustand>
        <Form />
      </HydrationZustand>
      <HydrationZustand>
        <Markdown />
      </HydrationZustand>
      <HydrationZustand>
        <Preview />
      </HydrationZustand>
    </main>
  )
}

export default App
