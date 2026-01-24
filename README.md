<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>README — Hermeticum B.C.E. Services</title>
  <meta name="description" content="Hermeticum B.C.E. Services — README in formato HTML." />
  <style>
    :root{
      color-scheme: dark;
      --bg:#0b0c10;
      --panel:#0f1117;
      --line:#24262b;
      --text:#e8e8e8;
      --muted:#b8b8b8;
      --accent:#6ae3ff;
      --warn:#ffd36a;
    }
    *{ box-sizing:border-box; }
    body{
      margin:0;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background:var(--bg);
      color:var(--text);
      line-height:1.55;
    }
    header, main, footer{
      max-width: 980px;
      margin: 0 auto;
      padding: 20px;
    }
    header{ padding-top: 32px; padding-bottom: 10px; }
    h1{
      margin:0 0 8px;
      font-size: 28px;
      letter-spacing: .3px;
    }
    h2{
      margin: 22px 0 10px;
      font-size: 18px;
      letter-spacing: .2px;
    }
    p{ margin: 10px 0; }
    a{ color: var(--accent); text-decoration:none; }
    a:hover{ text-decoration:underline; }

    .pill{
      display:inline-block;
      padding: 4px 10px;
      border:1px solid var(--line);
      border-radius: 999px;
      font-size: 12px;
      color: var(--muted);
      background: rgba(255,255,255,0.03);
      margin-right: 6px;
    }
    .card{
      border:1px solid var(--line);
      border-radius: 16px;
      background: var(--panel);
      padding: 18px;
      margin-top: 14px;
    }
    .disclaimer{
      border-left: 3px solid var(--warn);
      padding: 12px 14px;
      background: rgba(255,211,106,0.08);
      border-radius: 12px;
      font-size: 14px;
      margin-top: 12px;
    }
    ul{ margin: 10px 0 10px 18px; }
    li{ margin: 6px 0; }
    .muted{ color: var(--muted); }
    code{
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      font-size: 12.5px;
      background: rgba(255,255,255,0.05);
      border: 1px solid var(--line);
      padding: 2px 6px;
      border-radius: 8px;
    }
    pre{
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--line);
      padding: 12px;
      border-radius: 12px;
      overflow:auto;
      margin: 10px 0;
    }
    .grid{
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 14px;
      margin-top: 10px;
    }
    .cta{
      display:inline-block;
      margin-top: 10px;
      padding: 10px 16px;
      border-radius: 999px;
      background: var(--accent);
      color:#000;
      font-weight: 700;
    }
    .cta.secondary{
      background: transparent;
      color: var(--accent);
      border: 1px solid var(--line);
      margin-left: 8px;
      font-weight: 650;
    }
    footer{
      margin-top: 34px;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 13px;
    }
    footer a{ color: var(--muted); }
  </style>
</head>

<body>
<header>
  <span class="pill">UE-first</span>
  <span class="pill">Privacy by design</span>
  <span class="pill">Zero data retention</span>

  <h1>Hermeticum B.C.E. — Services</h1>
  <p class="muted"><strong>Evidenze crittografiche. Identità verificabili. Zero data retention.</strong></p>

  <div class="disclaimer">
    <strong>Nota importante:</strong><br />
    “UE-first” indica un orientamento progettuale (GDPR, minimizzazione, auditabilità).
    <strong>Non è una certificazione ufficiale UE</strong> e <strong>non sostituisce documenti statali</strong> (CIE, passaporto, ecc.).
  </div>
</header>

