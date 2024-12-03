import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-4">Распознавание аудиосигналов</h1>
            <p className="lead">
                Загружайте аудиофайлы и получайте результат классификации звука в реальном времени!
            </p>
            <Link to="/upload" className="btn btn-primary btn-lg mt-3">
                Начать
            </Link>
        </div>
    );
};

export default Home;
