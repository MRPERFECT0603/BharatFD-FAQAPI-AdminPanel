const FaqList = ({ faqs, loading, error }) => {
    if (loading) return <p className="text-blue-500 text-center">Loading FAQs...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-4">
        {faqs.length === 0 ? (
          <p className="text-center text-gray-500">No FAQs available for this language.</p>
        ) : (
          faqs.map((faq) => (
            <div
              key={faq._id}
              className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default FaqList;