import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarScroller from './NavbarScroller';

const navigation = {
    brand: { name: "Voter", to: "/" },
    links: [
      { name: "About Me", to: "/about" },
      { name: "Blog", to: "/blog" },
      { name: "Developement", to: "/dev" },
      { name: "Graphic Design", to: "/design" },
      { name: "Contact", to: "/contact" },
    ]
  }

test('renders Navbar with brand and a link', () => {
    const { brand, links } = navigation;

    render(<NavbarScroller brand={brand} links={links} />);
    
    const brandElement = screen.getByText(/Voter/i);
    expect(brandElement).toBeInTheDocument();

    const linkElement = screen.getByText(/About Me/i);
    expect(linkElement).toBeInTheDocument();
});
