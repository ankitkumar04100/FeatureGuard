const express = require('express');
const apiRoutes = require('./routes/api');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('FeatureGuard Backend Running'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
