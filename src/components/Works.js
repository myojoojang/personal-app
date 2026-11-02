import projects from '../data/projects';

function Project({ title, image, liveUrl, repoUrl, stack }) {
  return (
    <div className="row my-4">
      <div className="col-lg-6 box">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={`${process.env.PUBLIC_URL}/img/${image}`}
            className="img-fluid p-1"
            alt={`${title} screenshot`}
            loading="lazy"
          />
        </a>
      </div>

      <div className="col-lg-6 box">
        <div className="border-bt">
          <div className="bold black-box text-gray m-1">{title}</div>
          <div className="bold d-flex">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} live site`}>
              <i className="fas fa-window-maximize"></i>
            </a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} source code`}>
              <i className="fab fa-github-square"></i>
            </a>
          </div>
        </div>

        <div className="p-3 stack">
          {stack.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <div>
      <section id="scroll-to">
        <div className="bold border-bt">
          <span className="mx-2">
            <i className="fas fa-angle-right bold"></i>Works
          </span>
        </div>
      </section>

      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  );
}
