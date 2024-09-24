interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void; // Optional onClick handler
  }
  
  export default function Button({ children, onClick }: ButtonProps) {
    return (
      <button className="btn rounded-full" onClick={onClick}>
        {children}
      </button>
    );
  }
  