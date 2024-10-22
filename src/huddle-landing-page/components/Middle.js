import React from 'react';
import topdesktop from "../images/bg-section-top-desktop-1.svg";
import bottomdesktop from "../images/bg-section-bottom-desktop-1.svg";
import topdesktop2 from "../images/bg-section-top-desktop-2.svg";
import bottomdesktop2 from "../images/bg-section-bottom-desktop-2.svg";
import grow from "../images/illustration-grow-together.svg";
import conversation from "../images/illustration-flowing-conversation.svg";
import "./Middle.css";

const Middle = () => {
    return (
        <div className="middle">
            <div className="middle-part">
                <img className="curve" src={topdesktop} alt="top" />
                <div className="middle-part-inside grey">
                    <img src={grow} alt="grow" />
                    <div className="middle-part-text">
                        <h3>Grow Together</h3>
                        <p>Generate meaningful discussions with your audience and build a strong, loyal community.
                            Think of the insightful conversations you miss out on with a feedback form.</p>
                    </div>
                </div>
                <img className="curve" src={bottomdesktop} alt="bottom" />
            </div>
            <div className="middle-part">
                <div className="middle-part-inside">
                    <img src={conversation} alt="conversation" />
                    <div className="middle-part-text">
                        <h3>Flowing Conversations</h3>
                        <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads
                            have just-in-time loading for a more natural flow.</p>
                    </div>
                </div>
            </div>

            <div className="middle-part">
                <img className="curve" src={topdesktop2} alt="top2" />
                <div className="middle-part-inside grey">
                    <img src={grow} alt="grow" />
                    <div className="middle-part-text">
                        <h3>Your Users</h3>
                        <p>It takes no time at all to integrate Huddle with your app's authentication solution.
                            This means, once signed in to your app, your users can start chatting immediately.</p>
                    </div>
                </div>
                <img className="curve" src={bottomdesktop2} alt="bottom2" />
            </div>
        </div>
    )
}

export default Middle