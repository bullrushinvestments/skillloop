import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more assertion methods
import React from 'react';
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./external-dependency', () => ({
  useExternalDependency: jest.fn(),
}));

describe('Core Functionality Component', () => {
  test('renders core functionality component correctly', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interaction with button click', async () => {
    const mockFn = jest.fn();
    (useExternalDependency as jest.Mock).mockReturnValue({ data: 'testData' });
    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    await waitFor(() => expect(mockFn).toHaveBeenCalled());
  });

  test('displays loading state when fetching data', async () => {
    (useExternalDependency as jest.Mock).mockReturnValue({ isLoading: true });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test('handles error state gracefully', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalDependency as jest.Mock).mockReturnValue({ error: new Error(errorMessage) });
    render(<CoreFunctionalityComponent />);

    expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', async () => {
    (useExternalDependency as jest.Mock).mockReturnValue({ data: 'testData' });
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label');
    fireEvent.click(button);
  });

  test('mocks external dependencies correctly', async () => {
    (useExternalDependency as jest.Mock).mockReturnValue({ data: 'testData' });
    render(<CoreFunctionalityComponent />);
    
    const mockFn = useExternalDependency();
    expect(mockFn.data).toBe('testData');
  });
});

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more assertion methods
import React from 'react';
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./external-dependency', () => ({
  useExternalDependency: jest.fn(),
}));

describe('Core Functionality Component', () => {
  test('renders core functionality component correctly', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interaction with button click', async () => {
    const mockFn = jest.fn();
    (useExternalDependency as jest.Mock).mockReturnValue({ data: 'testData' });
    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    await waitFor(() => expect(mockFn).toHaveBeenCalled());
  });

  test('displays loading state when fetching data', async () => {
    (useExternalDependency as jest.Mock).mockReturnValue({ isLoading: true });
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test('handles error state gracefully', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalDependency as jest.Mock).mockReturnValue({ error: new Error(errorMessage) });
    render(<CoreFunctionalityComponent />);

    expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented', async () => {
    (useExternalDependency as jest.Mock).mockReturnValue({ data: 'testData' });
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label');
    fireEvent.click(button);
  });

  test('mocks external dependencies correctly', async () => {
    (useExternalDependency as jest.Mock).mockReturnValue({ data: 'testData' });
    render(<CoreFunctionalityComponent />);
    
    const mockFn = useExternalDependency();
    expect(mockFn.data).toBe('testData');
  });
});