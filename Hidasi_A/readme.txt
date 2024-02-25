                                                                                    C++
A C++ (ejtsd: cé plusz plusz) egy általános célú, magas szintű programozási nyelv. Támogatja a procedurális, az objektumorientált és a generikus programozást, valamint az adatabsztrakciót. Napjainkban szinte minden operációs rendszer alá létezik C++ fordító. A nyelv a C programozási nyelv hatékonyságának megőrzése mellett törekszik a könnyebben megírható, karbantartható és újrahasznosítható kód írására, ez azonban sok kompromisszummal jár, erre utal, hogy általánosan elterjedt a mid-level minősítése is, bár szigorú értelemben véve egyértelműen magas szintű. 
                                                                                Története
Bjarne Stroustrup

Bjarne Stroustrup kezdte el a C++ programozási nyelv fejlesztését a C programozási nyelv kiterjesztéseként, más nyelvekből véve át megoldásokat (Simula67, Algol68), ötleteket (ADA). A nyelv első, nem kísérleti körülmények közt való használatára 1983-ban került sor, 1987-ben pedig nyilvánvalóvá vált, hogy a C++ szabványosítása elkerülhetetlen. Ez a folyamat 1991 júniusában kezdődött el, amikor az ISO szabványosítási kezdeményezés részévé vált. A C++ programozási nyelv szabványát 1998-ban hagyták jóvá ISO/IEC 14882:1998 néven, az aktuális, 2017-es változat kódjelzése ISO/IEC 14882:2017.[1]
                                                                                Érdekesség

Mire a nyelvet szabványosították, már rengeteg C++ nyelvű kód készült, került használatba. Mivel a szabvány fejállományok némileg eltértek az eddigiektől, a bizottság érdekes megoldást választott a kompatibilitás megtartására:

    A régi C++ fejállományok (pl. „iostream.h”) továbbra is használhatóak (bár hivatalosan nem támogatottak), de tartalmuk nincs benne a standard névtérben.
    Az új, hivatalos fejállományok („iostream”) szinte megegyeznek a régiekkel, de tartalmuk a standard névtérben szerepel.
    A szabvány C fejállományok (pl.: „stdio.h”) továbbra is támogatottak, de tartalmuk a globális névtérben van.
    A C könyvtárak átvétele szintén a .h eltávolításával történt, beszúrva egy c-t a nevük elé (pl. „stdio.h”-ból „cstdio” lett). Tartalmuk a standard névtérben szerepel.

                                                                                Fordítók, fejlesztőeszközök

Windows operációs rendszeren tanuláshoz megfelelő – és ingyenes – eszköz a Code::Blocks. Haladó szinten kényelmes választás a Visual C++ Express Edition, amely ingyen letölthető a Microsoft oldaláról, de több helyen bevallottan eltér a szabványtól.

Linux/UNIX alatt megszokottabb a konzolból való fordítás (ez a lehetőség Windowsnál is megvan). Erre az említett rendszerekben általában a GNU Compiler Collection g++ programját használjuk, illetve grafikus fejlesztőeszközként rendelkezésünkre áll a KDevelop is, illetve a fentebb már említett Code::Blocks is elérhető Linux alatt.

A legtöbb fordító – ha nem adjuk meg külön – néhány esetben eltér a szabványtól, így optimalizáltabb kódot hozhatnak létre. Természetesen minden esetben lehetőség van a szabvány szerinti fordításra.
                                                                                A név eredete

Nevét Rick Mascitti találta ki. A C++ név kifejezi, hogy a nyelv a C kibővítése: az inkrementáló operátorra utal a ++.[3]
                                                                                A C++ alapelemei
                                                                                Jelkészlet
A kis- és nagybetűs angol ABC, általános írásjelek és a matematikai operátorok, jelek.
                                                                                Azonosítók
A nyelv bizonyos összetevőire (változók, konstansok, függvények stb.) névvel hivatkozunk. A legtöbb fordító csak az első 32 karaktert veszi figyelembe a nevekben. A név első karaktere betű vagy aláhúzásjel (_) lehet, ettől kezdődően már számok is szerepelhetnek benne. Lehetőleg saját névként ne adjunk meg aláhúzásjellel (_) kezdődő nevet, mert ezek a fordító számára vannak fenntartva (pl. __DATE__, __cplusplus, _MSC_VER). A C++ különbséget tesz a kis- és nagybetűk között (case-sensitive). Az alma név nem ugyanaz, mint az Alma név. 
                                                                        Típusok, változók, konstansok

A C++ -ban minden felhasznált névről meg kell mondanunk, hogy mi az, amit képvisel, tudatnunk kell a fordítóprogrammal a típusát. Megkülönböztetünk egyszerű és összetett típusokat. Egyszerű típusok az egész típusok (előjeles és előjel nélküli), a lebegőpontos típusok, a karaktertípusok, a bool és a void. Összetett típusok az alaptípusok felhasználásával felépített tömb-, mutató- stb. típusok és a felhasználói típusok (pl. osztály).

Az alapvető adattípusok mérete fordító- és platformfüggő, de a következők adottak:

    1 == sizeof(char) <= sizeof(short) <= sizeof(int) <= sizeof(long)
    1 <= sizeof(bool) <= sizeof(long)
    sizeof(char) <= sizeof(wchar_t) <= sizeof(long)
    sizeof(float) <= sizeof(double) <= sizeof(long double)
    sizeof(N) == sizeof(signed N) == sizeof(unsigned N) (ahol N lehet char, short, int vagy long)
                                                                                Típuskonverziók

Előfordulhat, hogy valamely kétoperandusú operátor különböző típusú operandusokkal rendelkezik. Ekkor, beépített típusok esetén, hogy a művelet elvégezhető legyen, a fordítónak azonos típusra kell alakítania az operandusokat. Megkülönböztetünk implicit és explicit típuskonverziót.

Implicit típuskonverzió: Ez a fajta konverzió a programozó beavatkozása nélkül automatikusan megy végbe, a C++ definíciójában szereplő szabályok alapján. A „szűkebb” típus adatvesztés nélkül konvertálódik a „szélesebb” típusra, ha szükséges. 
