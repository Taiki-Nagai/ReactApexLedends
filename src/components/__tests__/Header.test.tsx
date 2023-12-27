import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

describe('Headerのテスト', () => {
  it('正しく表示されること', () => {
    render(<Header />);
    const element = screen.getByText('Apex Legends Info');

    expect(element).toBeInTheDocument();
  });
});
