import React  from "react";
import styled from 'styled-components';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";
import * as partners from "../../images/partners";
import * as  partnersGray from "../../images/partners/gray"
const ContainerStyle = styled.div`
  .hero-container{
    position: relative;
    width: 100%;
    
  }
  .mouse-scroll{
    position: relative;
    animation: MoveUpDown 1s linear infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }
  span{
    color: #02D4E4;
  }
  h2{
  font-weight: bold;
  font-size: 30px;
  line-height: 58px;
  letter-spacing: 0.25px;
  }
  .hero-maciphone{
    position: relative;
    right: 0;
  }
  .swiper-logos{
    display: flex;
    width: 100%;
    background: white;
    box-shadow: rgb(236 236 236) 4px 10px 20px;
    padding: 10px 50px;
  }
  p{
  color: #8E98AE;
    font-size: 22px;
  }
  .trusted-container{
    z-index: 100;
    position: relative;
    background-color: white;
    box-shadow: 4px 10px 20px rgba(107, 134, 204, 0.09);
  }
  .trusted-title{
    padding: 100px;
  }
  .hero-logo-wrapper{
    box-shadow: rgb(236 236 236) 4px 10px 20px;
  }
  .brands{
    width: 100%;
  }
  ul{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style-type: none;
  }
  li:hover{
    border: 10px;
  }
  .main-banner{
    margin-top: 100px;
  }
  .swiper-wrapper{
    background-color: white;
    box-shadow: rgb(236 236 236) 4px 10px 20px;
    
  }
  .swiper-slide{
    padding: 10px 50px;
    z-index: 10;
    object-fit: contain;
    
  }
  .hero-title{
   img{
     width: 100%;
     object-fit: contain;
   }
  }
  .brandLogo {
    width: 100px;
    height: 50px;
    object-fit: contain;
    background-color: white;

  }
`;
const {
    amway,
    babyworld,
    baigal,
    best,
    coinhub,
    cybercom,
    erdenetMall,
    gobikhangau,
    lux,
    nature,
    noyonpizza,
    pcmall,
    rising,
    shoez,
    simple,
    summit,
    take,
    tavannuden,
    ubpassport,
    urban,
    voloshina,
    wellbee,
    zuwzvi,
    auto24,
    amazonoos,
    americanelectronics,
    autoparts,
    ayanchin,
    btf,
    carters,
    comf,
    converse,
    apteka,
    dell,
    ebazaar,
    eruulmaa,
    flower,
    gerplace,
    goyol,
    grocery,
    homeshopping,
    inktop,
    itstore,
    joinme,
    mana,
    metroexpress,
    michelamazonka,
    mild,
    next,
    oeo,
    panda,
    playtime,
    premiumTaste,
    roseshop,
    sarlag,
    shoppy,
    smartstore,
    tanpopo,
    technozone,
    vista,
    xanadu,
} = partners;

