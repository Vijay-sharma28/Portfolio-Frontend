import React from 'react'
import './Contact.css'
import Heading from '../Heading/Heading'
import { useForm } from "react-hook-form"
import axios from "axios"


const Contact = () => {

    const API = import.meta.env.VITE_backend_url

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  
  const onSubmit = async (data) => {

    try {
        const res = await axios.post(`${API}/api/contact`, 
            {
                name: data.Name,
                email: data.email,
                message: data.message
            }
        )

        console.log(`Message : ${Object.values(data)}`)
        alert("Message sent successfully ✅")
        reset()
    } catch (error) {
        alert("Failed to send message ❌")
    }
  }

    return (
        <div id='contact'>
            <Heading data="contact" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputs">
                    <input className='input' {...register("Name", {required: "Name is required", minLength: {value: 3, message: "Minimum 3 characters"}, maxLength: { value: 20, message: "Too long" }})} type="text" placeholder='Name'  />
                    {errors.Name && <div className='error'>{errors.Name.message}</div>}
                    <input disabled={isSubmitting} className='input' {...register("email", {required: "Name is required", pattern: {value: /^\S+@\S+$/i, message: "Invalid email"}})} type="email" placeholder='Email'  />
                </div>
                <textarea {...register("message", {required: "Message is required"})} rows={10} placeholder='Message'></textarea>
                {errors.message && <div className="error">{errors.message.message}</div>}

                <input disabled={isSubmitting} className='btn hire-btn' type="submit" value={isSubmitting ? "Sending..." : "Hire Me"} />
            </form>
        </div>
    )
}

export default Contact






