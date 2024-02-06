import { Link } from "react-router-dom";

export function Success() {
    return (
        <>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
      <meta name="google-site-verification" content="OBHSOz2bJypVuqhse4EbUNPh6u4nlzaqmKaLoOryaqs" />
      <main>
        <div className="email-container">
          <div className="email-body">
            <div className="banner">
              <h4>Subscription Successful!</h4>
              <h1>We Feel <span>the Love</span></h1>
            </div>
            <div className="email-content">
              <p>Hi there!</p>
              <p>Thank you for subscribing. We're so excited to share the latest news and updates about our product with you. If you'd like to learn more, follow us on social media!</p>
              <Link to="/"><i className="fab fa-facebook-square"></i> Check us out on Facebook</Link><br/>
              <Link to="/"><i className="fab fa-twitter-square"></i> Follow Us on Twitter</Link>
              <hr/>
              <p>Sincerely,</p>
              <p className="sig">Bartick</p>
              <p>
                <em>Bartick M.</em>
                <br/>
                Customer Success Manager
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
);}