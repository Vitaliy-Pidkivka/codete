import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import ProfileForm from './components/ProfileForm'
import {getIsHiding, getProfileInfo} from "./redux/profile-selectors";
import {setProfile} from "./redux/profileReducer";
import {connect} from "react-redux";
import TextGroup from "./components/shared/TextGroup";


const StyledApp = styled.div`
     background-color: #282c34;
     flex: 0 1 500px;
     border-radius: 8px;
     box-shadow:  0 0 12px #282c34;
     text-align: center;
`
const Wrapper = styled.section`
     background: papayawhip;
     min-height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     padding-left: 415px;
     padding-right: 15px;
`
const Dashboard = styled.div`
     position: fixed;
     top: 10px;
     bottom: 10px;
     left: 5px;
     height: 400px;
     width: 400px;
     background-color: #282c34;
     text-align: center;
     border-radius: 8px;
     box-shadow:  0 0 12px #282c34;
     height: calc(100% - 20px);
     color: white;
     transition: all 1s ease-in-out;
     visibility: ${({ isHiding }) => isHiding ? 'hidden' : 'visible'};
     opacity: ${({ isHiding }) => isHiding ? '0' : '1'};
     
     h1 { 
        text-transform: uppercase; 
     }
`
const Avatar = styled.img`
     display: block;
     max-width: 50%;
     margin: 5px auto 5px;
     box-shadow: 0 0 10px white;
`

const App = ({profileInfo, setProfile, isHiding}) => {
    const [avatarUrl, setAvatarUrl] = useState('')
    const [avatar, ...textProfileFields] = profileInfo

    const uploadAvatarUrl = (file) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setAvatarUrl(reader.result)
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    return (
        <Wrapper>
            <Dashboard isHiding={isHiding}>
                <h1>Profile Info:</h1>
                {avatarUrl && (
                  <Avatar alt="Avatar" src={avatarUrl}/>
                )}
                {textProfileFields.map(({name, id, value}) => (
                    <TextGroup
                        key={id}
                        heading={name}
                        text={value}
                    />
                ))}
            </Dashboard>
            <StyledApp>
                <ProfileForm
                    {...{setProfile, uploadAvatarUrl}}
                />
            </StyledApp>
        </Wrapper>
    );
}
const mapDispatchToProps = (state) => ({
    isHiding: getIsHiding(state),
    profileInfo: getProfileInfo(state)
})

export default connect(mapDispatchToProps, {setProfile})(App);
