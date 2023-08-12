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
    <div className='flex-1'>
      <h1 className="text-2xl font-bold">Preview</h1>
      <ReactMarkdown
        remarkPlugins={[[remarkGfm]]}
        className="markdown-body p-[15px] md:p-[45px]"
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default Preview
