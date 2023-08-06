import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css'

type Props = {}

const Preview = (props: Props) => {
  const md = `

  # Teste
  SALDASkfpsdofkasd

  # Another heading?
  another content
  https://github.com/remarkjs/remark-gfm#example-singletilde
  `
  return (
    <div>
      <h1 className="text-2xl font-bold">Preview</h1>
      <div className="markdown-body max-w-2xl p-8">
        <ReactMarkdown remarkPlugins={[[remarkGfm]]}>{md}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Preview
