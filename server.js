const express = require('express'); // Import thư viện Express
const app = express(); // Tạo ứng dụng Express
const PORT = 3000; // Định nghĩa cổng server sẽ chạy

// Tạo một route cho trang chủ
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Lắng nghe server trên cổng 3000
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
