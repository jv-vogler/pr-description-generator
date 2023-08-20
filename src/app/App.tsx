import Form from '@/components/Form'
import Preview from '@/components/Preview'
import Markdown from '@/components/Markdown'
import { HydrationZustand } from '@/components/HydrationZustand'
import { Footer } from '@/components/Footer'

const App = () => {
  return (
    <HydrationZustand>
      <div className="flex h-screen flex-col">
        <main className="mb-auto flex flex-col gap-10 p-10 xl:flex-row">
          <Form />
          <Markdown />
          <Preview />
        </main>
        <Footer />
      </div>
    </HydrationZustand>
  )
}

export default App
