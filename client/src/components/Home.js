import React, {useState, useEffect} from 'react'

const Home = () => {
      const [userName, setUserName] = useState(' ');
      const UserHomePage = async () => {
        try{
          const res = await fetch('/getdata', {
            method : "GET",
            headers: {
              "content-Type": "application/json"
            },
          });
          const data = await res.json();
          console.log(data);
          setUserName(data.name);
           
        }catch(err){
          console.log(err);
        }
      }
      useEffect(() => {
        UserHomePage();
      }, []);
      return (
        <>
            
            <div class="backg">
            <div class="animating-width"></div>
            <div class="caption center">
              <h1 color="red">INFINITE EPOCHS LABS</h1>
            </div>
            <div class="caption center1">
              <h>WELCOME to</h>
              <h1>{userName}</h1>
            </div>
            </div>
            
        </>
    )
}

export default Home