import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FileUpload from './FileUpload';
import ResultDisplay from './ResultDisplay';

function App() {
    const [prediction, setPrediction] = useState(null);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/upload" element={<FileUpload setPrediction={setPrediction} />} />
                    <Route path="/result" element={<ResultDisplay prediction={prediction} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
