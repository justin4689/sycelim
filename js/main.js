/* ============================================================
   Sycelim Technologies — Main JavaScript
   ============================================================ */

/* === TRANSLATIONS === */
const T = {
  fr: {
    /* NAV */
    'nav.home':     'Accueil',
    'nav.services': 'Services',
    'nav.method':   'Méthode',
    'nav.work':     'Réalisations',
    'nav.news':     'Actualités',
    'nav.about':    'À propos',
    'nav.team':     'Équipe',
    'nav.cta':      'Demander un devis',

    /* HERO */
    'hero.eyebrow':      'Ingénierie logicielle · Abidjan',
    'hero.title':        'Nous construisons les systèmes logiciels sur lesquels reposent les entreprises.',
    'hero.subtitle':     'Plateformes métiers, applications connectées et API robustes. Conçues sur mesure, avec une rigueur d\'ingénierie : architecture, qualité, scalabilité et sécurité.',
    'hero.cta.quote':    'Demander un devis',
    'hero.cta.work':     'Voir nos réalisations',
    'hero.badge':        'Lauréat Orange Fab Côte d\'Ivoire — Saison 1',
    'hero.stat1.num':    '05+',
    'hero.stat1.label':  'Organismes mutualistes équipés de nos plateformes',
    'hero.stat2.num':    'UEMOA',
    'hero.stat2.label':  'Systèmes alignés sur la conformité réglementaire régionale',
    'hero.tag1': 'Architecture', 'hero.tag2': 'Qualité',
    'hero.tag3': 'Scalabilité',  'hero.tag4': 'Sécurité',

    /* CLIENTS */
    'clients.label': 'Ils nous confient leurs opérations critiques',

    /* FIGURES */
    'figures.eyebrow':   'En chiffres',
    'figures.title':     'Sycelim en quelques repères',
    'figures.2009.label':  'Origine de l\'activité',
    'figures.2015.label':  'Forme actuelle de la société',
    'figures.5a.label':    'Attestations de Bonne Exécution',
    'figures.5b.label':    'Organismes mutualistes équipés',
    'figures.4.label':     'Opérateurs Mobile Money intégrés',
    'figures.1er.label':   'Lauréat Orange Fab Côte d\'Ivoire — Saison 1',

    /* PROBLEM / SOLUTION */
    'ps.eyebrow':           'Constat',
    'ps.title':             'Un système mal conçu coûte plus cher qu\'il ne rapporte.',
    'ps.problem.label':     'Ce qui freine les entreprises',
    'ps.problem.1':         'Des logiciels rigides qui ne suivent plus la réalité du métier.',
    'ps.problem.2':         'Des projets qui dérapent : budgets dépassés, délais glissants, maintenance difficile.',
    'ps.problem.3':         'Une dette technique qui bloque chaque nouvelle évolution.',
    'ps.problem.4':         'Une sécurité et une conformité traitées après coup.',
    'ps.solution.label':    'La réponse Sycelim',
    'ps.solution.1':        'Des systèmes conçus autour de vos processus, et non l\'inverse.',
    'ps.solution.2':        'Une architecture pensée en amont, pour l\'échelle et la durée.',
    'ps.solution.3':        'Un développement industrialisé : testé, documenté, maintenable.',
    'ps.solution.4':        'La sécurité et la conformité intégrées dès la conception.',

    /* PILLARS */
    'pillars.eyebrow': 'Nos principes',
    'pillars.title':   'Trois principes derrière chaque système que nous livrons.',
    'pillar.1.title':  'L\'ingénierie d\'abord',
    'pillar.1.desc':   'Nous concevons avant de coder. Architecture, modèles de données et arbitrages sont décidés en conscience — pour que le système tienne dans la durée.',
    'pillar.2.title':  'Le sur-mesure, vraiment',
    'pillar.2.desc':   'Aucun compromis sur étagère. Chaque solution épouse vos règles métier, vos flux de travail et vos contraintes réelles.',
    'pillar.3.title':  'Sécurité & qualité',
    'pillar.3.desc':   'Tests automatisés, revue de code, API durcies et conformité. La fiabilité n\'est pas une option : elle est intégrée.',

    /* SERVICES */
    'services.eyebrow': 'Expertise',
    'services.title':   'Cinq façons d\'ingénierie au service de votre métier.',
    'services.more':    'Voir tous les services',
    'services.link':    'En savoir plus →',
    'svc.1.title': 'Solutions métiers sur mesure',
    'svc.1.desc':  'Des logiciels qui épousent vos processus et suppriment la friction manuelle.',
    'svc.2.title': 'Plateformes web complexes',
    'svc.2.desc':  'Des portails multi-acteurs pensés pour l\'échelle, avec rôles et flux riches.',
    'svc.3.title': 'Applications mobiles connectées',
    'svc.3.desc':  'Des applications terrain synchronisées avec votre back-office.',
    'svc.4.title': 'API & systèmes backend',
    'svc.4.desc':  'Des API sécurisées et documentées qui font dialoguer vos systèmes.',
    'svc.5.title': 'Modernisation & refonte',
    'svc.5.desc':  'Nous remettons à niveau les systèmes vieillissants, sans rupture.',

    /* METHOD */
    'method.eyebrow':  'Méthode',
    'method.title':    'Un chemin industrialisé, du besoin à la production.',
    'method.link':     'Voir la méthode complète',
    'step.1': 'Analyse',
    'step.2': 'Architecture',
    'step.3': 'Développement',
    'step.4': 'Qualité',
    'step.5': 'Déploiement',
    'step.6': 'Maintenance',

    /* CASE STUDIES */
    'work.eyebrow': 'Réalisations',
    'work.title':   'Des systèmes en production, dans des secteurs exigeants.',
    'work.link':    'Voir toutes les réalisations',
    'case.1.title': 'Carte Unique & Intelligente',
    'case.1.desc':  'Plateforme unifiée : adhésions, cotisations, prestations, facturation et décisionnel.',
    'case.2.title': 'Assurance santé intégrée',
    'case.2.desc':  'Solution sur ERP Odoo et app web prestataires reliée par API sécurisées.',
    'case.3.title': 'Recouvrement & paiement en ligne',
    'case.3.desc':  'Gestion d\'assurance santé avec paiements mobile, carte et PayPal.',

    /* TECH */
    'tech.eyebrow': 'Technologies',
    'tech.title':   'Des outils éprouvés, choisis pour le problème.',
    'tech.intro':   'La technologie est un moyen. Nous choisissons chaque outil pour sa fiabilité et sa pertinence — puis nous l\'exploitons avec rigueur.',

    /* INTEGRATIONS */
    'integ.eyebrow':  'Intégrations à valeur ajoutée',
    'integ.title':    'Connectés à l\'écosystème numérique de la région.',
    'int.1.title':    'Services Orange USSD & SMS',
    'int.1.desc':     'Sycelim a intégré avec Orange Côte d\'Ivoire des services USSD et SMS accessibles à tous les abonnés, sans smartphone ni application.',
    'int.2.title':    'Paiement Mobile Money',
    'int.2.desc':     'API de paiement Mobile Money des opérateurs Orange Money, MTN, Moov et Wave intégrées dans nos solutions.',

    /* ORANGE FAB */
    'fab.eyebrow': 'Distinction',
    'fab.title':   'Lauréat Orange Fab Côte d\'Ivoire — Saison 1',
    'fab.desc':    'Orange Fab Côte d\'Ivoire, lancé en 2014, est le premier accélérateur du groupe Orange en Afrique. Sycelim Technologies figure parmi les lauréats de la première saison — mentorat, accès aux API Orange et visibilité internationale.',
    'fab.num':     '1er',
    'fab.sub':     'Lauréat · Saison 1',

    /* FINAL CTA */
    'cta.title':  'Vous avez un projet complexe. Nous avons l\'ingénierie pour le livrer.',
    'cta.sub':    'Dites-nous où vous voulez aller. Nous revenons vers vous avec une réponse claire, structurée — et un devis.',
    'cta.btn':    'Demander un devis',

    /* FOOTER */
    'footer.tagline':         'Ingénierie logicielle pour systèmes d\'entreprise sur mesure. Architecture, qualité, scalabilité et sécurité.',
    'footer.nav':             'Navigation',
    'footer.expertise':       'Expertise',
    'footer.contact':         'Contact',
    'footer.exp.1':           'Solutions métiers',
    'footer.exp.2':           'Plateformes web',
    'footer.exp.3':           'Applications mobiles',
    'footer.exp.4':           'API & backend',
    'footer.exp.5':           'Modernisation',
    'footer.copy':            '© Sycelim Technologies — Abidjan, Côte d\'Ivoire · Société d\'ingénierie logicielle',
    'footer.faq':             'FAQ',
    'footer.legal':           'Mentions légales',
    'footer.privacy':         'Confidentialité',
    'footer.cgu':             'CGU',

    /* CONTACT PAGE */
    'contact.eyebrow':        'Demander un devis',
    'contact.title':          'Parlez-nous de votre projet.',
    'contact.lead':           'Décrivez ce que vous voulez construire ou corriger. Nous revenons vers vous avec une réponse claire, structurée — et un devis.',
    'form.name':              'Nom complet',
    'form.org':               'Organisation',
    'form.email':             'Email professionnel',
    'form.phone':             'Téléphone',
    'form.need':              'De quoi avez-vous besoin ?',
    'form.need.opt0':         'Choisissez un type de projet',
    'form.need.opt1':         'Solution métier sur mesure',
    'form.need.opt2':         'Plateforme web complexe',
    'form.need.opt3':         'Application mobile connectée',
    'form.need.opt4':         'API & système backend',
    'form.need.opt5':         'Modernisation / refonte',
    'form.need.opt6':         'Je ne sais pas encore — échangeons',
    'form.budget':            'Budget indicatif',
    'form.budget.opt0':       'Choisissez une fourchette',
    'form.budget.opt1':       'À définir',
    'form.budget.opt2':       '< 5M FCFA',
    'form.budget.opt3':       '5 – 20M FCFA',
    'form.budget.opt4':       '20 – 50M FCFA',
    'form.budget.opt5':       '> 50M FCFA',
    'form.project':           'Décrivez votre projet',
    'form.project.ph':        'Contexte, objectif, contraintes, échéance souhaitée…',
    'form.submit':            'Envoyer ma demande',
    'form.note':              'Réponse sous 48 h ouvrées.',
    'form.success':           'Demande bien reçue. Merci. Notre équipe étudie votre projet et revient vers vous sous 48 h ouvrées.',
    'form.error':             'Une erreur s\'est produite. Écrivez-nous directement à contact@sycelim.com.',
    'contact.assurance.title': 'Nos engagements',
    'contact.assurance.1':    'Une réponse structurée, pas un argumentaire commercial.',
    'contact.assurance.2':    'Vos informations restent confidentielles.',
    'contact.assurance.3':    'Aucun engagement avant que le périmètre soit clair.',

    /* SERVICES PAGE — detailed */
    'svc.1.long': 'Des logiciels conçus autour du fonctionnement réel de votre organisation — vos règles, vos rôles, vos flux de travail.',
    'svc.1.prob': 'Tableurs et outils déconnectés ne suivent plus. Les étapes manuelles multiplient les erreurs et ralentissent chaque décision.',
    'svc.1.sol':  'Nous modélisons vos processus et bâtissons un système unique qui les automatise — avec les bons accès pour chaque rôle.',
    'svc.1.res':  'Moins d\'erreurs, des opérations plus rapides, et une source de vérité unique pour vos équipes.',
    'svc.2.long': 'Des portails multi-acteurs qui réunissent adhérents, prestataires, gestionnaires et partenaires sur une plateforme sécurisée.',
    'svc.2.prob': 'Des acteurs aux besoins différents, mais une information cloisonnée qui ne se réconcilie jamais.',
    'svc.2.sol':  'Nous concevons une plateforme scalable avec rôles riches, flux temps réel et un modèle de données clair et traçable.',
    'svc.2.res':  'Chaque acteur travaille sur la même plateforme fiable — qui grandit avec votre activité.',
    'svc.3.long': 'Des applications pour le terrain, synchronisées en temps réel avec votre back-office et vos API.',
    'svc.3.prob': 'Vos équipes et vos adhérents sont mobiles, mais vos outils supposent que chacun reste à son bureau.',
    'svc.3.sol':  'Nous développons des apps multiplateformes reliées par API sécurisées, avec mode hors-ligne et synchronisation fiable.',
    'svc.3.res':  'Des services qui suivent vos utilisateurs partout — et des données qui restent cohérentes.',
    'svc.4.long': 'Les fondations robustes et sécurisées qui permettent à vos systèmes d\'échanger des données en confiance — en interne et avec vos partenaires.',
    'svc.4.prob': 'Des intégrations fragiles et non documentées. Chaque nouvelle connexion devient un risque.',
    'svc.4.sol':  'Nous concevons des API documentées, versionnées et sécurisées, et les services backend qui les portent.',
    'svc.4.res':  'Des intégrations fiables, extensibles et auditables — au lieu de redoutées.',
    'svc.5.long': 'Nous remettons les systèmes vieillissants au niveau des standards actuels — sans rompre les opérations qui en dépendent.',
    'svc.5.prob': 'Un système hérité fait encore tourner l\'activité, mais il est risqué, lent et impossible à faire évoluer.',
    'svc.5.sol':  'Nous auditons, sécurisons et reconstruisons progressivement — en migrant la valeur sans rupture brutale.',
    'svc.5.res':  'Un système moderne et maintenable — et une activité qui ne s\'arrête jamais.',
    'svc.prob.label':        'Problème',
    'svc.sol.label':         'Solution',
    'svc.res.label':         'Résultat',
    'svc.cta':               'Discuter de votre projet',
    'svc.uncertainty.title': 'Vous ne savez pas de quelle expertise relève votre projet ?',
    'svc.uncertainty.desc':  'Décrivez-le nous. Nous vous aidons à le cadrer — et revenons avec un périmètre clair et un devis.',
    'svc.uncertainty.cta':   'Parler à un expert',

    /* MÉTHODE PAGE */
    'methode.eyebrow': 'Méthode',
    'methode.title':   'Nous n\'improvisons pas le logiciel. Nous l\'ingénions.',
    'methode.lead':    'Un chemin structuré et industrialisé, du besoin à la production — conçu pour garder le contrôle des projets complexes, sur tous les fronts : périmètre, qualité, sécurité et délais.',
    'methode.p1.title': 'La rigueur, pas l\'improvisation',
    'methode.p1.desc':  'Les décisions sont documentées, traçables et délibérées — jamais prises à la volée.',
    'methode.p2.title': 'Un développement industrialisé',
    'methode.p2.desc':  'Versionnage, revue de code, tests automatisés et intégration continue : la qualité est dans la chaîne.',
    'methode.p3.title': 'Visible à chaque étape',
    'methode.p3.desc':  'Itérations courtes et points réguliers vous gardent maîtres du périmètre et du budget.',
    'methode.quote':    'Une méthode faite pour les projets qui ne peuvent pas échouer.',
    'step.del.label':  'Livrables',
    'step.1.short':    'Analyse',
    'step.2.short':    'Architecture',
    'step.3.short':    'Développement',
    'step.4.short':    'Qualité',
    'step.5.short':    'Déploiement',
    'step.6.short':    'Maintenance',
    'step.1.title':    'Analyse des besoins',
    'step.1.desc':     'Nous commençons par comprendre votre métier, pas une liste de fonctionnalités. Nous cartographions processus, contraintes, acteurs et risques — et les traduisons en exigences claires et priorisées.',
    'step.1.del.1':    'Cahier des charges fonctionnel & périmètre',
    'step.1.del.2':    'Cartographie des processus & des données',
    'step.1.del.3':    'Évaluation des risques & conformité',
    'step.2.title':    'Conception de l\'architecture',
    'step.2.desc':     'Avant la moindre ligne de code de production, nous concevons le système : modèle de données, services, intégrations et sécurité. C\'est ici que se décident la scalabilité et la durée de vie.',
    'step.2.del.1':    'Architecture technique & modèle de données',
    'step.2.del.2':    'Plan d\'intégration & de sécurité',
    'step.2.del.3':    'Choix technologiques, justifiés',
    'step.3.title':    'Développement agile',
    'step.3.desc':     'Nous développons en itérations courtes, avec des incréments fonctionnels que vous voyez et pilotez. Revue de code et versionnage sont non négociables à chaque livraison.',
    'step.3.del.1':    'Incréments fonctionnels à chaque sprint',
    'step.3.del.2':    'Revue de code systématique',
    'step.3.del.3':    'Points d\'avancement réguliers',
    'step.4.title':    'Tests & assurance qualité',
    'step.4.desc':     'La qualité n\'est pas une phase finale — elle court tout du long. Tests automatisés, QA manuelle et contrôles de sécurité valident chaque livraison avant publication.',
    'step.4.del.1':    'Couverture de tests automatisés & manuels',
    'step.4.del.2':    'Revue de sécurité & de performance',
    'step.4.del.3':    'Recette avec vos équipes',
    'step.5.title':    'Déploiement',
    'step.5.desc':     'Nous mettons le système en production de façon fiable et réversible, avec supervision dès le premier jour — pour que la mise en ligne soit un événement maîtrisé, pas un saut dans le vide.',
    'step.5.del.1':    'Mise en production contrôlée',
    'step.5.del.2':    'Supervision & alertes',
    'step.5.del.3':    'Documentation & transfert d\'équipe',
    'step.6.title':    'Maintenance évolutive',
    'step.6.desc':     'Un système est vivant. Nous le maintenons sûr, performant et aligné sur votre métier qui évolue — avec une relation de support claire et responsable.',
    'step.6.del.1':    'Maintenance corrective & évolutive',
    'step.6.del.2':    'Mises à jour de sécurité',
    'step.6.del.3':    'Feuille de route des nouveaux besoins',

    /* PAGES */
    'services.page.title':    'L\'ingénierie logicielle, structurée autour de vos problèmes.',
    'services.page.lead':     'Cinq expertises complémentaires. Chacune part d\'un problème métier et se termine par un résultat mesurable — jamais d\'une technologie.',
    'method.page.title':      'Nous n\'improvisons pas le logiciel. Nous l\'ingénions.',
    'method.page.lead':       'Un chemin structuré et industrialisé, du besoin à la production — conçu pour garder le contrôle des projets complexes, sur tous les fronts.',
    'work.page.title':        'Des systèmes en production, là où l\'erreur n\'est pas permise.',
    'work.page.lead':         'Une expérience concentrée dans le secteur mutualiste et l\'assurance santé — adhésions, cotisations, prestations, paiements et conformité réglementaire.',
    'news.page.title':        'Ce que nous pensons d\'un logiciel fait pour durer.',
    'news.page.lead':         'Notes d\'ingénierie, méthode et leçons de terrain, tirées des systèmes que nous construisons et exploitons.',
    'about.page.title':       'Une société d\'ingénierie logicielle — pas une agence web.',
    'about.page.lead':        'Basée à Abidjan, Sycelim Technologies conçoit et développe les systèmes logiciels sur mesure dont dépendent les organisations exigeantes.',
    'team.page.title':        'Les personnes qui répondent de ce que nous construisons.',
    'team.page.lead':         'Une équipe d\'ingénieurs complémentaires, organisée par responsabilité. Chaque rôle protège une dimension de votre projet.',
    'faq.page.title':         'Des réponses claires, avant même de se parler.',
    'faq.page.lead':          'Les questions que les organisations nous posent le plus souvent.',
    'read.more':              'Lire l\'article',

    /* RÉALISATIONS PAGE */
    'real.eyebrow': 'Réalisations',
    'real.title':   'Des systèmes en production, là où l\'erreur n\'est pas permise.',
    'real.lead':    'Une expérience concentrée dans le secteur mutualiste et l\'assurance santé — adhésions, cotisations, prestations, paiements et conformité réglementaire.',
    'real.prob.label': 'Problème',
    'real.sol.label':  'Solution',
    'real.imp.label':  'Impact',
    'real.refs.eyebrow': 'Références',
    'real.refs.title':   'Attestations de Bonne Exécution',
    'real.refs.desc':    'Toutes délivrées par des mutuelles et organismes d\'assurance santé ivoiriens — solutions en production.',
    'real.cta.title': 'Votre projet mérite la même rigueur.',

    /* ACTUALITÉS PAGE */
    'act.eyebrow':   'Actualités & points de vue',
    'act.title':     'Ce que nous pensons d\'un logiciel fait pour durer.',
    'act.lead':      'Notes d\'ingénierie, méthode et leçons de terrain, tirées des systèmes que nous construisons et exploitons.',
    'act.1.title':   'Pourquoi nous nous disons « société d\'ingénierie », pas « agence web »',
    'act.1.excerpt': 'La différence n\'est pas qu\'une question de mots : elle change la façon dont un logiciel est pensé, construit et tenu dans la durée.',
    'act.2.title':   'La sécurité ne se rajoute pas à la fin : elle se conçoit dès le premier jour',
    'act.2.excerpt': 'Traiter la sécurité comme une étape finale, c\'est déjà avoir perdu. Dans un système qui gère des données sensibles, la protection est une décision d\'architecture.',
    'act.3.title':   'La dette technique : le coût caché qui finit par tout ralentir',
    'act.3.excerpt': 'Un logiciel qui devient de plus en plus lent à faire évoluer n\'a pas un problème de vitesse : il a un problème de dette. Voici comment nous l\'évitons — et comment la résorber.',
    'act.cta.title': 'Ces réflexions s\'appliquent-elles à votre projet ?',

    /* À PROPOS PAGE */
    'about.eyebrow':        'À propos de Sycelim',
    'about.title':          'Une société d\'ingénierie logicielle — pas une agence web.',
    'about.lead':           'Basée à Abidjan, Sycelim Technologies conçoit et développe les systèmes logiciels sur mesure dont dépendent les organisations exigeantes.',
    'about.history.title':  'Notre histoire',
    'about.vision.title':   'Notre vision',
    'about.pos.title':      'Notre positionnement',
    'about.pos.no.label':   'Ce que nous ne sommes pas',
    'about.pos.yes.label':  'Ce que nous sommes',
    'about.org.title':      'Notre organisation',
    'about.org.sub':        'Une équipe resserrée, structurée autour de la responsabilité.',
    'about.culture.title':  'Culture de qualité',
    'about.culture.sub':    'Ce que nous exigeons de nous-mêmes.',
    'about.fab.title':      'Lauréat Orange Fab Côte d\'Ivoire — Saison 1',
    'about.cta.title':      'Construisons quelque chose qui dure.',

    /* ÉQUIPE PAGE */
    'team.eyebrow':        'L\'équipe',
    'team.title':          'Les personnes qui répondent de ce que nous construisons.',
    'team.lead':           'Une équipe d\'ingénieurs complémentaires, organisée par responsabilité. Chaque rôle protège une dimension de votre projet — architecture, sécurité, qualité et livraison.',
    'team.roles.title':    'Profils par rôle',
    'team.roles.sub':      'Chaque rôle existe pour protéger une dimension de votre projet.',
    'team.stats.title':    'Mode de collaboration',
    'team.stats.sub':      'La bonne équipe pour le problème — jamais surdimensionnée.',
    'team.cta.title':      'Vous voulez mettre cette équipe sur votre projet ?',

    /* CONTACT PAGE */
    'contact.eyebrow':     'Demander un devis',
    'contact.title':       'Parlez-nous de votre projet.',
    'contact.lead':        'Décrivez ce que vous voulez construire ou corriger. Nous revenons vers vous avec une réponse claire, structurée — et un devis.',
    'contact.assurance.title': 'Nos engagements',
    'contact.assurance.1': 'Une réponse structurée, pas un argumentaire commercial.',
    'contact.assurance.2': 'Vos informations restent confidentielles.',
    'contact.assurance.3': 'Aucun engagement avant que le périmètre soit clair.',
    'contact.info.title':  'Contact direct',
    'form.name':           'Nom complet',
    'form.org':            'Organisation',
    'form.email':          'Email professionnel',
    'form.phone':          'Téléphone',
    'form.need':           'De quoi avez-vous besoin ?',
    'form.need.opt0':      'Choisissez un type de projet',
    'form.need.opt1':      'Solution métier sur mesure',
    'form.need.opt2':      'Plateforme web complexe',
    'form.need.opt3':      'Application mobile connectée',
    'form.need.opt4':      'API & système backend',
    'form.need.opt5':      'Modernisation / refonte',
    'form.need.opt6':      'Je ne sais pas encore — échangeons',
    'form.budget':         'Budget indicatif',
    'form.budget.opt0':    'Choisissez une fourchette',
    'form.budget.opt1':    'À définir',
    'form.budget.opt2':    '< 5M FCFA',
    'form.budget.opt3':    '5 – 20M FCFA',
    'form.budget.opt4':    '20 – 50M FCFA',
    'form.budget.opt5':    '> 50M FCFA',
    'form.project':        'Décrivez votre projet',
    'form.project.ph':     'Contexte, objectif, contraintes, échéance souhaitée…',
    'form.submit':         'Envoyer ma demande',
    'form.note':           'Réponse sous 48 h ouvrées.',
    'form.success':        'Demande bien reçue. Merci. Notre équipe étudie votre projet et revient vers vous sous 48 h ouvrées avec une réponse structurée.',
    'form.error':          'Une erreur s\'est produite. Écrivez-nous directement à contact@sycelim.com.',

    /* FAQ PAGE */
    'faq.eyebrow': 'Questions fréquentes',
    'faq.title':   'Des réponses claires, avant même de se parler.',
    'faq.lead':    'Les questions que les organisations nous posent le plus souvent sur notre façon de travailler, ce que nous construisons et le déroulé d\'un projet.',
    'faq.cta.title': 'Une question sans réponse ici ?',

    /* LEGAL PAGES */
    'legal.updated': 'Dernière mise à jour :',
    'legal.ml.title':  'Mentions légales',
    'legal.conf.title': 'Politique de confidentialité',
    'legal.cgu.title':  'Conditions générales d\'utilisation',
  },

  en: {
    /* NAV */
    'nav.home':     'Home',
    'nav.services': 'Services',
    'nav.method':   'Method',
    'nav.work':     'Case studies',
    'nav.news':     'News',
    'nav.about':    'About',
    'nav.team':     'Team',
    'nav.cta':      'Request a quote',

    /* HERO */
    'hero.eyebrow':      'Software engineering · Abidjan',
    'hero.title':        'We build the software systems enterprises run on.',
    'hero.subtitle':     'Business platforms, connected applications and robust APIs — engineered to measure with architectural rigour: quality, scalability and security.',
    'hero.cta.quote':    'Request a quote',
    'hero.cta.work':     'View our work',
    'hero.badge':        'Winner, Orange Fab Côte d\'Ivoire — Season 1',
    'hero.stat1.num':    '05+',
    'hero.stat1.label':  'Mutual-insurance organisations equipped with our platforms',
    'hero.stat2.num':    'UEMOA',
    'hero.stat2.label':  'Systems aligned with regional regulatory compliance',
    'hero.tag1': 'Architecture', 'hero.tag2': 'Quality',
    'hero.tag3': 'Scalability',  'hero.tag4': 'Security',

    /* CLIENTS */
    'clients.label': 'Trusted to run critical operations',

    /* FIGURES */
    'figures.eyebrow':   'By the numbers',
    'figures.title':     'Sycelim at a glance',
    'figures.2009.label':  'Origin of the activity',
    'figures.2015.label':  'Current form of the company',
    'figures.5a.label':    'Certificates of Satisfactory Completion',
    'figures.5b.label':    'Mutual-insurance organisations equipped',
    'figures.4.label':     'Mobile Money operators integrated',
    'figures.1er.label':   'Winner of Orange Fab Côte d\'Ivoire — Season 1',

    /* PROBLEM / SOLUTION */
    'ps.eyebrow':           'Reality check',
    'ps.title':             'A poorly engineered system costs more than it returns.',
    'ps.problem.label':     'What slows enterprises down',
    'ps.problem.1':         'Rigid software that no longer matches how the business actually works.',
    'ps.problem.2':         'Projects that drift — over budget, late, hard to maintain.',
    'ps.problem.3':         'Accumulated technical debt that blocks every new evolution.',
    'ps.problem.4':         'Security and compliance treated as an afterthought.',
    'ps.solution.label':    'How Sycelim responds',
    'ps.solution.1':        'Systems designed around your processes — not the other way around.',
    'ps.solution.2':        'Architecture thought through up front, for scale and longevity.',
    'ps.solution.3':        'Industrialised development: tested, documented, maintainable.',
    'ps.solution.4':        'Security and compliance built into the engineering from day one.',

    /* PILLARS */
    'pillars.eyebrow': 'Our principles',
    'pillars.title':   'Three principles behind every system we deliver.',
    'pillar.1.title':  'Engineering first',
    'pillar.1.desc':   'We design before we code. Architecture, data models and trade-offs are decided deliberately — so the system holds as it grows.',
    'pillar.2.title':  'Genuinely bespoke',
    'pillar.2.desc':   'No off-the-shelf compromise. Each solution is shaped around your business rules, your workflows and your real constraints.',
    'pillar.3.title':  'Security & quality',
    'pillar.3.desc':   'Automated testing, code review, hardened APIs and compliance. Reliability is not optional — it is engineered in.',

    /* SERVICES */
    'services.eyebrow': 'Expertise',
    'services.title':   'Five ways we engineer software that matters.',
    'services.more':    'See all services',
    'services.link':    'Learn more →',
    'svc.1.title': 'Custom business systems',
    'svc.1.desc':  'Software that mirrors your processes and removes manual friction.',
    'svc.2.title': 'Complex web platforms',
    'svc.2.desc':  'Multi-actor portals built to scale, with rich roles and workflows.',
    'svc.3.title': 'Connected mobile apps',
    'svc.3.desc':  'Field-ready mobile experiences synchronised with your back office.',
    'svc.4.title': 'APIs & backend systems',
    'svc.4.desc':  'Secure, documented APIs that let your systems talk to each other.',
    'svc.5.title': 'Modernisation & rebuilds',
    'svc.5.desc':  'We rescue ageing systems and bring them up to current standards.',

    /* METHOD */
    'method.eyebrow':  'Method',
    'method.title':    'An industrialised path from need to production.',
    'method.link':     'See the full method',
    'step.1': 'Analysis',
    'step.2': 'Architecture',
    'step.3': 'Agile build',
    'step.4': 'Quality',
    'step.5': 'Deployment',
    'step.6': 'Evolution',

    /* CASE STUDIES */
    'work.eyebrow': 'Selected work',
    'work.title':   'Systems in production, in demanding sectors.',
    'work.link':    'View all case studies',
    'case.1.title': 'Single Smart Card',
    'case.1.desc':  'A unified platform for memberships, contributions, claims, billing and BI.',
    'case.2.title': 'Integrated health insurance',
    'case.2.desc':  'An Odoo-based solution plus a secure provider web app connected by APIs.',
    'case.3.title': 'Claims & online payment',
    'case.3.desc':  'Health-insurance management with mobile money, card and PayPal payments.',

    /* TECH */
    'tech.eyebrow': 'Technologies',
    'tech.title':   'Proven tools, chosen for the problem.',
    'tech.intro':   'Technology is a means. We pick each tool for reliability, longevity and fit — then engineer with discipline.',

    /* INTEGRATIONS */
    'integ.eyebrow':  'Value-added integrations',
    'integ.title':    'Connected to the region\'s digital ecosystem.',
    'int.1.title':    'Orange USSD & SMS services',
    'int.1.desc':     'Sycelim integrated with Orange Côte d\'Ivoire value-added USSD and SMS services accessible to all subscribers, with no smartphone or app required.',
    'int.2.title':    'Mobile Money payments',
    'int.2.desc':     'Mobile Money payment APIs from Orange Money, MTN, Moov and Wave integrated into our solutions.',

    /* ORANGE FAB */
    'fab.eyebrow': 'Recognition',
    'fab.title':   'Winner, Orange Fab Côte d\'Ivoire — Season 1',
    'fab.desc':    'Orange Fab Côte d\'Ivoire, launched in 2014, is the Orange group\'s first accelerator in Africa. Sycelim Technologies is among the winners of the first season — mentoring, access to Orange APIs and international visibility.',
    'fab.num':     '1st',
    'fab.sub':     'Winner · Season 1',

    /* FINAL CTA */
    'cta.title':  'You have a complex project. We have the engineering to deliver it.',
    'cta.sub':    'Tell us where you want to go. We\'ll come back with a clear, structured response — and a quote.',
    'cta.btn':    'Request a quote',

    /* FOOTER */
    'footer.tagline':         'Software engineering for custom enterprise systems. Architecture, quality, scale and security.',
    'footer.nav':             'Navigation',
    'footer.expertise':       'Expertise',
    'footer.contact':         'Contact',
    'footer.exp.1':           'Business systems',
    'footer.exp.2':           'Web platforms',
    'footer.exp.3':           'Mobile apps',
    'footer.exp.4':           'APIs & backend',
    'footer.exp.5':           'Modernisation',
    'footer.copy':            '© Sycelim Technologies — Abidjan, Côte d\'Ivoire · Software engineering company',
    'footer.faq':             'FAQ',
    'footer.legal':           'Legal notice',
    'footer.privacy':         'Privacy policy',
    'footer.cgu':             'Terms of use',

    /* SERVICES PAGE — detailed */
    'svc.1.long': 'Software built around how your organisation actually works — your rules, your roles, your workflows.',
    'svc.1.prob': 'Spreadsheets and disconnected tools no longer keep up. Manual steps multiply errors and slow every decision.',
    'svc.1.sol':  'We model your processes and build a single system that automates them — with the right access for every role.',
    'svc.1.res':  'Fewer errors, faster operations, and a single source of truth for your teams.',
    'svc.2.long': 'Multi-actor portals that bring members, providers, managers and partners together on one secure platform.',
    'svc.2.prob': 'Different actors with different needs, but siloed data that never reconciles.',
    'svc.2.sol':  'We design a scalable platform with rich roles, real-time flows and a clear, traceable data model.',
    'svc.2.res':  'Every actor works on the same reliable platform — one that grows with your activity.',
    'svc.3.long': 'Field applications, synchronised in real time with your back office and your APIs.',
    'svc.3.prob': 'Your teams and members are mobile, but your tools assume everyone stays at a desk.',
    'svc.3.sol':  'We build cross-platform apps connected by secure APIs, with offline mode and reliable sync.',
    'svc.3.res':  'Services that follow your users wherever they are — with data that stays consistent.',
    'svc.4.long': 'Robust, secure foundations that let your systems exchange data with confidence — internally and with partners.',
    'svc.4.prob': 'Fragile, undocumented integrations. Every new connection is a risk.',
    'svc.4.sol':  'We design documented, versioned, secure APIs and the backend services that carry them.',
    'svc.4.res':  'Integrations that are reliable, extensible and auditable — not dreaded.',
    'svc.5.long': 'We bring ageing systems up to current standards — without breaking the operations that depend on them.',
    'svc.5.prob': 'A legacy system still runs the business, but it is slow, risky and impossible to evolve.',
    'svc.5.sol':  'We audit, secure and rebuild incrementally — migrating value without a brutal cutover.',
    'svc.5.res':  'A modern, maintainable system — and an operation that never stops.',
    'svc.prob.label':        'Problem',
    'svc.sol.label':         'Solution',
    'svc.res.label':         'Result',
    'svc.cta':               'Discuss your project',
    'svc.uncertainty.title': 'Not sure which area of expertise your project falls under?',
    'svc.uncertainty.desc':  'Tell us about it. We help you scope it — and come back with a clear scope and a quote.',
    'svc.uncertainty.cta':   'Talk to an expert',

    /* METHOD PAGE */
    'methode.eyebrow': 'Method',
    'methode.title':   'We don\'t improvise software. We engineer it.',
    'methode.lead':    'A structured, industrialised path from need to production — designed to keep complex projects under control, on every front: scope, quality, security and time.',
    'methode.p1.title': 'Rigour over improvisation',
    'methode.p1.desc':  'Decisions are documented, traceable and deliberate — not made on the fly.',
    'methode.p2.title': 'Industrialised delivery',
    'methode.p2.desc':  'Versioning, code review, automated testing and CI: quality is built into the pipeline.',
    'methode.p3.title': 'Visible at every step',
    'methode.p3.desc':  'Short iterations and regular checkpoints keep you in control of scope and budget.',
    'methode.quote':    'A method made for projects that can\'t afford to fail.',
    'step.del.label':  'Deliverables',
    'step.1.short':    'Analysis',
    'step.2.short':    'Architecture',
    'step.3.short':    'Development',
    'step.4.short':    'Quality',
    'step.5.short':    'Deployment',
    'step.6.short':    'Maintenance',
    'step.1.title':    'Needs analysis',
    'step.1.desc':     'We start by understanding your business, not your software wish-list. We map processes, constraints, actors and risks — and translate them into clear, prioritised requirements.',
    'step.1.del.1':    'Functional specification & scope',
    'step.1.del.2':    'Process & data mapping',
    'step.1.del.3':    'Risk & compliance assessment',
    'step.2.title':    'Architecture design',
    'step.2.desc':     'Before a line of production code, we design the system: data model, services, integrations and security. This is where scalability and longevity are decided.',
    'step.2.del.1':    'Technical architecture & data model',
    'step.2.del.2':    'Integration & security plan',
    'step.2.del.3':    'Technology choices, justified',
    'step.3.title':    'Agile development',
    'step.3.desc':     'We build in short iterations, with working increments you can see and steer. Code review and versioning are non-negotiable at every commit.',
    'step.3.del.1':    'Working increments every sprint',
    'step.3.del.2':    'Systematic code review',
    'step.3.del.3':    'Regular progress checkpoints',
    'step.4.title':    'Quality assurance',
    'step.4.desc':     'Quality is not a phase at the end — it runs throughout. Automated tests, manual QA and security checks validate every release before it ships.',
    'step.4.del.1':    'Automated & manual test coverage',
    'step.4.del.2':    'Security & performance review',
    'step.4.del.3':    'Acceptance with your teams',
    'step.5.title':    'Deployment',
    'step.5.desc':     'We put the system into production reliably and reversibly, with monitoring in place from day one — so going live is a controlled event, not a leap.',
    'step.5.del.1':    'Controlled production rollout',
    'step.5.del.2':    'Monitoring & alerting',
    'step.5.del.3':    'Documentation & team handover',
    'step.6.title':    'Evolutionary maintenance',
    'step.6.desc':     'A system is alive. We keep it secure, performant and aligned with your business as it changes — with a clear, accountable support relationship.',
    'step.6.del.1':    'Corrective & evolutionary maintenance',
    'step.6.del.2':    'Security updates',
    'step.6.del.3':    'Roadmap for new needs',

    /* PAGES */
    'services.page.title':    'Software engineering, organised around your problems.',
    'services.page.lead':     'Five complementary areas of expertise. Each starts from a business problem and ends with a measurable result — never from a technology.',
    'method.page.title':      'We don\'t improvise software. We engineer it.',
    'method.page.lead':       'A structured, industrialised path from need to production — designed to keep complex projects under control, on every front.',
    'work.page.title':        'Systems in production, where mistakes are not an option.',
    'work.page.lead':         'A focused track record in mutual-insurance and health coverage — memberships, contributions, claims, payments and regulatory compliance.',
    'news.page.title':        'What we think about building software that lasts.',
    'news.page.lead':         'Engineering notes, methodology and field lessons from the systems we build and run.',
    'about.page.title':       'A software engineering company — not a web agency.',
    'about.page.lead':        'Based in Abidjan, Sycelim Technologies designs and builds the custom software systems that demanding organisations depend on.',
    'team.page.title':        'The people who answer for what we build.',
    'team.page.lead':         'A complementary team of engineers, organised by responsibility. Each role exists to protect a dimension of your project.',
    'faq.page.title':         'Straight answers, before we even talk.',
    'faq.page.lead':          'The questions organisations ask us most often.',
    'read.more':              'Read article',

    /* RÉALISATIONS PAGE */
    'real.eyebrow':      'Case Studies',
    'real.title':        'Systems in production, where failure is not an option.',
    'real.lead':         'Experience concentrated in the mutual insurance sector — memberships, contributions, benefits, payments and regulatory compliance.',
    'real.prob.label':   'Problem',
    'real.sol.label':    'Solution',
    'real.imp.label':    'Impact',
    'real.refs.eyebrow': 'References',
    'real.refs.title':   'Letters of Satisfactory Completion',
    'real.refs.desc':    'All issued by Ivorian mutual and health insurance organisations — systems in production.',
    'real.cta.title':    'Your project deserves the same rigour.',

    /* ACTUALITÉS PAGE */
    'act.eyebrow':   'News & perspectives',
    'act.title':     'What we think about building software that lasts.',
    'act.lead':      'Engineering notes, methodology and field lessons from the systems we build and run.',
    'act.1.title':   'Why we call ourselves an engineering company, not a web agency',
    'act.1.excerpt': 'The difference is not just wording: it changes how software is designed, built and maintained over time.',
    'act.2.title':   'Security is not bolted on at the end: it is designed from day one',
    'act.2.excerpt': 'Treating security as a final step means you have already lost. In a system that handles sensitive data, protection is an architectural decision.',
    'act.3.title':   'Technical debt: the hidden cost that eventually slows everything down',
    'act.3.excerpt': 'Software that becomes slower and slower to evolve does not have a speed problem: it has a debt problem. Here is how we avoid it — and how to pay it down.',
    'act.cta.title': 'Do these reflections apply to your project?',

    /* À PROPOS PAGE */
    'about.eyebrow':        'About Sycelim',
    'about.title':          'A software engineering firm — not a web agency.',
    'about.lead':           'Based in Abidjan, Sycelim Technologies designs and develops the bespoke software systems that demanding organisations depend on.',
    'about.history.title':  'Our history',
    'about.vision.title':   'Our vision',
    'about.pos.title':      'Our positioning',
    'about.pos.no.label':   'What we are not',
    'about.pos.yes.label':  'What we are',
    'about.org.title':      'Our organisation',
    'about.org.sub':        'A tight-knit team, structured around accountability.',
    'about.culture.title':  'Quality culture',
    'about.culture.sub':    'What we demand of ourselves.',
    'about.fab.title':      'Orange Fab Côte d\'Ivoire Laureate — Season 1',
    'about.fab.desc':       'Sycelim Technologies is a laureate of the 1st season of the Orange Fab Côte d\'Ivoire competition — Orange\'s startup acceleration programme (the first Orange Group accelerator in Africa).',
    'about.cta.title':      'Let\'s build something that lasts.',

    /* ÉQUIPE PAGE */
    'team.eyebrow':      'The team',
    'team.title':        'The people accountable for what we build.',
    'team.lead':         'A team of complementary engineers, organised by responsibility. Each role protects one dimension of your project — architecture, security, quality and delivery.',
    'team.roles.title':  'Profiles by role',
    'team.roles.sub':    'Each role exists to protect one dimension of your project.',
    'team.stats.title':  'How we work',
    'team.stats.sub':    'The right team for the problem — never oversized.',
    'team.cta.title':    'Want to put this team on your project?',

    /* CONTACT / FORM PAGE */
    'contact.eyebrow':         'Request a quote',
    'contact.title':           'Tell us about your project.',
    'contact.lead':            'Describe what you want to build or fix. We\'ll come back with a clear, structured response — and a quote.',
    'contact.assurance.title': 'Our commitments',
    'contact.assurance.1':     'A structured response, not a sales pitch.',
    'contact.assurance.2':     'Your information stays confidential.',
    'contact.assurance.3':     'No commitment until the scope is clear.',
    'contact.info.title':      'Direct contact',
    'form.name':               'Full name',
    'form.org':                'Organisation',
    'form.email':              'Professional email',
    'form.phone':              'Phone',
    'form.need':               'What do you need?',
    'form.need.opt0':          'Choose a project type',
    'form.need.opt1':          'Bespoke business solution',
    'form.need.opt2':          'Complex web platform',
    'form.need.opt3':          'Connected mobile application',
    'form.need.opt4':          'API & backend system',
    'form.need.opt5':          'Modernisation / rebuild',
    'form.need.opt6':          'I\'m not sure yet — let\'s talk',
    'form.budget':             'Indicative budget',
    'form.budget.opt0':        'Choose a range',
    'form.budget.opt1':        'To be defined',
    'form.budget.opt2':        '< 5M FCFA',
    'form.budget.opt3':        '5 – 20M FCFA',
    'form.budget.opt4':        '20 – 50M FCFA',
    'form.budget.opt5':        '> 50M FCFA',
    'form.project':            'Describe your project',
    'form.project.ph':         'Context, objective, constraints, desired deadline…',
    'form.submit':             'Send my request',
    'form.note':               'Response within 48 business hours.',
    'form.success':            'Request received. Thank you. Our team is reviewing your project and will get back to you within 48 business hours with a structured response.',
    'form.error':              'An error occurred. Write to us directly at contact@sycelim.com.',

    /* FAQ PAGE */
    'faq.eyebrow':   'Frequently asked questions',
    'faq.title':     'Clear answers, before we even speak.',
    'faq.lead':      'The questions we hear most often — answered directly.',
    'faq.cta.title': 'A question not answered here?',

    /* LEGAL PAGES */
    'legal.ml.eyebrow':   'Legal notice',
    'legal.ml.title':     'Legal notice',
    'legal.ml.lead':      'Legal information relating to Sycelim Technologies and this website.',
    'legal.conf.eyebrow': 'Privacy',
    'legal.conf.title':   'Privacy policy',
    'legal.conf.lead':    'How Sycelim Technologies collects, uses and protects your personal data.',
    'legal.cgu.eyebrow':  'Terms of use',
    'legal.cgu.title':    'Terms of use',
    'legal.cgu.lead':     'Rules governing use of the Sycelim Technologies website.',
  }
};

