export const Container = ({ children }) => {
  const title = "Render props basics";

  //! Invocación
  return children(title);
};
