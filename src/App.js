import logoG from './g.gif';
import logoSmile from './smile-png.gif';
import './App.css';
import {useState} from "react";
import useSound from 'use-sound';
import bgMusic from "./bg-music-end.mp3";

function App() {
  const [opening, setOpening] = useState(true)
  const [content, setContent] = useState(false)
  const [index, setIndex] = useState(0)
  const [data, setData] = useState({title: "", desc: ""})

  const [play] = useSound(bgMusic, {volume: 0.25});

  const handleOpening = () => {
    play();
    setOpening(false)
    setContent(true)
    // handleContent(index + 1)
    handleContent()
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
      case 6:
        setData({
          title: "Ngambek",
          desc: "Meski sabar tapi tetep aja namanya cewek ya ges ya, ngambek mulu hermannnnnn"
        })
        break
      default:
        setData({title: "Dear Gadis terhebat ku,", desc: ""})
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
              <h2 style={{textAlign: "left", fontWeight: "normal"}}>{data?.title}</h2>
            </div>
            <p style={{marginTop: 25, textAlign: "left", }}>
              {/*{data?.desc}*/}
              mungkin, <br />
              kata sabar ga akan mengikis kecewa mu, <br />
              kata semangat ga akan menghapus lelah mu, <br />
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              namun, <br />
              kata sayang semoga bisa menenangkan mu, <br />
              satu pelukan semoga bisa menghangatkan mu, <br />
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              meski, <br />
              beberapa pihak dengan sengaja menyakiti mu, <br />
              bahkan terlalu jauh mencampuri pilihan hidup mu, <br />
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              tetap, <br />
              terima kasih sudah, masih dan selalu bertahan, <br />
              jangan menyerah ya cantik ku, <br />
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              hari ini, <br />
              kemarin besok bahkan lusa, <br />
              semoga bahagia senantiasa menyertai kita, <br />
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              sayang, <br />
              aku geli baca tulisan ku sendiri, <br />
              hehehe, i love you :) <br />
            </p>

            <div style={{display: "none", marginLeft: "auto", marginRight: 0}}>
              {index > 1 &&
                <div className="App-link" style={{marginRight: "auto", marginLeft: 0}}  onClick={() => handleContent(index - 1)}>
                  {"<<"}
                </div>}
              {index > 1 && <div style={{width: "50%", color: "#136649"}}>space</div>}
              <div className="App-link" style={{marginLeft: "auto", marginRight: 0}}  onClick={() => handleContent(index + 1)}>
                >>
              </div>
            </div>
            <img src={logoSmile} className="App-logo" alt="logo" />
          </header>}
    </div>
  );
}

export default App;
