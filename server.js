// Mi Próxima Versión · Test de frenos — TODO el programa en un solo archivo.
// Textos del test: busca «const FRENOS» más abajo.
"use strict";
const __defs={},__cache={};
function __req(n){if(!__defs[n])return require(n);if(!__cache[n]){const m={exports:{}};__cache[n]=m;__defs[n](m,m.exports);}return __cache[n].exports;}
__defs["_lib/content"]=function(module,exports){
// Contenido del test: UNA sola fuente para la web y para los correos.
// Para cambiar textos, edita este archivo.

const OPTIONS = ["No me describe", "Un poco", "Bastante", "Me describe totalmente"];

const FRENOS = [
  { id: "claridad", n: 1, name: "Falta de claridad",
    desc: "Haces mucho, pero sin una dirección clara. No es falta de ganas ni de capacidad: casi nadie nos enseña a decidir qué queremos de verdad, y sin ese norte, cualquier esfuerzo se dispersa. La buena noticia es que la claridad se construye, y se construye con preguntas, no con presión.",
    pasa: ["Empiezas cosas distintas y ninguna se consolida.", "Te sientes ocupada, pero sin un avance real.", "Postergas decisiones esperando «tener más claro»."],
    fuerte: "Tu diálogo interno y tu miedo no son tan fuertes como la dispersión: cuando por fin eliges una dirección, tienes energía para sostenerla.",
    ex: { t: "Tu brújula en 5 minutos", x: "Escribe sin editarte: ¿qué quiero sentir dentro de un año? Y completa: «Para que eso sea cierto, tendrían que pasar estas 3 cosas…». Después subraya la que más te emociona." },
    q: "Si no tuviera que justificarme ante nadie, ¿qué querría que fuera cierto de mi vida dentro de un año?" },
  { id: "creencias", n: 2, name: "Creencias limitantes",
    desc: "Hay ideas que das por ciertas sobre ti («no soy buena para esto», «ya es tarde», «no lo merezco») y que funcionan como un techo invisible. No son verdades: son conclusiones que sacaste con la información que tenías entonces, y pueden reescribirse.",
    pasa: ["Descartas oportunidades antes de intentarlas.", "Minimizas tus logros o los atribuyes a la suerte.", "Repites los mismos resultados en distintas áreas de tu vida."],
    fuerte: "Eres capaz de verte con honestidad: eso es justo lo que hace falta para cuestionar una creencia y cambiarla.",
    ex: { t: "Detective de creencias", x: "Escribe una creencia que te limita con tus palabras exactas. Luego busca UNA evidencia real que la contradiga (algo que hiciste y «no podías»). Termina con una versión más posible de esa frase." },
    q: "¿Qué creencia me ha protegido en el pasado, pero hoy ya no me sirve?" },
  { id: "miedo", n: 3, name: "Miedo al cambio",
    desc: "Tu mente intenta protegerte de lo desconocido: del fracaso, del juicio o de perder lo que ya tienes. El miedo no es el enemigo, pero cuando manda, te mantiene donde estás. No necesitas eliminarlo: necesitas aprender a avanzar con él.",
    pasa: ["Pospones el paso importante con buenas excusas.", "Imaginas el peor escenario como si fuera el más probable.", "Aparecen dudas justo cuando estás cerca de un cambio."],
    fuerte: "Tienes un gran instinto de cuidado: cuando conviertes tu miedo en información, decides con mucha más calma.",
    ex: { t: "Peor, mejor y más probable", x: "Elige un paso que estás evitando. Escribe el peor escenario realista (y cómo lo enfrentarías), el mejor y el más probable. Termina con el paso más pequeño que podrías dar esta semana." },
    q: "¿Qué le diría mi versión de dentro de cinco años a la mujer que soy hoy sobre este miedo?" },
  { id: "perfeccionismo", n: 4, name: "Perfeccionismo y comparación",
    desc: "Tu vara es tan alta que empezar se vuelve un riesgo, y la comparación te hace sentir siempre unos pasos atrás. El perfeccionismo parece exigencia, pero muchas veces es miedo disfrazado de buenos estándares.",
    pasa: ["Revisas y ajustas sin terminar ni mostrar nada.", "Te comparas con personas que van en otra etapa.", "Descartas lo que haces bien porque «podría estar mejor»."],
    fuerte: "Te importa la calidad y tienes buen criterio: cuando lo apuntas a terminar (y no a pulir sin fin), se vuelve tu superpoder.",
    ex: { t: "La versión «suficientemente buena»", x: "Elige una tarea que estás postergando y haz una versión suficientemente buena en 15 minutos. Termínala, no la mejores. Después anota qué pasó realmente (no lo que temías)." },
    q: "¿Qué haría hoy si supiera que lo imperfecto, pero terminado, vale más que lo perfecto que nunca llega?" },
  { id: "entorno", n: 5, name: "Entorno que sostiene lo de siempre",
    desc: "Lo que te rodea (personas, rutinas, espacios) sostiene a tu versión de siempre y se incomoda cuando cambias. No se trata de cortar con todo, sino de elegir con más conciencia dónde y con quién pones tu energía.",
    pasa: ["Sientes que nadie entiende lo que quieres lograr.", "Vuelves a viejas rutinas con ciertas personas o en ciertos lugares.", "Te cuesta sostener un cambio sola."],
    fuerte: "Tienes claro cuándo algo no te suma: esa sensibilidad te permite rediseñar tu entorno con decisiones pequeñas pero poderosas.",
    ex: { t: "Mapa de mi entorno", x: "Anota 3 personas o espacios que te impulsan y 1 que te devuelve al pasado. Elige un pequeño ajuste para esta semana (menos tiempo, un límite, una conversación) y escribe cómo lo harás." },
    q: "¿Qué personas, espacios o rutinas sostienen mi versión antigua, y qué ajuste pequeño puedo hacer esta semana?" },
];

// f = índice del freno al que suma la afirmación (dos por freno)
const QUESTIONS = [
  { f: 0, t: "Hago muchas cosas, pero siento que ninguna me acerca realmente a lo que quiero." },
  { f: 1, t: "Con frecuencia pienso «yo no soy de las que…» o «a mí estas cosas no me salen»." },
  { f: 2, t: "Dejo de intentar cosas que me importan por miedo a fallar o a que me juzguen." },
  { f: 3, t: "Si no puedo hacerlo perfecto, prefiero no empezar." },
  { f: 4, t: "Las personas cercanas no entienden o desaniman mis metas." },
  { f: 0, t: "Si me preguntan qué quiero lograr este año, me cuesta responder con claridad." },
  { f: 1, t: "En el fondo siento que no merezco todo lo que deseo." },
  { f: 2, t: "Me paralizo cuando estoy a punto de dar un paso importante o de cambiar algo." },
  { f: 3, t: "Me comparo con otras personas y siento que voy tarde o que no soy suficiente." },
  { f: 4, t: "Mis rutinas y mi entorno me llevan de vuelta a lo de siempre, aunque quiera cambiar." },
];

function validAnswers(a) {
  return Array.isArray(a) && a.length === QUESTIONS.length && a.every((v) => Number.isInteger(v) && v >= 0 && v <= 3);
}

function compute(answers) {
  const scores = FRENOS.map(() => 0);
  const first = FRENOS.map(() => 0);
  QUESTIONS.forEach((q, i) => { scores[q.f] += answers[i]; });
  QUESTIONS.slice(0, 5).forEach((q, i) => { first[q.f] = answers[i]; });
  const order = FRENOS.map((_, i) => i).sort((a, b) => (scores[b] - scores[a]) || (first[b] - first[a]) || (a - b));
  const pct = scores.map((s) => Math.round((s / 6) * 100));
  return { scores, pct, order, main: order[0] };
}

module.exports = { OPTIONS, FRENOS, QUESTIONS, validAnswers, compute };

};
__defs["_lib/brevo"]=function(module,exports){
// Cliente mínimo de la API v3 de Brevo (sin dependencias).
const BASE = process.env.BREVO_BASE_URL || "https://api.brevo.com/v3";
const LIST_NAME = "Mi Próxima Versión · Test de frenos";

async function api(method, path, body) {
  if (!process.env.BREVO_API_KEY) {
    const e = new Error("Falta la variable BREVO_API_KEY");
    e.status = 500;
    throw e;
  }
  const r = await fetch(BASE + path, {
    method,
    headers: { "api-key": process.env.BREVO_API_KEY, accept: "application/json", "content-type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await r.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch (_) { data = { raw: text }; }
  if (!r.ok) {
    const e = new Error(`Brevo ${method} ${path} → ${r.status} ${(data && (data.message || data.raw)) || ""}`);
    e.status = r.status;
    e.data = data;
    throw e;
  }
  return data;
}

let attrsReady = null;
function ensureAttributes() {
  if (!attrsReady) {
    attrsReady = Promise.all(["FRENO", "TEST_FECHA"].map((n) =>
      api("POST", `/contacts/attributes/normal/${n}`, { type: "text" }).catch(() => null) // ya existe → se ignora
    )).catch(() => null);
  }
  return attrsReady;
}

let listIdCache = null;
async function getListId() {
  if (process.env.BREVO_LIST_ID) return Number(process.env.BREVO_LIST_ID);
  if (listIdCache) return listIdCache;
  let offset = 0;
  for (;;) {
    const d = await api("GET", `/contacts/lists?limit=50&offset=${offset}`);
    const found = (d.lists || []).find((l) => l.name === LIST_NAME);
    if (found) { listIdCache = found.id; return found.id; }
    if (!d.lists || d.lists.length < 50) break;
    offset += 50;
  }
  const f = await api("GET", "/contacts/folders?limit=50&offset=0");
  const folderId = f.folders && f.folders[0] && f.folders[0].id;
  const created = await api("POST", "/contacts/lists", { name: LIST_NAME, folderId });
  listIdCache = created.id;
  return created.id;
}

async function upsertContact({ email, name, freno, listId }) {
  await ensureAttributes();
  const attributes = { FRENO: freno, TEST_FECHA: new Date().toISOString().slice(0, 10) };
  if (name) attributes.FIRSTNAME = name;
  return api("POST", "/contacts", { email, attributes, listIds: [listId], updateEnabled: true });
}

function sender() {
  const email = process.env.BREVO_SENDER_EMAIL;
  if (!email) { const e = new Error("Falta la variable BREVO_SENDER_EMAIL"); e.status = 500; throw e; }
  return { name: process.env.BREVO_SENDER_NAME || "Mi Próxima Versión", email };
}

function sendEmail({ to, toName, subject, html, tags }) {
  const s = sender();
  return api("POST", "/smtp/email", {
    sender: s, replyTo: { email: s.email, name: s.name },
    to: [toName ? { email: to, name: toName } : { email: to }],
    subject, htmlContent: html, tags: tags || [],
  });
}

// Todos los contactos de la lista principal (hasta 5000)
async function listContacts(listId) {
  let all = [];
  for (let offset = 0; offset < 5000; offset += 500) {
    const d = await api("GET", `/contacts/lists/${listId}/contacts?limit=500&offset=${offset}&sort=desc`);
    const batch = d.contacts || [];
    all = all.concat(batch);
    if (batch.length < 500) break;
  }
  return all.map((c) => ({
    email: c.email,
    nombre: (c.attributes && c.attributes.FIRSTNAME) || "",
    freno: (c.attributes && c.attributes.FRENO) || "",
    fecha: (c.attributes && c.attributes.TEST_FECHA) || (c.createdAt || "").slice(0, 10),
    baja: !!c.emailBlacklisted,
  }));
}

module.exports = { api, ensureAttributes, getListId, upsertContact, sendEmail, sender, listContacts, LIST_NAME };

};
__defs["_lib/auth"]=function(module,exports){
// Sesión del panel admin: token firmado con HMAC (sin base de datos).
const crypto = require("crypto");

function secret() {
  return process.env.SESSION_SECRET ||
    crypto.createHash("sha256").update("mpv:" + (process.env.ADMIN_PASSWORD || "") + (process.env.BREVO_API_KEY || "")).digest("hex");
}
const b64 = (s) => Buffer.from(s).toString("base64url");
const sign = (p) => crypto.createHmac("sha256", secret()).update(p).digest("base64url");

function checkPassword(given) {
  const real = process.env.ADMIN_PASSWORD || "";
  if (!real) return false;
  const a = crypto.createHash("sha256").update(String(given || "")).digest();
  const b = crypto.createHash("sha256").update(real).digest();
  return crypto.timingSafeEqual(a, b);
}

function issueToken(hours = 12) {
  const payload = b64(JSON.stringify({ exp: Date.now() + hours * 3600 * 1000 }));
  return { token: payload + "." + sign(payload), expiresInHours: hours };
}

function verifyToken(token) {
  if (!token || token.indexOf(".") < 0) return false;
  const [payload, sig] = token.split(".");
  const expected = sign(payload);
  try {
    if (sig.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
    const { exp } = JSON.parse(Buffer.from(payload, "base64url").toString());
    return typeof exp === "number" && exp > Date.now();
  } catch (_) { return false; }
}

// devuelve true si está autorizada; si no, responde 401 y devuelve false
function requireAuth(req, res) {
  const h = req.headers["authorization"] || "";
  const t = h.startsWith("Bearer ") ? h.slice(7) : "";
  if (!process.env.ADMIN_PASSWORD) { res.status(500).json({ ok: false, error: "Falta configurar ADMIN_PASSWORD en Vercel." }); return false; }
  if (!verifyToken(t)) { res.status(401).json({ ok: false, error: "Sesión caducada. Entra de nuevo." }); return false; }
  return true;
}

module.exports = { checkPassword, issueToken, verifyToken, requireAuth };

};
__defs["_lib/email"]=function(module,exports){
// Plantillas de correo (HTML compatible con Gmail/Outlook/Apple Mail: tablas y estilos en línea).
const { FRENOS } = __req("_lib/content");

const C = { pink: "#F4D3DA", pinkL: "#FAE6EA", beige: "#F8F1E7", gold: "#BF9A44", goldD: "#9A762B", goldL: "#E3CF9F", brown: "#5B4439", soft: "#8C7468" };
const SERIF = "Georgia,'Times New Roman',serif";
const SANS = "'Helvetica Neue',Helvetica,Arial,sans-serif";
const IG = "https://www.instagram.com/miproximaversion/";

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function shell({ preheader, inner, footer }) {
  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>Mi Próxima Versión</title></head>
<body style="margin:0;padding:0;background:${C.pink};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.pink};">${esc(preheader || "")}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.pink}" style="background:${C.pink};"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.beige}" style="width:100%;max-width:600px;background:${C.beige};border:1px solid ${C.gold};border-radius:18px;">
<tr><td align="center" style="padding:30px 32px 0;font-family:${SANS};font-size:11px;letter-spacing:4px;text-transform:uppercase;color:${C.goldD};">Mi Próxima Versión</td></tr>
<tr><td align="center" style="padding:10px 32px 0;color:${C.gold};font-size:14px;line-height:14px;">&#9670;</td></tr>
${inner}
<tr><td style="padding:26px 32px 30px;border-top:1px solid ${C.goldL};font-family:${SANS};font-size:12px;line-height:1.6;color:${C.soft};text-align:center;">
${footer}
</td></tr>
</table>
</td></tr></table>
</body></html>`;
}

function button(text, url) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:6px auto;"><tr><td align="center" bgcolor="${C.goldD}" style="border-radius:30px;">
<a href="${esc(url)}" style="display:inline-block;padding:15px 34px;font-family:${SANS};font-size:13px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;color:#ffffff;text-decoration:none;">${esc(text)}</a></td></tr></table>`;
}

function p(text, extra) {
  return `<p style="margin:0 0 14px;font-family:${SANS};font-size:15px;line-height:1.7;color:${C.brown};${extra || ""}">${text}</p>`;
}

/* ---------- correo con el resultado del test ---------- */
function resultEmail({ name, result, ctaUrl, ctaText }) {
  const main = FRENOS[result.main];
  const low = FRENOS[result.order[4]];
  const second = result.scores[result.order[1]] >= 3 ? FRENOS[result.order[1]] : null;
  const soft = result.scores[result.main] <= 2;
  const hi = name ? `Hola, ${esc(name)}` : "Hola";

  const bars = result.order.map((i, pos) => {
    const pc = Math.max(result.pct[i], 4);
    const lvl = result.pct[i] < 34 ? "Bajo" : result.pct[i] < 67 ? "Medio" : "Alto";
    const colr = pos === 0 ? C.goldD : C.gold;
    return `<tr><td style="padding:10px 0 4px;font-family:${SANS};font-size:13px;color:${pos === 0 ? C.goldD : C.brown};font-weight:${pos === 0 ? "bold" : "normal"};">${esc(FRENOS[i].name)}</td>
<td align="right" style="padding:10px 0 4px;font-family:${SANS};font-size:12px;color:${C.soft};">${lvl} · ${result.pct[i]}%</td></tr>
<tr><td colspan="2"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td width="${pc}%" height="8" bgcolor="${colr}" style="height:8px;line-height:8px;font-size:0;border-radius:6px;">&nbsp;</td>
<td width="${100 - pc}%" height="8" bgcolor="${C.pink}" style="height:8px;line-height:8px;font-size:0;">&nbsp;</td></tr></table></td></tr>`;
  }).join("");

  const pasa = main.pasa.map((t) => `<tr><td valign="top" width="18" style="padding:4px 0;color:${C.gold};font-size:10px;font-family:${SANS};">&#9670;</td><td style="padding:3px 0;font-family:${SANS};font-size:14px;line-height:1.55;color:${C.brown};">${esc(t)}</td></tr>`).join("");

  const inner = `
<tr><td align="center" style="padding:14px 32px 0;font-family:${SANS};font-size:12px;letter-spacing:3px;text-transform:uppercase;color:${C.goldD};">Tu freno principal</td></tr>
<tr><td align="center" style="padding:6px 32px 0;font-family:${SERIF};font-size:76px;line-height:80px;color:${C.gold};">${main.n}</td></tr>
<tr><td align="center" style="padding:0 32px;font-family:${SERIF};font-size:30px;line-height:1.2;color:${C.brown};">${esc(main.name)}</td></tr>
${second ? `<tr><td align="center" style="padding:8px 32px 0;font-family:${SANS};font-size:12px;color:${C.soft};">Después pesa: <strong style="color:${C.goldD};">${esc(second.name)}</strong></td></tr>` : ""}
<tr><td style="padding:24px 32px 6px;">
${p(hi + ",")}
${p(`${soft ? "Tus frenos son suaves, y eso es una gran noticia. Aun así, este es el que más pesa hoy. " : ""}${esc(main.desc)}`)}
</td></tr>
<tr><td style="padding:6px 32px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.pinkL}" style="background:${C.pinkL};border:1px solid ${C.goldL};border-radius:14px;"><tr><td style="padding:18px 20px;">
<div style="font-family:${SANS};font-size:10px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:${C.goldD};padding-bottom:8px;">Lo que suele pasar</div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">${pasa}</table>
</td></tr></table></td></tr>
<tr><td style="padding:26px 32px 0;"><div style="font-family:${SERIF};font-size:21px;color:${C.brown};padding-bottom:4px;">Tu mapa de frenos</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${bars}</table></td></tr>
<tr><td style="padding:24px 32px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.pinkL}" style="background:${C.pinkL};border:1px solid ${C.goldL};border-radius:14px;"><tr><td style="padding:16px 20px;">
<div style="font-family:${SANS};font-size:10px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:${C.goldD};padding-bottom:6px;">Tu punto a favor</div>
<div style="font-family:${SANS};font-size:14px;line-height:1.6;color:${C.brown};">${esc(low.fuerte)}</div></td></tr></table></td></tr>
<tr><td style="padding:24px 32px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.pink}" style="background:${C.pink};border:1px solid ${C.gold};border-radius:14px;"><tr><td style="padding:20px 22px;">
<div style="font-family:${SANS};font-size:10px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:${C.goldD};">Tu primer ejercicio</div>
<div style="font-family:${SERIF};font-size:22px;line-height:1.25;color:${C.brown};padding:6px 0 8px;">${esc(main.ex.t)}</div>
<div style="font-family:${SANS};font-size:14px;line-height:1.65;color:${C.brown};">${esc(main.ex.x)}</div></td></tr></table></td></tr>
<tr><td align="center" style="padding:26px 40px 0;border-top:0;"><div style="border-top:1px solid ${C.gold};border-bottom:1px solid ${C.gold};padding:18px 6px;">
<div style="font-family:${SANS};font-size:10px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;color:${C.goldD};padding-bottom:8px;">Pregunta para llevarte</div>
<div style="font-family:${SERIF};font-style:italic;font-size:19px;line-height:1.45;color:${C.goldD};">«${esc(main.q)}»</div></div></td></tr>
${ctaUrl ? `<tr><td style="padding:26px 32px 0;" align="center">${p(esc(ctaText || ""), "text-align:center;")}${button("Quiero seguir", ctaUrl)}</td></tr>` : ""}
<tr><td align="center" style="padding:24px 32px 26px;font-family:${SANS};font-size:14px;color:${C.brown};">Con cariño,<br><span style="font-family:${SERIF};font-size:18px;">Mi Próxima Versión</span></td></tr>`;

  const footer = `Recibiste este correo porque completaste el test «¿Qué te está frenando?». Si no fuiste tú, puedes ignorarlo.<br>
Sígueme en <a href="${IG}" style="color:${C.goldD};">@miproximaversion</a>. Si no quieres recibir más novedades, usa el enlace de cancelar suscripción que incluye cada boletín.`;

  return {
    subject: `Tu resultado: ${main.name} · ¿Qué te está frenando?`,
    html: shell({ preheader: `Tu freno principal es «${main.name}». Aquí está tu mapa y tu primer ejercicio.`, inner, footer }),
  };
}

/* ---------- correos que redactas desde el panel ---------- */
function textToHtml(text, { test } = {}) {
  const nombre = test ? "amiga" : "{{ contact.FIRSTNAME | default: 'amiga' }}";
  return String(text || "").trim().split(/\n{2,}/).map((para) => {
    let h = esc(para).replace(/\n/g, "<br>");
    h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    h = h.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, `<a href="$2" style="color:${C.goldD};">$1</a>`);
    h = h.replace(/(^|[^"'(>=])(https?:\/\/[^\s<)]+)/g, `$1<a href="$2" style="color:${C.goldD};">$2</a>`);
    h = h.replace(/\{nombre\}/gi, nombre);
    return p(h);
  }).join("\n");
}

function campaignEmail({ body, btnText, btnUrl, test }) {
  const inner = `<tr><td style="padding:22px 36px 6px;">${textToHtml(body, { test })}
${btnText && btnUrl ? `<div style="padding:10px 0 6px;">${button(btnText, btnUrl)}</div>` : ""}</td></tr>
<tr><td align="center" style="padding:6px 32px 22px;font-family:${SANS};font-size:14px;color:${C.brown};">Con cariño,<br><span style="font-family:${SERIF};font-size:18px;">Mi Próxima Versión</span></td></tr>`;
  const unsub = test ? "#" : "{{ unsubscribe }}";
  const footer = `Recibes este correo porque te registraste en Mi Próxima Versión.<br>
<a href="${IG}" style="color:${C.goldD};">@miproximaversion</a> · <a href="${unsub}" style="color:${C.goldD};">Cancelar suscripción</a>`;
  return shell({ preheader: "", inner, footer });
}

module.exports = { resultEmail, campaignEmail, esc };

};
__defs["content"]=function(module,exports){
const { OPTIONS, FRENOS, QUESTIONS } = __req("_lib/content");

// Contenido público del test (mismo que usa el correo).
module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "public, max-age=60, s-maxage=300");
  res.status(200).json({
    options: OPTIONS,
    questions: QUESTIONS.map((q) => ({ t: q.t })),
    frenos: FRENOS,
    cta: process.env.CTA_URL ? { url: process.env.CTA_URL, text: process.env.CTA_TEXT || "" } : null,
  });
};

};
__defs["result"]=function(module,exports){
const { validAnswers, compute } = __req("_lib/content");

// Calcula el resultado sin guardar nada (se usa al repetir el test).
module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Método no permitido" });
  const body = typeof req.body === "string" ? safeJson(req.body) : req.body || {};
  if (!validAnswers(body.answers)) return res.status(400).json({ ok: false, error: "Respuestas inválidas" });
  res.status(200).json({ ok: true, result: compute(body.answers) });
};

function safeJson(s) { try { return JSON.parse(s); } catch (_) { return {}; } }

};
__defs["subscribe"]=function(module,exports){
const { FRENOS, validAnswers, compute } = __req("_lib/content");
const brevo = __req("_lib/brevo");
const { resultEmail } = __req("_lib/email");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const hits = new Map(); // límite sencillo por IP (en memoria, por instancia)

function tooMany(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 60000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 6;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Método no permitido" });
  const body = typeof req.body === "string" ? safeJson(req.body) : req.body || {};

  if (body.web) return res.status(200).json({ ok: true }); // trampa para bots: respondemos "ok" sin hacer nada

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "local";
  if (tooMany(ip)) return res.status(429).json({ ok: false, error: "Demasiados intentos. Espera un minuto e inténtalo de nuevo." });

  const email = String(body.email || "").trim().toLowerCase();
  const name = String(body.name || "").trim().replace(/[<>]/g, "").slice(0, 60);
  if (!EMAIL_RE.test(email) || email.length > 160) return res.status(400).json({ ok: false, error: "Escribe un correo válido para enviarte tu resultado." });
  if (!validAnswers(body.answers)) return res.status(400).json({ ok: false, error: "No pudimos leer tus respuestas. Repite el test." });

  const result = compute(body.answers);
  const main = FRENOS[result.main];

  // 1) guardar/actualizar el contacto en Brevo
  try {
    const listId = await brevo.getListId();
    await brevo.upsertContact({ email, name, freno: main.name, listId });
  } catch (e) {
    console.error("[subscribe] contacto", e.message);
    return res.status(502).json({ ok: false, error: "No pudimos guardar tu correo en este momento. Inténtalo de nuevo en unos minutos." });
  }

  // 2) enviar el resultado por correo (si falla, igualmente mostramos el resultado en pantalla)
  let emailSent = false;
  try {
    const mail = resultEmail({ name, result, ctaUrl: process.env.CTA_URL, ctaText: process.env.CTA_TEXT });
    await brevo.sendEmail({ to: email, toName: name, subject: mail.subject, html: mail.html, tags: ["test-frenos", "resultado"] });
    emailSent = true;
  } catch (e) {
    console.error("[subscribe] email", e.message);
  }

  res.status(200).json({ ok: true, emailSent, result });
};

function safeJson(s) { try { return JSON.parse(s); } catch (_) { return {}; } }

};
__defs["admin/login"]=function(module,exports){
const { checkPassword, issueToken } = __req("_lib/auth");
const fails = new Map();

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Método no permitido" });
  if (!process.env.ADMIN_PASSWORD) return res.status(500).json({ ok: false, error: "Falta configurar ADMIN_PASSWORD en Vercel." });
  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "local";
  const now = Date.now();
  const recent = (fails.get(ip) || []).filter((t) => now - t < 10 * 60000);
  if (recent.length >= 8) return res.status(429).json({ ok: false, error: "Demasiados intentos. Espera unos minutos." });
  const body = typeof req.body === "string" ? safe(req.body) : req.body || {};
  if (!checkPassword(body.password)) {
    recent.push(now); fails.set(ip, recent);
    return res.status(401).json({ ok: false, error: "Contraseña incorrecta." });
  }
  res.status(200).json({ ok: true, ...issueToken(12) });
};
function safe(s) { try { return JSON.parse(s); } catch (_) { return {}; } }

};
__defs["admin/contacts"]=function(module,exports){
const { requireAuth } = __req("_lib/auth");
const brevo = __req("_lib/brevo");
const { FRENOS } = __req("_lib/content");

module.exports = async function handler(req, res) {
  if (!requireAuth(req, res)) return;
  try {
    const listId = await brevo.getListId();
    const contacts = await brevo.listContacts(listId);
    const byFreno = {};
    FRENOS.forEach((f) => (byFreno[f.name] = 0));
    let activos = 0;
    contacts.forEach((c) => { if (!c.baja) { activos++; if (c.freno in byFreno) byFreno[c.freno]++; } });
    res.status(200).json({ ok: true, listId, total: contacts.length, activos, byFreno, frenos: FRENOS.map((f) => f.name), contacts });
  } catch (e) {
    console.error("[admin/contacts]", e.message);
    res.status(502).json({ ok: false, error: "No se pudo leer Brevo: " + e.message });
  }
};

};
__defs["admin/send"]=function(module,exports){
const { requireAuth } = __req("_lib/auth");
const brevo = __req("_lib/brevo");
const { FRENOS } = __req("_lib/content");
const { campaignEmail } = __req("_lib/email");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const pad = (n) => String(n).padStart(2, "0");

async function audience(listId, aud) {
  const all = (await brevo.listContacts(listId)).filter((c) => !c.baja && c.email);
  if (aud === "all" || aud == null || aud === "") return { label: "Todas", list: all };
  const f = FRENOS[Number(aud)];
  if (!f) throw Object.assign(new Error("Audiencia inválida"), { status: 400 });
  return { label: f.name, list: all.filter((c) => c.freno === f.name) };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Método no permitido" });
  if (!requireAuth(req, res)) return;
  const b = typeof req.body === "string" ? safe(req.body) : req.body || {};
  const mode = b.mode;
  try {
    const listId = await brevo.getListId();

    if (mode === "count") {
      const a = await audience(listId, b.audience);
      return res.status(200).json({ ok: true, count: a.list.length, label: a.label });
    }

    const subject = String(b.subject || "").trim().slice(0, 150);
    const text = String(b.body || "").trim();
    if (!subject || !text) return res.status(400).json({ ok: false, error: "Escribe el asunto y el mensaje." });
    if (b.btnUrl && !/^https?:\/\//i.test(b.btnUrl)) return res.status(400).json({ ok: false, error: "El enlace del botón debe empezar por https://" });
    const opts = { body: text, btnText: b.btnText, btnUrl: b.btnUrl };

    if (mode === "test") {
      const to = String(b.testTo || "").trim().toLowerCase();
      if (!EMAIL_RE.test(to)) return res.status(400).json({ ok: false, error: "Correo de prueba inválido." });
      await brevo.sendEmail({ to, subject: "[PRUEBA] " + subject, html: campaignEmail({ ...opts, test: true }), tags: ["prueba"] });
      return res.status(200).json({ ok: true, sentTo: to });
    }

    if (mode === "send") {
      const a = await audience(listId, b.audience);
      if (!a.list.length) return res.status(400).json({ ok: false, error: "No hay suscriptoras en esa audiencia." });
      const d = new Date();
      const stamp = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
      const name = `Envío ${stamp} · ${a.label}`;
      const folders = await brevo.api("GET", "/contacts/folders?limit=1&offset=0");
      const folderId = folders && folders.folders && folders.folders[0] && folders.folders[0].id;
      const tmp = await brevo.api("POST", "/contacts/lists", { name, folderId });
      const emails = a.list.map((c) => c.email);
      for (let i = 0; i < emails.length; i += 150) {
        await brevo.api("POST", `/contacts/lists/${tmp.id}/contacts/add`, { emails: emails.slice(i, i + 150) });
      }
      const s = brevo.sender();
      const camp = await brevo.api("POST", "/emailCampaigns", {
        name, subject, sender: s, htmlContent: campaignEmail(opts), recipients: { listIds: [tmp.id] },
      });
      await brevo.api("POST", `/emailCampaigns/${camp.id}/sendNow`);
      return res.status(200).json({ ok: true, count: emails.length, label: a.label, campaignId: camp.id });
    }

    res.status(400).json({ ok: false, error: "Modo inválido" });
  } catch (e) {
    console.error("[admin/send]", e.message, e.data ? JSON.stringify(e.data) : "");
    res.status(e.status && e.status < 500 ? e.status : 502).json({ ok: false, error: "Brevo respondió: " + (e.data && e.data.message ? e.data.message : e.message) });
  }
};
function safe(s) { try { return JSON.parse(s); } catch (_) { return {}; } }

};
const __PAGES={index:"<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>¿Qué te está frenando? Test gratuito | Mi Próxima Versión</title>\n<meta name=\"description\" content=\"Test gratuito de 2 minutos: descubre cuál de los 5 frenos pesa más en tu vida y recibe tu primer ejercicio para desbloquear tu potencial.\">\n<meta name=\"theme-color\" content=\"#F4D3DA\">\n<meta property=\"og:title\" content=\"¿Qué te está frenando? Test gratuito\">\n<meta property=\"og:description\" content=\"Descubre cuál de los 5 frenos pesa más en tu vida y recibe tu primer ejercicio.\">\n<meta property=\"og:type\" content=\"website\">\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Poppins:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\">\n<style>\n:root{\n  --beige:#F8F1E7; --pink:#F4D3DA; --pink-l:#FAE6EA; --gold:#BF9A44; --gold-d:#9A762B; --gold-l:#E3CF9F;\n  --brown:#5B4439; --soft:#8C7468; --line:#D5C2AE; --white:#FFFDFA;\n  --serif:'Lora',Georgia,serif; --sans:'Poppins',system-ui,-apple-system,'Segoe UI',sans-serif;\n}\n*{box-sizing:border-box;margin:0;padding:0}\nhtml{-webkit-text-size-adjust:100%;scroll-behavior:smooth}\nbody{font-family:var(--sans);color:var(--brown);background:var(--pink);line-height:1.6}\n/* el fondo va en el contenedor porque algunos visores móviles ignoran el de body/html */\n.stage{min-height:100vh;background:var(--pink);padding:14px 12px 30px;display:flex;justify-content:center;align-items:flex-start}\n.panel{position:relative;width:100%;max-width:560px;background:var(--beige);border-radius:20px;padding:34px 26px 30px;\n  border:1.2px solid var(--gold);box-shadow:inset 0 0 0 6px var(--beige),inset 0 0 0 6.6px var(--gold-l),0 24px 50px -30px rgba(91,68,57,.5)}\n:focus-visible{outline:3px solid var(--gold-d);outline-offset:3px;border-radius:8px}\na{color:var(--gold-d)}\nh1,h2,h3{font-family:var(--serif);font-weight:400;color:var(--brown)}\n.center{text-align:center}\n.screen{display:none;animation:in .5s ease both}\n.screen.on{display:block}\n@keyframes in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}\n\n.brand{font-size:10.5px;font-weight:500;letter-spacing:.34em;text-transform:uppercase;color:var(--gold-d);text-align:center}\n.orn{display:flex;align-items:center;justify-content:center;gap:10px;margin:14px auto;color:var(--gold)}\n.orn::before,.orn::after{content:\"\";height:1px;width:56px;background:var(--gold)}\n.orn i{width:8px;height:8px;background:var(--gold);transform:rotate(45deg);display:block}\n.spark{display:flex;justify-content:center;align-items:flex-end;gap:6px;margin:6px 0 2px}\n.spark svg{display:block}\n.eyebrow{font-size:10.5px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--gold-d);text-align:center}\n.hero h1{font-size:clamp(38px,11vw,54px);line-height:1.08;text-align:center;margin:10px 0 8px}\n.hero h1 em{display:block;font-style:italic;color:var(--gold-d)}\n.sub{font-family:var(--serif);font-style:italic;font-size:16.5px;line-height:1.55;color:var(--soft);text-align:center;max-width:26em;margin:0 auto 24px}\n\n.btn{appearance:none;border:0;cursor:pointer;font:inherit;font-weight:600;font-size:13.5px;letter-spacing:.12em;text-transform:uppercase;\n  color:var(--beige);background:var(--brown);border-radius:99px;padding:16px 28px;width:100%;display:block;text-align:center;text-decoration:none;\n  transition:background .2s,transform .15s}\n.btn:hover{background:#463329}\n.btn:active{transform:translateY(1px)}\n.btn[disabled]{opacity:.6;cursor:wait}\n.btn.gold{background:var(--gold-d)}\n.btn.gold:hover{background:#82631f}\n.btn.ghost{background:transparent;color:var(--brown);border:1.2px solid var(--gold);}\n.btn.ghost:hover{background:var(--pink-l)}\n.meta{display:flex;justify-content:center;gap:8px 16px;flex-wrap:wrap;font-size:11.5px;color:var(--soft);margin-top:14px}\n.meta span::before{content:\"◆\";color:var(--gold);font-size:7px;margin-right:7px;vertical-align:2px}\n\n.box{background:var(--pink-l);border:1px solid var(--gold-l);border-radius:14px;padding:18px 18px}\n.box .lab{font-size:9.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-d);margin-bottom:8px;display:block}\n.sec{margin-top:30px}\n.sec > h2{font-size:22px;text-align:center;margin-bottom:4px}\n.steps{list-style:none;display:grid;gap:12px;margin-top:16px}\n.steps li{display:flex;gap:14px;align-items:flex-start}\n.steps b{flex:none;width:30px;height:30px;border-radius:50%;background:var(--pink);border:1px solid var(--gold);display:grid;place-items:center;font-family:var(--serif);font-weight:400;font-size:14px}\n.steps strong{display:block;font-size:13.5px;font-weight:600;line-height:1.3}\n.steps span{font-size:12.5px;color:var(--soft);line-height:1.45;display:block}\n\n/* quiz */\n.top{display:flex;align-items:center;justify-content:space-between;font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--gold-d)}\n.bar{height:4px;background:var(--pink);border-radius:9px;margin:10px 0 28px;overflow:hidden}\n.bar i{display:block;height:100%;width:0;background:var(--gold);border-radius:9px;transition:width .4s ease}\nfieldset{border:0}\n.q{font-family:var(--serif);font-size:clamp(21px,5.6vw,26px);line-height:1.35;margin-bottom:22px;text-align:left;min-height:5.4em}\n.opts{display:grid;gap:10px}\n.opt{appearance:none;font:inherit;text-align:left;cursor:pointer;display:flex;align-items:center;gap:14px;width:100%;padding:15px 16px;border-radius:14px;\n  background:var(--white);border:1.2px solid var(--gold-l);color:var(--brown);font-size:14.5px;transition:background .15s,border-color .15s,transform .15s}\n.opt::before{content:\"\";flex:none;width:18px;height:18px;border-radius:50%;border:1.4px solid var(--gold);background:transparent;transition:background .15s,box-shadow .15s}\n.opt:hover{background:var(--pink-l);border-color:var(--gold)}\n.opt[aria-pressed=\"true\"]{background:var(--pink);border-color:var(--gold-d)}\n.opt[aria-pressed=\"true\"]::before{background:var(--gold-d);box-shadow:inset 0 0 0 3.5px var(--pink)}\n.back{margin-top:20px;background:none;border:0;font:inherit;font-size:12.5px;color:var(--soft);cursor:pointer;text-decoration:underline;text-underline-offset:3px;display:block;margin-inline:auto}\n.back[hidden]{display:none}\n\n/* gate */\n.gate h2{font-size:clamp(26px,7vw,32px);line-height:1.2;text-align:center;margin:10px 0 8px}\n.list{list-style:none;display:grid;gap:8px;margin:18px 0 22px}\n.list li{display:flex;gap:10px;font-size:13.5px}\n.list li::before{content:\"◆\";color:var(--gold);font-size:8px;margin-top:7px}\n.field{display:block;margin-bottom:12px}\n.field span{display:block;font-size:11.5px;font-weight:500;color:var(--soft);margin-bottom:5px}\n.field input,.note textarea{width:100%;font:inherit;font-size:16px;color:var(--brown);padding:14px 15px;border-radius:12px;border:1.2px solid var(--gold-l);background:var(--white);transition:border-color .2s,box-shadow .2s}\n.field input:focus,.note textarea:focus{outline:none;border-color:var(--gold-d);box-shadow:0 0 0 4px rgba(191,154,68,.2)}\n.hp{position:absolute!important;left:-9999px;width:1px;height:1px;overflow:hidden}\n.msg{font-size:13px;color:#9a3f33;margin:6px 0 0}\n.fine{font-size:11.5px;color:var(--soft);margin-top:12px;line-height:1.5;text-align:center}\n.sent{background:#FAE6EA;border:1px solid #E3CF9F;border-radius:12px;padding:10px 14px;font-size:13px;line-height:1.5;text-align:center;margin:0 0 18px;color:var(--brown)}\n.devnote{margin-top:12px;font-size:11.5px;line-height:1.45;padding:9px 11px;border-radius:10px;background:#FFF3D6;border:1px solid #E8CF8E;color:#6d5316}\n\n/* resultado */\n.res-head{text-align:center}\n.big{font-family:var(--serif);font-size:88px;line-height:1;color:var(--gold);margin:4px 0 0}\n.res-head h2{font-size:clamp(26px,7.4vw,34px);line-height:1.15;margin:4px 0 4px}\n.res-head p.d{font-size:14.5px;line-height:1.7;color:var(--brown);text-align:left;margin-top:14px}\n.second{display:inline-block;margin-top:12px;font-size:12px;color:var(--soft)}\n.second b{color:var(--gold-d);font-weight:600}\nul.dots{list-style:none;display:grid;gap:9px}\nul.dots li{display:flex;gap:10px;font-size:13.5px;line-height:1.5}\nul.dots li::before{content:\"◆\";color:var(--gold);font-size:8px;margin-top:6px;flex:none}\n.bars{display:grid;gap:14px;margin-top:16px}\n.bar-row .t{display:flex;justify-content:space-between;align-items:baseline;font-size:12.5px;margin-bottom:5px}\n.bar-row .t b{font-weight:600}\n.bar-row .t small{font-size:11px;color:var(--soft)}\n.track{height:9px;background:var(--pink);border-radius:99px;overflow:hidden}\n.fill{height:100%;width:0;background:var(--gold);border-radius:99px;transition:width 1s cubic-bezier(.2,.8,.2,1)}\n.bar-row.main .fill{background:var(--gold-d)}\n.bar-row.main .t b{color:var(--gold-d)}\n.exercise{margin-top:26px;background:var(--pink-l);border:1px solid var(--gold-l);border-radius:16px;padding:20px 18px}\n.exercise .lab{font-size:9.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-d)}\n.exercise h3{font-size:21px;margin:4px 0 8px}\n.exercise p{font-size:13.5px;color:var(--soft);line-height:1.6;margin-bottom:12px}\n.note textarea{min-height:130px;resize:vertical;line-height:1.55;font-size:15px;font-family:var(--sans)}\n.note small{display:block;font-size:11px;color:var(--soft);margin-top:6px}\n.quote{margin:28px 8px 0;padding:18px 0;border-top:1px solid var(--gold);border-bottom:1px solid var(--gold);text-align:center}\n.quote small{display:block;font-size:9.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-d);margin-bottom:8px}\n.quote p{font-family:var(--serif);font-style:italic;font-size:19px;line-height:1.45;color:var(--gold-d)}\n.plus{margin-top:22px}\n.cta{margin-top:26px;background:var(--pink);border:1px solid var(--gold);border-radius:16px;padding:22px 18px;text-align:center}\n.cta h3{font-size:21px;margin-bottom:6px}\n.cta p{font-size:13.5px;color:var(--brown);margin-bottom:14px}\n.actions{display:grid;gap:10px;margin-top:26px}\n.foot{margin-top:26px;text-align:center;font-size:12px;color:var(--soft)}\n\n@media (min-width:600px){\n  .stage{padding:36px 20px 50px}\n  .panel{padding:44px 44px 38px}\n  .actions{grid-template-columns:1fr 1fr}\n}\n@media (prefers-reduced-motion:reduce){\n  .screen{animation:none}.fill,.bar i{transition:none}html{scroll-behavior:auto}\n}\n@media print{\n  body,.stage{background:#fff!important;padding:0}\n  .panel{box-shadow:none;border:0;max-width:none;padding:0;background:#fff}\n  .no-print{display:none!important}\n  .exercise,.box,.quote{break-inside:avoid}\n  .note textarea{border:1px solid #bbb;min-height:0}\n}\n</style>\n</head>\n<body>\n<div class=\"stage\" id=\"stage\">\n<main class=\"panel\" id=\"app\">\n\n<!-- ============ INTRO ============ -->\n<section class=\"screen on\" id=\"s-intro\" aria-labelledby=\"h-intro\">\n  <p class=\"brand\">Mi Próxima Versión</p>\n  <div class=\"orn\" aria-hidden=\"true\"><i></i></div>\n  <div class=\"spark\" aria-hidden=\"true\">\n    <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"#BF9A44\"><path d=\"M12 0C12.6 7 17 11.4 24 12 17 12.6 12.6 17 12 24 11.4 17 7 12.6 0 12 7 11.4 11.4 7 12 0Z\"/></svg>\n    <svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#BF9A44\"><path d=\"M12 0C12.6 7 17 11.4 24 12 17 12.6 12.6 17 12 24 11.4 17 7 12.6 0 12 7 11.4 11.4 7 12 0Z\"/></svg>\n    <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"#BF9A44\"><path d=\"M12 0C12.6 7 17 11.4 24 12 17 12.6 12.6 17 12 24 11.4 17 7 12.6 0 12 7 11.4 11.4 7 12 0Z\"/></svg>\n  </div>\n  <div class=\"hero\">\n    <p class=\"eyebrow\" style=\"margin-top:14px\">Test gratuito · 2 minutos</p>\n    <h1 id=\"h-intro\" tabindex=\"-1\">¿Qué te está <em>frenando?</em></h1>\n    <p class=\"sub\">Descubre cuál de los 5 frenos pesa más en tu vida y recibe tu primer ejercicio para desbloquear tu potencial.</p>\n    <button class=\"btn\" type=\"button\" id=\"btn-start\">Empezar el test</button>\n    <div class=\"meta\"><span>10 preguntas</span><span>Resultado al instante</span><span>Ejercicio incluido</span></div>\n  </div>\n\n  <div class=\"sec\">\n    <div class=\"orn\" aria-hidden=\"true\"><i></i></div>\n    <h2>Los 5 frenos más comunes</h2>\n    <ul class=\"steps\">\n      <li><b>1</b><div><strong>Falta de claridad</strong><span>Haces mucho, pero nada te acerca a lo que importa.</span></div></li>\n      <li><b>2</b><div><strong>Creencias limitantes</strong><span>Ideas que das por ciertas y funcionan como techo invisible.</span></div></li>\n      <li><b>3</b><div><strong>Miedo al cambio</strong><span>Al fracaso, al juicio o a perder lo que ya tienes.</span></div></li>\n      <li><b>4</b><div><strong>Perfeccionismo y comparación</strong><span>Si no sale perfecto, no sale. Y siempre hay alguien más adelante.</span></div></li>\n      <li><b>5</b><div><strong>Entorno que sostiene lo de siempre</strong><span>Personas y rutinas que se incomodan cuando cambias.</span></div></li>\n    </ul>\n  </div>\n</section>\n\n<!-- ============ PREGUNTAS ============ -->\n<section class=\"screen\" id=\"s-quiz\" aria-labelledby=\"q-text\">\n  <div class=\"top\"><span id=\"q-count\">Pregunta 1 de 10</span><span class=\"brand\" style=\"letter-spacing:.2em\">Mi Próxima Versión</span></div>\n  <div class=\"bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"10\" aria-valuenow=\"1\" id=\"q-bar\"><i></i></div>\n  <fieldset>\n    <legend class=\"q\" id=\"q-text\" tabindex=\"-1\"></legend>\n    <div class=\"opts\" id=\"q-opts\"></div>\n  </fieldset>\n  <button type=\"button\" class=\"back\" id=\"btn-back\" hidden>← Pregunta anterior</button>\n</section>\n\n<!-- ============ CORREO ============ -->\n<section class=\"screen gate\" id=\"s-gate\" aria-labelledby=\"h-gate\">\n  <div class=\"spark\" aria-hidden=\"true\">\n    <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"#BF9A44\"><path d=\"M12 0C12.6 7 17 11.4 24 12 17 12.6 12.6 17 12 24 11.4 17 7 12.6 0 12 7 11.4 11.4 7 12 0Z\"/></svg>\n    <svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#BF9A44\"><path d=\"M12 0C12.6 7 17 11.4 24 12 17 12.6 12.6 17 12 24 11.4 17 7 12.6 0 12 7 11.4 11.4 7 12 0Z\"/></svg>\n    <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"#BF9A44\"><path d=\"M12 0C12.6 7 17 11.4 24 12 17 12.6 12.6 17 12 24 11.4 17 7 12.6 0 12 7 11.4 11.4 7 12 0Z\"/></svg>\n  </div>\n  <p class=\"eyebrow\" style=\"margin-top:12px\">Tus respuestas están listas</p>\n  <h2 id=\"h-gate\" tabindex=\"-1\">Tu resultado te está esperando</h2>\n  <p class=\"sub\" style=\"margin-bottom:0\">Déjame tu correo y te muestro al instante:</p>\n  <ul class=\"list\">\n    <li>Cuál es tu freno principal (y cuál va detrás)</li>\n    <li>Tu mapa completo de los 5 frenos</li>\n    <li>Tu primer ejercicio personalizado, con espacio para escribir</li>\n  </ul>\n  <form id=\"gate-form\" novalidate>\n    <label class=\"field\"><span>Tu nombre (opcional)</span><input type=\"text\" name=\"nombre\" autocomplete=\"given-name\" placeholder=\"Cómo te llamas\"></label>\n    <label class=\"field\"><span>Tu correo</span><input type=\"email\" name=\"correo\" autocomplete=\"email\" inputmode=\"email\" placeholder=\"tucorreo@ejemplo.com\" required></label>\n    <div class=\"hp\" aria-hidden=\"true\"><label>No llenar este campo<input type=\"text\" name=\"web\" tabindex=\"-1\" autocomplete=\"off\"></label></div>\n    <button class=\"btn gold\" type=\"submit\" id=\"btn-gate\">Ver mi resultado</button>\n    <p class=\"msg\" role=\"alert\" aria-live=\"polite\" id=\"gate-msg\"></p>\n    <p class=\"fine\">Gratis y sin spam. Al continuar aceptas recibir correos de Mi Próxima Versión con recursos y novedades; te das de baja cuando quieras.</p>\n  </form>\n</section>\n\n<!-- ============ RESULTADO ============ -->\n<section class=\"screen\" id=\"s-result\" aria-labelledby=\"r-title\">\n  <p class=\"sent no-print\" id=\"r-sent\" hidden></p>\n  <div class=\"res-head\">\n    <p class=\"brand\">Tu freno principal</p>\n    <div class=\"orn\" aria-hidden=\"true\"><i></i></div>\n    <div class=\"big\" id=\"r-num\" aria-hidden=\"true\">1</div>\n    <h2 id=\"r-title\" tabindex=\"-1\">…</h2>\n    <p class=\"second\" id=\"r-second\"></p>\n    <p class=\"d\" id=\"r-desc\"></p>\n  </div>\n\n  <div class=\"box\" style=\"margin-top:22px\">\n    <span class=\"lab\">Lo que suele pasar</span>\n    <ul class=\"dots\" id=\"r-pasa\"></ul>\n  </div>\n\n  <div class=\"sec\" style=\"margin-top:30px\">\n    <h2 style=\"text-align:left;font-size:20px\">Tu mapa de frenos</h2>\n    <div class=\"bars\" id=\"r-bars\"></div>\n  </div>\n\n  <div class=\"box\" style=\"margin-top:22px\">\n    <span class=\"lab\">Tu punto a favor</span>\n    <p style=\"font-size:13.5px\" id=\"r-fuerte\"></p>\n  </div>\n\n  <div class=\"exercise\">\n    <span class=\"lab\">Tu primer ejercicio</span>\n    <h3 id=\"r-ex-title\"></h3>\n    <p id=\"r-ex-text\"></p>\n    <div class=\"note\">\n      <label for=\"note\" style=\"position:absolute;left:-9999px\">Escribe aquí tu ejercicio</label>\n      <textarea id=\"note\" placeholder=\"Escribe aquí, sin editarte…\"></textarea>\n      <small class=\"no-print\">Se guarda solo en este dispositivo.</small>\n    </div>\n  </div>\n\n  <div class=\"quote\"><small>Pregunta para llevarte</small><p id=\"r-q\"></p></div>\n\n  <div class=\"cta no-print\" id=\"cta\" hidden>\n    <h3>Ve más a fondo</h3>\n    <p id=\"cta-text\"></p>\n    <a class=\"btn gold\" id=\"cta-link\" href=\"#\" target=\"_blank\" rel=\"noopener\">Quiero seguir</a>\n  </div>\n\n  <div class=\"actions no-print\">\n    <button class=\"btn\" type=\"button\" id=\"btn-print\">Guardar mi resultado</button>\n    <button class=\"btn ghost\" type=\"button\" id=\"btn-retry\">Repetir el test</button>\n  </div>\n  <p class=\"foot no-print\">Sígueme en <a id=\"ig\" href=\"https://www.instagram.com/miproximaversion/\" target=\"_blank\" rel=\"noopener\">@miproximaversion</a></p>\n</section>\n\n</main>\n</div>\n\n\n<script>\n(function(){\n\"use strict\";\nvar $=function(s){return document.querySelector(s)};\nvar STORE=\"mpv_test_v2\";\nvar OPTIONS=[],QUESTIONS=[],FRENOS=[],CTA=null,TOTAL=10;\nvar state={answers:[],subscribed:false,email:\"\",name:\"\",result:null,sent:false};\ntry{\n  if(new URLSearchParams(location.search).get(\"reset\")===\"1\")localStorage.removeItem(STORE);\n  var raw=localStorage.getItem(STORE);\n  if(raw){var p=JSON.parse(raw);if(p&&Array.isArray(p.answers))state=Object.assign(state,p)}\n}catch(e){}\nfunction save(){try{localStorage.setItem(STORE,JSON.stringify(state))}catch(e){}}\nvar current=0;\nfunction show(id,focusSel){\n  document.querySelectorAll(\".screen\").forEach(function(s){s.classList.remove(\"on\")});\n  var el=$(id);el.classList.add(\"on\");window.scrollTo({top:0,behavior:\"auto\"});\n  var f=el.querySelector(focusSel||\"[tabindex='-1']\");if(f){try{f.focus({preventScroll:true})}catch(e){}}\n}\nfunction post(url,body){\n  return fetch(url,{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(body)})\n    .then(function(r){return r.json().catch(function(){return{ok:false,error:\"Respuesta inválida\"}}).then(function(j){if(!j.ok)throw new Error(j.error||\"Error\");return j})});\n}\nfunction complete(){return state.answers.length===TOTAL&&state.answers.every(function(v){return typeof v===\"number\"})}\n\n/* ---------- Test ---------- */\nfunction renderQ(){\n  var q=QUESTIONS[current];\n  $(\"#q-count\").textContent=\"Pregunta \"+(current+1)+\" de \"+TOTAL;\n  var bar=$(\"#q-bar\");bar.setAttribute(\"aria-valuenow\",current+1);bar.firstElementChild.style.width=(current/TOTAL*100)+\"%\";\n  $(\"#q-text\").textContent=q.t;\n  var box=$(\"#q-opts\");box.innerHTML=\"\";\n  OPTIONS.forEach(function(label,v){\n    var b=document.createElement(\"button\");b.type=\"button\";b.className=\"opt\";b.textContent=label;\n    b.setAttribute(\"aria-pressed\",state.answers[current]===v?\"true\":\"false\");\n    b.addEventListener(\"click\",function(){choose(v,b)});box.appendChild(b);\n  });\n  $(\"#btn-back\").hidden=current===0;\n}\nfunction choose(v,btn){\n  state.answers[current]=v;save();\n  document.querySelectorAll(\"#q-opts .opt\").forEach(function(o){o.setAttribute(\"aria-pressed\",o===btn?\"true\":\"false\")});\n  setTimeout(function(){\n    if(current<TOTAL-1){current++;renderQ();var l=$(\"#q-text\");if(l)l.focus({preventScroll:true})}\n    else{$(\"#q-bar\").firstElementChild.style.width=\"100%\";finish()}\n  },260);\n}\nfunction finish(){\n  if(state.subscribed){\n    /* ya registrada: recalcula sin volver a enviar correo */\n    post(\"/api/result\",{answers:state.answers}).then(function(j){state.result=j.result;state.sent=false;save();showResult()})\n      .catch(function(){state.subscribed=false;save();showGate()});\n  }else showGate();\n}\n$(\"#btn-start\").addEventListener(\"click\",function(){\n  current=0;state.answers=[];state.result=null;save();\n  show(\"#s-quiz\");renderQ();$(\"#q-text\").focus({preventScroll:true});\n});\n$(\"#btn-back\").addEventListener(\"click\",function(){if(current>0){current--;renderQ()}});\n\n/* ---------- Resultado ---------- */\nfunction level(p){return p<34?\"Bajo\":(p<67?\"Medio\":\"Alto\")}\nfunction showResult(){\n  var r=state.result;if(!r){return showGate()}\n  var main=FRENOS[r.order[0]],sec=FRENOS[r.order[1]],low=FRENOS[r.order[4]];\n  var sent=$(\"#r-sent\");\n  if(state.sent&&state.email){\n    sent.hidden=false;sent.textContent=\"\";\n    sent.appendChild(document.createTextNode(\"Te enviamos tu resultado a \"));\n    var b=document.createElement(\"b\");b.textContent=state.email;sent.appendChild(b);\n    sent.appendChild(document.createTextNode(\". Si no lo ves en unos minutos, revisa Promociones o Spam.\"));\n  }else if(state.subscribed&&state.email&&state.sent===false&&state.mailFailed){\n    sent.hidden=false;sent.textContent=\"No pudimos enviarte el correo ahora mismo, pero tu resultado está aquí. Puedes guardarlo con el botón de abajo.\";\n  }else sent.hidden=true;\n  $(\"#r-num\").textContent=main.n;$(\"#r-title\").textContent=main.name;\n  var secEl=$(\"#r-second\");\n  secEl.innerHTML=r.scores[r.order[1]]>=3?\"Después pesa: <b></b>\":\"\";\n  if(secEl.firstElementChild)secEl.firstElementChild.textContent=sec.name;\n  $(\"#r-desc\").textContent=(r.scores[r.order[0]]<=2?\"Tus frenos son suaves, y eso es una gran noticia. Aun así, este es el que más pesa hoy. \":\"\")+main.desc;\n  var ul=$(\"#r-pasa\");ul.innerHTML=\"\";\n  main.pasa.forEach(function(t){var li=document.createElement(\"li\");li.textContent=t;ul.appendChild(li)});\n  var bars=$(\"#r-bars\");bars.innerHTML=\"\";\n  r.order.forEach(function(i,pos){\n    var pct=r.pct[i];\n    var row=document.createElement(\"div\");row.className=\"bar-row\"+(pos===0?\" main\":\"\");\n    row.innerHTML='<div class=\"t\"><b></b><small></small></div><div class=\"track\"><div class=\"fill\"></div></div>';\n    row.querySelector(\"b\").textContent=FRENOS[i].name;\n    row.querySelector(\"small\").textContent=level(pct)+\" · \"+pct+\"%\";\n    bars.appendChild(row);\n    requestAnimationFrame(function(){requestAnimationFrame(function(){row.querySelector(\".fill\").style.width=Math.max(pct,4)+\"%\"})});\n  });\n  $(\"#r-fuerte\").textContent=low.fuerte;\n  $(\"#r-ex-title\").textContent=main.ex.t;$(\"#r-ex-text\").textContent=main.ex.x;\n  $(\"#r-q\").textContent=\"«\"+main.q+\"»\";\n  var note=$(\"#note\");note.dataset.k=STORE+\"_note_\"+main.id;\n  try{note.value=localStorage.getItem(note.dataset.k)||\"\"}catch(e){note.value=\"\"}\n  if(CTA&&CTA.url){$(\"#cta\").hidden=false;$(\"#cta-text\").textContent=CTA.text||\"\";$(\"#cta-link\").href=CTA.url}\n  show(\"#s-result\");\n}\n$(\"#note\").addEventListener(\"input\",function(e){try{localStorage.setItem(e.target.dataset.k,e.target.value)}catch(err){}});\n$(\"#btn-print\").addEventListener(\"click\",function(){window.print()});\n$(\"#btn-retry\").addEventListener(\"click\",function(){state.answers=[];state.result=null;save();current=0;show(\"#s-intro\")});\n\n/* ---------- Correo ---------- */\nfunction showGate(){\n  var f=$(\"#gate-form\");\n  if(state.email&&!f.correo.value)f.correo.value=state.email;\n  if(state.name&&!f.nombre.value)f.nombre.value=state.name;\n  show(\"#s-gate\");\n}\nvar emailRe=/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;\n$(\"#gate-form\").addEventListener(\"submit\",function(e){\n  e.preventDefault();\n  var f=e.target,msg=$(\"#gate-msg\"),btn=$(\"#btn-gate\");msg.textContent=\"\";\n  if(f.web.value)return;\n  var email=f.correo.value.trim(),name=f.nombre.value.trim();\n  if(!emailRe.test(email)){msg.textContent=\"Escribe un correo válido para enviarte tu resultado.\";f.correo.focus();return}\n  var original=btn.textContent;btn.disabled=true;btn.textContent=\"Enviando tu resultado…\";\n  post(\"/api/subscribe\",{name:name,email:email,answers:state.answers,web:f.web.value})\n    .then(function(j){\n      state.subscribed=true;state.email=email;state.name=name;state.result=j.result;state.sent=!!j.emailSent;state.mailFailed=!j.emailSent;save();\n      btn.disabled=false;btn.textContent=original;showResult();\n    })\n    .catch(function(err){btn.disabled=false;btn.textContent=original;msg.textContent=err.message||\"No pudimos enviar tu resultado. Inténtalo de nuevo.\"});\n});\n\n/* ---------- Arranque ---------- */\nfetch(\"/api/content\").then(function(r){return r.json()}).then(function(c){\n  OPTIONS=c.options;QUESTIONS=c.questions;FRENOS=c.frenos;CTA=c.cta;TOTAL=QUESTIONS.length;\n  if(complete()){\n    if(state.subscribed&&state.result)showResult();\n    else if(!state.subscribed)showGate();\n  }\n}).catch(function(){\n  var s=$(\"#btn-start\");s.disabled=true;\n  var p=document.createElement(\"p\");p.className=\"msg\";p.textContent=\"No pudimos cargar el test. Recarga la página.\";s.parentNode.appendChild(p);\n});\n})();\n</script>\n</body>\n</html>\n",admin:"<!doctype html>\n<html lang=\"es\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<meta name=\"robots\" content=\"noindex,nofollow\">\n<title>Panel · Mi Próxima Versión</title>\n<link href=\"https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,500&family=Poppins:wght@300;400;500;600&display=swap\" rel=\"stylesheet\">\n<style>\n:root{--beige:#F8F1E7;--pink:#F4D3DA;--pinkL:#FAE6EA;--gold:#BF9A44;--goldD:#9A762B;--goldL:#E3CF9F;--brown:#5B4439;--soft:#8C7468;--ok:#4d7a52;--err:#a8403f}\n*{box-sizing:border-box}\nbody{margin:0;background:var(--beige);color:var(--brown);font:400 15px/1.55 Poppins,Arial,sans-serif}\nh1,h2,h3{font-family:Lora,Georgia,serif;font-weight:500;margin:0}\n.wrap{max-width:980px;margin:0 auto;padding:22px 16px 60px}\n.top{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:18px}\n.brand{font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--goldD)}\nh1{font-size:28px}\n.card{background:#fff8f3;border:1px solid var(--goldL);border-radius:16px;padding:18px;margin-bottom:18px}\nlabel{display:block;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--goldD);margin:12px 0 5px;font-weight:500}\ninput,select,textarea{width:100%;padding:11px 13px;border:1px solid var(--goldL);border-radius:10px;background:#fff;color:var(--brown);font:inherit}\ntextarea{min-height:190px;resize:vertical}\ninput:focus,select:focus,textarea:focus{outline:2px solid var(--gold);outline-offset:1px}\nbutton{font:500 13px Poppins,sans-serif;letter-spacing:1.5px;text-transform:uppercase;border:0;border-radius:30px;padding:12px 22px;cursor:pointer;background:var(--goldD);color:#fff}\nbutton.ghost{background:transparent;color:var(--goldD);border:1px solid var(--gold)}\nbutton:disabled{opacity:.5;cursor:default}\n.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\n.row>*{flex:1 1 180px}.row>button{flex:0 0 auto}\n.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px}\n.stat{background:#fff;border:1px solid var(--goldL);border-radius:12px;padding:12px 14px}\n.stat b{display:block;font:500 28px Lora,serif;color:var(--goldD);line-height:1.1}\n.stat span{font-size:12px;color:var(--soft)}\ntable{width:100%;border-collapse:collapse;font-size:13px}\nth,td{text-align:left;padding:9px 8px;border-bottom:1px solid var(--goldL);vertical-align:top;word-break:break-word}\nth{font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--goldD)}\n.tw{overflow-x:auto}\n.tag{display:inline-block;padding:2px 9px;border-radius:20px;background:var(--pink);font-size:12px}\n.tag.off{background:#eee;color:#888}\n.msg{margin-top:12px;padding:10px 14px;border-radius:10px;font-size:14px}\n.msg.ok{background:#e6f1e6;color:var(--ok)}.msg.err{background:#f7e0e0;color:var(--err)}\n.hint{font-size:12px;color:var(--soft);margin-top:4px}\n.hide{display:none!important}\n#login{max-width:380px;margin:12vh auto 0;text-align:center}\n</style>\n</head>\n<body>\n<div class=\"wrap\">\n\n<div id=\"login\" class=\"card\">\n  <div class=\"brand\">Mi Próxima Versión</div>\n  <h1 style=\"margin:8px 0 14px\">Panel</h1>\n  <form id=\"fLogin\">\n    <input id=\"pw\" type=\"password\" placeholder=\"Contraseña\" autocomplete=\"current-password\" required>\n    <div style=\"margin-top:12px\"><button type=\"submit\" style=\"width:100%\">Entrar</button></div>\n    <div id=\"lmsg\"></div>\n  </form>\n</div>\n\n<div id=\"panel\" class=\"hide\">\n  <div class=\"top\">\n    <div><div class=\"brand\">Mi Próxima Versión</div><h1>Suscriptoras</h1></div>\n    <div class=\"row\"><button class=\"ghost\" id=\"bRefresh\">Actualizar</button><button class=\"ghost\" id=\"bOut\">Salir</button></div>\n  </div>\n\n  <div class=\"card\"><div class=\"stats\" id=\"stats\"></div></div>\n\n  <div class=\"card\">\n    <h2 style=\"font-size:21px;margin-bottom:6px\">Enviar un correo</h2>\n    <div class=\"hint\">Se envía desde tu cuenta de Brevo a las personas que no se hayan dado de baja.</div>\n    <label for=\"aud\">Para quién</label>\n    <select id=\"aud\"></select>\n    <div class=\"hint\" id=\"audCount\"></div>\n    <label for=\"subj\">Asunto</label>\n    <input id=\"subj\" maxlength=\"150\" placeholder=\"Ej.: Tu semana para soltar el perfeccionismo\">\n    <label for=\"body\">Mensaje</label>\n    <textarea id=\"body\" placeholder=\"Hola {nombre},&#10;&#10;Escribe aquí. Deja una línea en blanco para separar párrafos.&#10;Usa **negrita** y [texto](https://enlace).\"></textarea>\n    <div class=\"hint\">{nombre} se cambia por el nombre de cada persona (si no hay, «amiga»).</div>\n    <div class=\"row\">\n      <div><label for=\"bt\">Texto del botón (opcional)</label><input id=\"bt\" placeholder=\"Ver más\"></div>\n      <div><label for=\"bu\">Enlace del botón</label><input id=\"bu\" type=\"url\" placeholder=\"https://...\"></div>\n    </div>\n    <label for=\"tt\">Enviar prueba a</label>\n    <div class=\"row\"><input id=\"tt\" type=\"email\" placeholder=\"tu@correo.com\"><button class=\"ghost\" id=\"bTest\">Enviar prueba</button></div>\n    <div style=\"margin-top:16px\"><button id=\"bSend\">Enviar a la audiencia</button></div>\n    <div id=\"smsg\"></div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"row\" style=\"margin-bottom:10px\">\n      <input id=\"q\" placeholder=\"Buscar por nombre o correo\">\n      <select id=\"ff\"></select>\n      <button class=\"ghost\" id=\"bCsv\">Descargar CSV</button>\n    </div>\n    <div class=\"tw\"><table><thead><tr><th>Nombre</th><th>Correo</th><th>Freno</th><th>Fecha</th><th></th></tr></thead><tbody id=\"tb\"></tbody></table></div>\n    <div class=\"hint\" id=\"tcount\"></div>\n  </div>\n</div>\n</div>\n\n<script>\n(function(){\nvar TK=\"mpv_admin_token\", token=\"\", DATA=null;\nvar $=function(id){return document.getElementById(id)};\nfunction store(v){try{if(v)sessionStorage.setItem(TK,v);else sessionStorage.removeItem(TK)}catch(e){}}\nfunction load(){try{return sessionStorage.getItem(TK)||\"\"}catch(e){return \"\"}}\nfunction esc(s){return String(s==null?\"\":s).replace(/[&<>\"]/g,function(c){return{\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\"}[c]})}\nfunction msg(id,t,ok){$(id).innerHTML=t?'<div class=\"msg '+(ok?\"ok\":\"err\")+'\">'+esc(t)+'</div>':\"\"}\n\nfunction api(path,body){\n  var o={method:body?\"POST\":\"GET\",headers:{\"Content-Type\":\"application/json\"}};\n  if(token)o.headers.Authorization=\"Bearer \"+token;\n  if(body)o.body=JSON.stringify(body);\n  return fetch(path,o).then(function(r){return r.json().catch(function(){return{ok:false,error:\"Respuesta inválida\"}}).then(function(j){\n    if(r.status===401&&path!==\"/api/admin/login\"){logout();}\n    if(!j.ok)throw new Error(j.error||\"Error\");return j;})});\n}\nfunction logout(){token=\"\";store(\"\");$(\"panel\").classList.add(\"hide\");$(\"login\").classList.remove(\"hide\")}\nfunction show(){$(\"login\").classList.add(\"hide\");$(\"panel\").classList.remove(\"hide\");refresh()}\n\n$(\"fLogin\").addEventListener(\"submit\",function(e){e.preventDefault();msg(\"lmsg\",\"\");\n  api(\"/api/admin/login\",{password:$(\"pw\").value}).then(function(j){token=j.token;store(token);$(\"pw\").value=\"\";show()}).catch(function(er){msg(\"lmsg\",er.message)})});\n$(\"bOut\").onclick=logout;\n$(\"bRefresh\").onclick=function(){refresh()};\n\nfunction refresh(){\n  return api(\"/api/admin/contacts\").then(function(d){DATA=d;render()}).catch(function(er){msg(\"smsg\",er.message)});\n}\nfunction render(){\n  var d=DATA,h='<div class=\"stat\"><b>'+d.activos+'</b><span>Activas</span></div>';\n  d.frenos.forEach(function(f){h+='<div class=\"stat\"><b>'+(d.byFreno[f]||0)+'</b><span>'+esc(f)+'</span></div>'});\n  h+='<div class=\"stat\"><b>'+(d.total-d.activos)+'</b><span>Dadas de baja</span></div>';\n  $(\"stats\").innerHTML=h;\n  var opts='<option value=\"all\">Todas ('+d.activos+')</option>',fo='<option value=\"\">Todos los frenos</option>';\n  d.frenos.forEach(function(f,i){opts+='<option value=\"'+i+'\">Solo: '+esc(f)+' ('+(d.byFreno[f]||0)+')</option>';fo+='<option value=\"'+esc(f)+'\">'+esc(f)+'</option>'});\n  var a=$(\"aud\").value,ff=$(\"ff\").value;$(\"aud\").innerHTML=opts;$(\"ff\").innerHTML=fo;$(\"aud\").value=a||\"all\";$(\"ff\").value=ff;\n  table();count();\n}\nfunction filtered(){\n  var q=$(\"q\").value.trim().toLowerCase(),f=$(\"ff\").value;\n  return DATA.contacts.filter(function(c){return(!f||c.freno===f)&&(!q||(c.email+\" \"+(c.nombre||\"\")).toLowerCase().indexOf(q)>=0)});\n}\nfunction table(){\n  var l=filtered();\n  $(\"tb\").innerHTML=l.map(function(c){return\"<tr><td>\"+esc(c.nombre)+\"</td><td>\"+esc(c.email)+'</td><td><span class=\"tag\">'+esc(c.freno||\"—\")+\"</span></td><td>\"+esc(c.fecha||\"\")+\"</td><td>\"+(c.baja?'<span class=\"tag off\">Baja</span>':\"\")+\"</td></tr>\"}).join(\"\")||'<tr><td colspan=\"5\">Sin resultados</td></tr>';\n  $(\"tcount\").textContent=l.length+\" de \"+DATA.contacts.length;\n}\n$(\"q\").oninput=table;$(\"ff\").onchange=table;\n$(\"bCsv\").onclick=function(){\n  var rows=[[\"nombre\",\"correo\",\"freno\",\"fecha\",\"baja\"]].concat(filtered().map(function(c){return[c.nombre,c.email,c.freno,c.fecha,c.baja?\"si\":\"\"]}));\n  var csv=\"﻿\"+rows.map(function(r){return r.map(function(v){return'\"'+String(v==null?\"\":v).replace(/\"/g,'\"\"')+'\"'}).join(\",\")}).join(\"\\r\\n\");\n  var a=document.createElement(\"a\");a.href=URL.createObjectURL(new Blob([csv],{type:\"text/csv;charset=utf-8\"}));a.download=\"suscriptoras.csv\";document.body.appendChild(a);a.click();a.remove();\n};\nfunction count(){\n  var v=$(\"aud\").value;if(!DATA)return;\n  var n=v===\"all\"?DATA.activos:(DATA.byFreno[DATA.frenos[+v]]||0);\n  $(\"audCount\").textContent=\"Recibirán el correo: \"+n+\" persona\"+(n===1?\"\":\"s\");\n}\n$(\"aud\").onchange=count;\n\nfunction payload(mode){return{mode:mode,audience:$(\"aud\").value,subject:$(\"subj\").value,body:$(\"body\").value,btnText:$(\"bt\").value,btnUrl:$(\"bu\").value,testTo:$(\"tt\").value}}\n$(\"bTest\").onclick=function(){msg(\"smsg\",\"\");var b=this;b.disabled=true;\n  api(\"/api/admin/send\",payload(\"test\")).then(function(j){msg(\"smsg\",\"Prueba enviada a \"+j.sentTo+\". Revisa también Promociones/Spam.\",true)}).catch(function(e){msg(\"smsg\",e.message)}).then(function(){b.disabled=false})};\n$(\"bSend\").onclick=function(){msg(\"smsg\",\"\");var b=this;\n  if(!$(\"subj\").value.trim()||!$(\"body\").value.trim()){msg(\"smsg\",\"Escribe el asunto y el mensaje.\");return}\n  b.disabled=true;\n  api(\"/api/admin/send\",payload(\"count\")).then(function(c){\n    if(!c.count){throw new Error(\"No hay personas en esa audiencia.\")}\n    if(!confirm(\"Vas a enviar «\"+$(\"subj\").value.trim()+\"» a \"+c.count+\" persona(s) (\"+c.label+\"). ¿Enviar ahora?\"))return;\n    return api(\"/api/admin/send\",payload(\"send\")).then(function(j){msg(\"smsg\",\"Enviado a \"+j.count+\" persona(s). Brevo lo entrega en unos minutos.\",true)});\n  }).catch(function(e){msg(\"smsg\",e.message)}).then(function(){b.disabled=false});\n};\n\ntoken=load();if(token)show();\n})();\n</script>\n</body>\n</html>\n"};
const __API={"/api/content":"content","/api/result":"result","/api/subscribe":"subscribe","/api/admin/login":"admin/login","/api/admin/contacts":"admin/contacts","/api/admin/send":"admin/send"};
module.exports=async function(req,res){
  const u=(req.url||"/").split("?")[0].replace(/\/+$/,"")||"/";
  if(__API[u]) return __req(__API[u])(req,res);
  if(u==="/admin"){res.setHeader("Content-Type","text/html; charset=utf-8");res.setHeader("X-Robots-Tag","noindex, nofollow");res.setHeader("Cache-Control","no-store");return res.status(200).send(__PAGES.admin);}
  if(u==="/robots.txt"){res.setHeader("Content-Type","text/plain");return res.status(200).send("User-agent: *\nDisallow: /admin\nDisallow: /api/\n");}
  if(u==="/"||u==="/index.html"){res.setHeader("Content-Type","text/html; charset=utf-8");res.setHeader("X-Content-Type-Options","nosniff");return res.status(200).send(__PAGES.index);}
  res.status(404).setHeader("Content-Type","text/plain");res.send("No encontrado");
};
