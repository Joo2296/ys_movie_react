import './App.css';
import { useState,useEffect } from "react"

function App() {
  const [ isLoading,setIsLoading ] = useState(true);
  const [ loadCount,setLoadCount ] = useState(0);

  useEffect(() => {
      function increaseCounter () {
        let _counter = loadCount;
        _counter = _counter + 1;
        if (_counter > 10) {
          setIsLoading(false);
          clearInterval(loadTimer);
        }
        setLoadCount(_counter);
      }

      const loadTimer = setInterval(increaseCounter,1000);
      return () => clearInterval(loadTimer);
    },[loadCount]);
  return (
    <div>
      {isLoading ? `loading...${loadCount}` : 'Loaded'}
    </div>
  );
}

export default App;