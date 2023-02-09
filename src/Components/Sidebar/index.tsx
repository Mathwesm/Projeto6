



import {
  Briefcase,
  Envelope,
  GithubLogo,
  Globe,
  LinkedinLogo,
  MapPin,
  TwitterLogo,
} from 'phosphor-react'

import "./styles.scss"

const Technologies = [
  'React.js',
  'HTML',
  'CSS',
  'Github',
  'Javascript',
  'Git',
  'TypeScript',
  'SQL',
  'SCSS',
  'Node.js'
]

const experiences = [
  {
    company: 'Google Inc.',
    start: '2016',
    end: "2023",
    office: 'Desenvolvendo Front-end junior'
  },
  {
    company: 'Ifood.',
    start: '2014',
    end: "2023",
    office: 'Desenvolvendo Front-end junior'
  },
  {
    company: 'Santander.',
    start: '2017',
    end: "2023",
    office: 'Desenvolvendo Front-end junior'
  },
  {
    company: 'HBO.',
    start: '2023',
    end: "2023",
    office: 'Desenvolvendo Front-end junior'
  },
]

const education = [
  {
    company: 'Google.',
    start: '2016',
    end: "2023",
    course: 'WEB sites'
  },
  {
    company: 'Xbox.',
    start: '2014',
    end: "2023",
    course: 'Desenvolvendo Gamer'
  },
  {
    company: 'Santander.',
    start: '2017',
    end: "2023",
    course: 'Analise de Dados'
  },
  {
    company: 'Sony.',
    start: '2023',
    end: "2023",
    course: 'Desenvolvendo Back-end'
  },
]

export function Sidebar() {
  return (
    <div className="container">
      <div className="profile">
        <img
          src="https://avatars.githubusercontent.com/u/123269033?v=4"
          alt="Foto de perfil"
        />
        <div className="text-profile">
          <h1>Matheus De Sousa</h1>
          <p>Desenvolvendo front end</p>
        </div>

     
      </div>
      <div className="links">
        <ul>
        <li>
          <MapPin size={24}/>
          Brasil, São Paulo</li>

        <li>
          <Briefcase size={24}/>
          Home</li>

        <li>
          <GithubLogo size={24}/>
          <a href="" target={'_blank'}>Github</a>
          </li>

        <li>
          <LinkedinLogo size={24}/>
          <a href="" target={'_blank'}>Matheus De Sousa</a>
          </li>

        <li>
          <TwitterLogo size={24} />
          <a href="" target={'_blank'}>Matheus</a>
          </li>

        <li>
          <Globe size={24}/>
          <a href="" target={'_blank'}> Rocketseat.com</a>
         </li>

        <li>
          <Envelope size={24}/>
          Matheusssousaribeiro@gmail.com</li>
        </ul>
      </div>
      <div className="Technologies">
        <h2>Tecnologia</h2>
        
        <div className="Box-technologies">
        {Technologies.map((techology,index) => (
          <div className='technology' key={index}>
            <p>{techology}</p>
          </div>
        )
        )}
        </div>
   
      </div>
      <div className="experience">
          <h2>Experiences</h2>

          {experiences.map((experience,index) => (
            <div key={index} className='experiences'>
              <ul>
                <li>
                  <h3>{experience.company}</h3>
                  <h4>{`${experience.start} - ${experience.end}`}</h4>
                  <p>{experience.office}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="education">
          <h2>Educação</h2>
          {education.map((education, index) =>(
            <div key={index} className='educations'>
              <ul>
                <li>
                  <h3>{education.company}</h3>
                  <h4>{`${education.start} - ${education.end}`}</h4>
                  <p>{education.course}</p>
                </li>
              </ul>
            </div>
          )
          )}
        </div>
    </div>
  );
}
