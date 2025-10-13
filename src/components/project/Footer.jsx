import React from "react";

const Footer = () => {
  return (
    <footer className='border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-3'>
      <div className='container mx-auto px-4 text-center'>
        <span>A project by </span>
        <a href='https://www.linkedin.com/in/vijay-mayilsamy/' target='_blank' rel='noreferrer' className='underline decoration-dotted text-foreground hover:text-blue-500'>
          Vijaya Kumar Mylsamy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
