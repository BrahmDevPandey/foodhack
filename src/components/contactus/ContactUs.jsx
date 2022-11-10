import "./ContactUs.css";

const handleSubmit = (event) => {
  event.preventDefault();
  alert("Data submitted successfully.");
};

function ContactUs() {
  return (
    <section class="contact">
      <div class="content">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you!
          <br />
          Send us a message using the form, or email us.
        </p>
      </div>
      <div class="container">
        <div class="contactInfo">
          <div class="box">
            <div class="icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h3>Address</h3>
              <p>
                KIET Group of Institutions
                <br />
                Muradnagar, Ghaziabad
                <br />
                201206.
              </p>
            </div>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h3>Phone</h3>
              <p>
                9821932021
                <br />
                9565583235
              </p>
            </div>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div class="text">
              <h3>Email</h3>
              <p>
                dubeyanuj.june2406@gmail.com
                <br />
                brahm.2124mca1099@kiet.edu
              </p>
            </div>
          </div>
        </div>
        <div class="contactForm">
          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div class="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div class="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div class="inputBox">
              <textarea required="required"></textarea>
              <span>Type your Message...</span>
            </div>
            <div class="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
