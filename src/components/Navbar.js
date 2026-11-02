import { socialLinks } from '../data/profile';

export default function Navbar() {
  return (
    <header className="Header">
      <div className="row mx-2 title">
        <div className="col-12 col-md-6 text-left">
          MJ JANG. <span className="bold">Frontend Dev</span>
        </div>

        <div className="semi-title d-flex text-right d-md-block col-md-6 my-auto">
          {socialLinks.map(({ href, icon, label }) => (
            <span key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <i className={icon}></i>
              </a>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
