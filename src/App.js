// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Button from './components/Button';
// import Footer from './components/Footer';
// import './App.css';

// const App = () => {
//     return (
//         <div className='App'>
//             <Navbar />
//             <Hero />
//             <Button   label="Learn More" onClick={() => alert('Button Clicked')} />
//             <Footer />
//         </div>
//     );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Button from './components/Button';
import Footer from './components/Footer';
import Card from './components/Card';
import Modal from './components/Modal';
import Form from './components/Form';
// import Profile from './components/profile';
import heroImage from './image/profile.jpg';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className='app'>
            <Navbar />
            <Hero image={heroImage} />
            <div className='button1'>
            <Button   label="Open Modal" onClick={toggleModal} />
            </div>
            <div  className="form-card">
            <Card 
                title="Sample Card" 
                description="This is a sample card component."
                image={heroImage} 
            />
             <Form />
             </div>
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <h2>Modal Title</h2>
                <p>This is a modal content</p>
                
            </Modal>
           
            <Footer />
           
        </div>
    );
}

export default App;
