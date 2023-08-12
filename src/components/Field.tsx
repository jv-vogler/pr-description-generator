type FieldProps = {
  title: string
  content: string
  onUpdate: (field: { title: string; content: string }) => void
  onRemove: () => void
}

const Field: React.FC<FieldProps> = ({
  title,
  content,
  onUpdate,
  onRemove,
}) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ title: e.target.value, content })
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onUpdate({ title, content: e.target.value })
  }

  return (
    <div className="relative flex flex-col">
      <button
        className="absolute -right-1 -top-1 h-6 w-6 self-end rounded-full bg-red-500 font-bold text-white transition-colors duration-200 hover:bg-red-600 active:bg-red-700"
        type="button"
        onClick={onRemove}
      >
        X
      </button>
      <div className="flex flex-col">
        <input
          className="bg-slate-800 p-2 font-bold text-white transition-colors duration-200 placeholder:text-zinc-400 focus:bg-teal-700"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className="resize-y border-r-0 bg-slate-700 p-2 text-white transition-colors duration-200 focus:bg-teal-700"
          cols={35}
          rows={5}
          value={content}
          onChange={handleContentChange}
        ></textarea>
      </div>
    </div>
  )
}

export default Field
