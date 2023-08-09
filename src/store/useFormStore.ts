import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FormField = {
  title: string
  content: string
}

type FormState = {
  formFields: FormField[]
}

type FormActions = {
  addFormField: (field: FormField) => void
  updateFormField: (index: number, field: FormField) => void
  removeFormField: (index: number) => void
  resetForm: () => void
}

type FormStore = FormState & FormActions

const defaultFields: FormField[] = [
  { title: 'Notes', content: '' },
  { title: 'Gist & Notion links', content: '' },
  { title: 'Task description', content: '' },
  {
    title: 'Example',
    content: '*(delete this and upload your picture from Github)*',
  },
]

const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formFields: defaultFields,
      addFormField: (field) =>
        set((state) => ({ formFields: [...state.formFields, field] })),
      updateFormField: (index, field) =>
        set((state) => {
          const updatedFields = [...state.formFields]
          updatedFields[index] = field
          return { formFields: updatedFields }
        }),
      removeFormField: (index) =>
        set((state) => ({
          formFields: state.formFields.filter((_, i) => i !== index),
        })),
      resetForm: () => set(() => ({ formFields: defaultFields })),
    }),
    { name: 'formStorage' }
  )
)

export default useFormStore
