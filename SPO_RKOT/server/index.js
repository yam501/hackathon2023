const express = require('express');
require('dotenv').config
const multer = require('multer');
const xlsx = require('xlsx');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 'your_port',
});

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('excelFile'), (req, res) => {
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);

    // Теперь 'data' содержит данные из Excel-таблицы. Можно сохранить их в базу данных.

    // Пример добавления данных в PostgreSQL:
    const query = 'INSERT INTO your_table (column1, column2, column3) VALUES ($1, $2, $3)';
    data.forEach(row => {
        const values = [row.column1, row.column2, row.column3];
        pool.query(query, values, (error, result) => {
            if (error) {
                console.error('Error inserting data:', error);
            }
        });
    });

    res.json({ success: true, message: 'File uploaded and data saved to the database.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});