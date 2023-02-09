import {Folder, GitFork, Star} from 'phosphor-react'
import "./styles.scss"

interface ProjectsProps {
  name: string
  description: string
  starts: number
  forks: number
  language: string
}


export function Project ({
  name,
  description,
  starts,
  forks,
  language,
}: ProjectsProps) {

  return (
    <div className="container-projects">
      <div className="header-projects">
        <Folder size= {18}/>
        <span>{name}</span>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
      <div className="fonter-projects">
        <div className="starts-fonts">
          <div className="starts">
            <Star size={18}/>
            <p>{starts}</p>
          </div>
          <div className="forks">
            <GitFork size={18}/>

            <p>{forks}</p>
          </div>
        </div>
        <div className="tool">
          <div className="ball"> </div>

            <p>{language}</p>
          </div>
        </div>
      </div>
  )
}
