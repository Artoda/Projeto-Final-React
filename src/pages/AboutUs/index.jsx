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
                userArray.push({name: profile.name, url: profile.avatar_url, link: profile.html_url, id: profile.id})               
            }          
            setUs(userArray)            
            console.log(userArray)
        }

        fetchData()
    }, [])

    const linkedinLinks = {
      "125571407": "https://www.linkedin.com/in/filipe-oliveira95/",
      "127253895": "https://www.linkedin.com/",
      "105232781": "https://www.linkedin.com/in/drirsantos/",
      "127313448":"https://www.linkedin.com/in/paulo-cezar-vicente-94582926b/",
      "99287995": "https://www.linkedin.com/in/fernanda-meirelles-10ab1462/",
      "127253985": "https://www.linkedin.com/"
    }

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
                              const linkedinLink = linkedinLinks[user.id];
                                return (
                                <UsContainer key={user.id}>                              
                                   <h1>{user.name}</h1>
                                   <ImageContainer>
                                     <img src={user.url} alt="User picture" />
                                     <IconsContainer>
                                     <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                                        <AiOutlineLinkedin className="icon"/>
                                      </a>
                                     <a href={user.link} target="_blank" rel="noopener noreferrer">
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
                            const linkedinLink = linkedinLinks[user.id];
                            return (
                                <UsContainer key={user.id}>                              
                                   <h1>{user.name}</h1>
                                   <ImageContainer>
                                     <img src={user.url} alt="User picture" />
                                     <IconsContainer>                                    
                                     <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                                           <AiOutlineLinkedin className="icon"/>
                                        </a>
                                    
                                     <a href={user.link} target="_blank" rel="noopener noreferrer">
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