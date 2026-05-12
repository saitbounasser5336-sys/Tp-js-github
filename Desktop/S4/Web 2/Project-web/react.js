function SkillCard(props) {
  return (
    <div className="skill-card">
      <img src={props.image} alt={props.title} />
    </div>
  );
}

function SkillsReact() {

  const skills = [
    { image: "html.png", title: "HTML" },
    { image: "css.png", title: "CSS" },
    { image: "js.png", title: "JavaScript" },
    { image: "c.png", title: "C" },
    { image: "c++.png", title: "C++" },
    { image: "react.jpg", title: "React" },
    { image: "uml.png", title: "UML" }
  ];

  const repeatedSkills = [...skills, ...skills];

  return (
    <div className="react-container">


      <div className="slider">

        <div className="react-cards">

          {repeatedSkills.map((skill, index) => (
            <SkillCard
              key={index}
              image={skill.image}
              title={skill.title}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

ReactDOM.render(
  <SkillsReact />,
  document.getElementById("react-root")
);