import React from 'react'

type Props = {}

const Form = (props: Props) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Form</h1>
      <form className="mt-4 flex flex-col gap-2">
        <div className="flex flex-col">
          <input className="bg-blue-200 p-2" placeholder="Title" />
          <textarea
            className="resize-y bg-red-200 p-2"
            cols={35}
            rows={5}
          ></textarea>
        </div>

        <div className="flex flex-col">
          <input className="bg-blue-200 p-2" placeholder="Title" />
          <textarea
            className="resize-y bg-red-200 p-2"
            cols={35}
            rows={5}
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default Form
