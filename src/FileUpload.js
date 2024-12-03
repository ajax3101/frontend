import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ setPrediction }) => {
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError(null);
    };

    const handleUpload = async () => {
        if (!file) {
            setError("Пожалуйста, выберите файл.");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post('http://127.0.0.1:8000/api/upload/', formData);
            setPrediction(response.data);
        } catch (err) {
            console.error(err);
            setError("Не удалось загрузить файл. Проверьте соединение с сервером.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Загрузить аудиофайл</h2>
            <div className="mb-3">
                <input 
                    type="file" 
                    className="form-control" 
                    onChange={handleFileChange} 
                    accept=".wav,.mp3" 
                />
            </div>
            <button 
                onClick={handleUpload} 
                className="btn btn-primary" 
                disabled={isLoading}
            >
                {isLoading ? "Загрузка..." : "Загрузить"}
            </button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
    );
};

export default FileUpload;
