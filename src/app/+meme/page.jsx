"use client"
import { useState } from "react"
import ReusableForm from "../components/ui/ReusableForm"
import { useRouter } from "next/navigation"
function CreateMeme() {
  const router = useRouter()
  const [errors, setErrors] = useState([])
  const initialValues = {image: '', caption_1: '', caption_2: ''}
  const fields = [
      { label: 'image', type: 'file', placeholder: 'Choose File', name: 'image'},
      { label: 'caption_1', type: 'text', placeholder: 'Type your top caption', name: 'caption_1' },
      { label: 'caption_2', type: 'text', placeholder: 'Type your bottom caption', name: 'caption_2' }
  ]

  const handleCancelClick = () => {
    router.push('/memes') 
  }

  async function handleCreateMeme(data) {
    
  }
    return (
      <div>
        <ReusableForm
          fields={fields} 
          initialValues={initialValues} 
          onSubmit={handleCreateMeme} 
          submitBtnText={"Create Meme"}
          errors={errors}
          cancel={handleCancelClick}
        />
      </div>
    )
  }
  
  export default CreateMeme