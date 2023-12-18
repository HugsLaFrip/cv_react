export const portfolio = [
    {
        id: 1,
        name: "Annuaire du personnel",
        languages: ['javascript', 'codeigniter'],
        languagesIcons: ['fab fa-php', 'fab fa-js-square', 'fab fa-bootstrap'],
        info: 'Annuaire du personnel réalisé à l\'aide du framework PHP CodeIgniter ainsi que du serveur Active Directory et du protocole LDAP. Le framework Bootstrap a servi à faire le CSS et la bibliothèque Jquery pour le JavaScript.',
        picture: './media/annuaire.png'
    },
    {
        id: 2,
        name: "Gestion de stocks",
        languages: ['codeigniter', 'javascript'],
        languagesIcons: ['fab fa-php', 'fab fa-js-square', 'fab fa-bootstrap'],
        info: 'Application de gestion de stocks à destination du personnel de cités universitaire créée avec le framework PHP CodeIgniter et d\'une base de données en MySQL. Partie client effectuée à l\'aide du framework CSS Bootstrap ainsi que de la bibliothèque JavaScript Jquery.',
        picture: './media/gestion-de-stocks.png'
    },
    {
        id: 3,
        name: "LaboLog",
        languages: ['javascript', 'symfony'],
        source: 'https://www.logtchercheurs.crous-aix-marseille.fr/',
        languagesIcons: ['fab fa-symfony', 'fab fa-js-square', 'fab fa-bootstrap'],
        info: 'LaboLog est un site web hôtelier conçu pour les enseignants-chercheurs et doctorants. Développé avec Symfony et Twig, l\'interaface utilisateur est réalisé à l\'aide de pure CSS et JavaScript ainsi que du framework Bootstrap. La partie administrateur a été conçu avec EasyAdmin et FullCalendar.',
        picture: './media/labolog.png'
    },
    {
        id: 4,
        name: "Formulaire courts séjours",
        languages: ['php', 'javascript'],
        languagesIcons: ['fab fa-php', 'fab fa-js-square', 'fab fa-bootstrap', 'fas fa-file-excel'],
        source: 'https://courts-sejours.crous-aix-marseille.fr/',
        info: 'Formulaire en ligne pour les étudiants désirant réserver un logement pour une courte durée. Il est développé en PHP pure et sylisé avec Bootstrap. Des requêtes AJAX permettent de récupérer les données contenues dans des fichiers XML.',
        picture: './media/courts-sejours.jpeg'
    },
    {
        id: 5,
        name: "Formulaire service social",
        languages: ['javascript', 'php'],
        languagesIcons: ['fab fa-php', 'fab fa-js-square', 'fab fa-bootstrap', 'fas fa-file-excel'],
        source: 'https://service-social.crous-aix-marseille.fr/index.php',
        info: 'Formulaire en ligne pour les étudiants qui souhaite prendre un rendez-vous avec une assistante sociale. Il est développé en PHP pure et sylisé avec Bootstrap. Des requêtes AJAX permettent de récupérer les données contenues dans des fichiers XML.',
        picture: './media/service-social.jpeg'
    },
    {
        id: 6,
        name: "Projet R&D",
        languages: ['javascript', 'python', 'reactjs'],
        languagesIcons: ['fab fa-python', 'fab fa-react', 'fas fa-file-excel'],
        info: 'Projet de Recherche et Développement en Python, Flask et React',
        picture: './media/projet-rd.png'
    },
]