import { STATIC_CONTENT } from "@/lib/constants/static-content";
import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const NetworkDetector = (ComposedComponent:any) => {
  const WithNetworkDetector = (props:any) => {
    const [isDisconnected, setIsDisconnected] = useState(false);
    
    useEffect(() => {
        const handleConnectionChange = () => {
            const condition = navigator.onLine ? "online" : "offline";
            if (condition === "online") {
                setIsDisconnected(false);
                toast.success(STATIC_CONTENT['internet-connection-restored'], {
                    autoClose:1200,theme:"light"
                });
            } else {
                setIsDisconnected(true);
                toast.error(STATIC_CONTENT['internet-connection-lost'],{
                    autoClose:1200
                });
            }
        };

        window.addEventListener("online", handleConnectionChange);
        window.addEventListener("offline", handleConnectionChange);

        return () => {
            window.removeEventListener("online", handleConnectionChange);
            window.removeEventListener("offline", handleConnectionChange);
        };
    }, []);

    return (
      <div>
        <ComposedComponent {...props} />
      </div>
    );
  };

  return WithNetworkDetector;
};

export default NetworkDetector;
