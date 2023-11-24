import React from 'react'
import Button from './Button'

const Forms = ({ request, setRequest }) => {
  return (
    <form onSubmit = {(e) => e.preventDefault()}>
        <Button
            buttonText = 'users'
            request = {request}
            setRequest = {setRequest}

        />
        <Button
            buttonText = 'posts'
            request = {request}
            setRequest = {setRequest}

        />
        <Button
            buttonText = 'comments'
            request = {request}
            setRequest = {setRequest}

        />
      
    </form>
  )
}

export default Forms
