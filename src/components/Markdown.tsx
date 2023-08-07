'use client'

import useFormStore from '@/store/useFormStore'
import generateMarkdownContent from '@/utils/generateMarkdown'

const Markdown = () => {
  const formFields = useFormStore((state) => state.formFields)
  const markdown = generateMarkdownContent(formFields)

  const handleCopyToClipboard = () => {
    const el = document.createElement('textarea')
    el.value = markdown
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Markdown</h1>
      {markdown.trim() !== '' ? (
        <div className="flex flex-col gap-2">
          <button
            className="max-w-sm bg-slate-400 p-2"
            onClick={handleCopyToClipboard}
          >
            Copy to Clipboard
          </button>

          <textarea
            className="resize-y bg-slate-100 p-4"
            rows={30}
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
