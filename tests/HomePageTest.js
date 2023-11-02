import { render, screen } from '@testing-library/react';
import ParallaxHero from './ParallaxHero';

describe('ParallaxHero', () => {
  test('renders the heading and "Read More" button', () => {
    /* The `render(<ParallaxHero />)` statement is rendering the `ParallaxHero` component. This means
    that it is creating a virtual representation of the `ParallaxHero` component and rendering it to
    the screen. This allows us to test the component and make assertions about its rendered output. */
    render(<ParallaxHero />);
    const heading = screen.getByText(/we take the complicated out of your outsourcing needs/i);
    expect(heading).toBeInTheDocument();

    const readMoreButton = screen.getByRole('link', { name: /read more/i });
    expect(readMoreButton).toBeInTheDocument();
    expect(readMoreButton).toHaveAttribute('href', 'ourservices');
  });

  test('renders the video', () => {
    render(<ParallaxHero />);
    const video = screen.getByRole('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', expect.stringMatching(/\.mp4$|\.webm$/));
  });

  test('renders the custom buttons', () => {
    render(<ParallaxHero />);
    const marketingButton = screen.getByRole('button', { name: /my bespoke staff marketing/i });
    const accountingButton = screen.getByRole('button', { name: /my bespoke staff accounting/i });
    const customerSupportButton = screen.getByRole('button', { name: /my bespoke staff customer support/i });
    const dataEntryButton = screen.getByRole('button', { name: /my bespoke staff data entry/i });
    const frontBackOfficeButton = screen.getByRole('button', { name: /my bespoke staff front\/back office support/i });

    expect(marketingButton).toBeInTheDocument();
    expect(accountingButton).toBeInTheDocument();
    expect(customerSupportButton).toBeInTheDocument();
    expect(dataEntryButton).toBeInTheDocument();
    expect(frontBackOfficeButton).toBeInTheDocument();

    expect(marketingButton).toHaveAttribute('tpx', '40');
    expect(accountingButton).toHaveAttribute('tpx', '40');
    expect(customerSupportButton).toHaveAttribute('tpx', '40');
    expect(dataEntryButton).toHaveAttribute('tpx', '40');
    expect(frontBackOfficeButton).toHaveAttribute('tpx', '40');

    expect(marketingButton).toHaveAttribute('redirect', 'contactus');
    expect(accountingButton).toHaveAttribute('redirect', 'contactus');
    expect(customerSupportButton).toHaveAttribute('redirect', 'contactus');
    expect(dataEntryButton).toHaveAttribute('redirect', 'contactus');
    expect(frontBackOfficeButton).toHaveAttribute('redirect', 'contactus');
  });
});


