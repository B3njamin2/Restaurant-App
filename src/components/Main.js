import { Routes, Route } from 'react-router-dom';
import HomePage from '../page/HomePage';
import BookingPage from '../page/BookingPage'; // Adjust the path as needed

function Main() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default Main;