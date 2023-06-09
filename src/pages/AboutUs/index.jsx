import { useState, useEffect } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import whoAreYouAudio from "../../assets/audio/who-are-you-song.mp3";
import {
    Container,
    TitleContainer,
    PeopleContainer,
    UsContainer,
    PersonContainer,
    ImageContainer,
    IconsContainer,
  } from "./style";

export function AboutUs() {
    const [us, setUs] = useState([]);
    const [isHidden, setIsHidden] = useState(true); // alterar para true depois
    const audio = new Audio(whoAreYouAudio)
   
    const names = [
        "filipe-oliv95", 
        "Artoda", 
        "drirsantos",
        "PAULOCEZAR01", 
        "FernandaMeirelles"]
    // adicionar o Ronaldo Aglio

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
    
    return (
        <>
        <Container>
            <PeopleContainer>
                <TitleContainer>
                   <button onClick={() => {setIsHidden(!isHidden); audio.play()}}><h1>
                        Who are us?</h1></button>
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
                                     <AiOutlineGithub className="icon"/>
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
                          if (index >= 3 && index < 5) {
                            return (
                                <UsContainer key={user.name}>                              
                                   <h1>{user.name}</h1>
                                   <ImageContainer>
                                     <img src={user.url} alt="User picture" />
                                     <IconsContainer>
                                     <AiOutlineLinkedin className="icon"/>
                                     <AiOutlineGithub className="icon"/>
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