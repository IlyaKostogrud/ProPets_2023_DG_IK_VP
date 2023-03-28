import React, {createElement} from 'react';
import Feed_post from "../objects/feed_post";



const Home = () => {
    let number = 1
    return (
        <div className="Home">
            <div id="Home_array"/>
            <input type="button" value="Refresh" onClick={() => {
                let child = createElement("Feed_post",{});
                console.log(child.text)
                /*let node = document.createTextNode("This is a paragraph " + number);
                child.appendChild(node);*/
                document.getElementById("Home_array").appendChild(child);
                //number++
                }
            }/>
        </div>
    );
};

export default Home;