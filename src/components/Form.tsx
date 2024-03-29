'use client'

import useFormStore, { FormField } from '@/store/useFormStore'
import Field from './Field'

const Form = () => {
  const formFields = useFormStore((state) => state.formFields)
  const addFormField = useFormStore((state) => state.addFormField)
  const updateFormField = useFormStore((state) => state.updateFormField)
  const removeFormField = useFormStore((state) => state.removeFormField)
  const resetForm = useFormStore((state) => state.resetForm)

  const handleFieldUpdate = (index: number, field: FormField) => {
    updateFormField(index, field)
  }

  const handleFieldRemove = (index: number) => {
    removeFormField(index)
  }

  const handleAddField = () => {
    const newField = { title: '', content: '' }
    addFormField(newField)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Form</h1>
      <button
        className="rounded-lg bg-slate-700 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-teal-700 active:bg-teal-800"
        onClick={resetForm}
      >
        Reset Form
      </button>
      <form className="mt-4 flex flex-col gap-3">
        {formFields.map((field, index) => (
          <Field
            key={index}
            title={field.title}
            content={field.content}
            onUpdate={(updatedField) => handleFieldUpdate(index, updatedField)}
            onRemove={() => handleFieldRemove(index)}
          />
        ))}
        <button
          type="button"
          onClick={handleAddField}
          className="rounded-lg bg-slate-700 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-teal-700 active:bg-teal-800"
        >
          Add Field
        </button>
      </form>
    </div>
  )
}

export default Form
