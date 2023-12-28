# 15-Minute JavaScript Timer

- [15-Minute JavaScript Timer - ChatGPT](https://chat.openai.com/share/9611e50b-c078-45c3-9b0d-9c1f1fbbbae2)

## Run the Application Using Python http.server

- `python -m http.server 8000`
- `python -m http.server`

## Run the Application Using VSCode `launch.json`

`.vscode/launch.json`:

```json
// .vscode/launch.json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: HTTP Server",
            "type": "python",
            "request": "launch",
            "program": "${workspaceFolder}/.vscode/http_server_script.py",
            "args": []
        }
    ]
}
```

`.vscode\http_server_script.py`:

```python
# .vscode\http_server_script.py
import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
```
