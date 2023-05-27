import { SfNav } from 'react-sf-building-blocks';
import About from './about';
import Home from './home';
import Photos from './photos';
import YouTubeAPI from './videos';
import Contacts from './contacts';



export default function Navbar() {
    return (
        <div style={{paddingBottom: '20px',  backgroundColor: '#685775'}}>
            <SfNav variant="warning"
            brand="slvjzz"
            showSearch={false}
            showSignIn={false}
            enableRouting={true}

            homeMenu={{ args: [], link: 'Home', component: <Home /> }}
            menu={
                [
                    {caption: "About me", link: "about", component: <About /> },
                    {caption: "Photos", link: "photos", component: <Photos />},
                    {caption: "Videos", link: "videos", component: <YouTubeAPI />},
                    {caption: "Contacts", link: "contact", component: <Contacts />},
                ]
            }       
            
            stylesMenu={{
                paddingLeft: '5px', 
                paddingRight: '5px', 
                borderRadius: '5px'
            }} 
            stylesSubMenu={{
                paddingLeft: '5px', 
                paddingRight: '5px', 
                border: 'solid 1px gray',  
                backgroundColor: '#685775', 
                color: '#ffc107'
            }}
            stylesMenuMobile={{
                backgroundColor: '#685775', 
                color: '#ffc107', 
                paddingLeft: '5px', 
                paddingRight: '5px', 
                borderRadius: '5px', 
                border: 'solid 1px gray'
            }}
            stylesMenuMobileSelected={{
                backgroundColor: '#685775', 
                color: '#ffc107',  
                paddingLeft: '5px', 
                paddingRight: '5px', 
                borderRadius: '5px', 
                border: 'solid 1px gray'
            }}
            stylesSubMenuMobile={{
                backgroundColor: '#685775', 
                color: '#ffc107', 
                paddingLeft: '5px', 
                paddingRight: '5px', 
                borderRadius: '5px', 
                border: 'solid 1px gray'
            }}

            />
        </div>
      );
}
