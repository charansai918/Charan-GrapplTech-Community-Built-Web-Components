// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//     return (
//         <section className="hero">
//             <div className="hero-content">
//                 <h1>Welcome to Our Community</h1>
//                 <p>Join us and explore amazing features.</p>
//                 <button className="hero-button" onClick={() => alert('start')} >Get Started</button>
//             </div>
//         </section>
        

//     );
// }

// export default Hero;

import React from 'react';
import './Hero.css';
import heroImage from '../image/community.jpg';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-content">
                <h1>Welcome to Our Community</h1>
                <p>Join us and explore amazing features.</p>
                <button className="hero-button">Get Started</button>
            </div>
        </section>
    );
}

export default Hero;

