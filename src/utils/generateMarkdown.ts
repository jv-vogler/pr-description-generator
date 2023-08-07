import { FormField } from '@/store/useFormStore'

const generateMarkdownContent = (fields: FormField[]) => {
  return fields
    .filter((field) => field.title.trim() !== '')
    .map((field) => `# ${field.title}\n\n${field.content}`)
    .join('\n\n')
}

export default generateMarkdownContent
