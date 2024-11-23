import React from "react";

// Универсальная функция для рендеринга свойств объекта
const renderObject = <T extends Record<string, any>>(object: T) => {
  debugger;
  return (
    <>
      {object &&
        Object.entries(object).map(([key, value]) => (
          <div key={key}>
            {key}: {value ? value : "no"}
          </div>
        ))}
    </>
  );
};

export { renderObject };
