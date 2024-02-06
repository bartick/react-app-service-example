import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Subscribe() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function Submit(e) {

        e.preventDefault();

        fetch('https://sellerkin1.bartick.me/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email})
        }).then(res => res.json()).catch(err => console.log(err));

        navigate("/success");
    }

    return (
        <>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
      <meta name="google-site-verification" content="OBHSOz2bJypVuqhse4EbUNPh6u4nlzaqmKaLoOryaqs" />
      <main>
        <div className="email-container">
          <div className="email-body">
            <div className="banner">
              <h4>Subscribe to the newsletter!</h4>
              <h2>Stop missing out <span>the Fun</span></h2>
            </div>
            <div className="email-subscribe">
                <form>
                    <input type="text" id="name" autoComplete="off" placeholder="Enter your name" onChange={e => setName(e.target.value)} required/>
                    <input type="email" id="email" autoComplete="off" placeholder="Enter your email address" onChange={e => setEmail(e.target.value)} required/>
                    <button type="submit" onClick={Submit}>Subscribe</button>
                </form>
            </div>
          </div>
        </div>
      </main>
    </>
)};