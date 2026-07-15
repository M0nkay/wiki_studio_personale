# Patch — Definizioni complete (raffica 1)

**Regola applicata a ogni blocco:** una definizione risponde, in ordine, a tre domande:
1. **che tipo di oggetto è** (un numero? una funzione? una lista?)
2. **che cosa fa o misura** (il significato)
3. **come si calcola** (la formula — ultima, etichettata col suo nome)

**Prova del coprire:** nascosta la formula, la definizione deve reggere da sola.

I rattoppi si applicano ai file nella cartella `wiki/` (quella pubblicata su Vercel).
Se un blocco VECCHIO non coincide al carattere (virgolette, spazi), cerca «**Definizione.**» nella sezione indicata e sostituisci l'intero paragrafo.

---

## 1. `F0_1_Frazioni_e_percentuali.html` — §1, frazione

**Perché:** nominava le parti (numeratore, denominatore) senza mai dire che cosa È una frazione.

**VECCHIO**
```html
<p><strong>Definizione.</strong> Si scrive \(\dfrac{a}{b}\): il numero sotto, \(b\), è il <strong>denominatore</strong> (in quante parti taglio); quello sopra, \(a\), è il <strong>numeratore</strong> (quante ne prendo). La barra si legge «diviso»: \(\dfrac{3}{4}\) è anche «3 diviso 4».</p>
```

**NUOVO**
```html
<p><strong>Definizione.</strong> Una <strong>frazione</strong> è un <strong>numero</strong>: la quantità che ottieni tagliando un intero in \(b\) parti uguali e prendendone \(a\). <strong>Il simbolo.</strong> Si scrive \(\dfrac{a}{b}\): sotto, il <strong>denominatore</strong> \(b\) (in quante parti tagli); sopra, il <strong>numeratore</strong> \(a\) (quante ne prendi). La barra si legge «diviso»: \(\dfrac{3}{4}\) è anche «3 diviso 4».</p>
```

---

## 2. `F0_2_Potenze_e_radici.html` — §1, potenza

**Perché:** nominava base ed esponente senza dire che la potenza è il risultato di una moltiplicazione ripetuta.

**VECCHIO**
```html
<p><strong>Definizione.</strong> In \(a^b\): il numero grande \(a\) è la <strong>base</strong> (cosa moltiplichi), il numero piccolo in alto \(b\) è l'<strong>esponente</strong> (quante volte). Da programmatore lo scrivi <code>a**b</code> o <code>pow(a,b)</code>.</p>
```

**NUOVO**
```html
<p><strong>Definizione.</strong> La <strong>potenza</strong> \(a^b\) è un <strong>numero</strong>: il risultato di moltiplicare \(a\) per sé stesso \(b\) volte. <strong>Il simbolo.</strong> Il numero grande \(a\) è la <strong>base</strong> (cosa moltiplichi), quello piccolo in alto \(b\) è l'<strong>esponente</strong> (quante volte). Da programmatore lo scrivi <code>a**b</code> o <code>pow(a,b)</code>.</p>
```

---

## 3. `F0_5_Notazione_di_base.html` — §1, valore assoluto

**Perché:** era notazione più ricetta; la distanza da zero (il significato) stava solo nell'intuizione.

**VECCHIO**
```html
<p><strong>Definizione.</strong> Si scrive tra due barre verticali: \(|x|\). Se \(x\) è positivo resta com'è; se è negativo diventa positivo.</p>
```

**NUOVO**
```html
<p><strong>Definizione.</strong> Il <strong>valore assoluto</strong> di un numero \(x\) è un <strong>numero mai negativo</strong>: la <strong>distanza di \(x\) da zero</strong> sulla linea dei numeri. <strong>Il simbolo.</strong> Due barre verticali attorno al numero: \(|x|\). <strong>Come si calcola.</strong> Se \(x\) è positivo o zero resta com'è; se è negativo, togli il segno.</p>
```

---

## 4. `F0_5_Notazione_di_base.html` — §4, fattoriale

