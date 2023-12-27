import { render, screen } from '@testing-library/react';
import Container from '../Container';
import '@testing-library/jest-dom';

describe('Containerのテスト', () => {
  const testData = 'てすと';
  it('正しく表示されること', () => {
    render(<Container>{testData}</Container>);
    const element = screen.getByText('てすと');

    expect(element).toBeInTheDocument();
  });
});
