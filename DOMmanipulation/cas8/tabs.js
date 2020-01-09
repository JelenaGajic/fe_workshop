document.addEventListener('DOMContentLoaded', function() {

    // add defult class to home page
    document.getElementById('home').classList.add('active');

    // get navigation items
    var home = document.getElementById('home');
    var about = document.getElementById('about');
    var contact = document.getElementById('contact');

    // get individual content
    var homeContent = document.getElementById('home_content');
    var contactContent = document.getElementById('contact_content');
    var aboutContent = document.getElementById('about_content');

    // changing tabs
    function changeTabs (hideEl, hideAnotherEl, showEl, rmClassTab, rmClassTabAnohter) {
        hideEl.style.display = 'none';
        hideAnotherEl.style.display = 'none';
        showEl.style.display = 'block';
        rmClassTab.classList.remove('active');
        rmClassTabAnohter.classList.remove('active');
        // this.classList.add('active');
    }

    // add event listeners
    contact.addEventListener('click', function() {
        changeTabs(homeContent, aboutContent, contactContent, home, about);
        this.classList.add('active');
    });

    home.addEventListener('click', function() {
        changeTabs(contactContent, aboutContent, homeContent, contact, about);
        this.classList.add('active');

    });

    about.addEventListener('click', function() {
        changeTabs(contactContent, homeContent, aboutContent, home, contact);
        this.classList.add('active');
    });


    // contact.onclick = function() {
    //     // elements for hiding
    //     homeContent.style.display = 'none';
    //     aboutContent.style.display = 'none';
    //     // show content
    //     contactContent.style.display = 'block';
    //     // remove active border
    //     home.classList.remove('active');
    //     about.classList.remove('active');
    //     // add active
    //     this.classList.add('active');
    // }
    // home.onclick = function() {
    //     // hide elements
    //     contactContent.style.display = 'none';
    //     aboutContent.style.display = 'none';
    //     // show element
    //     home_content.style.display = 'block';
    //     // remove active border
    //     contact.classList.remove('active');
    //     about.classList.remove('active');
    //     // add active
    //     this.classList.add('active');
    // }
    // about.onclick = function() {
    //     // hide
    //     contactContent.style.display = 'none';
    //     homeContent.style.display = 'none';
    //     // show
    //     aboutContent.style.display = 'block';
    //     // remove
    //     contact.classList.remove('active');
    //     home.classList.remove('active');;
    //     this.classList.add('active');
    // }
});