/* ============================================================
   LANGUAGE
   ============================================================ */
let currentLang = localStorage.getItem('sycelim-lang') || 'fr';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('sycelim-lang', lang);
  document.documentElement.lang = lang;

  /* Update all translated elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = T[lang][key];
    if (val !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    }
  });

  /* Update placeholder elements separately */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = T[lang][key];
    if (val !== undefined) el.placeholder = val;
  });

  /* Update lang toggle UI */
  document.querySelectorAll('.lang-fr-label, .lang-en-label').forEach(el => {
    el.classList.remove('active');
  });
  document.querySelectorAll(`.lang-${lang}-label`).forEach(el => el.classList.add('active'));

  /* Mark active nav link */
  updateActiveNav();
}

/* ============================================================
   THEME
   ============================================================ */
let currentTheme = localStorage.getItem('sycelim-theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('sycelim-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function updateActiveNav() {
  const path = location.pathname;
  document.querySelectorAll('.nav-link[data-page]').forEach(el => {
    el.classList.toggle('active', path.includes(el.dataset.page) ||
      (el.dataset.page === 'index' && (path === '/' || path.endsWith('index.html'))));
  });
}

function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn     = form.querySelector('[type="submit"]');
    const success = document.getElementById('form-success');
    const error   = document.getElementById('form-error');

    btn.disabled = true;
    btn.textContent = '…';

    /* Netlify / static form submission */
    try {
      const data = new FormData(form);
      const res  = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      if (res.ok) {
        success.style.display = 'block';
        error.style.display   = 'none';
        form.reset();
      } else throw new Error('Network error');
    } catch {
      success.style.display = 'none';
      error.style.display   = 'block';
    } finally {
      btn.disabled = false;
      btn.dataset.i18n && (btn.textContent = T[currentLang]['form.submit'] || 'Envoyer');
    }
  });
}

