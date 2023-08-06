type Props = {}

const Markdown = (props: Props) => {
  const md = `# Teste
SALDASkfpsdofkasd

# Another heading?
another content https://github.com/remarkjs/remark-gfm#example-singletilde https://github.com/remarkjs/remark-gfm#example-singletilde
`
  return (
    <div>
      <h1 className="text-2xl font-bold">Markdown</h1>
      <textarea
        className="resize-y bg-slate-100 p-4"
        rows={30}
        cols={60}
        spellCheck={false}
        value={md}
        readOnly
      ></textarea>
    </div>
  )
}

export default Markdown
