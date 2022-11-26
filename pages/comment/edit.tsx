import { useRouter } from 'next/router'
import { useEffect, useRef, useState, ChangeEventHandler } from 'react'
import CustomEditor from '../../components/Editor'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import { Button, Slider } from '@mantine/core'
import AutoSizeImage from '@/components/AutoSizeImage'

const CommentEdit = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [images, setImages] = useState<string[]>([])
  const router = useRouter()
  const [rate, setRate] = useState(5)
  const { orderItemId } = router.query
  const [editorState, setEditorState] = useState<EditorState | undefined>(
    undefined
  )
  useEffect(() => {
    if (orderItemId != null) {
      fetch(`/api/get-comment?orderItemId=${orderItemId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.items.contents) {
            setEditorState(
              EditorState.createWithContent(
                convertFromRaw(JSON.parse(data.items.contents))
              )
            )
            setRate(data.items.rate)
            setImages(data.items.images.split(',') ?? [])
          } else {
            setEditorState(EditorState.createEmpty())
          }
        })
    }
  }, [orderItemId])

  const handleSave = () => {
    if (editorState && orderItemId != null) {
      fetch(`/api/update-comment`, {
        method: 'POST',
        body: JSON.stringify({
          orderItemId: Number(orderItemId),
          rate,
          contents: JSON.stringify(
            convertToRaw(editorState.getCurrentContent())
          ),
          images: images.join(','),
        }),
      })
        .then((res) => res.json())
        .then(() => {
          alert('Success')
          router.back()
        })
    }
  }

  const handleChange: ChangeEventHandler = () => {
    if (
      inputRef.current &&
      inputRef.current.files &&
      inputRef.current.files.length > 0
    ) {
      for (let i = 0; i < inputRef.current.files.length; i++) {
        const fd = new FormData()
        console.log('here')
        fd.append(
          'image',
          inputRef.current.files[i],
          inputRef.current.files[i].name
        )

        fetch(
          'https://api.imgbb.com/1/upload?key=8676e9a76cca42179cbd43407440d4b8&expiration=15552000',
          {
            method: 'post',
            body: fd,
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)

            setImages((prev) =>
              Array.from(new Set(prev.concat(data.data.image.url)))
            )
          })
          .catch((error) => console.log(error))
      }
    }
  }

  return (
    <div>
      {editorState != null && (
        <CustomEditor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onSave={handleSave}
        />
      )}
      <Slider
        defaultValue={5}
        min={1}
        max={5}
        step={1}
        value={rate}
        onChange={setRate}
        marks={[
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 },
        ]}
      />
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        multiple
        onChange={handleChange}
      />
      <div className="flex">
        {images &&
          images.length > 0 &&
          images.map((image, idx) => <AutoSizeImage src={image} key={idx} />)}
      </div>
    </div>
  )
}

export default CommentEdit
