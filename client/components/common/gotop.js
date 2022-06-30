import React from 'react';

const GoTop = () => {
  const [goTop, setGoTop] = React.useState(false);
  React.useEffect(() => {
    function handleScroll() {
      setGoTop(window.scrollY >= 200);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {goTop && (
        <div
          className='gotop-btn'
          onClick={() => (document.documentElement.scrollTop = 0)}
          style={{ position: 'fixed', right: 20, bottom: 20 }}
        >
          <i className='fas fa-arrow-circle-up text-3xl'></i>
        </div>
      )}
    </>
  );
};

export default GoTop;
