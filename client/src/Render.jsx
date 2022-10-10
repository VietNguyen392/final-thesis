import React from "react";
import { useParams } from "react-router-dom";
// import { Notfound } from './pages'
const generatePage = (name) => {
  const component = () => require(`./pages/${name}`).default;

  try {
    return React.createElement(component());
  } catch (err) {
    console.log(err);
    return "null";
  }
};
const Render = () => {
  const { page, slug } = useParams();

  let name = "";

  if (page) {
    name = slug ? `${page}/[slug]` : `${page}`;
  }

  return generatePage(name);
};

export default Render;