**Perché:** il caso peggiore trovato — pura notazione, contenuto definitorio zero.

**VECCHIO**
```html
<p><strong>Definizione.</strong> Si scrive col punto esclamativo, \(n!\), e si legge «\(n\) fattoriale»:</p>
```

**NUOVO**
```html
<p><strong>Definizione.</strong> Il <strong>fattoriale</strong> di \(n\) è un <strong>numero</strong>: il <strong>prodotto di tutti gli interi da 1 a \(n\)</strong>. Misura in quanti modi puoi mettere in fila \(n\) oggetti diversi. <strong>Il simbolo.</strong> Si scrive col punto esclamativo, \(n!\), e si legge «\(n\) fattoriale»:</p>
```

---

## 5. `F0_6_Vettori_e_prodotto_scalare.html` — §1, vettore

**Perché:** la definizione vera («lista ordinata di numeri») stava nel titolo della sezione, non nel blocco Definizione.

**VECCHIO**
```html
<p><strong>Definizione.</strong> Si scrive in grassetto e tra parentesi: \(\mathbf{x} = (x_1;\ x_2;\ \dots;\ x_n)\). Ogni numero è una <strong>componente</strong>; l'ordine conta (la prima posizione ha un significato diverso dalla seconda). Da programmatore: un array.</p>
```

**NUOVO**
```html
<p><strong>Definizione.</strong> Un <strong>vettore</strong> è una <strong>lista ordinata di numeri</strong>, trattata come un oggetto unico. Ogni numero della lista è una <strong>componente</strong>, e <strong>l'ordine conta</strong>: la prima posizione ha un significato diverso dalla seconda. <strong>Il simbolo.</strong> Si scrive in grassetto e tra parentesi: \(\mathbf{x} = (x_1;\ x_2;\ \dots;\ x_n)\). Da programmatore: un array.</p>
```

---

## 6. `F0_6_Vettori_e_prodotto_scalare.html` — §2, prodotto scalare

**Perché:** passava il test vecchio (la formula subito sotto è corretta), ma non l'asticella nuova — coprendo la formula, «per due vettori della stessa lunghezza» non regge da solo.

**VECCHIO**
```html
<p><strong>Definizione.</strong> Per due vettori \(\boldsymbol\theta\) e \(\mathbf{x}\) della stessa lunghezza (qui uso la sommatoria di F0.4):</p>
```

**NUOVO**
```html
<p><strong>Definizione.</strong> Il <strong>prodotto scalare</strong> di due vettori della stessa lunghezza è un <strong>numero</strong>: il <strong>punteggio complessivo</strong> che ottieni pesando ogni dato con la sua importanza. <strong>Come si calcola.</strong> Moltiplichi le componenti a coppie e sommi tutto (la sommatoria di F0.4):</p>
```

---

## 7. `F0_6_Vettori_e_prodotto_scalare.html` — §3, norma

**Perché:** il blocco che ha aperto tutto — notazione più ricetta, zero significato.

**VECCHIO**
```html
<p><strong>Definizione.</strong> Si scrive tra doppie barre, \(\lVert \mathbf{x} \rVert\): eleva al quadrato ogni componente, somma, e fai la radice (F0.2).</p>
```

**NUOVO**
```html
<p><strong>Definizione.</strong> La <strong>norma</strong> è una <strong>funzione</strong>: prende in ingresso un <strong>vettore</strong> e restituisce un <strong>numero mai negativo</strong> — la <strong>lunghezza</strong> del vettore, cioè quanto dista dall'origine il punto che il vettore descrive. La norma <strong>euclidea</strong> (l'unica usata nel paper) misura questa lunghezza <strong>in linea d'aria</strong>, col teorema di Pitagora. <strong>Il simbolo.</strong> Doppie barre attorno al vettore: \(\lVert \mathbf{x} \rVert\). <strong>Come si calcola.</strong> Eleva al quadrato ogni componente, somma, e fai la radice (F0.2):</p>
```

