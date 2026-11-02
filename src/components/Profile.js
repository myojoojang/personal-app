import { about, skillIcons, skillLines } from '../data/profile';

export default function Profile() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 box">
          <div className="border-bt semi-title">
            <div className="p-4">
              <div>Hi, I'm MJ.</div>
              I design &amp; build digital products.
            </div>
          </div>

          <div>
            <div className="bold border-bt">
              <span className="mx-4">
                <i className="fas fa-angle-right bold"></i>ABOUT
              </span>
            </div>
            <div className="p-4 capitalize">
              <div>{about}</div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 box p-0 mt-2 my-lg-0">
          <div className="p-4 border-bt">
            <div className="text-right p-2 bold black-box text-gray">
              <i className="fas fa-angle-right bold"></i>SKILL-SET
            </div>
            <div className="semi-title d-flex justify-content-around my-3">
              {skillIcons.map((icon) => (
                <i key={icon} className={icon}></i>
              ))}
            </div>
            <div className="stack">
              {skillLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>

          <div className="text-center scroll-cue">
            <a href="#scroll-to" aria-label="Scroll to works">
              <i className="fas fa-angle-double-down bold"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
