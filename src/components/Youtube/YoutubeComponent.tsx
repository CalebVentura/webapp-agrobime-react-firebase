import { useState } from "react";
import './YoutubeComponent.scss'
import data from '../../config/data.json'
import { Col, Row } from "../Grid/Grid";
import PlayLogo from '../assets/icons/play'
import YoutubeIframe from "./YoutubeIframe";

const YoutubeComponent = () => {
    const [playStatus, setPlayStatus] = useState<boolean>(true)
    const changeStatePlay = () => setPlayStatus(!playStatus)

    return (
        <div className="YoutubeComponent" id={"Video"}>
            <div className={"RQ-py-3"}>
                <h2 className={"RQ-text-center RQ-mb-2 RQ-f-bold RQ-mx-2"}>{data.video.title}</h2>
                {
                    data.video.content && <p className={"RQ-text-center RQ-my-3 RQ-f-u16-o18 RQ-hover-text-gray RQ-pb-3 RQ-mx-2"}>{data.video.content}</p>
                }
            </div>
            <div className={"video-mask RQ-d-flex RQ-align-center RQ-text-center RQ-justify-center"}>
                {
                    playStatus &&
                    <div onClick={changeStatePlay} className="video-mask-frame RQ-d-flex RQ-align-center RQ-justify-center RQ-text-center">
                        <PlayLogo/>
                        <img
                            src={data.video.frame.src}
                            alt={data.video.frame.name}
                        />
                    </div>
                }
                <div className="video-player">
                    <YoutubeIframe videoId={data.video.videoId} title={""} autoPlay={true}/>
                </div>
            </div>
        </div>
    )
}
export default YoutubeComponent