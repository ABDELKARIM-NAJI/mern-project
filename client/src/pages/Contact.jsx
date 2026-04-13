import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl text-blue-500" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaEnvelope className="text-3xl text-purple-500" />,
      title: 'Email',
      details: 'info@platform.com',
      link: 'mailto:info@platform.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-pink-500" />,
      title: 'Address',
      details: '123 Tech Street, San Francisco, CA',
      link: '#'
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Have a question or ready to get started? We'd love to hear from you. Get in touch with our team today.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group cursor-pointer"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{info.title}</h3>
                <p className="text-gray-600 text-center group-hover:text-blue-600 transition-colors">
                  {info.details}
                </p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

                {submitted && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-2xl" />
                    <div>
                      <p className="text-green-800 font-semibold">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Monday - Friday</p>
                    <p className="text-gray-200">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Saturday</p>
                    <p className="text-gray-200">10:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sunday</p>
                    <p className="text-gray-200">Closed</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-blue-400">
                  <p className="text-sm text-gray-300">
                    For urgent matters, please call our hotline or send an email to our support team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">How long does it take to get a response?</h3>
                <p className="text-gray-600">We typically respond to inquiries within 24 business hours.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer support over phone?</h3>
                <p className="text-gray-600">Yes, you can reach our team during business hours at +1 (555) 123-4567.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Can I schedule a consultation?</h3>
                <p className="text-gray-600">Absolutely! Send us a message with your preferred time and we'll arrange it.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Do you have a support email?</h3>
                <p className="text-gray-600">Yes, support is available at info@platform.com for all your questions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
