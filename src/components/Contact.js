import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Mail, MapPin, AlertTriangle } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    else if (formData.name.length > 100) newErrors.name = "Max length is 100 characters";
    
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.message) newErrors.message = "Message is required";
    else if (formData.message.length > 2000) newErrors.message = "Max length is 2000 characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Reset error states when user starts typing again
    if (submitError) {
      setSubmitError(false);
      setErrorMessage("");
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setIsSubmitting(false);
    setIsSubmitted(false);
    setSubmitError(false);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setIsSubmitting(true);
    setSubmitError(false);
  
    emailjs.send ('service_lywirra', 'template_6xx8z3h', {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }, {
      publicKey: 'Y_JRp3rGakvTHed5j',
    })
    .then(
      () => {
        
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });  
          setTimeout(() => setIsSubmitted(false), 5000);
        }, 1000);
      },
      (error) => {
        console.log('FAILED...', error.text);
        setIsSubmitting(false);
        setSubmitError(true);
        setErrorMessage(error.text || "Failed to send message.Try sending using mail sharmamrudul190@gmail.com.");
      }
    );
  };
  
  const handleTryAgain = () => {
    resetForm();
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Contact</h2>
          <p className="text-lg text-gray-300 mb-8">Feel free to reach out to me at <span className="font-semibold text-purple-400">sharmamrudul190@gmail.com</span></p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* CONTACT INFO SIDEBAR */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br flex flex-col  from-purple-800 to-purple-900  rounded-2xl p-6 border border-purple-500/20 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              
              {/* Contact Cards */}
              <div className="space-y-6 ">
                <div className="flex items-start space-x-4 group ">
                  <div className="bg-purple-500/20 p-3 rounded-xl group-hover:bg-purple-500/30 transition-all">
                    <Mail className="text-purple-400 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-300 font-sans">sharmamrudul190@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-purple-500/20 p-3 rounded-xl group-hover:bg-purple-500/30 transition-all">
                    <MapPin className="text-purple-400 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Nagpur, India</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-10">
                <h4 className="text-xl font-semibold text-white mb-4">Connect</h4>
                <div className="flex space-x-3">
                  <span className="p-3 bg-purple-900 rounded-full opacity-60 cursor-not-allowed">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </span>
                  <span className="p-3 bg-purple-900 rounded-full opacity-60 cursor-not-allowed">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github text-white"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                  </span>
                </div>
              </div>
              
              <div className="mt-5">
              
              
              
                </div>
              {/* Decorative Elements */}
              <div className="relative mt-10">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 blur-xl"></div>
              </div>
            </div>
          </motion.div>

          {/* FORM SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <div className="bg-gradient-to-br from-green-500/10 to-green-700/10 p-10 rounded-2xl border border-green-500/30 flex flex-col items-center justify-center h-full shadow-lg">
                <div className="bg-green-500/20 p-4 rounded-full mb-6">
                  <CheckCircle size={48} className="text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Thank You!</h3>
                <p className="text-center text-gray-300 text-lg max-w-md">
                  Your message has been sent successfully. I'll get back to you as soon as possible!
                </p>
              </div>
            ) : submitError ? (
              <div className="bg-gradient-to-br from-red-500/10 to-red-700/10 p-10 rounded-2xl border border-red-500/30 flex flex-col items-center justify-center h-full shadow-lg">
                <div className="bg-red-500/20 p-4 rounded-full mb-6">
                  <AlertTriangle size={48} className="text-red-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Message Failed</h3>
                <p className="text-center text-gray-300 text-lg max-w-md mb-6">
                  {errorMessage || "There was a problem sending your message. Please try again."}
                </p>
                <button
                  onClick={handleTryAgain}
                  className="py-3 px-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-gray-800/40 to-purple-900/40 p-2  sm:p-8 rounded-2xl  shadow-xl border border-purple-500/20  relative overflow-hidden"
              >
                {/* Decorative shape */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl"></div>
                
                <h3 className="text-2xl font-bold text-center sm:text-left text-white mb-6">Send Message</h3>
                
                <div className="mb-6">
                  <label htmlFor="name" className="text-gray-200 text-sm font-medium mb-2 block">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${
                      errors.name ? "border-red-500/70" : "border-purple-700/50"
                    } rounded-lg font-medium text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 transition-all`}
                    type="text"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1 ml-1">{errors.name}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="text-gray-200 text-sm font-medium mb-2 block">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${
                      errors.email ? "border-red-500/70" : "border-purple-700/50"
                    } rounded-lg font-medium  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 transition-all`}
                    type="text"
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 ml-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="text-gray-200 text-sm font-medium mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-1 sm:px-4 py-3 bg-gray-800/50 border ${
                      errors.message ? "border-red-500/70" : "border-purple-700/50"
                    } rounded-lg font-medium text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 transition-all`}
                    placeholder="How can I help you?"
                    rows="5"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 ml-1">{errors.message}</p>
                  )}
                </div>

                <button
                  className={`w-full py-4 px-6 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:transform-none`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-black rounded-full animate-spin mr-2"></div>
                      Please Wait...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;