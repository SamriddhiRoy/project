import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VideoPage = () => {
  return (
    <div>
      <Head>
        <title>Video Page</title>
      </Head>

      <Header />

      <section className="bg-black h-screen flex items-center justify-center relative">
      
        <div className="video-container">
          <video className="video" width="90%" height="70%" autoPlay loop>
            <source src="sampleo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mute-button">
          <button onClick={() => alert('Mute button clicked')}>Mute</button>
        </div>
      </section>

      <section className="slider-section bg-black text-white">
        <div className="text-slider">
          <p>
            Slide 1: Your first slide text goes here. Customize as needed.
          </p>
          <p>
            Slide 2: Add more words to create an auto-slider with a fast
            sliding effect.
          </p>
          <p>Slide 3: Customize the content for each slide.</p>
          
        </div>
      </section>

      <section className="three-boxes-section bg-black h-500 flex justify-around items-center">
        <div className="white-border70 box1">
          <p>Short Film</p>
         
        </div>

     
        <div className="white-border40 box2">
          <p className="vertical-text">Your</p>
        </div>
        <div className="white-border70 box3">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
         
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoPage;








