import logoG from './g.gif';
import logoSmile from './smile-png.gif';
import './App.css';
import {useState} from "react";
import useSound from 'use-sound';
// import bgMusic from "./bg-music-end.mp3";
import bgMusicAmin from "./bg-music-amin.mp3";

function App() {
  const [opening, setOpening] = useState(true)
  const [content, setContent] = useState(false)
  const [contentSixMonth, setContentSixMonth] = useState(false)
  const [index, setIndex] = useState(0)
  const [data, setData] = useState({title: "", desc: ""})

  // const [play] = useSound(bgMusic, {volume: 0.5});
  const [playAmin] = useSound(bgMusicAmin, {volume: 0.8});

  const handleOpening = () => {
    playAmin();
    setOpening(false)
    setContentSixMonth(true)
    // handleContent(index + 1)
    console.log("index", index, data)
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
        setData({title: "Dear Gadis kesayangan ku,", desc: ""})
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
            <div className="App-link" style={{cursor: "pointer"}} onClick={() => handleOpening()}>
              START
            </div>
          </header>}
        {contentSixMonth &&
          <header className="App-content">
            {/*<img src={logoG} className="App-logo" alt="logo" />*/}
            <div style={{backgroundColor: "darkslategrey", padding: "0 20px", width: "80%", height: 50, margin: "30px 0"}}>
              <h2 style={{textAlign: "left", fontWeight: "normal"}}>Dear Gadis kesayangan ku,</h2>
            </div>
            <p style={{marginTop: 25, textAlign: "left", }}>
              {/*{data?.desc}*/}
              Halo sayang, r u ready? <br />
              Agaknya membaca tulisanku akan menjadi salah satu rutinitas baru mu, ya jika kamu mau. hehe <br/>
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              Bulan ini diawali dengan hal yg selama ini kamu hindari, <br/>
              bukan dengan kondisi yg diinginkan sebenarnya, <br/>
              tentu bukan langkah yg mudah, <br/>
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              tapi kamu akhirnya memilih untuk berani, <br/>
              berani menghadapi dengan ketetapan hati, <br/>
              entah apapun jadinya rasamu setelah itu, <br/>
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              aku tetap di sini, <br/>
              masih menunggumu, <br/>
              selalu bersamamu, <br/>
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              dikala kamu kembali dengan senyuman, <br/>
              jelas lega dan bangga, <br/>
              sayang… kamu hebat, <br/>
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              terima kasih kamu, <br/>
              sudah berusaha dan percaya, <br/>
              dengan dirimu sendiri dan aku, <br/>
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              tak perlu lagi risau menatap ke belakang, <br/>
              tak perlu lagi takut melangkah ke depan, <br/>
              tak perlu lagi ragu menoleh ke sisi, <br/>
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              cukup genggam erat jangan lepaskan, <br/>
              ayo terus bertumbuh bersama, <br/>
              selama waktu masih ada, <br/>
            </p>

            <p style={{marginTop: 15, textAlign: "left", }}>
              {/*{data?.desc}*/}
              untuk kita, <br/><br/>

              Selamat bulan ke 6 sayang, <br/>
              I love you :) <br/>
            </p>

            <div style={{marginLeft: "auto", marginRight: 0}}>
              <div className="App-link" style={{marginLeft: "auto", marginRight: 0, cursor: "pointer"}}  onClick={() => {
                setContentSixMonth(false);
                setContent(true);
                // play();
              }}>
                >>
              </div>
            </div>
            <img src={logoSmile} className="App-logo" alt="logo" />
          </header>}

      {content &&
          <header className="App-content">
            {/*<img src={logoG} className="App-logo" alt="logo" />*/}
            <div style={{backgroundColor: "darkslategrey", padding: "0 20px", width: "80%", height: 50, margin: "30px 0"}}>
              <h2 style={{textAlign: "left", fontWeight: "normal"}}>{"Dear gadis terhebat ku,"}</h2>
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

            <div style={{marginLeft: "auto", marginRight: 0}}>
              <div className="App-link" style={{marginRight: "auto", marginLeft: 0}}  onClick={() => {
                setContent(false);
                setContentSixMonth(true);
                playAmin();
              }}>
                {"<<"}
              </div>
              {/*{index > 1 &&*/}
              {/*    <div className="App-link" style={{marginRight: "auto", marginLeft: 0}}  onClick={() => handleContent(index - 1)}>*/}
              {/*      {"<<"}*/}
              {/*    </div>}*/}
              {/*{index > 1 && <div style={{width: "50%", color: "#136649"}}>space</div>}*/}
              {/*<div className="App-link" style={{marginLeft: "auto", marginRight: 0, cursor: "pointer"}}  onClick={() => handleContent(index + 1)}>*/}
              {/*  >>*/}
              {/*</div>*/}
            </div>
            <img src={logoSmile} className="App-logo" alt="logo" />
          </header>}
    </div>
  );
}

export default App;
