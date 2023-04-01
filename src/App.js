import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={26}
          messages={4}
          shares={2}
          name="Cyberkalango"
          description="Te vejo, te sinto, te cheiro até num grão de areia✨@Grazy"
          music="Grão de Areia (part. Xande de Pilares) - Rubel"
          url="https://firebasestorage.googleapis.com/v0/b/projeto-tiktok.appspot.com/o/tiktok-video-1.mp4?alt=media&token=5a1e19f2-6d57-46ae-af1c-bbed73866b47"
        />
        <Video
          likes={30}
          messages={0}
          shares={1}
          name="Cyberkalango"
          description="moods #fyp #feelings #CapCut"
          music="som original - figuessj"
          url="https://firebasestorage.googleapis.com/v0/b/projeto-tiktok.appspot.com/o/tiktok-video-3.mp4?alt=media&token=04727fdc-c765-4764-b8a2-6b313615423f"
        />
        <Video
          likes={17}
          messages={2}
          shares={0}
          name="Cyberkalango"
          description="don't trust"
          music="METROOOOO - Dylan Turner"
          url="https://firebasestorage.googleapis.com/v0/b/projeto-tiktok.appspot.com/o/tiktok-video-2.mp4?alt=media&token=b95c99f7-56df-46ce-92fc-1f2fac172638"
        />

        <Video
          likes={28}
          messages={2}
          shares={1}
          name="Cyberkalango"
          description="crawling back to you #viral #fy"
          music="do i wanna know arctic monkeys - WTFFED"
          url="https://firebasestorage.googleapis.com/v0/b/projeto-tiktok.appspot.com/o/tiktok-video-0.mp4?alt=media&token=e2ad2a70-c305-4cf9-9e8e-a758a5815a8d"
        />
      </div>
    </div>
  );
}

export default App;
