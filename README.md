# Loja Comercial - Static Assets & CDN

Projeto configurado com **Vite + React** pronto para deploy na **Vercel** para servir as rotas estáticas de imagens legadas do WordPress.

## 📁 Estrutura das Imagens

As imagens estão localizadas na pasta:
```
public/wp-content/uploads/2025/09/
├── logo-click-branca.png
└── logo-click-preta.png
```

> **Importante:** Substitua os arquivos na pasta `public/wp-content/uploads/2025/09/` pelas imagens originais de alta resolução da sua logo.

## 🚀 Rotas Disponibilizadas

Ao apontar o domínio `lojacomercial.com.br` na Vercel:
- `https://lojacomercial.com.br/wp-content/uploads/2025/09/logo-click-branca.png`
- `https://lojacomercial.com.br/wp-content/uploads/2025/09/logo-click-preta.png`

## ⚙️ Como Subir na Vercel

### Opção 1: Via Vercel CLI (Direto pelo terminal)
```bash
npx vercel
```
Para produção:
```bash
npx vercel --prod
```

### Opção 2: Via GitHub / Dashboard Vercel
1. Crie um repositório no GitHub/GitLab e envie estes arquivos.
2. Acesse [vercel.com](https://vercel.com) e importe o repositório.
3. As configurações de build padrão do Vite (`npm run build` e diretório `dist`) serão detectadas automaticamente.
4. Adicione seu domínio customizado `lojacomercial.com.br` nas configurações de **Domains** do projeto na Vercel.
