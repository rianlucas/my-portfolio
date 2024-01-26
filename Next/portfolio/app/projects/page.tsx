import FaqSection from '../Components/aboutMe/FaqSection'
import SideBarAboutMe from '../Components/aboutMe/SidebarAboutMe'
import ProjectOptionsFilter from '../Components/projects/ProjectsOptionsFilter'
import ProjectCard from '../Components/projects/ProjectCard'
import Rectangle from '../assets/Rectangle 42.png'

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
      <div className='grid overflow-y-auto'>
        <div className='flex justify-between py-2 mx-8 font-fira-code'>
          <ProjectCard
            name='project test'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            image={Rectangle}
            number='1'
          />

          <ProjectCard
            name='project test'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            image={Rectangle}
            number='1'
          />

          <ProjectCard
            name='project test'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            image={Rectangle}
            number='1'
          />
        </div>

        <div className='flex justify-between py-2 mx-8 font-fira-code'>
          <ProjectCard
            name='project test'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            image={Rectangle}
            number='1'
          />

          <ProjectCard
            name='project test'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            image={Rectangle}
            number='1'
          />

          <ProjectCard
            name='project test'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            image={Rectangle}
            number='1'
          />
        </div>
      </div>

    </div>
  )
}