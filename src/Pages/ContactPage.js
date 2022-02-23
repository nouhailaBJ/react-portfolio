import React from 'react'
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import ContactItem from '../components/ContactItem';
import Title from '../components/Title';

function Contact() {
  return (
    <div>
      <Title title="Contact Me" span="Contact Me" />
      <div className='ContactPage'>
        <div className='map-sect'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.4142105043497!2d-7.941978083651116!3d32.220011819481314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaf7bbf027baf2b%3A0xc978dadf976d1923!2s%C3%89cole%201337!5e0!3m2!1sen!2sma!4v1645032810908!5m2!1sen!2sma" width="600" height="450"allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div className='contact-sect'>
            <ContactItem icon={phone} text1={'+212 601393608'} text2={''} title={'Phone'}/>
            <ContactItem icon={email} text1={'bjaghoun@gmail.com'} text2={'nbjaghou@student.1337.ma'} title={'Email'} />
            <ContactItem icon={location} text1={''} text2={'fes, Morroco'} title={'Location'} />
        </div>
      </div>
    </div>
  )
}

export default Contact