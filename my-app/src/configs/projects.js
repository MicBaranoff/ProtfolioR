const { REACT_APP_BASE_PATH } = process.env;

export default [
  {
    id: 'unilex',
    title: 'Unilex',
    text: 'Project Unilex, developed in 2021, HTML/CSS/JS used',
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
    text: 'Project KNSKA, developed in 2021, HTML/CSS/JS used',
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
