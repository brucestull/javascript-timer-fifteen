import http.server
import socketserver

# ChatGPT Conversation:
# https://chat.openai.com/share/a8ea78f7-4eaf-4886-98b6-8a41d669180d

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