/* ============================================================
   SCROLL REVEAL (lightweight)
   ============================================================ */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.anim-fade-up').forEach(el => {
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    io.observe(el);
  });
}

/* ============================================================
   HERO SLIDER
   ============================================================ */
function initHeroSlider() {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hsd-dot');
  if (slides.length < 2) return;

  let current = 0;
  let timer   = null;
  const DELAY = 5000;

  function goTo(n) {
    const prev = current;
    current = ((n % slides.length) + slides.length) % slides.length;
    if (prev === current) return;

    slides[prev].classList.remove('hero-slide--active');
    dots[prev]  && dots[prev].classList.remove('hsd-dot--active');
    dots[prev]  && dots[prev].setAttribute('aria-selected', 'false');

    slides[current].classList.add('hero-slide--active');
    dots[current] && dots[current].classList.add('hsd-dot--active');
    dots[current] && dots[current].setAttribute('aria-selected', 'true');
  }

  function next() { goTo(current + 1); }

  function start() { timer = setInterval(next, DELAY); }
  function stop()  { clearInterval(timer); }

  /* Dot click */
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stop(); goTo(i); start(); });
  });

  /* Pause on hover */
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);

  /* Touch swipe support (mobile) */
  let tx = 0;
  slider.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 40) { stop(); goTo(current + (dx < 0 ? 1 : -1)); start(); }
  }, { passive: true });

  start();
}

