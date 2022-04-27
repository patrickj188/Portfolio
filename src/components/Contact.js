import React from 'react'
import { Container, Center, Text, Divider } from '@mantine/core';
import '../components/style/contact.css'

const Contact = () => {
    return (

        <div>
            <div className='contactPage'>
            <h2 class="pageHeader">Contact Details</h2>
                <div className='address'>
                    <h4 className='addressTitle'>name</h4>
                    <p className='addressInfo'>Patrick Johnson</p>
                    <br />
                    <h4 className='addressTitle'>Phone</h4>
                    <p className='addressInfo'>702.428.5828</p>
                    <br />
                    <h4 className='addressTitle'>Email</h4>
                    <p className='addressInfo'>patrickj188@gmail.com</p>
                    <br />

                </div>
            </div >

        </div>
    )
}

export default Contact; 