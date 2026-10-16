import { useEffect, useState } from "react";
import { Link } from "react-router";

export type IconName = "arrow" | "close" | "code" | "external" | "github" | "mail" | "play";

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-3 3 3 3" />
        <path d="m16 9 3 3-3 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5" />
        <path d="m20 4-9 9" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
    github: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5-.1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
    ),
    mail: (
      <>
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5Z" />,
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[name]}
    </svg>
  );
}

export const projects = [
  {
    slug: "dual-blade",
    number: "01",
    title: "Dual Blade",
    type: "3D Action RPG",
    engine: "Unreal Engine 5.6",
    date: "2025.08 — 2025.12",
    role: "Combat System · Characters · Skills",
    image: "/images/dual-blade.jpg",
    video: "https://drive.google.com/file/d/1BF1IPPNmX4d3z8vKVu6MW_C-VudNFv0B/preview",
    download: "https://drive.google.com/file/d/11LQw_lpwrKWmxB2gpAGBblP_Ndk6E9gI/view?usp=sharing",
    description:
      "암살자가 되어 임무를 수주하고 보스를 처치하는 3D 액션 RPG입니다. GAS를 기반으로 플레이어와 보스의 전투 흐름 전반을 설계했습니다.",
    contributions: [
      "GAS 기반 전투 시스템과 플레이어 스킬 GA 구현",
      "보스 패턴 GA 및 GameplayTag 기반 AI Behavior Tree",
      "Hit Pause, Camera Shake, GameplayCue를 활용한 타격감 설계",
    ],
    keyContribution: {
      title: "GameplayTag 기반 전투 상태 구조",
      description:
        "스킬과 보스 패턴이 공유하는 전투 상태를 GameplayTag 중심으로 구조화하고, 전투 로직과 피드백 연출을 분리해 확장 가능한 전투 시스템을 설계했습니다.",
    },
    troubleshooting: {
      cause:
        "플레이어 스킬과 보스 패턴이 각자의 상태를 직접 확인하면서 조건 검사가 중복되고, 기능을 추가할수록 전투 흐름의 결합도가 높아졌습니다.",
      process:
        "GameplayTag를 공통 상태 계약으로 정의하고 Ability별 책임을 분리했습니다. 시각·청각 피드백은 GameplayCue로 분리해 전투 로직과 연출이 독립적으로 동작하도록 구성했습니다.",
      result:
        "핵심 전투 코드를 수정하지 않고도 스킬과 패턴을 확장할 수 있게 되었고, 상태 판정과 타격 피드백이 일관되게 유지되었습니다.",
    },
    tags: ["UE 5.6", "GAS", "AI", "Behavior Tree"],
  },
  {
    slug: "arcane-edge",
    number: "02",
    title: "Arcane Edge",
    type: "2D Run & Gun",
    engine: "Alpha Engine · C++",
    date: "2025.06 — 2025.07",
    role: "TileMap · Collision",
    image: "/images/arcane-edge.jpg",
    video: "https://drive.google.com/file/d/1D-64AiDaVrS0fcdRNqZa_dXUOPuvRaAz/preview",
    github: "https://github.com/WestMinsu/AlphaEngineProject",
    download: "https://github.com/WestMinsu/AlphaEngineProject/releases/tag/1.0.1",
    description:
      "적의 속성에 맞춰 무기를 전환하며 돌파하는 2D 횡스크롤 런앤건 게임입니다. 커스텀 C++ 엔진 위에서 타일맵 파이프라인과 충돌 시스템을 구축했습니다.",
    contributions: [
      "Tiled JSON·XML 데이터 파싱과 TileMap 객체 생성",
      "AABB 기반 타일맵 충돌 판정 및 캐릭터 충돌 처리",
      "State Pattern 기반 게임 스테이트 전환 구조 설계",
    ],
    keyContribution: {
      title: "데이터 중심 TileMap 충돌 파이프라인",
      description:
        "Tiled에서 제작한 맵 데이터를 커스텀 엔진으로 가져오는 파싱 과정과 AABB 충돌 처리를 연결해 반복 가능한 레벨 제작 파이프라인을 구축했습니다.",
    },
    troubleshooting: {
      cause:
        "Tiled의 타일 인덱스와 게임 월드 좌표 체계가 달라 맵 경계에서 캐릭터 위치와 충돌 영역이 어긋나는 문제가 발생했습니다.",
      process:
        "파싱 단계에서 타일 크기와 좌표 원점을 기준으로 데이터를 정규화하고, AABB 충돌 시 겹침 깊이를 계산해 충돌 축별로 위치를 보정했습니다.",
      result:
        "Tiled에서 수정한 맵이 별도 보정 없이 게임에 반영되었고, 모서리와 경사 없는 타일 경계에서도 안정적인 이동과 충돌을 구현했습니다.",
    },
    tags: ["C++", "Custom Engine", "AABB", "State Pattern"],
  },
  {
    slug: "escape-from-footprint",
    number: "03",
    title: "Escape from Footprint",
    type: "2D Survival Adventure",
    engine: "C Processing · C",
    date: "2025.04 — 2025.05",
    role: "Gameplay · Collision · AI",
    image: "/images/escape-footprint.jpg",
    video: "https://drive.google.com/file/d/1i8o4cIEUUz3HGpJOtxA5wHReE7EMRIyL/preview",
    github: "https://github.com/fenrir94/Hidden_Pickle",
    download: "https://github.com/fenrir94/Hidden_Pickle/releases",
    description:
      "보이지 않는 적의 발자국과 소리로 위치를 파악하며 적을 피해 탈출하는 게임입니다. 플레이어와 발자국 등 게임 오브젝트 전반을 구현했습니다.",
    contributions: [
      "플레이어·아이템·사격 시스템 및 원형 충돌 구현",
      "상·하체 분리 캐릭터 애니메이션 시스템",
      "Queue 기반 발자국 수명 주기와 적 패트롤·추적 AI",
    ],
    keyContribution: {
      title: "Queue 기반 발자국 및 추적 시스템",
      description:
        "보이지 않는 적의 위치를 전달하는 발자국의 수명 주기를 Queue로 관리하고, 흔적을 중심으로 패트롤과 추적 상태가 전환되는 AI 흐름을 구현했습니다.",
    },
    troubleshooting: {
      cause:
        "이동할 때마다 생성되는 발자국이 계속 누적되고, 적의 패트롤과 추적 조건이 얽히면서 오브젝트 수와 AI 상태 전환이 불안정해졌습니다.",
      process:
        "발자국을 Queue로 관리해 생성 순서대로 수명을 제어하고, 감지 여부와 마지막 위치를 기준으로 패트롤·추적 전환 조건을 분리했습니다.",
      result:
        "화면에 유지되는 발자국 수가 일정해졌으며, 플레이어가 남긴 흔적을 따라가는 적의 추적 흐름을 예측 가능하게 유지했습니다.",
    },
    tags: ["C", "Custom Engine", "AI", "Queue"],
  },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="홈으로">
          <span className="brand-mark">YW</span>
          <span className="brand-name">Youngwon Choi</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="주요 메뉴">
          <a href="#project" onClick={closeMenu}>
            Project
          </a>
          <a href="#contribution" onClick={closeMenu}>
            Contribution
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#journey" onClick={closeMenu}>
            Journey
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Contact <Icon name="arrow" size={17} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="eyebrow reveal">
            <span className="status-dot" />
            Game Client Programmer
          </div>
          <h1 className="hero-title">
            <span>Gameplay</span>
            <span className="outlined">Engineered</span>
            <span>to Feel.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro" />
            <a className="circle-link" href="#project" aria-label="프로젝트 보기">
              <span>View project</span>
              <Icon name="arrow" size={24} />
            </a>
          </div>
          <div className="hero-meta">
            <span>Based in Busan, KR</span>
            <span>Unreal Engine · C++ · Gameplay Systems</span>
          </div>
        </section>

        <section className="project-section" id="project">
          <div className="content-frame">
            <div className="section-heading" style={{ gap: "0 34px", rowGap: 0 }}>
              <div>
                <span className="section-index">01 / Selected projects</span>
              </div>
              <p />
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <button
                    className="project-visual"
                    type="button"
                    onClick={() => setActiveVideo(project)}
                    aria-label={`${project.title} 플레이 영상 보기`}
                  >
                    <img src={project.image} alt={`${project.title} 게임 플레이 화면`} />
                    <span className="project-number">{project.number}</span>
                    <span className="play-button">
                      <Icon name="play" size={24} />
                    </span>
                    <span className="visual-caption">Play project film</span>
                  </button>
                  <div className="project-content">
                    <div className="project-kicker">
                      <span>{project.type}</span>
                      <span>{project.date}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
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
                        <dt>Team</dt>
                        <dd>2 people</dd>
                      </div>
                    </dl>
                    <div className="project-footer">
                      <div className="tag-list">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <Link to={`/projects/${project.slug}`}>
                          Detail <Icon name="arrow" size={17} />
                        </Link>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Icon name="github" size={18} /> Code
                          </a>
                        )}
                        {project.download && (
                          <a href={project.download} target="_blank" rel="noreferrer">
                            Build <Icon name="external" size={17} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contribution-section" id="contribution">
          <div className="content-frame">
            <div className="section-heading contribution-heading">
              <div>
                <span className="section-index">02 / Contribution</span>
              </div>
              <p>프로젝트에서 마주한 문제를 분석하고 해결한 과정을 기록했습니다.</p>
            </div>
            <div className="contribution-list">
              {projects.map((project) => (
                <article className="contribution-case" key={project.slug}>
                  <div className="contribution-summary">
                    <div className="contribution-image">
                      <img
                        src={project.image}
                        alt={`${project.keyContribution.title} 대표 화면`}
                      />
                      <span className="contribution-number">{project.number}</span>
                    </div>
                    <div className="contribution-intro">
                      <span className="list-title">Key Contribution</span>
                      <h3>{project.keyContribution.title}</h3>
                      <p>{project.keyContribution.description}</p>
                      <Link className="contribution-project" to={`/projects/${project.slug}`}>
                        <span>Project</span>
                        <strong>{project.title}</strong>
                        <Icon name="arrow" size={18} />
                      </Link>
                    </div>
                  </div>
                  <div className="troubleshooting contribution-troubleshooting">
                    <div className="troubleshooting-heading">
                      <span className="list-title">Key Contribution</span>
                      <span>Cause — Process — Result</span>
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="about-section"
          id="about"
          style={{ paddingTop: 60, paddingRight: 20, paddingBottom: 60, paddingLeft: 20 }}
        >
          <div className="content-frame about-frame">
            <div className="section-heading" style={{ gap: "0 34px", rowGap: 0 , columnGap: 51}}>
              <div>
                <span className="section-index">03 / About me</span>
              </div>
            </div>
            <div className="about-photo !min-h-0 aspect-[3/4] w-[clamp(180px,18vw,280px)] self-end justify-self-start ml-[3.5vw] mb-[clamp(48px,7vw,100px)]">
              <img src="/images/profile.jpg" alt="최영원" />
              <div className="photo-label">
              </div>
            </div>
            <div className="about-copy">
              <div className="about-body">
                <p>{"Unreal Engine을 주력으로\u00a0\u00a0게임 클라이언트 프로그래머 최영원입니다."}</p>
                <p>
                  확장 가능한 소프트웨어 설계와 컴퓨터 그래픽스, 성능 최적화에
                  관심이 있습니다. 연구에서 쌓은 문제 정의 능력을 플레이 경험의
                  완성도를 높이는 데 사용합니다.
                </p>
              </div>
              <div className="skill-block">
                <span>Core stack</span>
                <div className="skills">
                  {["C++", "Unreal Engine", "GAS", "C", "Python", "TensorFlow"].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="journey-section" id="journey" style={{ gap: "0 51px", rowGap: 0, columnGap: 51 }}>
          <div className="journey-title">
            <span className="section-index">04 / Journey</span>
            <h2 style={{ fontSize: 32 }} />
          </div>
          <div className="timeline">
            <article>
              <span className="timeline-year">2025</span>
              <div>
                <h3>부산 디지펜게임아카데미</h3>
                <p>게임 엔진과 클라이언트 프로그래밍 집중 과정</p>
              </div>
            </article>
            <article>
              <span className="timeline-year">2024</span>
              <div>
                <h3>부산 콘텐츠 아카데미 퍼스널 트레이닝</h3>
                <p>게임 프로젝트 과정</p>
              </div>
            </article>
            <article>
              <span className="timeline-year">2020 — 2022</span>
              <div>
                <h3>부산대학교 대학원 정보융합공학과 컴퓨터공학 석사</h3>
                <p>이미지 모델 테스트를 위한 테스트 데이터 선별 방법 연구</p>
              </div>
            </article>
            <article>
              <span className="timeline-year">2013 — 2020</span>
              <div>
                <h3>부산대학교 전기컴퓨터공학부 컴퓨터공학전공</h3>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="section-index light">05 / Get in touch</span>
          <div className="contact-main" style={{ paddingTop: 0, gap: "0 65px", rowGap: 0 }}>
            <h2 />
            <div className="contact-side">
              <a href="mailto:4p0the0sis94@gmail.com">
                <Icon name="mail" size={20} />
                4p0the0sis94@gmail.com
              </a>
              <a href="https://github.com/fenrir94" target="_blank" rel="noreferrer">
                <Icon name="github" size={20} />
                github.com/fenrir94
              </a>
            </div>
          </div>
          <div className="footer-line">
            <span>© 2025 Youngwon Choi</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </section>
      </main>

      {activeVideo && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${activeVideo.title} 영상`}>
          <button className="modal-backdrop" type="button" onClick={() => setActiveVideo(null)} aria-label="영상 닫기" />
          <div className="modal-content">
            <div className="modal-head">
              <div>
                <span>{activeVideo.type}</span>
                <strong>{activeVideo.title}</strong>
              </div>
              <button type="button" onClick={() => setActiveVideo(null)} aria-label="닫기">
                <Icon name="close" size={24} />
              </button>
            </div>
            <iframe
              src={activeVideo.video}
              title={`${activeVideo.title} 플레이 영상`}
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
