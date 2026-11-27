# Portfólio · Taynan Pereira

Site pessoal com meus principais projetos: plataformas web, APIs e integrações com IA.

**Stack:** React 19, TypeScript e Vite. Sem bibliotecas de animação: os efeitos de scroll usam CSS (variáveis, 3D e `perspective`) e um único listener com `requestAnimationFrame`.

## Destaques do site

- Saudação animada no scroll, com as palavras acendendo e saída em fade.
- Blocos que surgem e somem conforme o foco na tela.
- Navegador e celular que giram em 3D até ficar de frente.
- Comparação antes/depois do detector de linhas manuscritas.
- Tema claro e escuro: segue o sistema e pode ser trocado pelo botão.
- Respeita `prefers-reduced-motion`.

## Rodando localmente

```bash
npm install
npm run dev
```

`npm run build` gera a versão final em `dist/`.

## Estrutura

```
src/
  data/content.ts      textos, projetos e links (edite aqui)
  components/          uma seção por arquivo
  hooks/               efeitos de scroll e tema
  styles/global.css    tokens de cor, tipografia e layout
public/images/         prints e telas dos projetos
```

## Deploy

Cada push na `main` publica no GitHub Pages pelo workflow em `.github/workflows/deploy.yml`.
Na primeira vez, ative em **Settings → Pages → Source: GitHub Actions**.
