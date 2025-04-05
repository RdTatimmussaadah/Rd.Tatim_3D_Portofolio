import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = ()=>{
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange =({target: {name, value}})=>{
        setForm({...form, [name]:value})
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();

        setLoading(true);

        try{
            await emailjs.send(
                'service_io61r9i', 
                'template_0wkoskm',
                {
                    from_name: form.name,
                    to_name: 'Rd. Tatimmussaadah',
                    from_email: form.email,
                    to_email: 'timitati@upi.edu',
                    message: form.message
                },
                'JFTf2mVuFFb1IgzOi'
            )
            setLoading(false);
            alert('Your message was successfully sent')

            setForm({
                name: '',
                email: '',
                message: ''
            });
        }catch(error){
            setLoading(false);
            console.log(error);
            
            alert('Error')

        }

    }

    return(
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <div className="contact-container">
                    <h3 className="head-text"> Contact Me</h3>
                    
                    <p className="text-lg text-white-600 mt-3">
                        Looking to get in touch? Feel free to reach out anytime! Whether you have a question, a collaboration idea, or just want to say hello, I would love to hear from you. Drop me a message, and I will get back to you as soon as possible!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="ex., Timmi Tatim"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., timitati@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hello..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>

                </div>
            </div>
            
        </section>
    )
}

export default Contact;