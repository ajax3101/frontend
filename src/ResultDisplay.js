import React from 'react';

const ResultDisplay = ({ prediction }) => {
    if (!prediction) return null;

    const confidenceClass =
        prediction.confidence > 0.8 ? 'text-success' :
        prediction.confidence > 0.5 ? 'text-warning' :
        'text-danger';

    return (
        <div className="container mt-5">
            <h2>Результат классификации</h2>
            <p>
                <strong>Класс:</strong> {prediction.predicted_class}
            </p>
            <p>
                <strong>Доверие:</strong> <span className={confidenceClass}>{(prediction.confidence * 100).toFixed(2)}%</span>
            </p>
            {prediction.confidence < 0.5 && (
                <div className="alert alert-warning">
                    Низкое доверие. Рекомендуется дообучение модели или улучшение качества данных.
                </div>
            )}
        </div>
    );
};

export default ResultDisplay;
