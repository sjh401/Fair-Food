export default function About(props) {
    const { darkMode } = props;

    return (
<div className="home-detail-grid">
            <div className="home-details">
                <img src={(darkMode === true) ? "https://i.imgur.com/eyLImzQ.png" : "https://i.imgur.com/xLr5h9x.png"} alt="destination hot dog logo" className="home-logo"/>
            </div>
            <div className={(darkMode === true) ? "dark-home-foods-container home-foods-container" : "home-foods-container"} style={{color: (darkMode === true) ? "#d4cdc3": "#f8f7ff"}}>
                Software Engieneer with a passion for every food on a stick. 
                From corn dogs to twinkies.
            </div>
        </div>
    )
}