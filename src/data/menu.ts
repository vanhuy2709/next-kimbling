import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface IMenu {
  id: number,
  path: string,
  name: string
}
interface ISocial {
  id: number,
  name: string,
  icon: any,
  color: string,
  desc: string;
  path: string;
}

export const menu: IMenu[] = [
  {
    id: 1,
    path: '/',
    name: 'Home'
  },
  {
    id: 2,
    path: '/about',
    name: 'About'
  },
  {
    id: 3,
    path: '/project',
    name: 'Project'
  },
]

export const social: ISocial[] = [
  {
    id: 1,
    name: 'facebook',
    icon: faFacebook,
    color: '#0000FF',
    desc: 'Facebook',
    path: 'https://www.facebook.com/kimtuyenyooo'
  },
  {
    id: 2,
    name: 'instagram',
    icon: faInstagram,
    color: '#FFC0CB',
    desc: 'Instagram',
    path: 'https://www.instagram.com/kim.blingg',
  },
  {
    id: 3,
    name: 'tiktok',
    icon: faTiktok,
    color: '#800080',
    desc: 'Tiktok',
    path: 'https://www.tiktok.com/@kimtuyenkimblingg'
  },
  {
    id: 4,
    name: 'gmail',
    icon: faEnvelope,
    color: '#FF0000',
    desc: 'kimtuyennguyenthi.vn@gmail.com',
    path: 'mailto:kimtuyennguyenthi.vn@gmail.com',
  },
  {
    id: 5,
    name: 'phone',
    icon: faPhone,
    color: 'red',
    desc: '(+84) 962 419 949',
    path: 'https://www.facebook.com/kimtuyenyooo'
  },
]