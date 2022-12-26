// Fonction de chargement de la page
function loadPage() {
    // Récupération de l'élément div pour la page de chargement
    const loadingPage = document.querySelector('#loading-page');
    // Récupération de l'élément div pour le contenu principal du site
    const mainContent = document.querySelector('#main-content');
    
    // Affichage de la page de chargement
    loadingPage.style.display = 'flex';
    // Cache le contenu principal du site
    mainContent.style.display = 'none';
    
    // Simulation de la connexion au site
    setTimeout(function() {
    // Cacher la page de chargement
    loadingPage.style.display = 'none';
    // Afficher le contenu principal du site
    mainContent.style.display = 'block';
    }, 2000); // La connexion dure 5 secondes
    }
    
     // Chargement de la page au chargement de la page
     window.onload = loadPage;
    
     // Fonction de basculement du contenu des onglets
     function toggleContent(event) {
     // Récupération de l'onglet cliqué
     const clickedTab = event.target;
     // Récupération du contenu de l'onglet
     const content = clickedTab.nextElementSibling;
     
     // Si l'onglet est ouvert
     if (clickedTab.classList.contains('open')) {
     // Fermeture de l'onglet
     clickedTab.classList.remove('open');
     content.classList.remove('open');
     } else { // Si l'onglet est fermé
     // Fermeture de tous les onglets ouverts
     const openTabs = document.querySelectorAll('.right h2.open');
     openTabs.forEach(function(tab) {
     tab.classList.remove('open');
     tab.nextElementSibling.classList.remove('open');
     });
     
     // Ouverture de l'onglet cliqué
     clickedTab.classList.add('open');
     content.classList.add('open');
     }
     }
     
     // Récupération de tous les onglets
     const tabs = document.querySelectorAll('.right h2');
     // Ajout de l'évènement de basculement au clic sur chaque onglet
     tabs.forEach(function(tab) {
     tab.addEventListener('click', toggleContent);
     });



    