'use client'

import useFormStore from '@/store/useFormStore'
import generateMarkdownContent from '@/utils/generateMarkdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Markdown = () => {
  const formFields = useFormStore((state) => state.formFields)
  const markdown = generateMarkdownContent(formFields)

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdown)
    } catch (error) {
      console.error('Error copying markdown to clipboard: ', error)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Markdown</h1>
      {markdown.trim() !== '' ? (
        <div className="flex max-h-[780px] max-w-3xl flex-col gap-2 lg:max-w-2xl">
          <button
            className="max-w-fit rounded-lg bg-slate-700 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-teal-700 active:bg-teal-800"
            onClick={handleCopyToClipboard}
          >
            Copy to Clipboard
          </button>

          <div className="border-2 border-black dark:border-zinc-100">
            <SyntaxHighlighter
              language="markdown"
              style={dracula}
              showLineNumbers
              lineNumberStyle={{ color: '#6272a4' }}
              wrapLines
            >
              {markdown}
            </SyntaxHighlighter>
          </div>
        </div>
      ) : (
        <p>No content to display.</p>
      )}
    </div>
  )
}

export default Markdown
