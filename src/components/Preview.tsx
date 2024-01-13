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
    <div className="max-w-[900px] flex-1">
      <h1 className="mb-12 text-2xl font-bold">Preview</h1>
      <ReactMarkdown
        remarkPlugins={[[remarkGfm]]}
        className="markdown-body border-2 border-black p-[15px] dark:border-zinc-100 md:p-[45px]"
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default Preview
