# Lauri Roponen — Portfolio

React- ja TypeScript-pohjainen henkilökohtainen hakemus- ja portfoliosivusto. Sivusto on kaksikielinen, responsiivinen ja rakennettu Vite-kehyksellä.

## Sisältö

- Henkilökohtainen esittely ja yhteystiedot
- Hakemusosio "Miksi juuri teille"
- Tekninen osaamislista
- Valitut ohjelmistoprojektit
- Työkokemus ja KINRA-vastuut
- Suomen ja englannin kielivalinta
- Kalateemainen roikkuva vitsinappi

## Kansiorakenne

```text
public/
  favicon.svg
  icons.svg
  lauri-roponen.png
src/
  assets/
  components/
    ApplicationFit.tsx
    Contact.tsx
    Experience.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    Leadership.tsx
    Projects.tsx
    Skills.tsx
  context/
    LanguageContext.tsx
  data/
    portfolio.ts
  App.tsx
  App.css
  index.css
  main.tsx
index.html
package.json
vite.config.ts
tsconfig*.json
```

## Tiedostojen muokkaaminen

- Sivun osiot: `src/components/`
- Projektit, taidot ja työkokemus: `src/data/portfolio.ts`
- Kielitila: `src/context/LanguageContext.tsx`
- Värit, välimatkat, animaatiot ja responsiivisuus: `src/App.css`
- Perusvärit ja fontit: `src/index.css`
- Sivuston otsikko ja metatiedot: `index.html`

## Kehitys

Vaaditaan Node.js ja npm.

```bash
npm install
npm run dev
```

## Tarkistus ja tuotantokäännös

```bash
npm run lint
npm run build
npm run preview
```

- `npm run lint` tarkistaa lähdekoodin.
- `npm run build` luo tuotantokoonnin `dist/`-kansioon.
- `npm run preview` näyttää tuotantokoonnin paikallisessa esikatselussa.

## GitHub-pushin valmistelu

Projekti on tuotantokoodin osalta valmis GitHubiin vietäväksi. Sivua ei ole vielä julkaistu eikä tähän GitHubiin ole tehty pushausta.

```bash
git init
git add .
git status
git commit -m "Create portfolio application"
git remote add origin <GITHUB_REPOSITORY_URL>
git branch -M main
git push -u origin main
```
