'use client'

import useFormStore from '@/store/useFormStore'
import generateMarkdownContent from '@/utils/generateMarkdown'

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
        <div className="flex flex-col gap-2">
          <button
            className="max-w-fit rounded-lg bg-slate-700 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-teal-700 active:bg-teal-800"
            onClick={handleCopyToClipboard}
          >
            Copy to Clipboard
          </button>

          <textarea
            className="resize-y rounded mt-2 bg-slate-700 p-4 text-slate-200"
            rows={20}
            cols={50}
            spellCheck={false}
            value={markdown}
            readOnly
          ></textarea>
        </div>
      ) : (
        <p>No content to display.</p>
      )}
    </div>
  )
}

export default Markdown
