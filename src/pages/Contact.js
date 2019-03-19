export default function Contact(){
    return `
    <form class="container" action="https://formspree.io/alharvey789@gmail.com" method="POST" />

    <label for="fname">First Name</label>
    <input type="text" name="fname" id="fname" required>

    <label for="lname">Last Name</label>
    <input type="text" name="lname" id="lname" required>

    <label for="email">Email</label>
    <input type="email" name="email" id="email" required>

    <label for="phone">Phone</label>
    <input type="tel" name="phone" id="phone" required>

    <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Please enter your message here"></textarea>

    <input type="submit" value="Submit">

    <input type="reset" value="Clear">
    </form>
    `;
}