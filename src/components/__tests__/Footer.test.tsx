import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footerのテスト', () => {
  it('正しく表示されること', () => {
    render(<Footer />);
    const element = screen.getByText('Apex');

    expect(element).toBeInTheDocument();
  });
});
