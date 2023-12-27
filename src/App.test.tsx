import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Appのテスト', () => {
  it('正しく表示されること', () => {
    render(<App />);
    const element = screen.getByText('Apex');

    expect(element).toBeInTheDocument();
  });
});
