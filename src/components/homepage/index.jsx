import React from 'react';
import style from './style.module.scss';
import sendEmail from '../../utils/sendEmail';

import bannerImage from '../../assets/boarder.png';
import icon1 from '../../assets/mt-2197-icon1.png';
import icon2 from '../../assets/mt-2197-icon2.png';
import image1 from '../../assets/tail_grab.png';
import image2 from '../../assets/drop.JPG';
import image3 from '../../assets/indy.jpg';
import image4 from '../../assets/mute.jpg';
import phone from '../../assets/phone-call-icon.svg';
import mail from '../../assets/mail-icon.svg';
import Button from '../button';

const Homepage = () => {
    const ref = React.useRef(null);
    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [number, setNumber] = React.useState(null);
    const [comment, setComment] = React.useState(null);
    const [send, setSend] = React.useState(null);
    const [sending, setSending] = React.useState(false);

    const validateSubmit = async () => {
        setSending(true);
        if (name, email, number) {
            const sendData = {
                name,
                email,
                comment,
                number
            }

            sendEmail(sendData).then(() => {
                setSending(false);
                setSend(true);
            }).catch(() => {
                setSending(false);
                setSend(false);
            });
        } else {
            setSending(false);
            setSend(false);
        }
    };

    return (
        <div className={style.homepage}>
            <div className={style.homepage_banner}>
                <img src={bannerImage} />
                <div>
                    <span>Snowboard sezona još traje, iskoristi priliku i nauči bordati na Sljemenu!</span>
                    <Button onClick={() => ref.current?.scrollIntoView({behavior: 'smooth'})} sending={sending} />
                </div>
            </div>
            <div className={style.homepage_content}>
                <h2>Što nudimo</h2>
                <p>Grupne i individualne tečajeve snowboarda koje vode iskusni licencirani učitelji snowboarda. Radimo s djecom i odraslima. <br/>Grupne škole: radimo u malim grupama od 3 - 4 osobe po učitelju. Trajanje škole je 8 sati (2 dana x 4 sata). Najam opreme (daske, vezova i buca) je uključen u cijenu.<br/>Individualna poduka: fleksibilni termini i rad 1 na 1 u trajanju od 2-3 sata po danu.</p>
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
                        dva dana, nešto truda i dobre volje. Zato iskoristi priliku i dođi na Sljeme, diši čisti planinski zrak i nauči se spuštati niz
                        padinu.</p>
                    </div>
                </div>
                <div className={style.homepage_wrapper}>
                    <div className={style.homepage_wrapper_image}>
                        <img src={image2} />
                    </div>
                    <div className={style.homepage_wrapper_image}>
                        <img src={image3} />
                        <img src={image4} />
                    </div>
                </div>
            </div>
            {send !== true && send !== false &&<div ref={ref} className={style.contact}>
                <h2>Dvodnevna grupna škola snowboarda</h2>
                <span>Po osobi <b>85 eura</b></span>
                <h2>Individualna škola snowboarda</h2>
                <span><b>20 eura</b> / sat, dodatno najam opreme</span>
                <p>
                    Kontaktiraj nas za dogovore termina ili dodatne informacije!
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
                <Button onClick={() => validateSubmit()} sending={sending} />
            </div>}
            {(send === true || send === false) && <div className={style.modal}>
                <h3>{send ? 'Hvala Vam na interesu.' : 'Oooooops!'}</h3>
                <p>{send ? 'Vaš zahtjev je poslan. Kontaktirati ćemo Vas u najkraćem mogućem roku.' : 'Nešto je pošlo po krivu. Molim Vas kontaktirajte nas direktno ili pokušajte ponovno.'}</p>
            </div>}
            <div className={style.footer}>
                <div>
                    <a data-action="call" href="tel:+385912711115">
                        <img src={phone} />
                    </a>
                    <a href="mailto:kreso77@gmail.com?subject=Snowboard tečaj" target="_top">
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