import React, { useEffect, useState } from 'react';
import LoadingScreen from '../components/common/loadingScreen';

const App = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Clear sessionStorage to ensure loading screen appears on reload
        sessionStorage.removeItem("firstLoad");

        const loadAssets = async () => {
            const interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(interval);
                        setLoading(false);
                        return 100;
                    }
                    return prevProgress + 2; // Increase progress by 2% every 100ms
                });
            }, 100);
        };

        loadAssets();
    }, []);
    // loading ? <LoadingScreen progress={progress} /> :
    // return loading ? (
    //     <LoadingScreen progress={progress} />
    //   ) : (
    //     <div>{children}</div>
    //   );
      
    return <div>{children}</div>
};

export default App;
