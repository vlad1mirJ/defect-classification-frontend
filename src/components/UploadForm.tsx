/* eslint-disable react/button-has-type */
import { ChangeEvent, FormEvent } from 'react'

type Props = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  handleReset: () => void
  file: File | null
  isLoading: boolean
  isSubmited: boolean
}

function UploadForm({
  handleChange,
  handleSubmit,
  file,
  handleReset,
  isLoading,
  isSubmited,
}: Props) {
  return (
    <form
      className="flex flex-col items-center bg-base-200 p-10"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <input
        onChange={handleChange}
        name="image"
        multiple={false}
        type="file"
        accept="image/*"
        className="file-input file-input-bordered file-input-accent w-full max-w-xs mb-3"
        disabled={isLoading || isSubmited}
      />

      {file && (
        <div className="flex gap-5">
          <button
            disabled={isLoading || isSubmited}
            className="btn btn-primary"
            type="submit"
          >
            {isLoading && <span className="loading loading-spinner" />}
            Submit
          </button>

          <button
            disabled={isLoading}
            className="btn btn-secondary"
            type="reset"
          >
            Reset
          </button>
        </div>
      )}
    </form>
  )
}

export default UploadForm
