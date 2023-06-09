import { useState, useEffect } from "react";

import {
    Container,
    TitleContainer,
    PeopleContainer,
    ImageContainer,
    PersonContainer,
  } from "./style";

export function AboutUs() {
    const [us, setUs] = useState([]);
    const [isHidden, setIsHidden] = useState(false); // alterar para true depois

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
                   <button onClick={() => setIsHidden(!isHidden)}><h1>
                        Who are us?</h1></button>
                </TitleContainer>                
                <PersonContainer>
                {
                   isHidden === true ? (
                         null
                    ) : (
                        us.map((user, index) => {
                            if (index < 3) {
                                return (
                                <ImageContainer key={user.name}>
                                    <h1>{user.name}</h1>
                                    <img src={user.url} alt="User picture" />
                                </ImageContainer>
                                );
                            }
                            return null;
                        })
                )}
                 </PersonContainer>
                <PersonContainer>
                   {
                     isHidden === true ? (
                          null
                     ) : (
                        us.map((user, index) => {
                            if (index >= 3 && index < 5) {
                                return (
                                <ImageContainer key={user.name}>
                                    <h1>{user.name}</h1>                            
                                    <img src={user.url} alt="User picture" />
                                </ImageContainer>
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