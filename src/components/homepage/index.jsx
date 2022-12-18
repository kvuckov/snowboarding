import React from 'react';
import style from './style.module.scss';

import bannerImage from '../../assets/boarder.png';
import icon1 from '../../assets/mt-2197-icon1.png';
import icon2 from '../../assets/mt-2197-icon2.png';
import image1 from '../../assets/tail_grab.png';
import image2 from '../../assets/drop.JPG';
import image3 from '../../assets/indy.jpg';
import image4 from '../../assets/mute.jpg';
import image5 from '../../assets/tail_grab.jpg';
import phone from '../../assets/phone-call-icon.svg';
import mail from '../../assets/mail-icon.svg';
import Button from '../button';

const Homepage = () => {
    const ref = React.useRef(null);
    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [number, setNumber] = React.useState(null);
    const [comment, setComment] = React.useState(null);

    return (
        <div className={style.homepage}>
            <div className={style.homepage_banner}>
                <img src={bannerImage} />
                <div>
                    <span>Ubodi priliku i nauči bordati ove zime na Sljemenu!</span>
                    <Button onClick={() => ref.current?.scrollIntoView({behavior: 'smooth'})} />
                </div>
            </div>
            <div className={style.homepage_content}>
                <h2>Što nudimo</h2>
                <p>Škole vode iskusni licencirani učitelji snowboarda u malim grupama od <b>3 - 4 osobe</b> po učitelju. Radimo i sa djecom i sa odraslima. <br/>Trajanje škole je <b>8 sati</b> (2 dana x 4 sata).<br/><b>Najam opreme</b> (daske, vezova i buca) je <b>uključen u cijenu</b>.</p>
                <div className={style.homepage_items}>
                    <div>
                        <img src={icon1}/>
                        <h3>Individualne poduke</h3>
                    </div>
                    <div>
                        <img src={icon2}/>
                        <h3>Grupne lekcije</h3>
                    </div>
                </div>
            </div>
            <div className={style.homepage_description}>
                <div className={style.homepage_description_box}>
                    <img src={image1} />
                    <div>
                        <h2>Ne propustite nove avanture</h2>
                        <p>Bordanje pruža adrenalinski osjećaj brzine i slobode kretanja po snijegu, a sve što ti treba da savladaš osnove su
                        dva dana, nešto truda i dobre volje. Zato ubodi priliku i dođi na Sljeme, diši čisti planinski zrak i nauči se spuštati niz
                        padinu.</p>
                    </div>
                </div>
                <div className={style.homepage_wrapper}>
                    <div className={style.homepage_wrapper_image}>
                        <img src={image2} />
                        <img src={image4} />
                    </div>
                    <div className={style.homepage_wrapper_image}>
                        <img src={image3} />
                        <img src={image5} />
                    </div>
                </div>
            </div>
            <div ref={ref} className={style.contact}>
                <h2>Dvodnevna škola snowboarda</h2>
                <span>Po osobi <b>600 kuna / 80 eura</b></span>
                <p>
                    Prijavi se već danas u grupu od 3 - 4 osobe sa potpunom snowboard opremom uključenom u cijenu i dođi naučiti bordati na Sljemenu!
                    Trajanje škole je 8 sati (2 dana x 4 sata).
                    Mogućnost dogovaranja individualne poduke za početnike i naprednije.
                    Kontaktiraj nas za dogovore o terminima ili dodatne informacije!
                </p>
                <div className={[style.custom_input, name ? '' : style.empty].join(' ')}>
                    <input type="text" placeholder='Ime i Prezime*' onChange={event => setName(event.target.value)}/>
                    <span>Field is required</span>
                </div>
                <div className={[style.custom_input, email ? '' : style.empty].join(' ')}>
                    <input type="text" placeholder='Email*' onChange={event => setEmail(event.target.value)}/>
                    <span>Field is required</span>
                </div>
                <div className={[style.custom_input, number ? '' : style.empty].join(' ')}>
                    <input type="number" placeholder='Mobitel*' onChange={event => setNumber(event.target.value)}/>
                    <span>Field is required</span>
                </div>
                <div className={style.custom_input}>
                    <textarea placeholder='Pitanja / Komentari' onChange={event => setComment(event.target.value)}/>
                </div>
                <Button />
            </div>
            <div className={style.footer}>
                <div>
                    <a data-action="call" href="tel:+385912711115">
                        <img src={phone} />
                    </a>
                    <a href="mailto:kreso@maestral-kitesurfing.com?subject=Snowboard tečaj" target="_top">
                        <img src={mail} />
                    </a>
                </div>
                <div className={style.footer_copy}>Copyright © 2023. All Rights Reserved.</div>
            </div>
            <a data-action="call" href="tel:+385912711115">
                <div className={style.phone}>
                    <img src={phone} />
                </div>
            </a>
        </div>
    );
};

export default Homepage;