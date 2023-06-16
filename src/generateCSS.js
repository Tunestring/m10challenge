const generateCSS = () => {
    return `
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body, html {
            font-family: Arial, sans-serif;
            height: 100%;
        }
        header {
            background-color: #2196F3;
            color: white;
            text-align: center;
            padding: 1em;
        }
        .employee-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 1em;
        }
        .employee-card {
            background-color: #f2f2f2;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            width: 300px;
            margin: 1em;
            padding: 1em;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .card-header {
            text-align: center;
            margin-bottom: 1em;
        }
        .card-body {
            text-align: left;
        }
        a {
            color: #2196F3;
            text-decoration: none;
        }
    `;
};

module.exports = generateCSS;