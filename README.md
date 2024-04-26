# PROVA TÈCNICA PARLEM - FRONT-END VUE.JS

Aquest és un test pensat per realitzar-lo en poques hores, el detallisme portat a l’extrem no és el més important, es valorarà sobretot la qualitat del codi, com està estructurat, com s’ha plantejat el problema per aconseguir la màxima eficiència, i la idea general que s’ha seguit per implementar la solució.

## Requisits:

1. Vista amb el llistat de clients de l’empresa. Aquest llistat ha de poder ser dinàmic. S’ha de poder filtrar i/o ordenar per almenys un dels camps.
2. Detall del client amb tots els seus productes contractats:
3. Fitxa amb les dades del client
4. Llista de productes contractats

## Requisits tècnics:

1. Utilitzar el llenguatge/framework que es vulgui i les llibreries addicionals que es considerin necessàries.
2. Desenvolupar la solució Fent servir un repositori git (commits, etc)
3. Connectar-se a la web api per obtenir les dades. Hauràs de crear la teva base de dades. Et pots ajudar de paquets com “json-server” per crear-la i desplegar-la en alguna plataforma per poder-hi accedir.

## Entrega

Enviar mail a cojeda@itrecruiter.es amb assumpte «Test Tècnic – nom del candidat»
Pujar el codi font del projecte a un repositori a Github i proporcionar l’enllaç.
Desplegar l’aplicació a un servidor perquè pugui ser accessible en línia.

## Documentació complementaria:

S’adjunten els objectes de «client» i «producte» perquè tingueu el model de les dades que s’usen. Els models són un referent. Opcionalment, es poden afegir més elements i més propietats amb dades aleatòries

> OBJECTE CLIENT (customer):

{
"\_id" : 555555,
"docType" : "nif",
"docNum" : "11223344E",
"email" : "it@parlem.com",
"customerId" : "11111",
"givenName" : "Enriqueta",
"familyName1" : "Parlem",
"phone" : "668668668",
}

> ARRAY OBJECTES PRODUCTE:

[{
"_id" : 1111111,
"productName" : "FIBRA 1000MB”,
“mbSpeed”: 1000,
“gbData”:null
"productTypeName" : "ftth",
"numeracioTerminal" : 933933933,
"soldAt" : "2019-01-09 14:26:17",
"customerId" : "11111",
},
{
"_id" : 1111112,
"productName" : “MOBIL 500GB”,
“mbSpeed”: null,
“gbData”:500
"productTypeName" : "4G",
"numeracioTerminal" : 696696969,
"soldAt" : "2020-08-01 18:30:27",
"customerId" : "11111",
}]
