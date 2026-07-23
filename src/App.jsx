import React from 'react';
import './App.css';
import { BookOpen, UserRound, Settings, LogOut, Search, Bell, Plus, BookText } from 'lucide-react';

function App() {
  const books = [
    { id: 1, title: "1984", author: "Джордж Оруэлл", cover: "https://avatars.mds.yandex.net/get-mpic/4322217/2a000001955ef6c67e532078f44710ab9f46/orig", status: "У меня" },
    { id: 2, title: "Властелин колец", author: "Дж. Р. Р. Толкин", cover: "https://content.img-gorod.ru/pim/products/images/5e/62/018fa15e-5a31-7f77-af39-d56a07e35e62.jpg", status: "У меня" },
    { id: 3, title: "Маленький принц", author: "Антуан де Сент-Экзюпери", cover: "https://content.img-gorod.ru/pim/products/images/56/df/018ee907-10d9-7252-b881-7425f1af56df.jpg", status: "У меня" },
    { id: 4, title: "451 градус по Фаренгейту", author: "Рэй Брэдбери", cover: "https://content.img-gorod.ru/pim/products/images/54/89/018f5ee3-5629-7ce8-b5c1-88044a5c5489.jpg", status: "У меня" },
    { id: 5, title: "Гарри Поттер и философский камень", author: "Джоан Роулинг", cover: "https://content.img-gorod.ru/pim/products/images/5f/5e/018f5ca8-4768-7707-8931-8d10c0665f5e.jpg", status: "У меня" },
    { id: 6, title: "Преступление и наказание", author: "Фёдор Достоевский", cover: "https://content.img-gorod.ru/pim/products/images/cc/b2/018f5cde-05ff-7ae4-a522-01318deeccb2.jpg", status: "У меня" }
  ];

  return (
    <div className="app-container">
      {/* 1. БОКОВОЕ МЕНЮ (САЙДБАР) */}
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-icon">
              <BookOpen size={22} color="#ffffff" />
          </div>
          <div className="logo-text-wrapper">
          <div className="logo-text">Bookly</div>
          <div className="logo-sub">моя библиотека</div>
        </div>
       </div>
        
        <nav className="menu-links">
          <a href="#lib" className="menu-link active">
             <BookText size={18} /> Библиотека
          </a>
          <a href="#profile" className="menu-link">
             <UserRound size={18} /> Профиль
          </a>
          <a href="#settings" className="menu-link">
             <Settings size={18}/> Настройки
          </a>
        </nav>

        <div className="logout-section">
          <a href="#logout" className="logout-link">
             <LogOut size={18} />
             <span>Выйти</span>
          </a>
        </div>
      </aside>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="main-content">
        {/* 2. ВЕРХНЯЯ ПАНЕЛЬ */}
        <header className="header">
          <h1 className="page-title">Библиотека</h1>
          <div className="header-right">
            <div className="search-wrapper">
               <span className="search-icon">
                  <Search size={16} />
               </span>
              <input type="text" placeholder="Поиск книг по названию, автору..." className="search-input" />
            </div>
            <button className="bell-btn" aria-label="Уведомления"><Bell/></button>
            <div className="user-avatar">
              <img src="https://static.vecteezy.com/system/resources/previews/036/280/654/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* 3. НАВИГАЦИЯ И КНОПКА ДОБАВЛЕНИЯ */}
        <div className="subheader">
          <div className="tabs">
            <button className="tab-btn active">Мои книги</button>
            <button className="tab-btn">Отдал</button>
            <button className="tab-btn">Взял</button>
          </div>
          <button className="add-book-btn">+ Добавить книгу</button>
        </div>

        {/* 4. СЕТКА КАРТОЧЕК */}
        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-cover-wrapper">
                <img src={book.cover} alt={book.title} className="book-cover" />
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <div className="book-footer">
                  <span className="status-badge">{book.status}</span>
                  <button className="more-btn">⋮</button>
                </div>
              </div>
            </div>
          ))}

          {/* ПУСТАЯ КАРТОЧКА ДЛЯ ДОБАВЛЕНИЯ */}
          <div className="book-card add-card-placeholder">
            <div className="add-placeholder-content">
              <span className="plus-icon">+</span>
              <p>Добавить книгу</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;