import FaqSection from '../Components/aboutMe/FaqSection'
import SideBarAboutMe from '../Components/aboutMe/SidebarAboutMe'
import ProjectOptionsFilter from '../Components/projects/ProjectsOptionsFilter'

export default function section() {
  return (
    <div className="h-home flex">
      <SideBarAboutMe>
        <FaqSection name='projects' isOpen>
          <ProjectOptionsFilter 
            icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
            name='PHP'
          />

          <ProjectOptionsFilter 
            icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
            name='Docker'
          />

          <ProjectOptionsFilter 
            icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
            name='MySQL'
          />

          <ProjectOptionsFilter 
            icon='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
            name='C#'
          />
        </FaqSection>
      </SideBarAboutMe>
      
      <div>

      </div>
    </div>
  )
}