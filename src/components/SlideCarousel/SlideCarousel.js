export default function SlideCarousel ({img}){
  return (
    <div className="slide-carousel">
        <img src={img} alt={"Slide " + img} className='slide-carousel__image'/>
        <span className="slide-carousel__caption">01 / 05</span>
    </div>
  );
}
