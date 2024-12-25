function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font text-center bg-gray-100">
        <div className="container px-5 py-10 mx-auto flex items-center justify-center sm:flex-row flex-col text-center" style={{ marginTop: "130px" }}>
          <a className="flex title-font font-medium items-center justify-center text-gray-900 hover:text-blue-500">
            <span className="ml-3 text-2xl font-bold">CropTech</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4">
            © 2024 CropTech
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="/about" className="text-gray-600 hover:text-gray-900 ml-4">About Us</a>
          <a href="https://www.linkedin.com/in/ganesh-gowda-m-969b12307/" className="text-gray-600 hover:text-gray-900 ml-4">Contact</a>
          <a href="/privacy" className="text-gray-600 hover:text-gray-900 ml-4">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
