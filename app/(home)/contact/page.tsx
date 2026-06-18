"use client"
import React, { useState, useRef, SyntheticEvent, ChangeEvent } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  BriefcaseBusiness,
} from "lucide-react"
import emailjs from "@emailjs/browser"
import { useTranslations } from "next-intl"

// Type definitions
interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const Page: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const  t  = useTranslations()

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
      isValid = false
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  // Check if form is valid for button disable state
  const isFormValid = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return (
      formData.name.trim().length >= 2 &&
      emailRegex.test(formData.email) &&
      formData.message.trim().length >= 10
    )
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Get environment variables with fallback values
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // Check if environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        )
      }

      const templateParams = {
        from_name: formData.name,
        to_name: "Simon Tamene Lebessa",
        from_email: formData.email,
        to_email: "simalike245@gmail.com",
        message: formData.message,
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      )

      console.log("Email sent successfully:", response)

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setErrors({})

      // Show success message
      alert("Thank you! We'll get back to you as soon as possible.")

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      setIsSubmitting(false)
      console.error("EmailJS Error:", error)
      alert("Oops! Something went wrong. Please try again.")
    }
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-12 sm:py-16'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-10'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white'>
            {t('Contact.title')}{" "}
            <span className='text-green-600 dark:text-green-400'>{t('Contact.us')}</span>
          </h1>
          <p className='mt-2 text-gray-600 dark:text-gray-400'>
            {t('Contact.subtitle')}
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {/* Contact Info - Simple Cards */}
          <div className='space-y-3'>
            <div className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-3'>
              <Phone className='w-5 h-5 text-green-600 dark:text-green-400' />
              <div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  {t('Contact.phone')}
                </p>
                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                  +251930555333
                </p>
              </div>
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-3'>
              <Mail className='w-5 h-5 text-green-600 dark:text-green-400' />
              <div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  {t('Contact.email')}
                </p>
                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                  info@greensharefuture.com
                </p>
              </div>
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-3'>
              <MapPin className='w-5 h-5 text-green-600 dark:text-green-400' />
              <div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  {t('Contact.address')}
                </p>
                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                  Bole, Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-3'>
              <BriefcaseBusiness className='w-5 h-5 text-green-600 dark:text-green-400' />
              <div>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  {t('Contact.workingHours')}
                </p>
                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                  Mon-Sat: 08:00 AM – 06:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Simple */}
          <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700'>
            {isSubmitted && (
              <div className='mb-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm'>
                ✓ Message sent successfully!
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='space-y-4'
              noValidate
            >
              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Name *
                </label>
                <div className='relative'>
                  <User className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full pl-9 pr-3 py-2 rounded-lg border ${
                      errors.name
                        ? "border-red-500 dark:border-red-500"
                        : "border-gray-200 dark:border-gray-700"
                    } bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors`}
                    placeholder='Your name'
                  />
                </div>
                {errors.name && (
                  <p className='mt-1 text-xs text-red-500 dark:text-red-400'>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  {t('Contact.email')} *
                </label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-9 pr-3 py-2 rounded-lg border ${
                      errors.email
                        ? "border-red-500 dark:border-red-500"
                        : "border-gray-200 dark:border-gray-700"
                    } bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-colors`}
                    placeholder='your@email.com'
                  />
                </div>
                {errors.email && (
                  <p className='mt-1 text-xs text-red-500 dark:text-red-400'>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                  Message *
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    errors.message
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-200 dark:border-gray-700"
                  } bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none transition-colors`}
                  placeholder='Your message...'
                />
                {errors.message && (
                  <p className='mt-1 text-xs text-red-500 dark:text-red-400'>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type='submit'
                disabled={isSubmitting || !isFormValid()}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-white font-medium rounded-lg transition-all text-sm ${
                  isSubmitting || !isFormValid()
                    ? "bg-gray-400 cursor-not-allowed dark:bg-gray-600"
                    : "bg-green-600 hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className='inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className='w-4 h-4' />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
