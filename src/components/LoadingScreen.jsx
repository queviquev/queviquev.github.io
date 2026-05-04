import {useState, useEffect} from 'react';
import Neko from './images/NekoRun.gif';
import Ozzy from './images/OzzyRun.gif';
import Cup from './images/CupSpill.gif';
import './styles/loading-screen.css';

function LoadingScreen() {
    const hasSeenLoader = sessionStorage.getItem('hasLoaded');

    const [isLoading, setIsLoading] = useState(!hasSeenLoader);

    useEffect(() => {
        if (!hasSeenLoader) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('hasLoaded', 'true');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [hasSeenLoader]);

    // If they have already seen it, don't even render the loader HTML
    if (hasSeenLoader) {
        return null;
    }


    return (
        <div className={`loading-screen ${isLoading ? 'fade-out' : ''}`}>
            <div className="loading-screen__track">
                <img
                    className="loading-screen__runner loading-screen__runner--ozzy"
                    src={Ozzy}
                    alt="Ozzy running across the screen"
                />
                <img 
                    className="loading-screen__cup" 
                    src={Cup} 
                    alt="A cup spilling" />
                <img
                    className="loading-screen__runner loading-screen__runner--neko"
                    src={Neko}
                    alt="Neko running across the screen"
                />
            </div>
        </div>
    );
}

export default LoadingScreen;