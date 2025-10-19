import './styles/main.scss';
import { useEffect } from "react";
import IntroductionCard from './views/IntroductionCard/IntroductionCard';
import ProfileOverview from './views/ProfileOverview/ProfileOverview';
import AboutCard from './views/AboutCard/AboutCard';
import Carousel from './views/Carousel/Carousel';
import TwoPhotoCard from './views/TwoPhotoCard/TwoPhotoCard';
import ContentCarousel from './views/ContentCarousel/ContentCarousel';
import LeftAlignedImageText from './views/LeftAlignedImageText/LeftAlignedImageText';
import RightAlignedImageText from './views/RightAlignedImageText/RightAlignedImageText';
import ShopCollection from './views/ShopCollection/ShopCollection';
import ScrollReveal from "scrollreveal";



function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollReveal().reveal('.introduction-card', { 
        duration: 2500,
        distance: '400px',
        origin: 'left',
        easing: 'ease-in-out',
        reset: true
    });

     ScrollReveal().reveal('.profile-overview', { 
        duration: 1000,
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.about-card', { 
        duration: 2500,
        distance: '400px',
        origin: 'right',
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.two-photo-card', { 
        duration: 1000,
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.left-aligned-image-text', { 
        duration: 1500,
        distance: '400px',
        origin: 'right',
        easing: 'ease-in-out',
        reset: true
    });

    ScrollReveal().reveal('.right-aligned-image-text', { 
        duration: 1500,
        distance: '400px',
        origin: 'left',
        easing: 'ease-in-out',
        reset: true
    });
  }, []);

  return (
    <div className="App">
      <IntroductionCard/>
      <ProfileOverview/>
      <AboutCard/>
      <Carousel/>
      <TwoPhotoCard/>
      <ContentCarousel/>
      <LeftAlignedImageText/>
      <RightAlignedImageText/>
      <ShopCollection/>
    </div>
  );
}

export default App;
