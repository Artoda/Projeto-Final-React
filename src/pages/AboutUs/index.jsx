import { useEffect, useRef, useState } from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import whoAreYouAudio from "../../assets/audio/who-are-you-song.mp3";
import {
  Container,
  IconsContainer,
  ImageContainer,
  PeopleContainer,
  PersonContainer,
  TitleContainer,
  UsContainer,
} from "./style";

export function AboutUs() {
    const [us, setUs] = useState([]);
    const [isHidden, setIsHidden] = useState(true); // alterar para true depois
    const audioRef = useRef();
   
    const names = [
        "filipe-oliv95", 
        "Artoda", 
        "drirsantos",
        "PAULOCEZAR01", 
        "FernandaMeirelles", 
        "RonaldoAglio"]

    useEffect(() => {
        const fetchData = async() => {
            var userArray = []
            for await (var name of names){
                let data = await fetch(`https://api.github.com/users/${name}`)
                let profile = await data.json()
                userArray.push({name: profile.name, url: profile.avatar_url})                
            }
            setUs(userArray)            
        }

        fetchData()
    }, [])

    function handleShow(){
      if(isHidden){
        setIsHidden(false);
        audioRef.current.play();
      }
      else {
        setIsHidden(true);
        audioRef.current.pause();
      }
    }
  
    return (
        <>
        <audio src={whoAreYouAudio} ref={audioRef}/>
        <Container>
            <PeopleContainer>
                <TitleContainer>
                   <button onClick={handleShow}><h1>
                        Quem somos nós??</h1></button>
                </TitleContainer>                
                <PersonContainer>
                {isHidden === true ? (null) : (
                        us.map((user, index) => {
                            if (index < 3) {
                                return (
                                <UsContainer key={user.name}>                              
                                   <h1>{user.name}</h1>
                                   <ImageContainer>
                                     <img src={user.url} alt="User picture" />
                                     <IconsContainer>
                                        <AiOutlineLinkedin className="icon"/>
                                    <a href={user.link}>
                                        <AiOutlineGithub className="icon" />
                                     </a>
                                    </IconsContainer>
                                  </ImageContainer>                                 
                                </UsContainer>
                              );
                         }
                        return null;
                      })
                )}
                 </PersonContainer>
                <PersonContainer>
                   {isHidden === true ? (null) : (
                       us.map((user, index) => {
                          if (index >= 3 && index < 6) {
                            return (
                                <UsContainer key={user.name}>                              
                                   <h1>{user.name}</h1>
                                   <ImageContainer>
                                     <img src={user.url} alt="User picture" />
                                     <IconsContainer>
                                        <AiOutlineLinkedin className="icon"/>
                                     <a href={user.link}>
                                        <AiOutlineGithub className="icon"/>
                                     </a>
                                    </IconsContainer>
                                  </ImageContainer>                                 
                                </UsContainer>
                              );
                          }
                            return null;
                     })
                  )}
                </PersonContainer>                
         </PeopleContainer>
        </Container>
        </>
    );
}