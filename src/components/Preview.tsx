'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import useFormStore from '@/store/useFormStore'
import generateMarkdownContent from '@/utils/generateMarkdown'
import 'github-markdown-css'

const Preview = () => {
  const formFields = useFormStore((state) => state.formFields)
  const markdown = generateMarkdownContent(formFields)

  return (
    <div>
      <h1 className="text-2xl font-bold">Preview</h1>
      <div className="markdown-body max-w-3xl px-16 py-8">
        <ReactMarkdown remarkPlugins={[[remarkGfm]]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Preview
