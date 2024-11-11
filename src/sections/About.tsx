import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';

const techStackItems = [
  {
    title: 'JavaScript',
    icon: <JavascriptIcon />,
  },
  {
    title: 'HTML5',
    icon: <HTMLIcon />,
  },
  {
    title: 'CSS3',
    icon: <CssIcon />,
  },
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'Chrome',
    icon: <ChromeIcon />,
  },
  {
    title: 'Github',
    icon: <GithubIcon />,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me"
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="Book Cover" />
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>My Tech Stack</h3>
            <p>View my tech stack for building modern web experiences.</p>
          </div>
          <div>
            {techStackItems.map((item) => (
              <div key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
