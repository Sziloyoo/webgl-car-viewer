# WebGL 3D Car Showcase
Egy webalkalmazás 3D modellek realisztikus bemutatására

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run the following commands:

``` bash
# Install dependencies
npm install

# Run the local server at localhost:8080
npm run dev
```

## Leírás

Az alkalmazást szakdolgozatomként készítem.
Egyre nagyobb az igény termékek, alkatrészek és egyéb grafiaki modellek vagy animációk 3D-ben való megjelenítésére a weben.
Sok VR, AR eszköz jelenik meg és ezek web böngészőt is futtatnak. Ezért gondoltam, hogy egy ilyen témában készítenem el a szakdolgozatomat, mivel az itt megszerzett tapasztalatot a jövőben is fel tudom majd használni.

### Autó modellek
A projekt célja egy webes felület létrehozása, ahol 3D modelleket (ezesetben autókat) tudunk megjeleníteni fotorealisztikus megvilágítással, jó minőségben.
A kamerával körbe tudunk forogni a 3D modell körül, rá tudunk közelíteni és pan-elni tudunk előre megadott keretek között.
Fontos szerepet fog kapni a töltés optimalizáltság is, mert a legtöbb dolgot a háttérben töltené be az alkalmazás.
(Pl. Ha van 3 autó modell, akkor az első töltése után már meg is jelenhetne, a többi meg töltődne tovább a háttérben.

### Háttér
A 3D jelenetben még szükség lesz háttérre is, ezt "ground projected hdri map" felhasználásával érném le.
Nyilván ebből is lenne több fajta választható háttér mivel a megvilágításért és a tükröződésekhez is hozzájárulnak.

### Post Processing
Mivel minél valósághűbben jeleníteném meg a modelleket, szükség lesz utófeldolgozásra.
Glow, FXAA és SSAO -ra egészen biztosan szükség lesz.

## Megvalósítás
Az egyetemi "Számítógépes grafika" kurzuson megszerzett Three.js tapasztalokat vinném tovább, de egy keretrendszert használnék hozzá, ugyanis a React-nak van egy kifejezetten Three.js -re szánt verziója.
React Three Fiber-ben lehetőség van komponensekre szétszedni az alkalmazásunkat és a 3D jelenetünket is.
Így lehetőség nyílik jól átlátható és újrafelhasználható komponensekből összerakni az alkalmazást.
Funkcionálisan kell majd megírni a kódot jsx vagy tsx kiterjesztésű forrásfájlokba.
