import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send('service_tzk8k4g', 'template_94mqr4t', templateParams, 'I6D4XXlPxP4FoPetk')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (err) => {
        console.error('FAILED...', err);
        setSuccessMessage('Message failed to send, please try again later.');
      })
      .finally(() => {
        setSending(false);
        setTimeout(() => setSuccessMessage(''), 5000); // Clear message after 5 seconds
      });
  };

  return (
    <motion.section
      className="flex justify-center items-center min-h-screen bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-blue-500 text-white rounded-lg p-12 lg:p-20 w-full max-w-5xl mx-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">Get in touch</h2>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <p className="text-lg text-white mb-6">For general enquiries</p>
            <div className="space-y-4 text-lg text-white">
              <div>
                <strong>Address:</strong><br />
                110, 16th Road, Chembur, Mumbai – 400071
              </div>
              <div>
                <strong>Phone:</strong><br />
                +91 22 25208822
              </div>
              <div>
                <strong>Email:</strong><br />
                info@supremegroup.co.in
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <motion.form
              className="space-y-4"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                className="appearance-none w-full bg-blue-500 text-white border-b border-white py-2 px-4 focus:outline-none"
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="appearance-none w-full bg-blue-500 text-white border-b border-white py-2 px-4 focus:outline-none"
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="appearance-none w-full bg-blue-500 text-white border-b border-white py-2 px-4 focus:outline-none"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                className="appearance-none w-full bg-blue-500 text-white border-b border-white py-2 px-4 focus:outline-none h-32 resize-none"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                className={`w-full bg-white text-blue-500 font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-300 ease-in-out transform hover:scale-105 ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send'}
              </button>
              {successMessage && (
                <p className="text-center mt-4 text-white font-bold">
                  {successMessage}
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
