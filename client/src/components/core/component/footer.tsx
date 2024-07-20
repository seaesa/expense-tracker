import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const contentFooter = [
  {
    title: 'Solutions',
    child: [
      {
        name: 'Marketing',
        link: '/'
      },
      {
        name: 'Analytic',
        link: '/'
      },
      {
        name: 'eCommerce',
        link: '/'
      },
      {
        name: 'Insights',
        link: '/'
      },
    ]
  },
  {
    title: 'Solutions',
    child: [
      {
        name: 'Marketing',
        link: '/'
      },
      {
        name: 'Analytic',
        link: '/'
      },
      {
        name: 'eCommerce',
        link: '/'
      },
      {
        name: 'Insights',
        link: '/'
      },
    ]
  },
  {
    title: 'Solutions',
    child: [
      {
        name: 'Marketing',
        link: '/'
      },
      {
        name: 'Analytic',
        link: '/'
      },
      {
        name: 'eCommerce',
        link: '/'
      },
      {
        name: 'Insights',
        link: '/'
      },
    ]
  },
]
type ChildContentProps = {
  name: string,
  link: string
}
type ContentProps = {
  title: string,
  child: ChildContentProps[]
}
export default function Footer() {
  return (
    <>
      <div className='flex justify-between'>
        <div>
          <img src="/logo.png" alt="" />
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <div className='flex'>
          {contentFooter.map((content: ContentProps) => (
            <div key={Math.random()}>
              <span>{content.title}</span>
              <div className='flex flex-col'>
                {content.child.map((child: ChildContentProps) => (
                  <Link key={Math.random()} to={child.link}>{child.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}