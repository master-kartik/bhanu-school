const LandingSection = () => {
  return (
    <div className="relative h-[65vw] lg:h-[45vw] mt-[18vw] sm:mt-[10vw] lg:mt-0 w-full overflow-hidden">
      <img
        className="w-full absolute scale-125 top-0 left-0 z-0"
        src="https://www.stirworld.com/images/article_gallery/the-gyaan-centre-jaisalmer-designed-by-diana-kellogg-with-the-citta-organisation-rajkumari-ratnavati-school-and-women-s-center-diana-kellog-architects-stirworld-210125050245_t.jpg"
        alt="Bhanu Public School"
      />
      <div className="absolute top-3/4 md:top-1/4 left-1/4 md:left-1/2 transform font-EditorialNew -translate-x-1/4 md:-translate-x-1/2 -translate-y-1/2 text-2xl md:3xl lg:text-6xl text-[#f9f9f3] z-10 text-left md:text-center  leading-[0.6] lg:leading-[0.50] font-extralight select-none tracking-tight sm:leading-[0.5] w-[80vw] md:[70vw] lg:w-[60vw]">
        Bhanu Public School{" "} <br/><span className="font-Archivo font-thin mt-0 text-lg md:text-2xl tracking-normal text-[#f9f9f3c0]">bridging education</span>
      </div>
    </div>
  );
};

export default LandingSection;
