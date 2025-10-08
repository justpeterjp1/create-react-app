export default function randomWord() {
    const randomIndex = Math.floor(Math.random() * gameWords.length)
    const gameWord = gameWords[randomIndex];
      console.log("Selected word:", gameWord);
    return gameWord
    
}
export const gameWords = [
  "react", "node", "python", "script", "server", "client", "object", "array",
  "string", "method", "function", "return", "import", "export", "module",
  "class", "state", "effect", "hooks", "render", "update", "deploy", "build",
  "debug", "syntax", "branch", "commit", "merge", "clone", "push", "pull",
  "token", "proxy", "router", "cookie", "cache", "local", "session", "cloud",
  "binary", "buffer", "stream", "socket", "driver", "kernel", "device",
  "system", "window", "linux", "ubuntu", "chrome", "safari", "browser",
  "button", "label", "header", "footer", "navbar", "sidebar", "form", "input",
  "submit", "select", "option", "canvas", "editor", "visual", "layout",
  "margin", "padding", "border", "shadow", "radius", "cursor", "scroll",
  "event", "click", "hover", "focus", "active", "hidden", "visible", "align",
  "center", "column", "grid", "flex", "order", "zindex", "upload", "fetch",
  "axios", "promise", "await", "async", "error", "status", "header", "body",
  "parse", "json", "encode", "decode", "buffer", "binary", "socket", "signal",
  "thread", "muted", "memory", "stack", "queue", "event", "logic", "flow",
  "while", "break", "switch", "case", "value", "index", "print", "write",
  "file", "image", "video", "sound", "pixel", "frame", "color", "shade",
  "light", "dark", "theme", "style", "sheet", "block", "inline", "grid",
  "route", "page", "view", "model", "table", "chart", "graph", "filter",
  "search", "query", "login", "logout", "signup", "auth", "admin", "panel",
  "portal", "system", "engine", "core", "source", "target", "branch", "merge",
  "commit", "reset", "stash", "rebase", "remote", "origin", "master", "main",
  "fork", "issue", "ticket", "review", "patch", "debug", "trace", "stack",
  "error", "output", "input", "prompt", "dialog", "popup", "toast", "alert",
  "notify", "banner", "modal", "overlay", "upload", "download", "stream",
  "record", "camera", "sensor", "touch", "swipe", "zoom", "rotate", "drag",
  "drop", "release", "move", "scroll", "resize", "window", "screen", "frame",
  "canvas", "chart", "audio", "video", "pixel", "shader", "matrix", "vector",
  "float", "double", "int", "char", "string", "array", "object", "struct",
  "class", "method", "scope", "import", "export", "default", "public",
  "private", "static", "async", "await", "yield", "throw", "catch", "finally",
  "return", "break", "continue", "switch", "case", "const", "let", "var",
  "enum", "type", "value", "index", "count", "limit", "range", "slice", "join",
  "split", "trim", "shift", "sort", "map", "filter", "reduce", "find",
  "replace", "concat", "clone", "assign", "bind", "apply", "call", "match",
  "test", "exec", "check", "verify", "secure", "access", "token", "login",
  "logout", "signup", "account", "profile", "avatar", "follow", "unfollow",
  "like", "share", "comment", "post", "tweet", "reply", "update", "upload",
  "save", "draft", "delete", "remove", "clear", "reset", "refresh", "reload"
];
