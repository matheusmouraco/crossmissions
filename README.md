# Cross Missions — hub dos projetos

Site principal da Cross Missions (https://crossmissions.com). Funciona como hub: apresenta a associação e leva aos sites de cada projeto.

- New Generation: https://newgeneration.one
- Escola do Sobrenatural: em breve
- The Best Gift: em breve

## Como ligar um projeto novo

Edite `content/projects.ts` e preencha `url` (e `logo`, com a versão branca do logotipo em `public/img/marca/`). Sem `url`, o cartão aparece como "Em breve".

## Desenvolvimento

```bash
npm install
npm run dev
```

Next.js 16 + Tailwind CSS 4. Publicado na Vercel (projeto `crossmissions-hub`): cada push na `main` vai para produção.
