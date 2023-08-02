export default function Card({ children, bgColor = '#29a3f5' }) {
  const cardStyle = {
    backgroundColor: bgColor,
  };

  return (
    <div className="card" style={cardStyle}>
      {children}
      <a href="link">Show Details</a>
    </div>
  );
}
