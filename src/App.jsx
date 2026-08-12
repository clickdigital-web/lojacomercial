import { useState, useRef } from 'react'

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [copiedPath, setCopiedPath] = useState(null)
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

  const handleCopy = (path) => {
    const fullUrl = window.location.origin + path
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedPath(path)
      setTimeout(() => {
        setCopiedPath((curr) => (curr === path ? null : curr))
      }, 2000)
    }).catch(() => {
      setCopiedPath(path)
      setTimeout(() => {
        setCopiedPath(null)
      }, 2000)
    })
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
              <div className="card-actions">
                <a
                  href={asset.path}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <ExternalLinkIcon />
                  <span>Abrir</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(asset.path)}
                  className={`btn btn-primary ${copiedPath === asset.path ? 'copied' : ''}`}
                >
                  {copiedPath === asset.path ? (
                    <>
                      <CheckIcon />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon />
                      <span>Copiar Link</span>
                    </>
                  )}
                </button>
              </div>
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