**IN AGGIUNTA** — subito dopo il box «Esempio numerico — il classico 3-4-5», inserire:
```html
<div class="callout deep"><span class="tag">Più a fondo (opzionale) — il collaudo delle lunghezze</span>
<p>In matematica «norma» è il nome di una <strong>specie</strong>: qualunque funzione che si comporti da lunghezza. Il collaudo ha quattro prove, tutte di buon senso: (1) mai negativa; (2) vale zero <strong>solo</strong> per il vettore nullo; (3) raddoppi il vettore → raddoppia la lunghezza; (4) la linea d'aria non supera mai la deviazione (la «disuguaglianza triangolare»). La Pitagora di questa pagina è l'esemplare più famoso della specie, non l'unico.</p>
</div>
```

---

## 8. `F0_8_Integrale.html` — §3, integrale

**Perché:** definiva il simbolo, non l'integrale. La definizione vera (l'area) stava in §1.

**VECCHIO**
```html
<p><strong>Definizione.</strong> Il simbolo dell'integrale è una <strong>S allungata</strong> — sta per «Somma»: \(\displaystyle\int\). Nella forma completa:</p>
```

**NUOVO**
```html
<p><strong>Definizione.</strong> L'<strong>integrale</strong> di una funzione tra due bordi \(a\) e \(b\) è un <strong>numero</strong>: l'<strong>area</strong> racchiusa tra la curva e la linea di terra su quel tratto — la somma di infinite fettine sottilissime (§2). <strong>Il simbolo.</strong> Una <strong>S allungata</strong> — sta per «Somma»: \(\displaystyle\int\). Nella forma completa:</p>
```

---

## 9. `F4_Statistica_e_ML.html` — §2.2, regressione logistica

**Perché:** l'intestazione dice «Definizione» ma sotto c'è subito la formula; il significato arriva dopo. Ritocco leggero: una frase di significato PRIMA della formula. Il paragrafo esistente «Questo è tutto il modello…» resta dov'è.

**INSERIRE** tra `<h3 id="sec-2-2">2.2 Definizione</h3>` e il `<div class="formula key">`:
```html
<p>La <strong>regressione logistica</strong> è una <strong>funzione</strong>: prende il vettore dei dati \(\mathbf{x}\) e restituisce una <strong>probabilità</strong> in \((0,1)\) — la stima di quanto è probabile che l'etichetta valga 1. Due mosse: punteggio lineare, poi sigmoide.</p>
```

---

## 10. `Come_si_studia.html` — la regola di casa

**Perché:** la regola va istituzionalizzata, così ogni pagina futura nasce già giusta.

**INSERIRE** subito dopo il paragrafo «Ordine fisso, sempre: (1) intuizione…» nella sezione «Il metodo di ogni spiegazione»:
```html
<p><strong>Che cos'è una definizione (regola di casa).</strong> Una definizione risponde, in quest'ordine, a tre domande: <strong>che tipo di oggetto è</strong> (un numero? una funzione? una lista?), <strong>che cosa fa o misura</strong>, e solo alla fine <strong>come si calcola</strong>. Notazione e ricetta hanno le loro etichette — «Il simbolo.», «Come si calcola.» — mai «Definizione.». Prova del coprire: nascosta la formula, la definizione deve reggere da sola.</p>
```

---

## Verificate e lasciate come sono

- `F0_2` §4 (radice), `F0_3` §2 (logaritmo), `F0_5` §2 (floor), `F0_1` §4 (percentuale): definizioni vere, passano anche l'asticella nuova.
- `F0_4` (somme e produttorie): usa già l'etichetta «Il simbolo.» — era la pagina modello.
- `F4` §1.3 (ripasso della norma): già significato-prima («la norma è la lunghezza del vettore…»), passa.
- Le righe del **Glossario globale** per questi simboli mettono già il significato prima della formula: passano.

## Dopo l'applicazione

1. Applicare i 10 rattoppi in `wiki/`.
2. Prova del nove visiva: aprire F0.5 e F0.6 nel browser e verificare che MathJax renda i nuovi blocchi.
3. Commit e push → Vercel ripubblica da solo.
