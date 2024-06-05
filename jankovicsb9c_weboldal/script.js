document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let privacyPolicy = document.getElementById('privacyPolicy').checked;

    if (name === '' || email === '' || !privacyPolicy) {
        alert('Kérjük, töltse ki az összes mezőt és fogadja el az adatvédelmi szabályzatot.');
        return;
    }

    alert('Köszönjük, hogy feliratkozott a hírlevelünkre!');
});