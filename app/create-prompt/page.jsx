'use client'

import Form from '@components/Form'
import React, { useState } from 'react'

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt:'',
        tag: ''
    })

    const CreatePrompt = async (event) =>{

    }
  return (
    <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={CreatePrompt}

    />
  )
}

export default CreatePrompt