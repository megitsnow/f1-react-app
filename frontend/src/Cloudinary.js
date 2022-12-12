import { useState, React, useEffect } from 'react';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'

// cloudName: 'dzqtjox0u', 
// uploadPreset: 'ewco2fnk',

function CloudinaryWidget() {

    const [images, setImages] = useState({});

    function successCallBack(result){
        console.log('Done! Here is the image info: ', result.info)
        const profilePicture = {}
        profilePicture['profile_picture'] = result.info.url
        setImages(profilePicture)
    }

    useEffect(() => {
        console.log(images)
        if (images !== {}) {
            fetch('/api/profile-photo', {
                method: 'POST',
                body: JSON.stringify(images),
                headers: {
                'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((responseJson) => {
                alert(responseJson.status);
                });
        }
        }, [images]);

    function failureCallBack(result){
        console.log("failure")
    }
    

    return (
        <>
        <WidgetLoader /> 
        <Widget
          sources={['local', 'camera']} 
          resourceType={'image'} 
          cloudName={'dzqtjox0u'} 
          uploadPreset={'ewco2fnk'}
          buttonText={'Upload Profile Photo'} 
          style={{
                color: 'white',
                border: 'none',
                width: '200px',
                backgroundColor: 'gray',
                borderRadius: '4px',
                height: '25px'
              }} 
          folder={'my_folder'} 
          cropping={false} 
          multiple={false} 
          autoClose={true} 
          onSuccess={successCallBack} 
          onFailure={failureCallBack} 
          logging={false} 
          customPublicId={'sample'} 
          eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} 
          use_filename={false} 
          
  
          widgetStyles={{
            palette: {
              window: '#737373',
              windowBorder: '#FFFFFF',
              tabIcon: '#FF9600',
              menuIcons: '#D7D7D8',
              textDark: '#DEDEDE',
              textLight: '#FFFFFF',
              link: '#0078FF',
              action: '#FF620C',
              inactiveTabIcon: '#B3B3B3',
              error: '#F44235',
              inProgress: '#0078FF',
              complete: '#20B832',
              sourceBg: '#909090'
            },
            fonts: {
              default: null,
              "'Fira Sans', sans-serif": {
                url: 'https://fonts.googleapis.com/css?family=Fira+Sans',
                active: true
              }
            }
          }} 
         
  
        />
      </>
    )
}
export default CloudinaryWidget;