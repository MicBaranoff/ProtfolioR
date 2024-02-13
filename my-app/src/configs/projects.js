const { REACT_APP_BASE_PATH } = process.env;

export default [
  {
    id: 'unilex',
    title: 'Unilex',
    text: '"Unilex" - a website developed in 2021 using HTML, CSS and JavaScript, provides information about'
        + ' the company\'s legal services. This front-end project provides a convenient interface for visitors'
        + ' to learn about the services provided and contact the company',
    link: '/unilex',
    url: 'http://unilex.legal/',
    images: [
      `${REACT_APP_BASE_PATH}static/images/projects/unilex/1.jpg`,
      `${REACT_APP_BASE_PATH}static/images/projects/unilex/2.jpg`,
      `${REACT_APP_BASE_PATH}static/images/projects/unilex/3.jpg`,
    ],
  },
  {
    id: 'knska',
    title: 'KNSKA',
    text: '"KNSKA" - a website developed in 2021 using HTML, CSS and JavaScript, provides information about '
        + 'the company`s PR services. This front-end project provides a user-friendly interface for visitors to'
        + ' explore services, contact the company and get more information.',
    link: '/knska',
    url: 'https://knska.com/',
    images: [
      `${REACT_APP_BASE_PATH}static/images/projects/knska/4.jpg`,
      `${REACT_APP_BASE_PATH}static/images/projects/knska/1.jpg`,
      `${REACT_APP_BASE_PATH}static/images/projects/knska/3.jpg`,
      `${REACT_APP_BASE_PATH}static/images/projects/knska/2.jpg`,
    ],
  },
];
