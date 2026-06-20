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

    /* CONTACT PAGE */
    'contact.eyebrow':        'Request a quote',
    'contact.title':          'Tell us about your project.',
    'contact.lead':           'Describe what you want to build or fix. We come back with a clear, structured response — and a quote.',
    'form.name':              'Full name',
    'form.org':               'Organisation',
    'form.email':             'Professional email',
    'form.phone':             'Phone',
    'form.need':              'What do you need?',
    'form.need.opt0':         'Select a project type',
    'form.need.opt1':         'Custom business system',
    'form.need.opt2':         'Complex web platform',
    'form.need.opt3':         'Connected mobile app',
    'form.need.opt4':         'API & backend system',
    'form.need.opt5':         'Modernisation / rebuild',
    'form.need.opt6':         'Not sure yet — let\'s discuss',
    'form.budget':            'Indicative budget',
    'form.budget.opt0':       'Select a range',
    'form.budget.opt1':       'To define',
    'form.budget.opt2':       '< 5M FCFA',
    'form.budget.opt3':       '5 – 20M FCFA',
    'form.budget.opt4':       '20 – 50M FCFA',
    'form.budget.opt5':       '> 50M FCFA',
    'form.project':           'Describe your project',
    'form.project.ph':        'Context, goal, constraints, target timeline…',
    'form.submit':            'Send my request',
    'form.note':              'Response within 48 working hours.',
    'form.success':           'Request received. Thank you. Our team will study your project and come back to you within 48 working hours.',
    'form.error':             'Something went wrong. Please email us directly at contact@sycelim.com.',
    'contact.assurance.title': 'Our commitments',
    'contact.assurance.1':    'A structured response, not a sales pitch.',
    'contact.assurance.2':    'Your information stays confidential.',
    'contact.assurance.3':    'No commitment until the scope is clear.',

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
});
