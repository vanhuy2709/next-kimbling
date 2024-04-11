import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
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
    // color: 'blue',
  },
  {
    id: 2,
    name: 'instagram',
    icon: faInstagram,
    color: '#FFC0CB',
    // color: 'pink',
  },
  {
    id: 3,
    name: 'gmail',
    icon: faEnvelope,
    color: '#FF0000',
    // color: 'red',
  },
  {
    id: 4,
    name: 'tiktok',
    icon: faTiktok,
    color: '#800080',
    // color: 'purple',
  },
]