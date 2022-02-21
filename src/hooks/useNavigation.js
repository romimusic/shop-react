import { useState } from "react"; 

const useNavigation = () => {
  const [ path, setPath ] = useState("/");

  const goTo = (path) => {
    setPath(path);
    console.log("changing route");
  }

}

export default useNavigation;