function Contact(){
    return( 
        <div className="contact">

      <h1>Contact Us</h1>

      <form className="form-box">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="5" placeholder="Message"></textarea>

        <button>Send Message</button>
      </form>

    </div>
    );
}
export default Contact;