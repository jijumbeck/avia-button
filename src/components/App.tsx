import React from 'react';
import './App.scss';
import { AviaButton } from './Button';

export function App() {
    return (
        <div className='App'>
            <main className='content'>
                <h1>Кнопка для поиска авиабилетов</h1>
                <div className='button-container'>
                    <AviaButton>
                        Найти билеты
                    </AviaButton>
                </div>
            </main>
        </div>
    )
}