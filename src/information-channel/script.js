const arrayCards = document.querySelectorAll('.component-card-button')

arrayCards.forEach(component => {
    component.addEventListener('click', () => {
        switch (component.dir) {
            case 'own-office':
                window.location.replace('/information-channel/own-office/')
                break;

                case 'alliance-banking':
                window.location.replace('/information-channel/alliance-banking/')
                break;

                case 'pqrs':
                window.location.replace('/pqrs/')
                break;

                case 'new-products':
                window.location.replace('/information-channel/own-office/')
                break;
        
        }
    })
});