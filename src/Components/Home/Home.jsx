import Nav from "../Nav/Nav";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="home_content">
        <h2 className="fade-left">TITULO</h2>
        <p className="fade-right">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          dolorum, saepe ex quaerat recusandae aliquam possimus. Quos provident
          inventore corporis maxime quaerat perspiciatis nisi, numquam possimus
          asperiores, iste, distinctio enim.
        </p>
      </div>
    </div>
  );
}
