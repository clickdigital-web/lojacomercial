import { useState, useRef } from 'react'

export default function App() {
  const [unlocked, setUnlocked] = useState(false)
  const clickCount = useRef(0)
  const timerRef = useRef(null)

  const handleLogoClick = () => {
    clickCount.current += 1

    if (clickCount.current >= 3) {
      setUnlocked(true)
      clickCount.current = 0
      if (timerRef.current) clearTimeout(timerRef.current)
    } else {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        clickCount.current = 0
      }, 1500)
    }
  }

  const assets = [
    {
      title: 'Logo Click Branca',
      filename: 'logo-click-branca.png',
      path: '/wp-content/uploads/2025/09/logo-click-branca.png',
      bgTheme: 'dark',
    },
    {
      title: 'Logo Click Preta',
      filename: 'logo-click-preta.png',
      path: '/wp-content/uploads/2025/09/logo-click-preta.png',
      bgTheme: 'light',
    },
    {
      title: 'Favicon Click Digital',
      filename: 'favicon-click-digital.png',
      path: '/favicon-click-digital.png',
      bgTheme: 'dark',
    },
  ]

  if (!unlocked) {
    return (
      <div className="camo-screen">
        <span className="camo-label">domínio gerido por:</span>
        <div className="camo-logo-wrapper" onClick={handleLogoClick}>
          <img
            src="/wp-content/uploads/2025/09/logo-click-branca.png"
            alt="Logo Click"
            className="camo-logo"
            draggable="false"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="badge">Static CDN Service</div>
      <h1>Loja Comercial Assets</h1>
      <p className="subtitle">Rotas estáticas ativas e prontas para produção na Vercel.</p>

      <div className="assets-grid">
        {assets.map((asset) => (
          <div key={asset.filename} className="asset-card">
            <div className={`preview-box ${asset.bgTheme}`}>
              <img src={asset.path} alt={asset.title} />
            </div>
            <div className="asset-info">
              <div className="asset-name">{asset.title}</div>
              <div className="asset-path">{asset.path}</div>
              <a
                href={asset.path}
                target="_blank"
                rel="noreferrer"
                className="link-btn"
              >
                Abrir Imagem Direta ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="footer-note">
        Os arquivos estão configurados na pasta <code>public/wp-content/uploads/2025/09/</code>
      </p>
    </div>
  )
}
