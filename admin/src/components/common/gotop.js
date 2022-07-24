import React from 'react';
export default function GoTop() {
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
  var scrollTopStyle = {
    position: ' fixed',
    right: ' 1rem',
    bottom: '1rem',
    width: '2.75rem',
    height: '2.75rem',
    textAlign: 'center',
    color: '#fff',
    background: 'rgba(90,92,105,.5)',
    lineHeight: '46px',
  };
  return (
    <>
      {goTop && (
        <div
          className="gotop-btn rounded"
          onClick={() => (document.documentElement.scrollTop = 0)}
          style={scrollTopStyle}
        >
          <i
            className="fas fa-angle-up"
            style={{ fontWeight: 800, fontSize: '28px' }}
          ></i>
        </div>
      )}
    </>
  );
}
