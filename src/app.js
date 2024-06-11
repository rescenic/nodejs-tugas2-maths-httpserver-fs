const fs = require("fs");
const path = require("path");
const http = require("http");
const math = require("./maths");

// Membaca dan mencetak isi file di terminal
const filePath = path.join(__dirname, "latihan-baca-file.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Isi file:", data);
});

// Membuat server HTTP
const hostname = "localhost";
const port = 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Menggunakan modul maths
const a = 77;
const b = 0;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`a+b: ${math.tambah(a, b)}`);
console.log(`a-b: ${math.kurang(a, b)}`);
console.log(`a*b: ${math.kali(a, b)}`);

try {
  console.log(`a/b: ${math.bagi(a, b)}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