<main>

  <section class="card">
    <h2>Cos’è questo repository</h2>
    <p>
      <strong>Hermeticum B.C.E. — Services</strong> è il punto di ingresso pubblico dell’ecosistema <strong>Hermeticum B.C.E.</strong>
      e fornisce strumenti <strong>client-side</strong> per generare <strong>prove verificabili</strong> (hash e bundle locali)
      secondo principi <strong>UE-first</strong>, <strong>privacy by design</strong> e <strong>audit-by-design</strong>.
    </p>
    <p><strong>Nessun dato viene inviato o archiviato su server.</strong></p>
  </section>

  <section class="card">
    <h2>Stato del progetto</h2>
    <p>🟢 <strong>ATTIVO — Trust Pack completo</strong></p>
    <p class="muted">Onboarding guidato, policy pubbliche, verifiche offline.</p>
  </section>

  <section class="card">
    <h2>Principi chiave</h2>
    <ul>
      <li><strong>Client-side only</strong> (browser dell’utente)</li>
      <li><strong>Zero data retention</strong></li>
      <li><strong>Hash locali</strong> (es. SHA-512)</li>
      <li><strong>Verifica offline indipendente</strong></li>
      <li><strong>Fail-closed</strong></li>
      <li><strong>UE-first</strong> come standard di riferimento</li>
    </ul>
  </section>

  <section class="card">
    <h2>Cosa fa questo servizio</h2>
    <ul>
      <li>genera <strong>hash crittografici locali</strong> per documenti</li>
      <li>crea <strong>Evidence Bundle</strong> (JSON) verificabili offline</li>
      <li>abilita un <strong>IPR Base</strong> come ancora tecnica personale</li>
      <li>non carica, non salva, non traccia dati</li>
    </ul>
  </section>

  <section class="card">
    <h2>Cosa NON fa</h2>
    <ul>
      <li>non è un’identità statale</li>
      <li>non è una certificazione pubblica UE</li>
      <li>non protegge da dispositivi o browser compromessi</li>
      <li>non archivia documenti o dati personali</li>
    </ul>
  </section>

  <section class="card">
    <h2>Onboarding — Procedura 1-2-3</h2>
    <div class="grid">
      <div>
        <strong>1) Dati minimi (locali)</strong>
        <p class="muted">Codice Fiscale obbligatorio. Modalità Minimale o Completa (sempre locale).</p>
      </div>
      <div>
        <strong>2) Documento &amp; Hash</strong>
        <p class="muted">Selezione file e calcolo <strong>SHA-512</strong> nel browser.</p>
      </div>
      <div>
        <strong>3) Bundle &amp; Download</strong>
        <p class="muted">Generazione bundle JSON e download locale. Verifica offline consigliata.</p>
      </div>
    </div>

    <a class="cta" href="./onboarding-base.html">Avvia onboarding</a>
    <a class="cta secondary" href="./services.html">Vedi servizi</a>

    <p class="muted" style="margin-top:10px;">
      Link diretto: <a href="https://manuelcoletta1-source.github.io/hermeticum-bce-services/onboarding-base.html" target="_blank" rel="noopener">
        onboarding-base.html
      </a>
    </p>
  </section>

  <section class="card">
    <h2>Verifica offline (consigliata)</h2>
    <pre><code># Linux / macOS
shasum -a 512 FILE

# Windows PowerShell
Get-FileHash -Algorithm SHA512 .\FILE</code></pre>
    <p class="muted">Confronta l’hash con quello presente nel bundle.</p>
  </section>

  <section class="card">
    <h2>Trust Pack (policy pubbliche)</h2>
    <ul>
      <li><strong>Privacy Policy</strong> — <a href="./privacy.html">privacy.html</a></li>
      <li><strong>Terms of Use</strong> — <a href="./terms.html">terms.html</a></li>
      <li><strong>Security &amp; Verification</strong> — <a href="./security.html">security.html</a></li>
    </ul>
  </section>

  <section class="card">
    <h2>Output principali</h2>
    <p>
      <strong>HBCE-IPR-BASE (JSON)</strong><br />
      Bundle locale con metadati, hash del documento, timestamp e note di verifica.
    </p>
    <p class="muted">Versione attuale schema: <strong>v0.1.0</strong></p>
  </section>

  <section class="card">
    <h2>A chi è rivolto</h2>
    <ul>
      <li>individui che vogliono <strong>prove verificabili</strong> senza cedere dati</li>
      <li>sviluppatori e auditor</li>
      <li>progetti UE-oriented che richiedono <strong>tracciabilità senza centralizzazione</strong></li>
    </ul>
  </section>

  <section class="card">
    <h2>Repository correlati</h2>
    <p>
      Questo repo è la <strong>vetrina e l’ingresso utente</strong>.  
      Altri moduli (technology, AI workers, corpus) vivono in repository dedicati e non sono richiesti per l’uso base.
    </p>
  </section>

  <section class="card">
    <h2>Licenza e nota finale</h2>
    <p>
      Questo progetto fornisce <strong>strumenti tecnici</strong>, non riconoscimenti legali o istituzionali.<br />
      L’uso è a responsabilità dell’utente finale.
    </p>
  </section>

</main>

<footer>
  <p>
    © Hermeticum B.C.E. — Services<br />
    <a href="./privacy.html">Privacy</a> ·
    <a href="./terms.html">Terms</a> ·
    <a href="./security.html">Security</a>
    <span> — UE-first · audit-by-design · fail-closed</span>
  </p>
</footer>

</body>
</html>
```0
