# Transformation des data du sondage flux de JSON vers CSV
# Python 3.5.3
# Debian 9.5 @ kirin / 20220428 / pierre@lesporteslogiques.net

# aide précieuse pour réaliser ce script : https://stackoverflow.com/a/55872801

# Les réponses du sondage sont enregistrées dans le fichier JSON uniquement
# si la question a été répondu, sinon le libellé du champ n'apparaît pas
# ça complique le passage en csv, pour y remédier on initialise d'abord tous
# les champs à une valeur vide puis on remplit avec les valeurs répondues

# Il y avait une erreur dans les libellés du sondage :
# "benevolat" à la place d'age jusqu'à data_1651149254000_350.json
# étant donné que le libellé benevolat est utilisé avant, les réponses à
# la première question sont écrasées...
# le script s'adapte pour la corriger, mais les données sont perdues


import os                   # https://docs.python.org/3/library/os.html
import datetime             # https://docs.python.org/3/library/datetime.html
import json                 # https://docs.python.org/3/library/json.html
import csv                  # https://docs.python.org/3/library/csv.html
import re                   # https://docs.python.org/3/library/re.html

DEBUG = False

# répertoire contenant les données --------------------------------------------
start = "/home/emoc/Bureau/FLUX/FLUX-WEB/flux.bzh/www/sondage_data_to_csv/data/"

# fichier csv -----------------------------------------------------------------
csvfile = "résultats_sondage_flux.csv"

# -----------------------------------------------------------------------------
# prendre le fichier json des questions et extraire les intitulés des champs

champ_cle = []

with open('sondage.js') as f:
    datafile = f.readlines()
    for line in datafile:
        if "\"name\"" in line:
            cle = re.sub(',|\"', '', line.strip()[8:])                 # regex
            if cle not in champ_cle:
                champ_cle.append(cle)

# compléter par les champs additionnels
champ_cle.append('time_spent_on_survey')
champ_cle.append('unique_file_id')
champ_cle.append('autre-region-Comment')
champ_cle.append('situation-lieu-activite-Comment')
champ_cle.append('metier-anterieur-Comment')
champ_cle.append('fablab-Comment')
champ_cle.append('pratique-sportive-raison-absence-Comment')
champ_cle.append('motif-installation-Comment')
champ_cle.append('autre-chose')
champ_cle.append('lieu-activite-Comment')
champ_cle.append('activite-autre-Comment')
champ_cle.append('ordinateur-absence-Comment')
champ_cle.append('situation-actuelle-Comment')
champ_cle.append('participation-creation-Comment')
champ_cle.append('ville-Comment')
champ_cle.append('quimper-quartier-Comment')
champ_cle.append('pratique-artistique-raison-absence-Comment')
champ_cle.append('autre-lieu-activite-non-Comment')
champ_cle.append('zone-de-vie-Comment')
champ_cle.append('smartphone-usage-Comment')
champ_cle.append('smartphone-absence-Comment')
champ_cle.append('ordinateur-usage-Comment')
champ_cle.append('age')

champ_cle.insert(0, "date-heure")

if DEBUG:
    print(champ_cle)

# -----------------------------------------------------------------------------
# créer le fichier CSV, il sera alimenté par un dictionnaire

csv_resultats = open(csvfile,'w')
csvwriter = csv.DictWriter(csv_resultats, fieldnames=champ_cle)
csvwriter.writeheader()


# -----------------------------------------------------------------------------
# traiter chaque fichier de données

for dirpath, dirs, files in os.walk(start):
    files.sort()                 # trier les répertoires par ordre alphabétique


    for filename in files:

        # ---------------------------------------------------------------------
        # initialiser les resultats à zéro

        resultats = {}                             # dictionnaire des résultats
        for cle in champ_cle:
            resultats[cle] = '';

        fname = os.path.join(dirpath,filename)                    # nom complet

        # ---------------------------------------------------------------------
        # extraire la date et l'heure

        ftime    = os.path.getmtime(fname)
        fdate    = datetime.datetime.fromtimestamp(ftime)
        fjour    = str(fdate.day)
        fmois    = str(fdate.month)
        fannee   = str(fdate.year)
        fheure   = str(fdate.hour)
        fminute  = str(fdate.minute)
        fseconde = str(fdate.second)

        if DEBUG:
            print("")
            print(filename," date : ",fjour,"/",fmois,"/",fannee," ",fheure,":",fminute,":",fseconde)
            print("")

        dateheure = fjour+"/"+fmois+"/"+fannee+" "+fheure+":"+fminute+":"+fseconde
        resultats["date-heure"] = dateheure;


        # ---------------------------------------------------------------------
        # charger le contenu du fichier JSON de données

        with open(fname) as file:
            data = json.load(file)               # charger le json dans un dict

        for k, v in data.items():         # lire clé et valeur de chaque entrée

            # pour corriger l'erreur dans les noms de champ du sondage ...
            if ftime <= 1651149254000 and k == "benevolat":
                resultats["age"] = v
            else :
                resultats[k] = v

        csvwriter.writerow(resultats)

        if DEBUG:
            print(resultats)


# -----------------------------------------------------------------------------
# fermer le fichier CSV
csv_resultats.close()

# The End
