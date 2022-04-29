const surveyJson = {
    "showProgressBar": "top",
    pages: [

                {
                  name: "habitat",
                  title: "Habitat",
                      "elements": [
                          {
                              "__comment": "question 1",
                              "type": "radiogroup",
                              "name": "ville",
                              "title": "Où habitez-vous ?",
                              "isRequired": false,
                              "hasNone": false,
                              "colCount": 4,
                              "choices": [
                                  "Briec",
                                  "Edern",
                                  "Ergué-Gabéric",
                                  "Guengat",
                                  "Landrévarzec",
                                  "Landudal",
                                  "Langolen",
                                  "Locronan",
                                  "Plogonnec",
                                  "Plomelin",
                                  "Ploneis",
                                  "Pluguffan",
                                  "Quéménéven",
                                  "Quimper"
                              ]
                          },
                          {
                              "type": "radiogroup",
                              "name": "quimper-quartier",
                              "title": "Si c'est à Quimper, dans quel quartier ?",
                              "isRequired": false,
                              "hasNone": false,
                              "colCount": 3,
                              "choices": [
                                  "Centre-Ville",
                                  "Moulin vert",
                                  "Kerfeunteun",
                                  "Penhars",
                                  "Ergué Armel",
                                  "Corniguel"
                              ]
                          },
                          {
                              "type": "radiogroup",
                              "name": "anteriorite-territoire",
                              "title": "Depuis combien de temps y résidez-vous ?",
                              "isRequired": false,
                              "hasNone": false,
                              "colCount": 3,
                              "choices": [
                                  "Moins de 2 ans",
                                  "Entre 2 et 5 ans",
                                  "Entre 6 et 10 ans",
                                  "Entre 11 et 20 ans",
                                  "Plus de vingt ans",
                                  "Toujours"
                              ]
                          },
                          {
                                "type": "checkbox",
                                "name": "motif-installation",
                                "title": "Qu'est-ce qui vous a amené à Quimper/QBO ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "L'amour",
                                    "Le travail",
                                    "Les proches",
                                    "La qualité de vie",
                                    "L'attractivité/le dynamisme"
                                ]
                          },
                          {
                              "type": "radiogroup",
                              "name": "autre-region",
                              "title": "Avez vous déjà vécu dans d’autres régions/pays ?",
                              "isRequired": false,
                              "hasNone": false,
                              "colCount": 3,
                              "choices": [
                                  "non"
                              ]
                          },
                          {
                              "type": "checkbox",
                              "name": "composition-foyer",
                              "title": "Habitez-vous ?",
                              "isRequired": false,
                              "hasNone": false,
                              "colCount": 3,
                              "choices": [
                                  "Seul.e",
                                  "Avec un.e partenaire",
                                  "Avec un/des enfant.s",
                                  "Avec un parent",
                                  "Avec des colocs",
                                  "Des animaux de compagnie"
                              ]
                          },
                          {
                              "type": "radiogroup",
                              "name": "zone-de-vie",
                              "title": "Au quotidien, vous vivez, fréquentez, consommez principalement ... ?",
                              "isRequired": false,
                              "hasNone": false,
                              "colCount": 1,
                              "choices": [
                                  "dans votre quartier",
                                  "dans votre quartier et le centre ville",
                                  "dans votre quartier + zones commerciales",
                                  "dans toute la ville"
                              ]
                          }
                      ]
                  },

                  {
                    name: "activite",
                    title: "Activité principale",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "situation-actuelle",
                                "title": "Quelle est votre situation actuelle ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 4,
                                "choices": [
                                    "En étude/ formation",
                                    "En activité",
                                    "En recherche d’emploi",
                                    "En retraite",
                                    "Parent au foyer/ aidant familial"
                                ]
                            },
                            {
                                "name": "metier",
                                "type": "text",
                                "title": "Quel est votre (vos) métier(s)? nb: ça peut être le futur métier si vous êtes étudiant/en reconversion et l'ancien si retraité",
                                "isRequired": false,
                            },
                            {
                                "type": "radiogroup",
                                "name": "metier-anterieur",
                                "title": "Avez vous toujours exercé ce métier ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 1,
                                "choices": [
                                    "oui"
                                ]
                            },
                            {
                                "type": "radiogroup",
                                "name": "lieu-activite",
                                "title": "Quel est votre lieu d’activité ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 2,
                                "choices": [
                                    "Votre domicile",
                                    "Votre entreprise/asso/centre de formation",
                                    "Vous alternez présentiel/télétravail",
                                    "Chez votre clientèle/patientèle"
                                ]
                            },
                            {
                                "type": "radiogroup",
                                "name": "situation-lieu-activite",
                                "title": "Où exercez-vous votre (vos) activité(s)?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 4,
                                "choices": [
                                    "Briec",
                                    "Edern",
                                    "Ergué-Gabéric",
                                    "Guengat",
                                    "Landrévarzec",
                                    "Landudal",
                                    "Langolen",
                                    "Locronan",
                                    "Plogonnec",
                                    "Plomelin",
                                    "Ploneis",
                                    "Pluguffan",
                                    "Quéménéven",
                                    "Quimper"
                                ]
                            },
                            {
                                "type": "boolean",
                                "name": "autre-lieu-activite",
                                "title": "Allez vous parfois travailler/étudier dans d’autres lieux (café, co-working...) ?",
                                "label": "Allez vous parfois travailler/étudier dans d’autres lieux (café, co-working...) ?",
                                "isRequired": false
                            },
                            {
                                "name": "autre-lieu-activite-oui",
                                "type": "text",
                                "title": "Si oui, où ?",
                                "isRequired": false,
                            },
                            {
                                "type": "checkbox",
                                "name": "autre-lieu-activite-non",
                                "title": "Si non",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "Pas de lieu adapté",
                                    "Pas les moyens",
                                    "Rien à proximité",
                                    "Pas connaissance de possibilités",
                                    "Pas d'intérêt",
                                    "Pas adapté à mon travail"
                                ]
                            },
                            {
                                "type": "ranking",
                                "name": "autre-lieu-activite-critere",
                                "title": "Si vous pouviez avoir un lieu type « bureau » pour travailler/étudier/faire des recherches/des visios, quels seraient vos critères ? (Placer les vignettes dans l'ordre préférentiel)",
                                "isRequired": false,
                                "choices": [
                                    "Coût",
                                    "Proximité de votre lieu de vie",
                                    "Horaires",
                                    "Ambiance",
                                    "Transports public et/ou parking en proximité",
                                    "Accessibilité"
                                ]
                            },
                            {
                                "type": "radiogroup",
                                "name": "autre-lieu-activite-frequence",
                                "title": "A quelle fréquence le fréquenteriez-vous ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 2,
                                "choices": [
                                    "1x/mois",
                                    "1x/semaine",
                                    "2-3x/semaine",
                                    "Tous les jours",
                                    "Non ça ne m’intéresse pas / Pas besoin"
                                ]
                            },
                            {
                                "type": "radiogroup",
                                "name": "formation",
                                "title": "Suivez-vous des formations ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 2,
                                "choices": [
                                    "Oui, une formation qualifiante",
                                    "Oui, parfois, pour le travail",
                                    "Oui, parfois, à titre privé/perso",
                                    "Non mais j’aimerais en suivre une",
                                    "Non ça ne m’intéresse pas/ Pas besoin"
                                ]
                            },
                            {
                                "type": "radiogroup",
                                "name": "formation-mode",
                                "title": "Si oui sont-elles ... ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 1,
                                "choices": [
                                    "En présentiel",
                                    "En distanciel",
                                    "Les deux"
                                ]
                            },
                            {
                                "type": "boolean",
                                "name": "formation-en-coworking",
                                "title": "Si elles sont en distanciel, souhaiteriez-vous pouvoir les suivre hors de la maison (espace dédié) ?",
                                "label": "Si elles sont en distanciel, souhaiteriez-vous pouvoir les suivre hors de la maison (espace dédié) ?",
                                "isRequired": false
                            }

                        ]
                    },

                    {
                        name: "activite2",
                        title: "Activités sportives et culturelles",
                        "elements": [
                            {
                                "type": "checkbox",
                                "name": "pratique-sportive",
                                "title": "Pratiquez vous du sport dans un club/une asso/une salle?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 4,
                                "choices": [
                                    "Oui et seul.e",
                                    "Oui, avec des ami.e.s/collègues",
                                    "Oui en club/asso/collectif",
                                    "Non"
                                ]
                            },
                            {
                                "name": "pratique-sportive-type",
                                "type": "text",
                                "title": "Si oui, lequel ou lesquels",
                                "isRequired": false,
                            },
                            {
                                "type": "radiogroup",
                                "name": "pratique-sportive-frequence",
                                "title": "À quelle fréquence pratiquez-vous du sport ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 5,
                                "choices": [
                                    "1x/mois",
                                    "1x/semaine",
                                    "2-3x/semaine",
                                    "Tous les jours",
                                    "Jamais"
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "pratique-sportive-raison-absence",
                                "title": "Si non, qu’est-ce qui vous empêche d’en faire ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "La flemme",
                                    "Votre condition physique",
                                    "Votre porte-monnaie",
                                    "Le manque d’offre adaptée",
                                    "Pas d’intérêt",
                                    "Manque de temps"
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "pratique-artistique",
                                "title": "Pratiquez vous un art (musique, dessin, théâtre...)",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 5,
                                "choices": [
                                    "Oui et seul.e",
                                    "Oui, avec des ami.e.s/collègues",
                                    "Oui en club/asso/collectif",
                                    "Non"
                                ]
                            },
                            {
                                "name": "pratique-artistique-type",
                                "type": "text",
                                "title": "Si oui, lequel ou lesquels",
                                "isRequired": false,
                            },
                            {
                                "type": "checkbox",
                                "name": "pratique-artistique-raison-absence",
                                "title": "Si non, pourquoi ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "La flemme",
                                    "Votre porte-monnaie",
                                    "Le manque d’offre adaptée",
                                    "Pas d’intérêt",
                                    "Manque de temps",
                                    "Manque de talent"
                                ]
                            },
                        ]
                    },
                    {
                        name: "sortie",
                        title: "Sorties",
                        "elements": [
                            {
                                "type": "checkbox",
                                "name": "sortie-lieu",
                                "title": "Allez-vous ... ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "Au cinéma",
                                    "Au théâtre",
                                    "À des concerts",
                                    "À des fest-noz",
                                    "Au musée/ expos",
                                    "Médiathèque",
                                    "Autres spectacles"
                                ]
                            },
                            {
                                "type": "radiogroup",
                                "name": "sortie-frequence",
                                "title": "A quelle fréquence avez-vous des sorties culturelles ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "1x/an",
                                    "1x/trimestre",
                                    "1x/mois",
                                    "1x/semaine",
                                    "Plusieurs fois par semaine",
                                    "Jamais"
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "sortie-restauration-lieu",
                                "title": "Allez-vous ... ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "Dans des bars/cafés",
                                    "Dans des snacks/fast food",
                                    "Dans des restaurants"
                                ]
                            },
                            {
                                "type": "radiogroup",
                                "name": "sortie-restauration-frequence",
                                "title": "A quelle fréquence avez vous ces sorties « restauration » ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "1x/an",
                                    "1x/trimestre",
                                    "1x/mois",
                                    "1x/semaine",
                                    "Plusieurs fois par semaine",
                                    "Jamais"
                                ]
                            },
                            {
                                "type": "ranking",
                                "name": "sortie-restauration-limite",
                                "title": "Quels sont les freins/limites à ces sorties ? (Placer les vignettes dans l'ordre préférentiel)",
                                "isRequired": false,
                                "choices": [
                                    "La flemme",
                                    "Votre porte-monnaie",
                                    "Le manque d’offre adaptée",
                                    "Personne avec qui y aller",
                                    "Pas d’intérêt",
                                    "Les enfants"
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "sortie-restauration-critere",
                                "title": "Quels sont vos critères pour des bars/cafés ? (choix préférentiel)",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "Les tarifs",
                                    "La déco",
                                    "La musique",
                                    "Les gens qui le fréquentent",
                                    "La terrasse",
                                    "Un coin pour les enfants"
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "sortie-autre",
                                "title": "Quels sont vos autres lieux de sortie ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 4,
                                "choices": [
                                    "Chez des amis",
                                    "Chez de la famille",
                                    "A des brocantes/ ventes",
                                    "Voir des évenements sportifs",
                                    "Espaces extérieurs (parcs, arrêt de bus...)",
                                    "Autres lieux collectifs",
                                    "Faire du shopping"
                                ]
                            },
                            {
                                "type": "radiogroup",
                                "name": "sortie-privee",
                                "title": "A quelle fréquence allez-vous chez des gens ou recevez-vous chez vous ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "Toutes les semaines",
                                    "Tous les quinze jours",
                                    "Une fois par mois",
                                    "Une fois par trimestre",
                                    "Jamais"
                                ]
                            },
                        ]
                    },
                    {
                        name: "activite-autre",
                        title: "Autres activités",
                        "elements": [
                            {
                                "type": "checkbox",
                                "name": "activite-autre",
                                "title": "Avez vous d’autres activités ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 4,
                                "choices": [
                                    "Bricolage",
                                    "Jardinage",
                                    "Loisirs créatifs",
                                    "Nature (promenade/ observation)",
                                    "Voyages",
                                    "Jeux (société, en ligne...)"
                                ]
                            },
                            {
                                "type": "radiogroup",
                                "name": "lieu-bricole",
                                "title": "Souhaiteriez-vous pouvoir bricoler dans un espace adapté (atelier) ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "Oui, plusieurs fois par semaine",
                                    "Oui, une fois par semaine",
                                    "Oui, une fois par mois",
                                    "Oui, une fois par trimestre",
                                    "Non ça ne m’intéresse pas/ Pas besoin"
                                ]
                            },
                            {
                                "type": "boolean",
                                "name": "bricolage-apprentissage",
                                "title": "Souhaiteriez-vous apprendre à bricoler ?",
                                "label": "Souhaiteriez-vous apprendre à bricoler ?",
                                "isRequired": false
                            },
                            {
                                "name": "bricolage-technique",
                                "type": "text",
                                "title": "Si oui, quelles techniques souhaiteriez-vous apprendre ? (bois, métal, textile, etc.)",
                                "isRequired": false,
                            },
                            {
                                "name": "activite-manquante",
                                "type": "text",
                                "title": "Que manque-t-il comme activité ou lieu sur Quimper/QBO ?",
                                "isRequired": false,
                            },
                            {
                                "name": "activite-besoin-specifique",
                                "type": "text",
                                "title": "Avez vous des besoins spécifiques pour participer à des activités socio-culturelles ?",
                                "isRequired": false,
                            },
                        ]
                    },
                    {
                        name: "numerique",
                        title: "Numérique",
                        "elements": [
                            {
                                "type": "boolean",
                                "name": "smartphone-utilisation",
                                "title": "Utilisez vous un smartphone ?",
                                "label": "Utilisez vous un smartphone ?",
                                "isRequired": false
                            },
                            {
                                "type": "checkbox",
                                "name": "smartphone-usage",
                                "title": "Si oui, pour quel(s) usage(s) ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 2,
                                "choices": [
                                    "Appels/sms",
                                    "Photos",
                                    "Mails",
                                    "Réseaux sociaux",
                                    "Jeux",
                                    "Recherches sur internet",
                                    "Regarder des vidéos"
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "smartphone-absence",
                                "title": "Si non, pour quelle(s) raison(s) ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 4,
                                "choices": [
                                    "Coût",
                                    "Difficultés à l’utiliser",
                                    "Pas d’intérêt/besoin",
                                    "Par principe"
                                ]
                            },
                            {
                                "type": "boolean",
                                "name": "ordinateur-utilisation",
                                "title": "Utilisez vous un ordinateur ?",
                                "label": "Utilisez vous un ordinateur ?",
                                "isRequired": false
                            },
                            {
                                "type": "checkbox",
                                "name": "ordinateur-usage",
                                "title": "Si oui, pour quel(s) usage(s) ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 2,
                                "choices": [
                                    "Mails",
                                    "Réseaux sociaux",
                                    "Regarder des vidéos",
                                    "Jeux",
                                    "Recherches sur internet",
                                    "Création (graphique, sonore...)",
                                    "Programmation/Code",
                                    "Professionnel"
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "ordinateur-absence",
                                "title": "Si non, pour quelle(s) raison(s) ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 4,
                                "choices": [
                                    "Coût",
                                    "Difficultés à l’utiliser",
                                    "Pas d’intérêt/besoin",
                                    "Par principe"
                                ]
                            },
                            {
                                "type": "boolean",
                                "name": "numerique-aide",
                                "title": "Auriez besoin d’aide/d’accompagnement pour utiliser votre ordi/téléphone ?",
                                "label": "Auriez besoin d’aide/d’accompagnement pour utiliser votre ordi/téléphone ?",
                                "isRequired": false
                            },
                            {
                                "name": "numerique-aide-pourquoi",
                                "type": "text",
                                "title": "Si oui, pourquoi ?",
                                "isRequired": false,
                            },
                            {
                                "type": "checkbox",
                                "name": "fablab",
                                "title": "Quand on vous dit «fablab» qu'est-ce que cela vous évoque ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 4,
                                "choices": [
                                    "Rien",
                                    "l'imprimante 3D",
                                    "un truc de geeks semi obscur et un peu inquiétant",
                                    "un truc de geeks semi obscur MAIS tout à fait intrigant",
                                    "un espace de bricolage numérique pour faire ensemble",
                                    "un atelier de petit bricolage et de création"
                                ]
                            },
                        ]
                    },
                    {
                        name: "engagement",
                        title: "Engagement / Projet(s)",
                        "elements": [
                            {
                                "type": "checkbox",
                                "name": "benevolat",
                                "title": "Êtes-vous bénévole dans ... ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "Une association",
                                    "Un syndicat",
                                    "Un parti",
                                    "Un collectif informel",
                                    "Aucun"
                                ]
                            },
                            {
                                "name": "benevolat-oui-moteur",
                                "type": "text",
                                "title": "Si oui, quel est votre moteur/motivation principale :",
                                "isRequired": false,
                            },
                            {
                                "name": "benevolat-non-frein",
                                "type": "text",
                                "title": "Si non, quel est votre frein principal :",
                                "isRequired": false,
                            },
                            {
                                "type": "checkbox",
                                "name": "responsabilite",
                                "title": "Avez vous des responsabilités (Bureau, CA…) dans ... ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "Une association",
                                    "Un syndicat",
                                    "Un parti",
                                    "Un collectif informel",
                                    "Aucune"
                                ]
                            },
                            {
                                "name": "responsabilite-oui-moteur",
                                "type": "text",
                                "title": "Si oui, quel est votre moteur/motivation principale :",
                                "isRequired": false,
                            },
                            {
                                "name": "responsabilite-non-frein",
                                "type": "text",
                                "title": "Si non, quel est votre frein principal :",
                                "isRequired": false,
                            },
                            {
                                "name": "projet",
                                "type": "text",
                                "title": "Avez-vous des projets que vous souhaiteriez monter ou en cours de création ?",
                                "isRequired": false,
                            },
                            {
                                "type": "boolean",
                                "name": "recherche-salle",
                                "title": "Êtes vous parfois en recherche de salles ?",
                                "label": "Êtes vous parfois en recherche de salles ?",
                                "isRequired": false
                            },
                            {
                                "name": "recherche-salle-pourquoi",
                                "type": "text",
                                "title": "Si oui, pourquoi ?",
                                "isRequired": false,
                            },
                            {
                                "name": "recherche-salle-pour-combien",
                                "type": "text",
                                "title": "Si oui, pour combien de personnes ?",
                                "isRequired": false,
                            },
                            {
                                "type": "radiogroup",
                                "name": "recherche-salle-frequence",
                                "title": "A quelle fréquence auriez vous besoin de cette salle ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 2,
                                "choices": [
                                    "1x/an",
                                    "1x/trimestre",
                                    "1x/mois",
                                    "1x/semaine",
                                    "Plusieurs fois par semaine"
                                ]
                            },
                            {
                                "type": "boolean",
                                "name": "vivre-etranger",
                                "title": "Auriez-vous en projet de partir vivre/travailler/étudier à l'étranger?",
                                "label": "Auriez-vous en projet de partir vivre/travailler/étudier à l'étranger?",
                                "isRequired": false
                            },
                            {
                                "type": "boolean",
                                "name": "vivre-etranger-accompagnement",
                                "title": "Souhaiteriez-vous être accompagné.e pour ?",
                                "label": "Souhaiteriez-vous être accompagné.e pour ?",
                                "isRequired": false
                            },
                        ]
                    },
                    {
                        name: "personnel",
                        title: "Informations personnelles",
                        "elements": [
                            {
                                "type": "radiogroup",
                                "name": "age",
                                "title": "Quel âge avez-vous ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "16-20 ans",
                                    "21-30 ans",
                                    "30-45 ans",
                                    "45-60 ans",
                                    "60-75 ans",
                                    "+ 75 ans"
                                ]
                            },
                            {
                                "type": "checkbox",
                                "name": "genre",
                                "title": "Vous identifiez-vous comme ... ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 4,
                                "choices": [
                                    "homme",
                                    "femme",
                                    "non binaire",
                                    "autre"
                                ]
                            },
                            {
                                "type": "radiogroup",
                                "name": "handicap",
                                "title": "Etes-vous en situation de handicap ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "Oui",
                                    "Non",
                                    "Non mais j'accompagne une personne"
                                ]
                            },
                            {
                                "name": "langue",
                                "type": "text",
                                "title": "Quelles langues parlez-vous à la maison ?",
                                "isRequired": false,
                            },
                            {
                                "name": "budget",
                                "type": "text",
                                "title": "Pouvez-vous nous dire « environ » avec quel budget mensuel vous vivez (au niveau de votre foyer) ?",
                                "isRequired": false,
                            },
                            {
                                type: "comment",
                                name: "autre-chose",
                                title: "Autre chose à ajouter ?"
                            },
                            {
                                "type": "checkbox",
                                "name": "participation-creation",
                                "title": "Seriez-vous intéressés pour participer à la création de ... ?",
                                "isRequired": false,
                                "hasNone": false,
                                "colCount": 3,
                                "choices": [
                                    "un fablab ludique et créatif",
                                    "un café associatif",
                                    "l’organisation d’ateliers/ événements",
                                    "un espace de coworking"
                                ]
                            },
                            {
                                "type": "boolean",
                                "name": "contact-approfondissement",
                                "title": "Accepteriez vous qu’on vous recontacte pour approfondir certains points ?",
                                "label": "Accepteriez vous qu’on vous recontacte pour approfondir certains points ?",
                                "isRequired": false
                            },
                            {
                                "type": "boolean",
                                "name": "contact-info",
                                "title": "Souhaiteriez vous être tenu au courant du projet de tiers-lieu ?",
                                "label": "Souhaiteriez vous être tenu au courant du projet de tiers-lieu ?",
                                "isRequired": false
                            },
                            {
                                "name": "email",
                                "type": "text",
                                "title": "Email (si nécessaire)",
                                "isRequired": false,
                            },
                            {
                                "name": "phone",
                                "type": "text",
                                "title": "Numéro de téléphone (si nécessaire)",
                                "isRequired": false,
                            }
                        ]
                    }

    ],
    completedHtml: "<p>MERCI ! Toutes vos données resteront anonymes (le mail ne servira qu’à vous recontacter) et toutes vos données seront effacées avant la fin de l’année !</p>"
};
