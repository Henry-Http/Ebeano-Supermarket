import "./App.css";
import Header from "./components/Header/Header";
import SubHeader from "./components/Header/SubHeader";
import prodDisplay from "./components/Header/HeadProduct";
import SideBar from "./components/Body/SideBar";
import Footer from "./components/Footer/Footer";
function App() {
  const display = prodDisplay.map((list) => {
    return <SubHeader key={list.id} pic={list.icon} text={list.name} />;
  });
  return (
    <div className="" >
      <Header />
      {display}
      <SideBar/>
      <Footer/>
    </div>
  );
}

export default App;
