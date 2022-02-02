import { useState } from 'react'
import './ContactMe.css';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className='message-success'>Your message has been successfully sent. I will contact you soon</p>
    )
}

const ContactMe = () => {
    const [result, setResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qubr0x7', 'template_gdakntd', e.target, 'user_izmJTRxqfBC4vWbtdSdu6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        setResult(true)
    }

    return (
        <div id='contact' className='contact-container'>
            <h1>Get In Touch 📧</h1>
            <div className='contact-parent'>
                <div className='my-contact'>
                    <div className='input-box'>
                        <i class="fa fa-phone"></i>
                        <p className='contact-context'> +972 50 9444755</p>
                    </div>
                    <div className='input-box'>
                        <i class="fa fa-envelope"></i>
                        <p className='contact-context'>czauda@gmail.com</p>
                    </div>
                    <div className='input-box'>
                        <i class="fa fa-map-marker"></i>
                        <p className='contact-context'>Kiryat-Gat, Israel</p>
                    </div>
                </div>
                <div className='separated-line'></div>
                <form action="" onSubmit={sendEmail}>
                    <span>Full Name</span>
                    <input className='input-value' type="text" name='fullName' required />

                    <span>Enter Email</span>
                    <input className='input-value' type="text" name='email' required />

                    <span>Message</span>
                    <textarea className='input-message' cols='10' rows='5' placeholder='Your message' type="text" name='message' required />
                    <input className='message-sand' type="submit" value="Send" />

                </form>
            </div>

            {result ? <Result /> : null}

        </div>
    )
}

export default ContactMe
