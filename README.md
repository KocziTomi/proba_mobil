# Mobil próbafeladat

Az applikáció React Native segítségével készült. A reqres.in API biztosította az adatokat.

## Szerkezet

A megvalósítás során szempont volt a komponens alapú szemlélet, ezért a különálló főbb komponensek külön fájlban/mappában találhatóak:__

- views         *// Ez tartalmazza az alkalmazás Screen-jeit, az itt található fájlok több komponensből is állhatnak*__
 - Login.js     *// Ez tartalmazza a Login Screen-t és a hozzá kapcsolódó function-ket*__
 - Home.js      *// Ez tartalmazza a Home Screen-t és a hozzá kapcsolódó function-ket, valamint a **listItem** komponenst*__
        
- components    *// Ez tartalmaz egy kisebb komponenst, amely egy Screen alkotóelemeként szolgál*__
 - listItem.js  *// Ez tartalmazza a Home Screen-ben található border-box vázát, a valós adatokat props-ként kapja a Home-ból*__

Általánosságban minden fájl az alábbi struktúrát használja:____

- importok__
- komponens (function-ként) **{**__
 - useState & variable deklarációk__
 - function-ök: GET, POST requestek__
 - return: React Native komponensek__
-**}**__
- StyleSheet__
 
    
## Elérhetőség/indítás

Az Expo publikációnak köszönhetően az alábbi linken QR-kód használatával:
[expo link](https://expo.io/@koczitomi/proba)

*VAGY*

Lokálisan is buildelhető az alábbi parancssal:
```bash
npm start
```

Ehhez szükséges lehet a felhasznált package-k előzetes telepítése:
```bash
npm install
```

## Felhasznált package-k:

Megtalálhatóak a package.json fájlban.

## Megjegyzés

Az API nem ad vissza **error**-t rossz jelszó esetén, ezért a Login a helyes email-lel és rossz jelszóval is továbbít a Home Screenre. Ha a response megfelelő lenne, akkor az app nem engedne tovább, hanem Alert-et dobna.
