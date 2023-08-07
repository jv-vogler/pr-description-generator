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
    <div className="flex flex-col">
      <input
        className="bg-blue-200 p-2"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        className="resize-y bg-red-200 p-2"
        cols={35}
        rows={5}
        value={content}
        onChange={handleContentChange}
      ></textarea>
      <button type="button" onClick={onRemove}>
        Remove Field
      </button>
    </div>
  )
}

export default Field