/* ============================================================
   INIT
   ============================================================ */
function initFabSparkles() {
  const canvas = document.querySelector('.orangefab-sparkles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const parent = canvas.parentElement;

  function resize() {
    canvas.width  = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const dots = Array.from({ length: 55 }, () => ({
    x:     Math.random(),
    y:     Math.random(),
    r:     0.5 + Math.random() * 1.8,
    phase: Math.random() * Math.PI * 2,
    speed: 0.4 + Math.random() * 1.6,
  }));

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(d => {
      const alpha = (Math.sin(t * 0.0025 * d.speed + d.phase) + 1) / 2;
      const x = d.x * canvas.width;
      const y = d.y * canvas.height;
      const glow = d.r * 5;

      const g = ctx.createRadialGradient(x, y, 0, x, y, glow);
      g.addColorStop(0, `rgba(255,255,255,${(alpha * 0.6).toFixed(2)})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, glow, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
      ctx.beginPath();
      ctx.arc(x, y, d.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ============================================================
   SERVICES PAGE — Sticky tabs + smooth scroll
   ============================================================ */
function initServicesTabs() {
  const tabsOuter = document.getElementById('svcTabsOuter');
  if (!tabsOuter) return;

  const tabs     = Array.from(tabsOuter.querySelectorAll('.svc-tab'));
  const sections = Array.from(document.querySelectorAll('.svc-block[id]'));
  if (!sections.length) return;

  /* Highlight active tab as sections enter viewport */
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tabs.forEach(t => t.classList.toggle('active', t.dataset.svc === id));
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));

  /* Smooth scroll with offset for navbar + tab bar */
  const scrollToSection = targetId => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const offset = 70 + tabsOuter.offsetHeight + 24;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(tab.getAttribute('href').slice(1));
    });
  });

  /* Hero pills also use smooth scroll */
  document.querySelectorAll('.svc-hero-pill').forEach(pill => {
    pill.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(pill.getAttribute('href').slice(1));
    });
  });
}

/* ============================================================
   MÉTHODE — Step tracker
   ============================================================ */
function initMethodeTracker() {
  const trackerOuter = document.getElementById('mthTrackerOuter');
  if (!trackerOuter) return;
  const dots     = Array.from(trackerOuter.querySelectorAll('.mth-tracker-dot'));
  const sections = Array.from(document.querySelectorAll('.mth-step[id]'));
  if (!sections.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach(d => d.classList.toggle('active', d.dataset.step === id));
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));

  const scrollToStep = targetId => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const offset = 70 + trackerOuter.offsetHeight + 24;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  };

  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      e.preventDefault();
      scrollToStep(dot.getAttribute('href').slice(1));
    });
  });

  document.querySelectorAll('.mth-hero-pill').forEach(pill => {
    pill.addEventListener('click', e => {
      e.preventDefault();
      scrollToStep(pill.getAttribute('href').slice(1));
    });
  });
}

/* ─── Marquee infini — recyclage DOM (aucun reset) ─── */
function initMarquee() {
  const marqueeEl = document.querySelector('.clients-marquee');
  if (!marqueeEl) return;
  const track = marqueeEl.querySelector('.marquee-track');
  if (!track) return;

  track.style.animation = 'none';
  track.querySelectorAll('[aria-hidden]').forEach(el => el.remove());

  const origCards = [...track.children];
  if (!origCards.length) return;

  requestAnimationFrame(() => {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 16;

    /* Remplit la piste jusqu'à 3× la largeur de l'écran pour que
       la fin du track soit toujours bien au-delà du bord droit. */
    const minWidth = window.innerWidth * 3;
    let totalWidth = origCards.reduce((s, c) => s + c.offsetWidth + gap, 0);

    while (totalWidth < minWidth) {
      origCards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
        totalWidth += clone.offsetWidth + gap;
      });
    }

    /* Cache des largeurs dans l'ordre actuel du DOM */
    let cardWidths = [...track.children].map(c => c.offsetWidth + gap);

    const SPEED = 55;
    let offset = 0;
    let paused = false;
    let lastTime = null;

    function tick(ts) {
      if (!lastTime) lastTime = ts;
      const dt = Math.min(ts - lastTime, 50);
      lastTime = ts;

      if (!paused) {
        offset += SPEED * dt / 1000;

        /* Quand la 1re carte sort entièrement à gauche :
           → déplace-la en fin de track (elle réapparaît après la dernière carte, hors écran à droite)
           → ajuste offset pour que la position visuelle ne change pas */
        while (offset >= cardWidths[0]) {
          offset -= cardWidths[0];
          cardWidths.push(cardWidths.shift());
          track.appendChild(track.firstElementChild);
        }

        track.style.transform = `translateX(-${offset}px)`;
      }

      requestAnimationFrame(tick);
    }

    marqueeEl.addEventListener('mouseenter', () => { paused = true; });
    marqueeEl.addEventListener('mouseleave', () => { paused = false; lastTime = null; });

    requestAnimationFrame(ts => { lastTime = ts; requestAnimationFrame(tick); });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  /* Apply persisted settings immediately */
  applyTheme(currentTheme);
  applyLang(currentLang);

  /* Theme toggle button(s) */
  document.querySelectorAll('.btn-theme').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  /* Language toggle button(s) */
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(currentLang === 'fr' ? 'en' : 'fr');
    });
  });

  /* Nav */
  initNavScroll();
  initMobileMenu();
  updateActiveNav();

  /* Page-specific */
  initFaq();
  initContactForm();
  initScrollReveal();
  initHeroSlider();
  initFabSparkles();
  initServicesTabs();
  initMethodeTracker();
  initMarquee();
});
