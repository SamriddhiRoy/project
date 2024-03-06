import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhotoPage = () => {
  return (
    <div>
      <Head>
        <title>Photo Page</title>
      </Head>

      <Header />

    
      <section className="photo-section bg-black h-screen flex items-center relative">
    
        <div className="square-box">
          <h2 className="box-heading">Photo Title</h2>
          <p className="box-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

    
        <div className="main-content">
          
          <h2>Photo Content Goes Here</h2>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhotoPage;















