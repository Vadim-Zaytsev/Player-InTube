import { Video } from '../class-video/class.video.mjs';

//playlist JS Way of the Samurai

const JavaScriptZero = new Video(
    'assets/videos/JavaScript[0]_-_Путь_Самурая,_о_курсе._НОВЫЙ_БЕСПЛАТНЫЙ_КУРС_IT-KAMASUTRA.mp4',
    'assets/images/posters/hqdefault.jpg',
    'JavaScript[0] - Путь Самурая, о курсе. НОВЫЙ БЕСПЛАТНЫЙ КУРС IT-KAMASUTRA',
    'it-kamasutra',
    '17.06.2023'
);

const JavaScriptOne = new Video(
    'assets/videos/JavaScript[1]_-_Путь_Самурая,_Что_такое_программа,_UI,_данные._НОВЫЙ_БЕСПЛАТНЫЙ_КУРС_IT-KAMASUTRA.mp4',
    'assets/images/posters/hqdefault[1].jpg',
    'JavaScript[1] - Путь Самурая, Что такое программа, UI, данные. НОВЫЙ БЕСПЛАТНЫЙ КУРС IT-KAMASUTRA',
    'it-kamasutra',
    '20.06.2023'
);

const JavaScriptTwo = new Video(
    'assets/videos/JavaScript[2]_-_Путь_Самурая,_Браузер,_первая_программа,_тренажёр_изучения_иностранного_языка.mp4',
    'assets/images/posters/hqdefault[2].jpg',
    'JavaScript[1] - Путь Самурая, Что такое программа, UI, данные. НОВЫЙ БЕСПЛАТНЫЙ КУРС IT-KAMASUTRA',
    'it-kamasutra',
    '20.06.2023'
);

export const videosArr = [JavaScriptZero, JavaScriptOne, JavaScriptTwo];

// playlist Back-End Way of the Samurai

const BackEndOne = new Video(
    'assets/videos/01_-_Введение_Back-end_-_Путь_Самурая.mp4',
    'assets/images/posters/hqdefaultBack[1].jpg',
    '01 - Введение Back-end - Путь Самурая',
    'it-kamasutra',
    '27.01.2022'
);

const BackEndTwo = new Video(
    'assets/videos/02_-_front-end_vs_back-end,_что_выбрать_Back-end_-_Путь_Самурая.mp4',
    'assets/images/posters/hqdefaultBack[2].jpg',
    '02 - front-end vs back-end, что выбрать Back-end - Путь Самурая',
    'it-kamasutra',
    '03.02.2022'
);

const BackEndThree = new Video(
    'assets/videos/03_-_HTTP_Back-end_-_Путь_Самурая_Как_стать_программистом.mp4',
    'assets/images/posters/hqdefaultBack[3].jpg',
    '03 - HTTP Back-end - Путь Самурая Как стать программистом',
    'it-kamasutra',
    '10.02.2022'
);

export const videosArrBack = [BackEndOne, BackEndTwo, BackEndThree];
