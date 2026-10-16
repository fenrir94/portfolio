import { Link, Navigate, useParams } from "react-router";
import { Icon, projects } from "./HomePage";

function ProjectPage() {
  const { projectSlug } = useParams();
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="site-shell project-page">
      <header className="detail-topbar">
        <Link className="brand" to="/" aria-label="메인 페이지로">
          <span className="brand-mark">YW</span>
          <span className="brand-name">Youngwon Choi</span>
        </Link>
        <Link className="detail-back" to="/#project">
          <Icon name="arrow" size={17} />
          All projects
        </Link>
      </header>

      <main>
        <section className="project-detail-hero">
          <div className="project-detail-heading">
            <span className="section-index">
              Project {project.number} / {project.type}
            </span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <button
            className="project-detail-visual"
            type="button"
            onClick={() => window.open(project.video, "_blank", "noopener,noreferrer")}
            aria-label={`${project.title} 플레이 영상 열기`}
          >
            <img src={project.image} alt={`${project.title} 게임 플레이 화면`} />
            <span className="play-button">
              <Icon name="play" size={24} />
            </span>
            <span className="visual-caption">Play project film</span>
          </button>
        </section>

        <section className="project-detail-body">
          <div className="detail-facts">
            <span className="section-index">Project overview</span>
            <dl className="project-facts">
              <div>
                <dt>Engine</dt>
                <dd>{project.engine}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Period</dt>
                <dd>{project.date}</dd>
              </div>
            </dl>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="detail-contribution">
            <span className="section-index">Contribution</span>
            <ul>
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="troubleshooting detail-troubleshooting">
              <div className="troubleshooting-heading">
                <span className="list-title">Trouble shooting</span>
                <span>{project.title}</span>
              </div>
              <div className="troubleshooting-flow">
                {[
                  ["01", "문제 원인", project.troubleshooting.cause],
                  ["02", "해결 과정", project.troubleshooting.process],
                  ["03", "결과", project.troubleshooting.result],
                ].map(([step, label, content]) => (
                  <div className="troubleshooting-step" key={step}>
                    <span className="troubleshooting-number">{step}</span>
                    <div>
                      <strong>{label}</strong>
                      <p>{content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="detail-actions">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Icon name="github" size={18} /> View code
                </a>
              )}
              {project.download && (
                <a href={project.download} target="_blank" rel="noreferrer">
                  Download build <Icon name="external" size={17} />
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectPage;
