---
layout: post
title: Contact
permalink: /contact/
---
<style>
.contact-li {
    list-style: none;
}

.contact-input {
    width: 100%;
}

.contact-input:focus {
    outline:none;
    border-bottom: 1px solid #37c376;
}

.contact-label {
    display: block;
}

ul.contact-ul {
    margin: 0;
    padding: 10px;
}

 #submit {

    background-color: #37c376;
    opacity: 0.8;
    color: #eee;
    border: none;

}

#submit:hover {
    opacity: 1;
    cursor: pointer;
} 


#contact-form {
    border: 1px solid #aaa;
    margin-bottom: 1em;
}

</style>
While I have my email listed at the bottom, feel free to use this form to reach out to me (via formspree.io). I will respond as soon as I get it - typically within the day.

<form id="contact-form" class="form" action="https://formspree.io/{{site.email}}" method="POST" enctype="multipart/form-data">
        <ul class="contact-ul">
            <li class="contact-li">
                <label class="contact-label" for="name">Name:</label>
                <input type="text" placeholder="Your name" id="name" class="contact-input" name="name" tabindex="1"/>
            </li>
            <li class="contact-li">
                <label class="contact-label" for="email">Email:</label>
                <input type="email" placeholder="Your email" id="email" class="contact-input" name="email" tabindex="2"/>
            </li>
            <li class="contact-li">
                <label class="contact-label" for="message">Message:</label>
                <textarea class="contact-textarea" placeholder="Your message" class="contact-input" rows="4" id="message" name="message" tabindex="3"></textarea>
            </li>
            <input class="button" type="submit" value="Send" id="submit"/>
        </ul>
       
</form>
