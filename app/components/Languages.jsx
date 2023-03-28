import { Key } from "react";

export const Languages = ({ data }) => {
  const { title, body } = data;
  return (
    <section>
      <h2 className="mb-6 text-center">{title}</h2>
      {body?.map((element, index) => (
        <div key={index} className="mb-3 flex justify-start ">
          <p className="mr-auto">{element.item}</p>
          <p>{element.status}</p>
        </div>
      ))}
    </section>
  );
};
