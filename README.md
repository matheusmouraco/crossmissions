# Cross Missions — hub dos projetos

Site principal da Cross Missions (https://crossmissions.com). Funciona como hub: apresenta a associação e leva aos sites de cada projeto.

- Geração do Saber: https://newgeneration.one
- Enjoy 4 Families: https://www.enjoy4famlies.info
- CrossGifts: https://www.crossgift.org
- Escola do Sobrenatural: em breve

## Como ligar um projeto novo

Edite `content/projects.ts` e preencha `url` (e `logo`, com a versão branca do logotipo em `public/img/marca/`). Sem `url`, o cartão aparece como "Em breve".

## Desenvolvimento

```bash
npm install
npm run dev
```

Next.js 16 + Tailwind CSS 4. Publicado na Vercel (projeto `crossmissions-hub`): cada push na `main` vai para produção.

## Domínio

`crossmissions.com` e `www.crossmissions.com` estão vinculados ao projeto na Vercel (o `www` redireciona para o domínio sem www). No DNS do domínio:

| Tipo  | Nome  | Valor                                  |
|-------|-------|----------------------------------------|
| A     | @     | 216.150.1.1                            |
| A     | @     | 216.150.16.1                           |
| CNAME | www   | 4c7fecbe27d7733a.vercel-dns-016.com.   |

Registros de e-mail (MX, TXT) não devem ser alterados.
