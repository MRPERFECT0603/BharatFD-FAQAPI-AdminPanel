'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../app/components/Navbar';
import FaqForm from '../app/components/FaqForm';
import LanguageSelector from '../app/components/LanguageSelector';
import FaqList from '../app/components/FaqList';

const API_BASE_URL = 'http://localhost:8000/api/faqs'; 

const AdminPanel = () => {
  const [faqs, setFaqs] = useState([]);
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch FAQs
  const fetchFaqs = async (lang) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?lang=${lang}`);
      if (!response.ok) throw new Error('Failed to fetch FAQs');
      const data = await response.json();
      setFaqs(Array.isArray(data.faqs) ? data.faqs : []);
    } catch (err) {
      console.error('Error fetching FAQs:', err);
      setError('Failed to load FAQs. Please try again.');
      setFaqs([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle FAQ submission
  const handleFaqSubmit = async (newFaq) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFaq),
      });

      if (!response.ok) throw new Error('Failed to add FAQ');

      fetchFaqs(language);
    } catch (err) {
      console.error('Error adding FAQ:', err);
      alert('Failed to add FAQ. Please try again.');
    }
  };

  useEffect(() => {
    fetchFaqs(language);
  }, [language]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-col items-center py-8 space-y-6">
        <FaqForm onFaqSubmit={handleFaqSubmit} />
        <LanguageSelector selectedLanguage={language} onSelectLanguage={setLanguage} />
        <FaqList faqs={faqs} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default AdminPanel;