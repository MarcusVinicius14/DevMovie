import {useState} from "react"

import { Video } from "./components/Video"
import { BackGround } from "./components/background"
import { DescriptionMovie } from "./components/description-movie"
import { Header } from "./components/header"
import { Movies } from "./components/movies"

import {apiData} from "./api/data"

function App() {
  const [video, setVideo] = useState(apiData?.movies[0])
  const[playVideo,SetPlayVideo] = useState(false)

const {title,description, linkVideo, imageBanner} = video

  const handleOpenPlayVideo = () => {SetPlayVideo(true)}
  const handleClosePlayVideo = () => {SetPlayVideo(false)}

  const handleVideo = (data) => {

setVideo(data)
window.scrollTo({top:0})
  }

  return (
    <BackGround imageBanner={imageBanner}>
      <Header/>
      <DescriptionMovie 
      title={title}
      description={description}
      
      handleOpenPlayVideo={handleOpenPlayVideo}/>
      <Movies data = {apiData}  handleVideo={(data)=>handleVideo(data)}/>
      <Video linkVideo={linkVideo} playVideo={playVideo} handleClosePlayVideo={handleClosePlayVideo}/>
    </BackGround>
  )
}

export default App
