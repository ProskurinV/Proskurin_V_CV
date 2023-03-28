const Experience = ({ data }) => {
  const { title, experiences } = data;

  return (
    <section>
      <h2 className="mb-6">{title}</h2>
      <div className="flex flex-col gap-6">
        {experiences.map(({ role, description, achivements, period }) => (
          <div key={role} className="flex flex-col rounded-lg">
            <span className="bg-green h-2" />
            <div className="bg-grey-light p-6 drop-shadow-md">
              <h3 className="mb-2">{role}</h3>
              <p>{description}</p>
              {achivements.map((achivement, index) => (
                <li key={index}>{achivement}</li>
              ))}
              <p>{period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Experience;
