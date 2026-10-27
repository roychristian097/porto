"""Dev server dengan auto-reload untuk preview portofolio.
Jalankan: python dev_server.py  → buka http://localhost:5500
Browser akan otomatis refresh setiap ada file yang berubah.
"""
import http.server, os, socketserver

PORT = 5500
ROOT = os.path.dirname(os.path.abspath(__file__))
RELOAD_JS = b"""<script>
(()=>{let v=null;setInterval(async()=>{try{const r=await fetch('/__version');const t=await r.text();
if(v&&v!==t)location.reload();v=t;}catch(e){}},800);})();
</script></body>"""


def version():
    m = 0
    for d, _, files in os.walk(ROOT):
        for f in files:
            if f.endswith((".html", ".css", ".js", ".png", ".jpg", ".jpeg", ".webp", ".svg")):
                m = max(m, os.path.getmtime(os.path.join(d, f)))
    return str(m).encode()


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        if self.path == "/__version":
            body = version()
        elif self.path.split("?")[0] in ("/", "/index.html"):
            with open(os.path.join(ROOT, "index.html"), "rb") as f:
                body = f.read().replace(b"</body>", RELOAD_JS)
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        else:
            return super().do_GET()
        self.send_response(200)
        self.send_header("Content-Type", "text/plain")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *a):
        pass


socketserver.ThreadingTCPServer.allow_reuse_address = True
with socketserver.ThreadingTCPServer(("127.0.0.1", PORT), Handler) as s:
    print(f"Preview live: http://localhost:{PORT}  (Ctrl+C untuk berhenti)")
    s.serve_forever()
