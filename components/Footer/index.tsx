const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-6 px-4 text-md text-center text-gray-500">
      © {currentYear}
    </footer>
  );
};

export default Footer;
