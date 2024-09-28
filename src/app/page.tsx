import react from "react";
import Header from "./components/header";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="intro">
          <h1>Hi,</h1>
          <div className="aboutme">I am <span className="name">Hussain</span></div>
          <span className="role">A college student living in Karachi, Pakistan. Currently, I'm in my second year of studies, pursuing a web development course at GIAIC to sharpen my skills for the digital age. In my free time, I love immersing myself in the vibrant world of anime, which offers me both entertainment and inspiration. Focused on my goals, I'm steadily building my future while balancing my passion for learning with my love for leisure.</span>
        </div>
        <div>
          <img src="my pfp.jpg" alt="My image" className="my-image"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
