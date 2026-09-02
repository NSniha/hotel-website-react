const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-[22px] sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;