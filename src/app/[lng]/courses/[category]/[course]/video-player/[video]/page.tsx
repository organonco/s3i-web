"use client";
import { Grid } from '@mui/material';
import ReactPlayer from 'react-player';


export default function Page({
    params: { lng, video }
}: {
    params: { lng: any, video: string }
}) {
    console.log('video')
    console.log(video)
    // function getYouTubeVideoId() {
    //     const videoIdIndex = url.indexOf('v=');
    //     if (videoIdIndex !== -1) {
    //         const videoIdStartIndex = videoIdIndex + 2;
    //         const videoIdEndIndex = url.indexOf('&', videoIdStartIndex);
    //         const videoId = videoIdEndIndex !== -1 ? url.substring(videoIdStartIndex, videoIdEndIndex) : url.substring(videoIdStartIndex);
    //         return videoId;
    //     }
    //     return null;
    // }

    return (
        <Grid container justifyContent={'center'} >
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video}`}
                width={'640px'}
                height={'360px'}
                controls={false}
                // config={{ youtube: { playerVars: { disablekb: 1 } } }}
                playing={true}

                config={{
                    youtube: {
                        playerVars: { showinfo: 1, controls: 0, disablekb: 1, modestbranding: 1, autoplay: 1 },
                    },
                }}
            //         embedOptions: {
            //             playerVars: {
            //                 javaScriptEnabled: true,
            //                 domStorageEnabled: true,
            //                 showinfo: 1, controls: 0, disablekb: 1,
            //                 injectedJavaScript: `
            //                 var element = document.getElementsByClassName('container')[0];
            //                 element.style.position = 'unset';
            //                 element.style.paddingBottom = 'unset';
            //                 element.style.alignContent = 'center';
            //                 true;
            //               `,
            //             }
            //         }
            />
        </Grid>
    )
}