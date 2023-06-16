import logoG from './g.gif';
import './App.css';
import {useState} from "react";

function App() {
  const [opening, setOpening] = useState(true)
  const [content, setContent] = useState(false)
  const [index, setIndex] = useState(0)
  const [data, setData] = useState({title: "", desc: ""})

  const handleOpening = () => {
    setOpening(false)
    setContent(true)
    handleContent(index + 1)
  }

  const handleContent = (indexx) => {
    setIndex(indexx)
    switch (indexx) {
      case 1:
        setData({
          title: "Cantik",
          desc: "Meski pertemuan pertama dengan nuansa remang dan berjauhan, tapi cantikmu tetap nyata terpancar."
        })
        break
      case 2:
        setData({
          title: "Gemoy",
          desc: "Gemoyyyyyyyyyyy aku jadi pengen nemplok terus, herman deh kok bisa begitu yak."
        })
        break
      case 3:
        setData({
          title: "Gemes",
          desc: "Pipinya kecupable, terus juga kalo lagi manyun ngambek, pengen bungkussssss."
        })
        break
      case 4:
        setData({
          title: "Baiq",
          desc: "Baiqnya tu udah another level, di luar nurul, ga paham lagi bisa sebaiq itu."
        })
        break
      case 5:
        setData({
          title: "Sabar",
          desc: "Udah dari 2021 kenal, tapi baru ketemu 2023 mana ga jelas lagi akunya, tapi masih sabar. hehehe"
        })
        break
      // case 6:
      //   setData({
      //     title: "Vape",
      //     desc: "Si sosoan ga ngevape pas ketemu, padahal mah kita santuy ajeeeee."
      //   })
        break
      default:
        setData({title: "", desc: ""})
        break
    }
  }

  return (
    <div className="App">
        {opening &&
          <header className="App-header">
            <img src={logoG} className="App-logo" alt="logo" />
            <p>
              C O N F E S S I O N
            </p>
            <div className="App-link" onClick={() => handleOpening()}>
              START
            </div>
          </header>}
        {content &&
          <header className="App-content">
            {/*<img src={logoG} className="App-logo" alt="logo" />*/}
            <div style={{backgroundColor: "darkslategrey", padding: "0 20px", width: "80%", height: 50, margin: "30px 0"}}>
              <h1 style={{textAlign: "left", fontWeight: "normal"}}>{data?.title}</h1>
              <h1 style={{textAlign: "left", fontWeight: "normal"}}></h1>
            </div>
            <p style={{marginTop: 15, textAlign: "left", }}>
              {data?.desc}
            </p>
            <div style={{display: "flex", marginLeft: "auto", marginRight: 0}}>
              {index > 1 &&
                <div className="App-link" style={{marginRight: "auto", marginLeft: 0}}  onClick={() => handleContent(index - 1)}>
                  {"<<"}
                </div>}
              {index > 1 && <div style={{width: "50%", color: "#136649"}}>space</div>}
              <div className="App-link" style={{marginLeft: "auto", marginRight: 0}}  onClick={() => handleContent(index + 1)}>
                >>
              </div>
            </div>
          </header>}
    </div>
  );
}

export default App;