const images = [
    { url: 'https://ammay.mn/', src: amway, srcGray: partnersGray.amway },
    { url: 'https://babyworld.mn/', src: babyworld, srcGray: partnersGray.babyworld },
    { url: 'https://baigalhouse.com/', src: baigal, srcGray: partnersGray.baigal },
    { url: 'https://bestelectronics.mn/', src: best, srcGray: partnersGray.best },
    { url: 'https://www.coinhub.mn/', src: coinhub, srcGray: partnersGray.coinhub },
    { url: 'https://cybercom.mn/', src: cybercom, srcGray: partnersGray.cybercom },
    { url: 'https://erdenetmall.mn/', src: erdenetMall, srcGray: partnersGray.erdenetMall },
    { url: 'https://homemall.mn', src: gobikhangau, srcGray: partnersGray.gobikhangau },
    { url: 'https://shoppylux.mn', src: lux, srcGray: partnersGray.lux },
    { url: 'https://naturerepublic.mn/', src: nature, srcGray: partnersGray.nature },
    { url: 'https://noyonpizza.mn/', src: noyonpizza, srcGray: partnersGray.noyonpizza },
    { url: 'https://pc-mall.mn/', src: pcmall, srcGray: partnersGray.pcmall },
    { url: 'https://cody..mn/', src: rising, srcGray: partnersGray.rising },
    { url: 'https://simple.mn', src: simple, srcGray: partnersGray.simple },
    { url: 'https://take.mn/', src: take, srcGray: partnersGray.take },
    { url: 'https://tavannuden.com/', src: tavannuden, srcGray: partnersGray.tavannuden },
    { url: 'https://ubpassport.mn/', src: ubpassport, srcGray: partnersGray.ubpassport },
    { url: 'https://urbanshop.mn/', src: urban, srcGray: partnersGray.urban },
    { url: 'https://angelinavoloshina.mn/', src: voloshina, srcGray: partnersGray.voloshina },
    { url: 'https://eshop.wellbee.mn/', src: wellbee, srcGray: partnersGray.wellbee },
    { url: 'https://premiumtaste.mn/', src: premiumTaste, srcGray: partnersGray.premiumTaste },
    { url: 'https://zuvzui.com/', src: zuwzvi, srcGray: partnersGray.zuwzvi },
    { url: 'https://shoez.mn/', src: shoez, srcGray: partnersGray.shoez },
    { url: 'https://summit.mn', src: summit, srcGray: partnersGray.summit },
    { url: 'https://24auto.mn', src: auto24, srcGray: partnersGray.auto24 },
    { url: 'https://amazonoos.com', src: amazonoos, srcGray: partnersGray.amazonoos },
    { url: 'https://amex.mn', src: americanelectronics, srcGray: partnersGray.americanelectronics },
    { url: 'https://autoparts.mn', src: autoparts, srcGray: partnersGray.autoparts },
    { url: 'https://ayanchin.mn', src: ayanchin, srcGray: partnersGray.ayanchin },
    { url: 'https://btf.mn', src: btf, srcGray: partnersGray.btf },
    { url: 'https://carters.mn', src: carters, srcGray: partnersGray.carters },
    { url: 'https://comf.mn', src: comf, srcGray: partnersGray.comf },
    { url: 'https://converse.mn', src: converse, srcGray: partnersGray.converse },
    { url: 'https://apteka.mn/', src: apteka, srcGray: partnersGray.apteka },
    { url: 'https://dellcenter.mn', src: dell, srcGray: partnersGray.dell },
    { url: 'https://ebazaar.mn', src: ebazaar, srcGray: partnersGray.ebazaar },
    { url: 'https://eruulmaa.mn/', src: eruulmaa, srcGray: partnersGray.eruulmaa },
    { url: 'https://flower.mn', src: flower, srcGray: partnersGray.flower },
    { url: 'https://gerplace.mn', src: gerplace, srcGray: partnersGray.gerplace },
    { url: 'https://goyol.mn/', src: goyol, srcGray: partnersGray.goyol },
    { url: 'https://grocery.shoppy.mn', src: grocery, srcGray: partnersGray.grocery },
    { url: 'https://homeshopping.mn', src: homeshopping, srcGray: partnersGray.homeshopping },
    { url: 'https://inktop.mn', src: inktop, srcGray: partnersGray.inktop },
    { url: 'https://itstore.mn', src: itstore, srcGray: partnersGray.itstore },
    { url: 'https://joinme.mn', src: joinme, srcGray: partnersGray.joinme },
    { url: 'https://mana.mn/', src: mana, srcGray: partnersGray.mana },
    { url: 'https://metro-express.mn', src: metroexpress, srcGray: partnersGray.metroexpress },
    { url: 'https://michelamazonka.com', src: michelamazonka, srcGray: partnersGray.michelamazonka },
    { url: 'https://mild.mn', src: mild, srcGray: partnersGray.mild },
    { url: 'https://next.mn', src: next, srcGray: partnersGray.next },
    { url: 'https://oeo.mn', src: oeo, srcGray: partnersGray.oeo },
    { url: 'https://panda.mn/', src: panda, srcGray: partnersGray.panda },
    { url: 'https://playtime.mn', src: playtime, srcGray: partnersGray.playtime },
    { url: 'https://roseshop.mn', src: roseshop, srcGray: partnersGray.roseshop },
    { url: 'https://sarlagleather.com', src: sarlag, srcGray: partnersGray.sarlag },
    { url: 'https://shoppy.mn', src: shoppy, srcGray: partnersGray.shoppy },
    { url: 'https://smartstore.mn', src: smartstore, srcGray: partnersGray.smartstore },
    { url: 'https://tanpopo.mn', src: tanpopo, srcGray: partnersGray.tanpopo },
    { url: 'https://technozone.mn', src: technozone, srcGray: partnersGray.technozone },
    { url: 'https://vistastore.mn', src: vista, srcGray: partnersGray.vista },
    { url: 'https://wineshop.mn', src: xanadu, srcGray: partnersGray.xanadu },
];

const SwiperItem = ({item}) => {
    const [hovored, setHovored] = React.useState(false);
    return(
        <a href={item.url} onMouseEnter={()=>setHovored(true)} onMouseLeave={()=>setHovored(false)}>
            <img className="brandLogo" src={hovored? item.src : item.srcGray} alt="" />
        </a>
    )
}

function Hero() {
    SwiperCore.use([Autoplay])
    return (
        <ContainerStyle>
                    <div className="hero-container" >
                        <div className="hero-title" >
                            <Swiper
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 6000 ,disableOnInteraction: false }}>
                                <SwiperSlide><img src="/images/banner1.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/images/banner2.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
<div className="hero-logo-wrapper">
            <Swiper
                slidesPerView={12}
                // autoplay={{ delay: 3000 ,disableOnInteraction: false }}
                loop={true}
                loopPreventsSlide={false}
                spaceBetween={0}
                breakpoints={{
                "640": {
                    "slidesPerView": 4,
                    "spaceBetween": 0
                },
                "768": {
                    "slidesPerView": 6,
                    "spaceBetween": 0
                },
                "1024": {
                        "slidesPerView": 8,
                        "spaceBetween": 0
                    }}}
                    >
                {images.map((c,idx)=>(
                    <SwiperSlide className="hero-logo-container" key={idx}>
                        <SwiperItem className="hero-item" item={c}/>
                    </SwiperSlide>
                ))}
            </Swiper>
</div>
    </ContainerStyle>
    );
}
export default Hero;
