const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-4 px-4 text-center text-gray-500">
      © {currentYear}
    </footer>
  );
};

export default Footer;
