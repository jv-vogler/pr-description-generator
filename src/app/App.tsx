import Form from '@/components/Form'
import Preview from '@/components/Preview'
import Markdown from '@/components/Markdown'
import { HydrationZustand } from '@/components/HydrationZustand'
import { Footer } from '@/components/Footer'

const App = () => {
  return (
    <HydrationZustand>
      <div className="dark flex h-screen flex-col">
        <main className="flex flex-1 flex-col gap-10 p-10 dark:bg-zinc-950 dark:text-white xl:flex-row">
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
