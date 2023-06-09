export const Education = ({ data }) => {
  const { title, body } = data;
  return (
    <section id="about">
      <h2 className="mb-6 text-center">{title}</h2>
      {body?.map((element, index) => (
        <div key={index} className="mb-3">
          <p>{element.position}</p>
          <p>{element.period}</p>
        </div>
      ))}
    </section>
  );
};
