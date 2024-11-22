import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  { title: 'Github', href: '#' },
  { title: 'LinkedIn', href: '#' },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <div>&copy; 2024. All rights reserved.</div>
          <nav>
            {footerLinks.map((link) => (
              <a href="#" key={link.title}>
                <span>{link.title}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
