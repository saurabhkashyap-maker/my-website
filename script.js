/* -------- GLOBAL STYLES -------- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Playfair Display', serif;
    background: #7b0000; /* Dark red */
    color: #fff;
    overflow-x: hidden;
}

/* Gold text effect */
.gold {
    color: #ffd369;
}

/* -------- LOADER -------- */
#loader {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #7b0000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

#loader img {
    width: 120px;
}

/* -------- MUSIC BUTTON -------- */
#music-control {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 9000;
}

#music-icon {
    width: 48px;
    cursor: pointer;
    filter: drop-shadow(0 0 5px gold);
}

/* -------- HERO SECTION -------- */
#hero {
    height: 100vh;
    background: url("assets/hero-bg.jpg") center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
}

#hero .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
}

#hero .title {
    font-family: "Great Vibes", cursive;
    font-size: 4rem;
    color: #ffd369;
    z-index: 2;
}

#hero span {
    color: #fff;
}

#hero .tagline {
    font-size: 1.3rem;
    margin-top: 10px;
    z-index: 2;
}

#hero .date {
    font-size: 1.5rem;
    margin-top: 6px;
    font-weight: 600;
    color: #ffd369;
    z-index: 2;
}

.scroll-btn {
    margin-top: 30px;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    padding: 10px 18px;
    border: 1px solid #ffd369;
    border-radius: 5px;
    z-index: 2;
    transition: .3s;
}

.scroll-btn:hover {
    background: #ffd369;
    color: #7b0000;
}

/* -------- COUNTDOWN -------- */
#countdown {
    text-align: center;
    padding: 40px 0;
    background: #500000;
}

#countdown h2 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: #ffd369;
}

#timer {
    display: flex;
    justify-content: center;
    gap: 20px;
}

#timer div {
    background: rgba(255, 211, 105, 0.15);
    padding: 15px 20px;
    border-radius: 10px;
    font-size: 1.3rem;
    min-width: 80px;
}

#timer small {
    display: block;
    font-size: 0.8rem;
    opacity: 0.8;
}

/* -------- EVENTS SECTION -------- */
#events {
    padding: 60px 20px;
    text-align: center;
}

.section-title {
    font-size: 2.3rem;
    color: #ffd369;
    margin-bottom: 30px;
}

.event-box {
    background: rgba(255, 211, 105, 0.1);
    border: 1px solid #ffd369;
    padding: 25px;
    margin: 15px auto;
    width: 90%;
    max-width: 550px;
    border-radius: 12px;
}

.event-box h3 {
    font-size: 1.7rem;
    margin-bottom: 10px;
    color: #ffd369;
}

.event-date {
    font-size: 1.2rem;
}

.event-venue {
    margin-top: 6px;
    font-size: 1rem;
    opacity: 0.9;
}

.note {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* -------- PARENTS -------- */
#parents {
    padding: 60px 20px;
    text-align: center;
    background: #500000;
}

#parents h2 {
    font-size: 2rem;
    color: #ffd369;
}

.parents-text {
    font-size: 1.3rem;
    margin-top: 10px;
}

/* -------- RSVP -------- */
#rsvp {
    padding: 60px 20px;
    text-align: center;
}

.rsvp-btn {
    background: #ffd369;
    color: #7b0000;
    padding: 10px 25px;
    font-weight: bold;
    border-radius: 8px;
    text-decoration: none;
    display: inline-block;
    margin-top: 15px;
    transition: .3s;
}

.rsvp-btn:hover {
    background: #fff;
}

/* -------- FOOTER -------- */
footer {
    text-align: center;
    padding: 20px;
    background: #360000;
    color: #ffd369;
    font-size: 1rem;
}
